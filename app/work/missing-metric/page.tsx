"use client"

import { motion } from "motion/react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function MissingMetricPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient blobs */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-blue-200/30 blur-[120px]" />
        <div className="absolute right-[-10%] top-[30%] h-[500px] w-[500px] rounded-full bg-sky-200/25 blur-[100px]" />
        <div className="absolute left-[20%] top-[60%] h-[400px] w-[400px] rounded-full bg-indigo-200/30 blur-[140px]" />
      </div>

      <Header />

      <main className="pt-32 pb-24">
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

          {/* Title + stat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 space-y-6"
          >
            <div>
              <span className="text-sm font-medium text-muted-foreground">2025</span>
              <h1 className="mt-3 text-5xl font-medium tracking-tight md:text-7xl">
                The Missing Metric<span style={{ color: "#0096FA" }}>.</span>
              </h1>
            </div>
            <p className="max-w-xl text-xl font-medium leading-snug">
              93% of employees are motivated to do their best work when they feel valued.
            </p>
          </motion.div>

          {/* Descriptive paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-16 max-w-3xl text-lg leading-relaxed text-muted-foreground"
          >
            Wagestream launched new research on financial resilience being The Missing Metric when it comes to having a happier, more productive team. This is the first campaign launch using the new Wagestream branding.
          </motion.p>

          {/* Whitepaper mockup + download CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-20"
          >
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-5">
              <div className="overflow-hidden rounded-2xl md:col-span-3">
                <img
                  src="/wagestream_whitepapermockup3.webp"
                  alt="Whitepaper mockup"
                  className="w-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center space-y-6 md:col-span-2">
                <p className="text-2xl font-medium">Check out the full report</p>
                <a
                  href="/Wagestream_A4+UK+Q2+Campaign+Whitepaper+DIGITAL+(double+page).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full border border-border px-5 py-2 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  Download report
                </a>
              </div>
            </div>
          </motion.div>

          {/* Three images in a horizontal row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/wagestream_group.webp"
                alt="Wagestream group"
                className="w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/Wagestream_Boldquestions.webp"
                alt="Bold questions"
                className="w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/Wagstream_Incompletesentances.webp"
                alt="Incomplete sentences"
                className="w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Project nav */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-24 border-t border-border pt-12 flex items-start justify-between"
          >
            <div>
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Previous</span>
              <a href="/work/ig" className="mt-3 flex items-center gap-3 text-xl font-medium tracking-tight hover:opacity-70 transition-opacity md:text-2xl">
                <span style={{ color: "#0096FA" }}>←</span> IG
              </a>
            </div>
            <div className="text-right">
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Next</span>
              <a href="/work/wagestream" className="mt-3 flex items-center justify-end gap-3 text-xl font-medium tracking-tight hover:opacity-70 transition-opacity md:text-2xl">
                Wagestream <span style={{ color: "#0096FA" }}>→</span>
              </a>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
