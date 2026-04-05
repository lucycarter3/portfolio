"use client"

import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lucy-carter-0b3a86185/?skipRedirect=true" },
]

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium text-muted-foreground">
            {"Let's connect"}
          </span>
          <h2 className="mx-auto mt-4 max-w-3xl text-balance text-4xl font-medium tracking-tight md:text-6xl lg:text-7xl">
            Have a project in mind? {"Let's"} create something{" "}
            <span className="text-muted-foreground">amazing together</span>
            <span className="text-accent">.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <motion.a
            href="mailto:hello@lucycarter.com"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-primary px-10 py-5 text-lg font-medium text-primary-foreground"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get in touch</span>
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 flex flex-col items-center justify-between gap-8 border-t border-border pt-12 md:flex-row"
        >
          <div className="flex items-center gap-8">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                whileHover={{ y: -2 }}
              >
                {social.label}
              </motion.a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              hello@lucycarter.com
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Available for work
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
