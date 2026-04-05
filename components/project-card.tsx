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
            
            <motion.div
              className={`flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors duration-300 ${isHovered ? "bg-foreground" : "bg-transparent"}`}
              animate={{ scale: isHovered ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight 
                className={`h-5 w-5 transition-colors duration-300 ${isHovered ? "text-background" : "text-foreground"}`} 
              />
            </motion.div>
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
          <div className="h-48 w-72 overflow-hidden rounded-lg bg-secondary">
            <img 
              src={image} 
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </a>
    </motion.article>
  )
}
