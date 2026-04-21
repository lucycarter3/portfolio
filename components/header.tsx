"use client"

import { motion, AnimatePresence } from "motion/react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState(() => {
    if (pathname === "/about") return "about"
    if (pathname === "/contact") return "contact"
    if (pathname === "/work" || pathname.startsWith("/work/")) return "work"
    return ""
  })
  const [isScrolled, setIsScrolled] = useState(false)
  const [isInDarkSection, setIsInDarkSection] = useState(() => pathname === "/")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (pathname !== "/") return
    const handleScroll = () => {
      const vh = window.innerHeight
      setIsScrolled(window.scrollY > 50)
      setIsInDarkSection(window.scrollY < vh * 0.85)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || menuOpen ? "bg-background/80 backdrop-blur-md" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
          <motion.a
            href="/"
            className={`text-xl font-medium tracking-tight transition-colors duration-500 ${isInDarkSection && !menuOpen ? "text-white" : ""}`}
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
                className={`relative text-sm font-medium transition-colors duration-500 ${
                  isInDarkSection
                    ? "text-white/60 hover:text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                whileHover={{ y: -2 }}
                onClick={() => setActiveSection(item.label.toLowerCase())}
              >
                {item.label}
                {activeSection === item.label.toLowerCase() && (
                  <motion.span
                    layoutId="activeNav"
                    className={`absolute -bottom-1 left-0 right-0 h-px transition-colors duration-500 ${isInDarkSection ? "bg-white" : "bg-foreground"}`}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <motion.a
              href="https://www.linkedin.com/in/lucy-carter-0b3a86185/"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-500 ${
                isInDarkSection && !menuOpen
                  ? "border-white/30 text-white hover:bg-white/10"
                  : "border-border hover:bg-secondary"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.a>

            {/* Hamburger button — mobile only */}
            <button
              className="flex flex-col items-center justify-center gap-1.5 md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className={`block h-px w-6 origin-center transition-colors duration-500 ${isInDarkSection && !menuOpen ? "bg-white" : "bg-foreground"}`}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
                className={`block h-px w-6 transition-colors duration-500 ${isInDarkSection && !menuOpen ? "bg-white" : "bg-foreground"}`}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className={`block h-px w-6 origin-center transition-colors duration-500 ${isInDarkSection && !menuOpen ? "bg-white" : "bg-foreground"}`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col bg-background/95 backdrop-blur-md pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  className="border-b border-border py-5 text-3xl font-medium tracking-tight text-foreground"
                  onClick={() => {
                    setActiveSection(item.label.toLowerCase())
                    setMenuOpen(false)
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
