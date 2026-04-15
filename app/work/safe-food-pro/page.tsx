"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const images = [
  { src: "/Safefoodpro_1.png", alt: "Safe Food Pro — screen 1" },
  { src: "/Safefoodpro_2.png", alt: "Safe Food Pro — screen 2" },
  { src: "/Safefoodpro_3.png", alt: "Safe Food Pro — screen 3" },
]

export default function SafeFoodProPage() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)
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
            href="/#work"
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
            <span className="text-sm font-medium text-muted-foreground">2021 — 2023</span>
            <h1 className="mt-3 text-5xl font-medium tracking-tight md:text-7xl">
              Safe Food Pro<span style={{ color: "#0096FA" }}>.</span>
            </h1>
          </motion.div>

          {/* Image carousel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-16 relative overflow-hidden rounded-2xl bg-muted"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={images[current].src}
                alt={images[current].alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full object-cover"
              />
            </AnimatePresence>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-white" : "w-1.5 bg-white/50"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              Safe Food Pro is a food safety app allowing users to simply manage their food safety program.
            </p>
            <p>
              This website redesign project's aim was a content overhaul and brand update. As part of the website redesign, I focused on increasing conversion rates through increasing the number, placement and style of call to action buttons.
            </p>
            <p>
              I created new content around 'who is it for' and 'what do you need' for prospects who are looking at how it would help their business size specifically or to help solve a specific problem.
            </p>
            <p>
              And finally I added search capability functions to allow prospects to find resources and product features easier.
            </p>
          </motion.div>

          {/* Next project nav */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-24 border-t border-border pt-12"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Next</span>
            <a
              href="/work/sprout"
              className="mt-3 flex items-center gap-3 text-3xl font-medium tracking-tight hover:opacity-70 transition-opacity md:text-4xl"
            >
              Sprout <span style={{ color: "#0096FA" }}>→</span>
            </a>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
