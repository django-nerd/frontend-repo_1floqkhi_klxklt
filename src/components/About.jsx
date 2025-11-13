import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }} className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">About</h2>
          </div>
          <div className="md:col-span-7 text-zinc-300 leading-relaxed">
            <p>
              I’m Reiikuzoo, a UI/UX Designer focused on crafting digital products that blend storytelling and utility. My work lives where brand, interaction, and motion meet — transforming ideas into engaging experiences.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-6 text-sm">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4"><div className="text-gold font-medium">8+ years</div><div className="text-zinc-400">Designing</div></div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4"><div className="text-gold font-medium">40+ projects</div><div className="text-zinc-400">Shipped</div></div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4"><div className="text-gold font-medium">8 countries</div><div className="text-zinc-400">Clients</div></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
