import { Header } from "@/components/header"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Blurred gradient background shapes */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-blue-200/30 blur-[120px]" />
        <div className="absolute right-[-10%] top-[30%] h-[500px] w-[500px] rounded-full bg-sky-200/25 blur-[100px]" />
        <div className="absolute left-[20%] top-[60%] h-[400px] w-[400px] rounded-full bg-indigo-200/30 blur-[140px]" />
      </div>

      <Header />
      <main className="pt-24">
        <AboutSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
