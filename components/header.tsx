"use client"

import { motion } from "motion/react"
import { useState, useEffect } from "react"

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [activeSection, setActiveSection] = useState("work")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
        <motion.a
          href="#"
          className="text-xl font-medium tracking-tight"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Lucy C<span className="opacity-50">reative</span>
        </motion.a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              whileHover={{ y: -2 }}
              onClick={() => setActiveSection(item.label.toLowerCase())}
            >
              {item.label}
              {activeSection === item.label.toLowerCase() && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-foreground"
                />
              )}
            </motion.a>
          ))}
        </nav>

        <motion.a
          href="mailto:hello@lucycarter.com"
          className="rounded-full border border-border px-5 py-2 text-sm font-medium transition-colors hover:bg-secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in touch
        </motion.a>
      </div>
    </motion.header>
  )
}
