"use client"

import { motion } from "motion/react"

const testimonials = [
  {
    name: "James Bruce",
    title: "Head of Brand & Design",
    quote:
      "Lucy was an excellent colleague and collaborator. Having worked with her on several high-pressure design projects, I have had first-hand experience of her patience, tenaciousness, and creative skills.\n\nReliable and dedicated, Lucy was never phased by multiple design requests or challenging creative briefs, always aiming to achieve the best outcome.\n\nI have no hesitation in recommending her; she is a great asset to any design team.",
  },
  {
    name: "Sharee Campbell",
    title: "Chief People Officer",
    quote:
      "I am pleased to recommend Lucy, a creative professional with a remarkable talent and dedication. Lucy has demonstrated a strong commitment to her craft, specialising in graphic design. Her passion for design and dedication to excellence make her a valuable asset to any supportive team environment.\n\nI warmly endorse Lucy for any opportunities that allow her to leverage her skills and enthusiasm.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-muted-foreground">
            Testimonials
          </span>
          <h2 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">
            Kind words<span style={{ color: "#0096FA" }}>.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-2xl border border-border bg-background/60 p-8 backdrop-blur-sm"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                className="mb-6 text-muted-foreground/30"
              >
                <path
                  d="M11 7.5H7.5C6.12 7.5 5 8.62 5 10v1.5c0 1.38 1.12 2.5 2.5 2.5H9c.83 0 1.5.67 1.5 1.5S9.83 18 9 18H8.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H9c2.21 0 4-1.79 4-4v-6a2.5 2.5 0 00-2-2.5zM21 7.5h-3.5C16.12 7.5 15 8.62 15 10v1.5c0 1.38 1.12 2.5 2.5 2.5H19c.83 0 1.5.67 1.5 1.5S19.83 18 19 18h-.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h.5c2.21 0 4-1.79 4-4v-6a2.5 2.5 0 00-2-2.5z"
                  fill="currentColor"
                />
              </svg>
              <p className="whitespace-pre-line text-base leading-relaxed text-muted-foreground">
                {testimonial.quote}
              </p>
              <div className="mt-8 border-t border-border pt-6">
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
