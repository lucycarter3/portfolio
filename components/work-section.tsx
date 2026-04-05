"use client"

import { motion } from "motion/react"
import { ProjectCard } from "./project-card"

const projects = [
  {
    title: "Nexus App",
    description: "AI-powered productivity platform",
    role: "Lead Designer",
    year: "2024 / Present",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop",
  },
  {
    title: "Bloom Studio",
    description: "Creative agency rebrand and website",
    role: "Brand & Web Design",
    year: "2024",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&h=400&fit=crop",
  },
  {
    title: "Pulse Health",
    description: "Healthcare mobile application",
    role: "Product Design",
    year: "2023 / 2024",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
  },
  {
    title: "Echo Music",
    description: "Music streaming service redesign",
    role: "UI/UX Design",
    year: "2023",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop",
  },
  {
    title: "Terra Finance",
    description: "Fintech dashboard and mobile app",
    role: "Product Designer",
    year: "2022 / 2023",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Wander Travel",
    description: "Travel planning platform",
    role: "Design Lead",
    year: "2022",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
  },
]

export function WorkSection() {
  return (
    <section id="work" className="px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <span className="text-sm font-medium text-muted-foreground">
              Selected Work
            </span>
            <h2 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">
              Recent Projects<span className="text-accent">.</span>
            </h2>
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden text-sm text-muted-foreground md:block"
          >
            {projects.length} projects
          </motion.span>
        </motion.div>

        <div className="border-b border-border">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
