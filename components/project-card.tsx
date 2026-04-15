"use client"

import { motion } from "motion/react"
import { useState } from "react"

interface ProjectCardProps {
  title: string
  description: string
  role: string
  year: string
  image: string
  index: number
  href?: string
}

export function ProjectCard({ title, description, role, year, image, index, href }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group mb-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={href ?? "#"} className="block">
        {/* Hero image */}
        <motion.div
          className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl"
          style={image ? undefined : { background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)" }}
          animate={{ scale: isHovered ? 0.98 : 1 }}
          transition={{ duration: 0.4 }}
        >
          {image && (
            <img
              src={image}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          {!href && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <span className="text-sm font-medium tracking-wide text-white/80 uppercase">Coming soon</span>
            </div>
          )}
        </motion.div>

        {/* Project info below image */}
        <div className="mt-5 flex items-start justify-between">
          <div>
            <motion.h3
              className="text-2xl font-medium tracking-tight md:text-3xl"
              animate={{ x: isHovered ? 8 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>
            {(role || description) && (
              <p className="mt-1 text-sm text-muted-foreground md:text-base">
                {role || description}
              </p>
            )}
          </div>
          <span className="mt-1 shrink-0 text-sm text-muted-foreground">
            {year}
          </span>
        </div>
      </a>
    </motion.article>
  )
}
