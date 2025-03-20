import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import FeatureSection from "@/components/FeatureSection"
import FeaturesSection from "@/components/FeaturesSection"
import BlogSection from "@/components/BlogSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
        <FeaturesSection />
        <BlogSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}

