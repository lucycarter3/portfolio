"use client"

import { useRef, useCallback } from "react"
import { motion, useMotionValue, useSpring, useTransform, useScroll, MotionValue } from "motion/react"

// baseX/Y: offset from centre (px)
// scrollSpeed: how far the card travels upward over the full scroll (px) — higher = faster
// mouseDepth: how strongly the card reacts to mouse movement — higher = more
// rot: static tilt angle (no mouse-driven rotation)
const CARDS = [
  { id: 1, baseX: -375, baseY: -170, scrollSpeed: 160, mouseDepth: 0.35, rot: -5,  w: 185, h: 135, img: "/homepage-header-bts.png" },
  { id: 2, baseX:  320, baseY:  240, scrollSpeed: 310, mouseDepth: 0.85, rot:  3,  w: 155, h: 118, img: "/homepage-header-fresha.png" },
  { id: 3, baseX:   10, baseY: -270, scrollSpeed: 240, mouseDepth: 1.25, rot: -4,  w: 200, h: 145, img: "/homepage-header-wagestream.png" },
  { id: 4, baseX:  390, baseY:   50, scrollSpeed: 120, mouseDepth: 0.55, rot:  6,  w: 215, h: 158, img: "/homepage-header-bull.png" },
  { id: 5, baseX: -410, baseY:   75, scrollSpeed: 360, mouseDepth: 1.1,  rot:  4,  w: 168, h: 122, img: "/homepage-header-ig.png" },
  { id: 6, baseX: -210, baseY:  -30, scrollSpeed: 195, mouseDepth: 0.7,  rot: -3,  w: 172, h: 130, img: "/homepage-header-themissingmetric.png" },
  { id: 7, baseX:  310, baseY: -200, scrollSpeed: 390, mouseDepth: 1.45, rot:  8,  w: 150, h: 112, img: "/homepage-header-sprout.png" },
]

function ParallaxCard({
  card,
  mouseX,
  mouseY,
  scrollYProgress,
}: {
  card: (typeof CARDS)[0]
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
  scrollYProgress: MotionValue<number>
}) {
  // Each card scrolls at its own speed
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -card.scrollSpeed])

  // Mouse offsets (2-D translate only, no tilt)
  const mouseOffsetX = useTransform(mouseX, (v) => v * card.mouseDepth * 75)
  const mouseOffsetY = useTransform(mouseY, (v) => v * card.mouseDepth * 75)

  return (
    // Outer div: base position + per-card scroll speed
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `calc(50% + ${card.baseX - card.w / 2}px)`,
        top:  `calc(50% + ${card.baseY - card.h / 2}px)`,
        width: card.w,
        height: card.h,
        y: scrollY,
      }}
    >
      {/* Inner div: mouse parallax + static rotation */}
      <motion.div
        className="w-full h-full"
        style={{
          x: mouseOffsetX,
          y: mouseOffsetY,
          rotate: card.rot,
        }}
      >
        <img
          src={card.img}
          alt=""
          className="w-full h-full object-cover rounded-2xl"
        />
      </motion.div>
    </motion.div>
  )
}

export function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Whole section fades + scales as it leaves
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])
  const scrollScale   = useTransform(scrollYProgress, [0, 1],    [1, 0.94])

  // Smooth mouse tracking
  const rawX   = useMotionValue(0)
  const rawY   = useMotionValue(0)
  const mouseX = useSpring(rawX, { stiffness: 38, damping: 22 })
  const mouseY = useSpring(rawY, { stiffness: 38, damping: 22 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      rawX.set((e.clientX - rect.left  - rect.width  / 2) / (rect.width  / 2))
      rawY.set((e.clientY - rect.top   - rect.height / 2) / (rect.height / 2))
    },
    [rawX, rawY]
  )

  const handleMouseLeave = useCallback(() => {
    rawX.set(0)
    rawY.set(0)
  }, [rawX, rawY])

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex h-screen items-center justify-center overflow-hidden bg-black"
    >
      <motion.div
        className="absolute inset-0"
        style={{ opacity: scrollOpacity, scale: scrollScale }}
      >
        {/* Cards that sit behind the headshot */}
        {CARDS.filter((_, i) => i % 2 === 0).map((card) => (
          <ParallaxCard
            key={card.id}
            card={card}
            mouseX={mouseX}
            mouseY={mouseY}
            scrollYProgress={scrollYProgress}
          />
        ))}

        {/* Centre headshot — anchored to bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 h-[449px] w-[449px] overflow-hidden">
          <img
            src="/Lucy-headshot-header.png"
            alt="Lucy Carter"
            className="h-full w-full object-cover object-top"
          />
        </div>

        {/* Cards that sit in front of the headshot */}
        {CARDS.filter((_, i) => i % 2 !== 0).map((card) => (
          <ParallaxCard
            key={card.id}
            card={card}
            mouseX={mouseX}
            mouseY={mouseY}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </motion.div>
    </section>
  )
}
