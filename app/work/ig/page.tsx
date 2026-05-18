"use client"

import { motion, AnimatePresence } from "motion/react"
import { useRef, useState, forwardRef, useEffect } from "react"
// useRef kept for MuteableVideo internals
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

function PageModal({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [onClose])
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 backdrop-blur-sm overflow-y-auto py-10 px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={e => e.stopPropagation()}
          className="relative w-full max-w-3xl"
        >
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-gray-100 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
          <img src={src} alt={alt} className="w-full rounded-2xl shadow-2xl" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

const MuteableVideo = forwardRef<HTMLVideoElement, { src: string; className?: string }>(
  function MuteableVideo({ src, className }, ref) {
  const innerRef = useRef<HTMLVideoElement>(null)
  const videoRef = (ref as React.RefObject<HTMLVideoElement>) ?? innerRef
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      videoRef.current.play()
      setPlaying(true)
    } else {
      videoRef.current.pause()
      setPlaying(false)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setMuted(videoRef.current.muted)
  }

  return (
    <div className={`relative ${className ?? ""}`}>
      <video ref={videoRef} src={src} muted loop playsInline className="w-full rounded-2xl" />

      {/* Play button overlay — shown when paused */}
      {!playing && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/30 backdrop-blur-[2px] transition hover:bg-black/40"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 translate-x-0.5 text-black">
              <path d="M8 5.14v14l11-7-11-7z" />
            </svg>
          </div>
        </button>
      )}

      {/* Controls — shown when playing */}
      {playing && (
        <div className="absolute bottom-3 right-3 flex gap-2">
          <button
            onClick={togglePlay}
            className="flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition hover:bg-black/70"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
            Pause
          </button>
          <button
            onClick={toggleMute}
            className="flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition hover:bg-black/70"
          >
            {muted ? (
              <><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z" /></svg> Unmute</>
            ) : (
              <><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06ZM15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" /></svg> Mute</>
            )}
          </button>
        </div>
      )}
    </div>
  )
})

export default function IGPage() {
  const [modal, setModal] = useState<{ src: string; alt: string } | null>(null)

  return (
    <div className="relative">
      {/* Background gradient blobs */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-pink-200/30 blur-[120px]" />
        <div className="absolute right-[-10%] top-[30%] h-[500px] w-[500px] rounded-full bg-orange-200/25 blur-[100px]" />
        <div className="absolute left-[20%] top-[60%] h-[400px] w-[400px] rounded-full bg-purple-200/30 blur-[140px]" />
      </div>

      <Header />

      <main className="bg-background pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">

          {/* Back link */}
          <motion.a
            href="/work"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-12 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back
          </motion.a>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6"
          >
            <span className="text-sm font-medium text-muted-foreground">2025 – 2026</span>
            <h1 className="mt-3 text-5xl font-medium tracking-tight md:text-7xl">
              IG<span style={{ color: "#0096FA" }}>.</span>
            </h1>
          </motion.div>

          {/* Intro copy + GIF */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 flex flex-col md:flex-row md:items-start gap-12"
          >
            <div className="flex-1 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                As part of a newly formed creative team, I was brought in to help navigate IG through a pivotal chapter – a UK rebrand designed to propel the business boldly into the 21st century. Working in close collaboration with design agency Otherway, alongside our in-house motion designer and copywriters, we immersed ourselves in the new brand from the ground up, living and breathing every element before embarking on a major rollout.
              </p>
              <p>
                From transforming brand assets into high-performing campaign work, to shaping the storytelling that fuels IG's broader narrative, the project was as much about cultural shift as it was visual refinement.
              </p>
            </div>
            <div className="shrink-0 overflow-hidden rounded-2xl" style={{ width: 300, height: 400 }}>
              <img
                src="/IG_logochange.gif"
                alt="IG logo change animation"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Female Invest Event */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-24"
          >
            <h2 className="text-2xl font-medium tracking-tight">Female Invest Event</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A partnership event with Female Invest – bringing together a community of women looking to take control of their financial future. I designed the event collateral, including a double-sided A6 flyer that balanced both brands while keeping IG's bold new identity front and centre.
            </p>
            <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center">
              {/* A6 mockup */}
              <div className="flex justify-center md:w-1/2">
                <div
                  className="relative"
                  style={{
                    width: 444,
                    height: 315,
                    borderRadius: 8,
                    boxShadow: "0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.10)",
                    transform: "rotate(-2deg)",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/ig-female-invest-flyer-p2.png"
                    alt="Female Invest Event flyer back"
                    className="w-full h-full object-cover"
                    style={{ transform: "scale(1.08)" }}
                  />
                </div>
              </div>
              <div className="flex justify-center md:w-1/2">
                <div
                  className="relative"
                  style={{
                    width: 444,
                    height: 315,
                    borderRadius: 8,
                    boxShadow: "0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.10)",
                    transform: "rotate(2deg)",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/ig-female-invest-flyer-p1.png"
                    alt="Female Invest Event flyer front"
                    className="w-full h-full object-cover"
                    style={{ transform: "scale(1.10)" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Incentive Ads */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-24"
          >
            <h2 className="text-2xl font-medium tracking-tight">Incentive Ads</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              These acquisition ads introduced IG's secondary colour palette, expanding the campaign toolkit while staying firmly within the brand system. Each execution was tested against phone UI to ensure legibility and impact in-feed. A key part of the process was bringing AI-generated illustration into the creative workflow – using Nano Banana to produce imagery that matched the style and tone of our existing illustration library, then animating those assets with Google Veo.
            </p>
            <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-start">
              <MuteableVideo src="/ig-incentive-cashback.mp4" className="w-full md:w-1/2" />
              <MuteableVideo src="/ig-incentive-bonus-shares.mp4" className="w-full md:w-1/2" />
            </div>
          </motion.div>

          {/* CRM Emails */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-24"
          >
            <h2 className="text-2xl font-medium tracking-tight">CRM Emails</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Designing within IG's CRM ecosystem meant translating the new brand language into high-performing email campaigns – balancing visual impact with clear, conversion-driven hierarchy.
            </p>
            <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-start">
              <div className="h-[600px] overflow-y-scroll rounded-2xl scrollbar-hide md:w-1/2">
                <img
                  src="/ig-crm-crypto-swaps-new.png"
                  alt="IG CRM email – Crypto Swaps"
                  className="w-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Website & Landing Pages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-24"
          >
            <h2 className="text-2xl font-medium tracking-tight">Website &amp; Landing Pages</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Translating the rebrand across IG's web presence — designing landing pages and key site templates that brought the new visual language to life in a digital product context, balancing brand expression with clear conversion hierarchy.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => setModal({ src: "/ig-landing-trade-home.png", alt: "IG trade home page" })}
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition hover:bg-foreground hover:text-background"
              >
                Trade page
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
              </button>
              <button
                onClick={() => setModal({ src: "/ig-landing-spread-betting.png", alt: "IG spread betting page" })}
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition hover:bg-foreground hover:text-background"
              >
                Spread betting page
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
              </button>
            </div>
          </motion.div>

          {/* Project nav */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-24 border-t border-border pt-12 flex items-start justify-between"
          >
            <div>
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Previous</span>
              <a href="/work/beat-the-street" className="mt-3 flex items-center gap-3 text-xl font-medium tracking-tight hover:opacity-70 transition-opacity md:text-2xl">
                <span style={{ color: "#0096FA" }}>←</span> Beat the Street
              </a>
            </div>
            <div className="text-right">
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Next</span>
              <a href="/work/missing-metric" className="mt-3 flex items-center justify-end gap-3 text-xl font-medium tracking-tight hover:opacity-70 transition-opacity md:text-2xl">
                The Missing Metric <span style={{ color: "#0096FA" }}>→</span>
              </a>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
      {modal && <PageModal src={modal.src} alt={modal.alt} onClose={() => setModal(null)} />}
    </div>
  )
}
