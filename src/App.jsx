import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Works from './components/Works'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <GradientBG />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Works />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function GradientBG() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-[1]">
      <div className="absolute inset-0 bg-[radial-gradient(65%_40%_at_50%_-10%,rgba(255,215,0,0.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(30%_25%_at_90%_10%,rgba(255,215,0,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(20%_20%_at_10%_20%,rgba(255,215,0,0.04),transparent_60%)]" />
    </div>
  )
}

export default App
