"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const images = [
  { src: "/sprout3.jpg", alt: "Sprout product" },
  { src: "/Sprout2.png", alt: "Sprout detail" },
]

export default function SproutPage() {
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
            <span className="text-sm font-medium text-muted-foreground">2020</span>
            <h1 className="mt-3 text-5xl font-medium tracking-tight md:text-7xl">
              Sprout<span style={{ color: "#0096FA" }}>.</span>
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
              Sprout is a toothbrush holder designed to water plants using the leftover waste water that would otherwise be unused.
            </p>
            <p>
              This design consists of three main components; a 3D printed lining, a divider that can be removed from the CNC structure for cleaning, and a 3D printed base. The base doesn't detach from the CNC component; instead, a central peak pushes the grey water on either side to water the plants.
            </p>
            <p>
              Sprout's packaging was created using a laser cutter to produce an etched pattern on the logo.
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
              href="/#work"
              className="mt-3 flex items-center gap-3 text-3xl font-medium tracking-tight hover:opacity-70 transition-opacity md:text-4xl"
            >
              View all work <span style={{ color: "#0096FA" }}>→</span>
            </a>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
