import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Reiikuzoo led a design transformation for our flagship product. The new motion system is delightful and purposeful.',
    author: 'M. Alvarez',
    role: 'VP Product, NovaLabs'
  },
  {
    quote: 'Storytelling and systems thinking in one. Our brand experience finally feels cohesive across platforms.',
    author: 'S. Cho',
    role: 'Head of Design, Kintsugi Media'
  },
  {
    quote: 'From workshops to handoff, everything was crisp. The prototypes were basically production‑ready.',
    author: 'D. Patel',
    role: 'Engineering Manager, Monocle'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.author} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.06 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-zinc-200">“{t.quote}”</div>
              <div className="mt-4 text-sm text-zinc-400">{t.author} • {t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
