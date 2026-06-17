import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import GrowthVideo from '@/components/GrowthVideo'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ShaderBackground from '@/components/ui/shader-background'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ShaderBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <GrowthVideo />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
