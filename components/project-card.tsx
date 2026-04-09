"use client"

import { motion } from "motion/react"
import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  role: string
  year: string
  image: string
  index: number
}

export function ProjectCard({ title, description, role, year, image, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative border-t border-border py-8 md:py-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#" className="block">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <motion.h3
              className="text-3xl font-medium tracking-tight md:text-5xl lg:text-6xl"
              animate={{ x: isHovered ? 20 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {title}
              <motion.span
                className="ml-2 inline-block text-muted-foreground"
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                transition={{ duration: 0.2 }}
              >
                .
              </motion.span>
            </motion.h3>
            <motion.p
              className="mt-2 text-base text-muted-foreground md:text-lg"
              animate={{ opacity: isHovered ? 1 : 0.7, x: isHovered ? 20 : 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {description}
            </motion.p>
          </div>
          
          <div className="flex items-center gap-8 md:gap-12">
            <div className="text-sm text-muted-foreground">
              <p>{role}</p>
              <p>{year}</p>
            </div>
            
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full border border-border transition-all duration-300 ${isHovered ? "scale-120 bg-foreground" : "scale-100"}`}
            >
              <ArrowUpRight 
                className={`h-5 w-5 transition-colors duration-300 ${isHovered ? "text-background" : "text-foreground"}`} 
              />
            </div>
          </div>
        </div>
        
        {/* Hover Image Preview */}
        <motion.div
          className="pointer-events-none absolute right-12 top-1/2 z-10 hidden -translate-y-1/2 overflow-hidden rounded-lg lg:block"
          initial={{ opacity: 0, scale: 0.8, y: "-50%" }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
            y: "-50%"
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative h-48 w-72 overflow-hidden rounded-lg" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)" }}>
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <span className="text-sm font-medium tracking-wide text-white uppercase">Coming soon</span>
            </div>
          </div>
        </motion.div>
      </a>
    </motion.article>
  )
}
