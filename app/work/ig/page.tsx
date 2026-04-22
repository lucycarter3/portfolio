"use client"

import { motion } from "motion/react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function IGPage() {
  return (
    <div className="relative">
      {/* Background gradient blobs */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-pink-200/30 blur-[120px]" />
        <div className="absolute right-[-10%] top-[30%] h-[500px] w-[500px] rounded-full bg-orange-200/25 blur-[100px]" />
        <div className="absolute left-[20%] top-[60%] h-[400px] w-[400px] rounded-full bg-purple-200/30 blur-[140px]" />
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
            <span className="text-sm font-medium text-muted-foreground">2025 — 2026</span>
            <h1 className="mt-3 text-5xl font-medium tracking-tight md:text-7xl">
              IG<span style={{ color: "#0096FA" }}>.</span>
            </h1>
          </motion.div>

          {/* Intro copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              As part of a newly formed creative team, I was brought in to help navigate IG through a pivotal chapter — a UK rebrand designed to propel the business boldly into the 21st century. Working in close collaboration with design agency Otherway, we immersed ourselves in the new brand from the ground up, living and breathing every element before embarking on a major rollout.
            </p>
            <p>
              Building an iconic identity for IG meant crafting something instantly recognisable and enduring — a bold, confident visual language that honours the brand's heritage while firmly setting its sights on the future. From transforming brand assets into high-performing campaign work, to shaping the storytelling that fuels IG's broader narrative, the project was as much about cultural shift as it was visual refinement.
            </p>
          </motion.div>

          {/* Project nav */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-24 border-t border-border pt-12 flex items-start justify-between"
          >
            <div>
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Previous</span>
              <a href="/work/beat-the-street" className="mt-3 flex items-center gap-3 text-xl font-medium tracking-tight hover:opacity-70 transition-opacity md:text-2xl">
                <span style={{ color: "#0096FA" }}>←</span> Beat the Street
              </a>
            </div>
            <div className="text-right">
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Next</span>
              <a href="/work/missing-metric" className="mt-3 flex items-center justify-end gap-3 text-xl font-medium tracking-tight hover:opacity-70 transition-opacity md:text-2xl">
                The Missing Metric <span style={{ color: "#0096FA" }}>→</span>
              </a>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
