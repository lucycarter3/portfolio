"use client"

import { motion } from "motion/react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function WagestreamPage() {
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
            <span className="text-sm font-medium text-muted-foreground">2024 — 2025</span>
            <h1 className="mt-3 text-5xl font-medium tracking-tight md:text-7xl">
              Wagestream<span style={{ color: "#0096FA" }}>.</span>
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
              Wagestream is a financial wellbeing platform committed to bringing fair, accessible financial services to frontline workers worldwide — giving employees greater autonomy over their earnings and, in turn, their lives.
            </p>
            <p>
              Trusted by employers across the globe, the platform enables workers to access a portion of their earned wages in real time, alongside an integrated suite of tools spanning budgeting, saving, and financial education. By reimagining the traditional pay cycle, Wagestream addresses financial stress at its root — fostering healthier financial habits and cultivating a more motivated, engaged, and resilient workforce.
            </p>
          </motion.div>

          {/* ── Purple Friday ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20"
          >
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
              Purple Friday<span style={{ color: "#0096FA" }}>.</span>
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Placeholder copy for Purple Friday section.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {["ad1", "ad2", "poster"].map((name) => (
                <div key={name} className="overflow-hidden rounded-2xl">
                  <img
                    src={`/Wagestream-purplefriday-${name}.webp`}
                    alt={`Purple Friday ${name}`}
                    className="w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Workplace Ads ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20"
          >
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
              Workplace Ads<span style={{ color: "#0096FA" }}>.</span>
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Placeholder copy for workplace ads section.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="overflow-hidden rounded-2xl">
                  <img
                    src={`/Wagestream-workplaceads-${n}.webp`}
                    alt={`Workplace ad ${n}`}
                    className="w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Money Matters ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20"
          >
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
              Money Matters<span style={{ color: "#0096FA" }}>.</span>
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Placeholder copy for Money Matters section.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {["poster", "illustration"].map((name) => (
                <div key={name} className="overflow-hidden rounded-2xl">
                  <img
                    src={`/Wagestream-moneymatters-${name}.webp`}
                    alt={`Money Matters ${name}`}
                    className="w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Next project nav */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-24 border-t border-border pt-12"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Next</span>
            <a
              href="/work/fresha"
              className="mt-3 flex items-center gap-3 text-3xl font-medium tracking-tight hover:opacity-70 transition-opacity md:text-4xl"
            >
              Fresha <span style={{ color: "#0096FA" }}>→</span>
            </a>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
