import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Works', href: '#works' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-tight text-white">
          <span className="text-gold">Reiikuzoo</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-zinc-300 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="ml-2 inline-flex items-center justify-center rounded-full bg-gold/90 hover:bg-gold text-black px-4 py-2 text-sm font-medium transition-colors">
            Let’s talk
          </a>
        </nav>
        <button onClick={() => setOpen((o) => !o)} className="md:hidden p-2 text-white/90" aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm text-zinc-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex w-fit items-center justify-center rounded-full bg-gold/90 hover:bg-gold text-black px-4 py-2 text-sm font-medium transition-colors">
              Let’s talk
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
