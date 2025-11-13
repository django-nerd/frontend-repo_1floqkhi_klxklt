import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] md:min-h-screen overflow-hidden bg-[radial-gradient(75%_60%_at_50%_0%,rgba(255,215,0,0.10),transparent_60%)]">
      <div className="absolute inset-0 opacity-70">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-36 pb-24 md:pt-44 md:pb-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Innovative Storytelling • Creative Digital Design
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
            Reiikuzoo — Crafting immersive interfaces that feel alive.
          </h1>
          <p className="mt-5 text-zinc-300 md:text-lg">
            I shape narratives into intuitive experiences through motion, micro–interactions and thoughtful systems.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#works" className="inline-flex items-center rounded-full bg-gold text-black px-5 py-2.5 text-sm font-medium hover:brightness-95 transition">See selected works</a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/90 hover:bg-white/5 transition">Start a project</a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
