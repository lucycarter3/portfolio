"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const appStoreImages = [1,2,3,4,5,6,7,8,9,10].map((n) => ({
  src: `/Fresha-appstore-${n}.webp`,
  alt: `App Store screenshot ${n}`,
}))

export default function FreshaPage() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % appStoreImages.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])
  return (
    <div className="relative">
      {/* Background gradient blobs */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-blue-200/30 blur-[120px]" />
        <div className="absolute right-[-10%] top-[30%] h-[500px] w-[500px] rounded-full bg-sky-200/25 blur-[100px]" />
        <div className="absolute left-[20%] top-[60%] h-[400px] w-[400px] rounded-full bg-indigo-200/30 blur-[140px]" />
      </div>

      <Header />

      <main className="bg-background pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">

          {/* Back link */}
          <motion.a
            href="/work"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-12 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back
          </motion.a>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6"
          >
            <span className="text-sm font-medium text-muted-foreground">2023</span>
            <h1 className="mt-3 text-5xl font-medium tracking-tight md:text-7xl">
              Fresha<span style={{ color: "#0096FA" }}>.</span>
            </h1>
          </motion.div>

          {/* ── Window Stickers ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20"
          >
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
              Window Stickers<span style={{ color: "#0096FA" }}>.</span>
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              A brand awareness initiative built around an annual awards programme recognising excellence across two tiers: Highly Recommended and Best in Class. Each recognition is accompanied by a curated suite of printed collateral — an embossed certificate, a congratulatory letter, a window sticker, and a QR code booking sticker — crafted to celebrate recipients while extending brand visibility in the real world.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <div className="overflow-hidden rounded-2xl">
                <img src="/Fresha-stickers.webp" alt="Fresha window stickers" className="w-full object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-4 max-w-lg">
                <div className="overflow-hidden rounded-2xl">
                  <img src="/Fresha-certificate .webp" alt="Fresha certificate" className="w-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-2xl bg-muted">
                  <img src="/Fresha-stamp.webp" alt="Fresha stamp" className="w-full h-full object-cover rounded-2xl" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── App Store Screenshots ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 flex flex-col gap-8 md:flex-row md:items-start md:gap-12"
          >
            {/* Text */}
            <div className="md:flex-1">
              <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
                App Store Screenshots<span style={{ color: "#0096FA" }}>.</span>
              </h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>Brand awareness and product marketing project delivering updated App Store screenshots for the Fresha B2B platform — the world's leading online marketplace and booking solution for beauty, hair, and wellness professionals.</p>
                <p>With over 450,000 businesses across 120+ countries trusting Fresha to run their operations, the updated screenshots were crafted to communicate the platform's breadth and capability at a glance. Each screen was designed to highlight the tools that matter most to modern salon and wellness owners — from appointment scheduling and point-of-sale to staff management and targeted marketing.</p>
                <p>This refresh introduced a suite of new feature callouts, including an upgraded scheduling view, revitalised visual design, and the integration of verified Capterra reviews — lending third-party credibility to reinforce Fresha's position as the industry's most trusted platform.</p>
              </div>
            </div>

            {/* Carousel */}
            <div className="relative overflow-hidden rounded-2xl bg-muted w-full md:w-72 shrink-0">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={appStoreImages[current].src}
                  alt={appStoreImages[current].alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full object-cover"
                />
              </AnimatePresence>

              {/* Dot indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {appStoreImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? "w-6 bg-white" : "w-1.5 bg-white/50"
                    }`}
                    aria-label={`Go to screenshot ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Dopamine Beauty Social Posts ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20"
          >
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
              Dopamine Beauty Social Post<span style={{ color: "#0096FA" }}>.</span>
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
              {[1,2,3,4,5,6].map((n) => (
                <div key={n} className="overflow-hidden rounded-2xl">
                  <img src={`/Fresha-socialpost-${n}.webp`} alt={`Social post ${n}`} className="w-full object-cover" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Newspaper Insert ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-20"
          >
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
              Newspaper Insert<span style={{ color: "#0096FA" }}>.</span>
            </h2>
            <div className="mt-8 overflow-hidden rounded-2xl max-w-lg">
              <img src="/Fresha-guardianincert.webp" alt="Fresha Guardian newspaper insert" className="w-full object-contain" />
            </div>
          </motion.div>

          {/* ── Christmas Holiday Cards ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20"
          >
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
              Christmas Holiday Cards<span style={{ color: "#0096FA" }}>.</span>
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              A seasonal extension of the Fresha brand identity, developed by pushing existing brand shapes and colour palette to craft a bespoke illustration style — bringing warmth and festivity to the platform while maintaining visual cohesion with the wider brand.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[1,2,3,4].map((n) => (
                <div key={n} className="overflow-hidden rounded-2xl">
                  <img src={`/Fresha-holidaycard-${n}.webp`} alt={`Holiday card ${n}`} className="w-full object-cover" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Next project ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-24 border-t border-border pt-12"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Next</span>
            <a
              href="/work/site-app-pro"
              className="mt-3 flex items-center gap-3 text-3xl font-medium tracking-tight hover:opacity-70 transition-opacity md:text-4xl"
            >
              Site App Pro <span style={{ color: "#0096FA" }}>→</span>
            </a>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
