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
  {
    name: "Greg Hart",
    title: "Head of Brand and Design",
    quote:
      "Lucy came to us fresh as a graduate, directly from design school, where she focused on product design. Being a SaaS company we didn't need a product designer but we needed an all-rounder to support our marketing roadmap. What has impressed me about Lucy has been her ability to turn her hand (and head) to every challenge we have thrown her way. Lucy has worked on our websites, digital marketing, print design and even managed a recent trade-show project from end to end. Lucy has a great attitude to her work and is always proactive when it comes to \"what needs doing next\".",
  },
  {
    name: "Forsyth Thompson",
    title: "Head of Marketing",
    quote:
      "When you're working in a small team delivering high growth, you need people who just roll their sleeves up and get things done - Lucy most definitely did that! Never afraid to pitch in and have a go at something, Lucy made a big impact to the business in a short space of time. Whether it was managing the delivery of a complex website rebuild, working on the redesign itself or running daily WIPs with our offshore development team, I could count on Lucy to do what she said she would do. As a result, we were able to deliver not just entirely new websites, but a complete redesign and work stream of Conversion Rate Optimisation. Lucy is at her best when focused on a task with a clear outcome and this was nowhere more obvious than when the new site design and ongoing optimisation delivered more than 100% increase in conversion rates year-on-year which was genuinely transformative for our marketing and acquisition work!",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <span className="text-sm font-medium text-muted-foreground">
              Testimonials
            </span>
            <h2 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">
              Kind words<span style={{ color: "#0096FA" }}>.</span>
            </h2>
          </div>
          <span className="hidden text-sm text-muted-foreground md:block">
            Scroll →
          </span>
        </motion.div>
      </div>

      {/* Horizontal scroll container */}
      <div
        className="scrollbar-hide flex gap-6 overflow-x-auto px-6 pb-4 md:px-12"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-[85vw] shrink-0 md:w-[45vw] lg:w-[35vw]"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="flex h-full flex-col rounded-2xl border border-border bg-background/60 p-8 backdrop-blur-sm">
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
              <p className="flex-1 whitespace-pre-line text-base leading-relaxed text-muted-foreground">
                {testimonial.quote}
              </p>
              <div className="mt-8 border-t border-border pt-6">
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.title}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
        {/* Spacer for last card */}
        <div className="w-6 shrink-0 md:w-12" />
      </div>
    </section>
  )
}
