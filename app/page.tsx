import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WorkSection } from "@/components/work-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Blurred gradient background shapes */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-[-10%] top-[30%] h-[500px] w-[500px] rounded-full bg-sky-400/8 blur-[100px]" />
        <div className="absolute left-[20%] top-[60%] h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[140px]" />
        <div className="absolute -right-20 top-[80%] h-[550px] w-[550px] rounded-full bg-blue-400/6 blur-[130px]" />
        <div className="absolute left-[-5%] top-[90%] h-[350px] w-[350px] rounded-full bg-cyan-500/8 blur-[110px]" />
      </div>

      <Header />
      <main>
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
