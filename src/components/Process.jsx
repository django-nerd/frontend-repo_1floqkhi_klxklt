import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Discover',
    desc: 'Define goals, audience, and success metrics through collaborative workshops.',
  },
  {
    title: 'Design',
    desc: 'From information architecture to high‑fidelity prototypes and motion specs.',
  },
  {
    title: 'Develop',
    desc: 'Partner with engineers to bring interactions to life with consistency.',
  },
  {
    title: 'Deliver',
    desc: 'Test, refine, and ship. Support handoff with detailed documentation.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.06 }} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-gold text-sm mb-1">{String(i + 1).padStart(2, '0')}</div>
              <div className="text-white font-medium">{s.title}</div>
              <div className="text-zinc-300 text-sm mt-2">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
