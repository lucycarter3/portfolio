"use client"

import { motion } from "motion/react"

const skills = [
  "UI/UX Design",
  "Brand Identity",
  "Web Development",
  "Motion Design",
  "Prototyping",
  "Design Systems",
]

const experience = [
  {
    company: "Freelance",
    role: "Independent Designer",
    period: "2022 — Present",
  },
  {
    company: "Studio Creative",
    role: "Senior Designer",
    period: "2020 — 2022",
  },
  {
    company: "Digital Agency",
    role: "UI/UX Designer",
    period: "2018 — 2020",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-secondary/30 px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-muted-foreground">
              About
            </span>
            <h2 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">
              A designer with a passion for
              <br />
              <span className="text-muted-foreground">meaningful work</span>
              <span className="text-accent">.</span>
            </h2>

            <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              {
                "I'm a graphic and web designer with over 6 years of experience creating digital experiences that matter. I believe design should be purposeful, accessible, and delightful."
              }
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {
                "When I'm not designing, you'll find me exploring new design tools, contributing to open-source projects, or mentoring aspiring designers."
              }
            </p>

            <div className="mt-12">
              <h3 className="mb-4 text-sm font-medium text-muted-foreground">
                Skills & Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="rounded-full border border-border px-4 py-2 text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-8 text-sm font-medium text-muted-foreground">
              Experience
            </h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group flex items-start justify-between border-b border-border pb-8"
                >
                  <div>
                    <h4 className="text-lg font-medium">{exp.company}</h4>
                    <p className="text-muted-foreground">{exp.role}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12"
            >
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
              >
                Download Resume
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform group-hover:translate-y-1"
                >
                  <path
                    d="M8 3v8m0 0l-3-3m3 3l3-3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
