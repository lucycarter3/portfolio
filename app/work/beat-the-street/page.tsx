"use client"

import { motion } from "motion/react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function BeatTheStreetPage() {
  return (
    <div className="relative">
      {/* Background gradient blobs */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-green-200/30 blur-[120px]" />
        <div className="absolute right-[-10%] top-[30%] h-[500px] w-[500px] rounded-full bg-yellow-200/25 blur-[100px]" />
        <div className="absolute left-[20%] top-[60%] h-[400px] w-[400px] rounded-full bg-emerald-200/30 blur-[140px]" />
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
            <span className="text-sm font-medium text-muted-foreground">2026</span>
            <h1 className="mt-3 text-5xl font-medium tracking-tight md:text-7xl">
              Beat the Street<span style={{ color: "#0096FA" }}>.</span>
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
              Beat the Street is a financial knowledge game developed for IG, one of the world's leading investment platforms. Designed to make investing more accessible and engaging, the game challenges players with a weekly quiz — offering £1,000 in Amazon vouchers to those who score full marks, with additional monthly prizes and a quarterly bonus pot of £10,000 up for grabs.
            </p>
            <p>
              Rooted in IG's mission to build confidence in personal finance, Beat the Street transforms investing education into an interactive, rewarding experience — lowering the barrier to entry for a new generation of investors.
            </p>
            <p>
              I headed up the visual direction for the project, including the use of AI-assisted illustration to bring the game's iconic bull character to life — blending emerging creative technology with considered art direction to define the visual identity of the game.
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
              <a href="/work/sprout" className="mt-3 flex items-center gap-3 text-xl font-medium tracking-tight hover:opacity-70 transition-opacity md:text-2xl">
                <span style={{ color: "#0096FA" }}>←</span> Sprout
              </a>
            </div>
            <div className="text-right">
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Next</span>
              <a href="/work/ig" className="mt-3 flex items-center justify-end gap-3 text-xl font-medium tracking-tight hover:opacity-70 transition-opacity md:text-2xl">
                IG <span style={{ color: "#0096FA" }}>→</span>
              </a>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
