"use client"

import { motion } from "motion/react"
import { useRef } from "react"
import { ProjectCard } from "./project-card"

const projects = [
  {
    title: "Beat the Street",
    description: "",
    role: "",
    year: "2026",
    image: "",
  },
  {
    title: "IG",
    description: "",
    role: "",
    year: "2025 / 2026",
    image: "",
  },
  {
    title: "The Missing Metric",
    description: "",
    role: "",
    year: "2025",
    image: "/wagestream_whitepapermockup.webp",
  },
  {
    title: "Wagestream",
    description: "",
    role: "",
    year: "2024 / 2025",
    image: "/wagestream.jpg",
  },
  {
    title: "Fresha",
    description: "",
    role: "",
    year: "2023",
    image: "/fresha.png",
  },
  {
    title: "Site App Pro",
    description: "",
    role: "",
    year: "2021 / 2023",
    image: "/siteapppro_tile.png",
  },
  {
    title: "Safe Food Pro",
    description: "",
    role: "",
    year: "2021 / 2023",
    image: "/safefoodpro_tile",
  },
  {
    title: "Sprout",
    description: "",
    role: "",
    year: "2020",
    image: "/sprout3.jpg",
  },
]

export function WorkSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <span className="text-sm font-medium text-muted-foreground">
              Selected Work
            </span>
            <h2 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">
              Recent Projects<span style={{ color: "#0096FA" }}>.</span>
            </h2>
          </div>
          <span className="hidden text-sm text-muted-foreground md:block">
            Scroll →
          </span>
        </motion.div>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="scrollbar-hide flex gap-6 overflow-x-auto px-6 pb-4 md:px-12"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="w-[85vw] shrink-0 md:w-[60vw] lg:w-[45vw]"
            style={{ scrollSnapAlign: "start" }}
          >
            <ProjectCard {...project} index={index} />
          </div>
        ))}
        {/* Spacer for last card */}
        <div className="w-6 shrink-0 md:w-12" />
      </div>
    </section>
  )
}
