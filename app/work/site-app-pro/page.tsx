"use client"

import { motion } from "motion/react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SiteAppProPage() {
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
              Site App Pro<span style={{ color: "#0096FA" }}>.</span>
            </h1>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-16 overflow-hidden rounded-2xl"
          >
            <img
              src="/siteapppro_tile.png"
              alt="Site App Pro"
              className="w-full object-cover"
            />
          </motion.div>

          {/* Description + colour palette */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3"
          >
            {/* Body copy — takes up 2 cols */}
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-2">
              <p>
                As part of the website redesign, I focused on increasing conversion rates through the placement and style of call to action buttons.
              </p>
              <p>
                I created new content around 'who is it for' and 'what do you need' for prospects who are looking at how it could help their business size specifically or to help solve a specific problem.
              </p>
              <p>
                And finally I added search capability functions to allow prospects to find resources and product features easier.
              </p>
            </div>

            {/* Colour palette */}
            <div className="flex flex-col gap-3">
              {[
                { label: "Primary",   rgb: "249, 116, 2",   hex: "#F97402", dark: false },
                { label: "Secondary", rgb: "30, 43, 93",    hex: "#1E2B5D", dark: false },
                { label: "Secondary", rgb: "114, 212, 225", hex: "#72D4E1", dark: true  },
              ].map((colour) => (
                <div
                  key={colour.hex}
                  className="relative flex h-28 flex-col justify-end rounded-xl p-4"
                  style={{ backgroundColor: colour.hex }}
                >
                  <p className={`text-sm font-semibold ${colour.dark ? "text-black" : "text-white"}`}>
                    {colour.label}
                  </p>
                  <p className={`font-mono text-xs ${colour.dark ? "text-black/60" : "text-white/60"}`}>
                    {colour.hex}
                  </p>
                  <p className={`font-mono text-xs ${colour.dark ? "text-black/60" : "text-white/60"}`}>
                    RGB {colour.rgb}
                  </p>
                </div>
              ))}
            </div>
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
              href="/work/safe-food-pro"
              className="mt-3 flex items-center gap-3 text-3xl font-medium tracking-tight hover:opacity-70 transition-opacity md:text-4xl"
            >
              Safe Food Pro <span style={{ color: "#0096FA" }}>→</span>
            </a>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
