"use client"

import { useRef, useCallback } from "react"
import { motion, useMotionValue, useSpring, useTransform, useScroll, MotionValue } from "motion/react"

const CARDS = [
  { id: 1, baseX: -295, baseY: -125, depth: 0.7,  rot: -8,  w: 160, h: 110, dur: 4.5, floatDelay: 0,   behind: false },
  { id: 2, baseX:  215, baseY: -200, depth: 1.4,  rot: 6,   w: 130, h: 90,  dur: 5.2, floatDelay: 0.8, behind: false },
  { id: 3, baseX: -330, baseY:   35, depth: 1.0,  rot: 4,   w: 145, h: 100, dur: 3.8, floatDelay: 1.5, behind: true  },
  { id: 4, baseX:  285, baseY:   95, depth: 0.55, rot: -5,  w: 120, h: 85,  dur: 6.0, floatDelay: 0.3, behind: true  },
  { id: 5, baseX:  -75, baseY: -255, depth: 1.6,  rot: 10,  w: 100, h: 70,  dur: 4.2, floatDelay: 2.0, behind: false },
  { id: 6, baseX: -245, baseY:  295, depth: 0.85, rot: -3,  w: 155, h: 108, dur: 5.5, floatDelay: 1.2, behind: true  },
  { id: 7, baseX:  305, baseY:  210, depth: 1.2,  rot: 8,   w: 110, h: 75,  dur: 4.8, floatDelay: 0.6, behind: true  },
  { id: 8, baseX:  160, baseY: -165, depth: 0.65, rot: -12, w: 135, h: 95,  dur: 5.8, floatDelay: 1.8, behind: false },
]

function TiltCard({
  card,
  mouseX,
  mouseY,
}: {
  card: (typeof CARDS)[0]
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}) {
  const x = useTransform(mouseX, (v) => card.baseX + v * card.depth * 50)
  const y = useTransform(mouseY, (v) => card.baseY + v * card.depth * 50)
  const rotateX = useTransform(mouseY, (v) => -v * card.depth * 12)
  const rotateY = useTransform(mouseX, (v) => v * card.depth * 12)

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 pointer-events-none"
      style={{ x, y }}
    >
      <motion.div
        className="rounded-xl border border-white/10 pointer-events-auto overflow-hidden"
        style={{
          width: card.w,
          height: card.h,
          rotate: card.rot,
          rotateX,
          rotateY,
          transformPerspective: 800,
          marginLeft: -card.w / 2,
          marginTop: -card.h / 2,
        }}
        animate={{ y: [0, -14, 0] }}
        transition={{
          duration: card.dur,
          delay: card.floatDelay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.06, borderColor: "rgba(255,255,255,0.25)" }}
      >
        <div className="w-full h-full bg-gradient-to-br from-zinc-700/60 to-zinc-900/80" />
      </motion.div>
    </motion.div>
  )
}

export function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Scroll-driven parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })
  const scrollY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"])
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0])
  const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 0.94])

  // Mouse parallax
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const mouseX = useSpring(rawX, { stiffness: 50, damping: 18 })
  const mouseY = useSpring(rawY, { stiffness: 50, damping: 18 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      rawX.set((e.clientX - rect.left - rect.width / 2) / (rect.width / 2))
      rawY.set((e.clientY - rect.top - rect.height / 2) / (rect.height / 2))
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
        className="absolute inset-0 flex items-center justify-center"
        style={{ y: scrollY, opacity: scrollOpacity, scale: scrollScale }}
      >
        {/* Cards behind the image */}
        {CARDS.filter(c => c.behind).map((card) => (
          <TiltCard key={card.id} card={card} mouseX={mouseX} mouseY={mouseY} />
        ))}

        {/* Centre image — pinned to bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 h-[449px] w-[449px] overflow-hidden">
          <img
            src="/Lucy-headshot-header.png"
            alt="Lucy Carter"
            className="h-full w-full object-cover object-top"
          />
        </div>

        {/* Cards in front of the image */}
        {CARDS.filter(c => !c.behind).map((card) => (
          <TiltCard key={card.id} card={card} mouseX={mouseX} mouseY={mouseY} />
        ))}
      </motion.div>
    </section>
  )
}
