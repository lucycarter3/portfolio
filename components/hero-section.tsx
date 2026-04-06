"use client"

import { motion } from "motion/react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 pt-24 md:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="text-sm font-medium text-muted-foreground">
            Graphic & Web Designer
          </span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-balance text-5xl font-medium leading-[1.1] tracking-tight md:text-7xl lg:text-8xl"
          >
            Crafting digital
            <br />
            <span className="text-muted-foreground">experiences</span> that
            <br />
            resonate<span className="text-accent">.</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          I design and build interfaces that connect brands with their audiences. 
          Currently available for freelance projects and full-time opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex items-center gap-6"
        >
          <motion.a
            href="#work"
            className="rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Work
          </motion.a>
          <motion.a
            href="#about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            whileHover={{ x: 5 }}
          >
            Learn more &rarr;
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}
