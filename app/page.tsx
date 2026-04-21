import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ParallaxSection } from "@/components/parallax-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="relative">
      {/* Blurred gradient background shapes */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-blue-200/30 blur-[120px]" />
        <div className="absolute right-[-10%] top-[30%] h-[500px] w-[500px] rounded-full bg-sky-200/25 blur-[100px]" />
        <div className="absolute left-[20%] top-[60%] h-[400px] w-[400px] rounded-full bg-indigo-200/30 blur-[140px]" />
        <div className="absolute -right-20 top-[80%] h-[550px] w-[550px] rounded-full bg-blue-100/25 blur-[130px]" />
        <div className="absolute left-[-5%] top-[90%] h-[350px] w-[350px] rounded-full bg-cyan-200/25 blur-[110px]" />
      </div>

      <Header />
      <main>
        {/* Black parallax — stays sticky while card slides over */}
        <div className="sticky top-0 z-0">
          <ParallaxSection />
        </div>

        {/* Light card slides up over the black section */}
        <div className="relative z-10 rounded-t-[2rem] bg-background shadow-[0_-8px_40px_rgba(0,0,0,0.12)]">
          {/* Blurred gradient blobs */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-blue-200/30 blur-[120px]" />
            <div className="absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-sky-200/25 blur-[100px]" />
            <div className="absolute left-[20%] top-[50%] h-[400px] w-[400px] rounded-full bg-indigo-200/30 blur-[140px]" />
            <div className="absolute -right-20 top-[75%] h-[550px] w-[550px] rounded-full bg-blue-100/25 blur-[130px]" />
            <div className="absolute left-[-5%] top-[90%] h-[350px] w-[350px] rounded-full bg-cyan-200/25 blur-[110px]" />
          </div>
          <HeroSection />
          <Footer />
        </div>
      </main>
    </div>
  )
}
