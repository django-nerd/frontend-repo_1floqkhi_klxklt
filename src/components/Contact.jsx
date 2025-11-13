import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // Simple mailto fallback; in a real project hook to backend/email service
      const form = new FormData(e.currentTarget)
      const subject = encodeURIComponent('Project inquiry — Reiikuzoo Portfolio')
      const body = encodeURIComponent(
        `Name: ${form.get('name')}\nEmail: ${form.get('email')}\nBudget: ${form.get('budget')}\n\n${form.get('message')}`
      )
      window.location.href = `mailto:hello@reiikuzoo.design?subject=${subject}&body=${body}`
      setStatus('')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">Contact</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="text-zinc-300">
            <p className="mb-4">Have a project in mind? I’m currently booking for the next quarter.</p>
            <p>Prefer email? <a href="mailto:hello@reiikuzoo.design" className="text-gold underline">hello@reiikuzoo.design</a></p>
          </div>
          <motion.form initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-zinc-400">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md bg-black/50 border border-white/10 px-3 py-2 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-zinc-400">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md bg-black/50 border border-white/10 px-3 py-2 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="you@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-zinc-400">Budget</label>
                <select name="budget" className="mt-1 w-full rounded-md bg-black/50 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gold/50">
                  <option value="Undisclosed">Undisclosed</option>
                  <option value="$5k–$10k">$5k–$10k</option>
                  <option value="$10k–$25k">$10k–$25k</option>
                  <option value="$25k+">$25k+</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-zinc-400">Project details</label>
                <textarea name="message" rows="4" className="mt-1 w-full rounded-md bg-black/50 border border-white/10 px-3 py-2 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="Tell me about your goals, timeline, and constraints." />
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <button type="submit" className="inline-flex items-center rounded-full bg-gold text-black px-5 py-2.5 text-sm font-medium hover:brightness-95 transition">Send inquiry</button>
              <span className="text-sm text-zinc-400">{status}</span>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
