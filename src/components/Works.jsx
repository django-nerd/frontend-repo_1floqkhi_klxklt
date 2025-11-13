import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Aurora — Narrative Commerce',
    tags: ['E‑commerce', 'Motion', 'Brand'],
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Monocle OS — Spatial Dashboard',
    tags: ['Product', '3D', 'System'],
    image: 'https://images.unsplash.com/photo-1623425122389-2292bbabd614?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNb25vY2xlJTIwT1MlMjAlRTIlODAlOTQlMjBTcGF0aWFsJTIwRGFzaGJvYXJkfGVufDB8MHx8fDE3NjMwNDA5ODZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Kintsugi — Editorial Platform',
    tags: ['Publishing', 'Story', 'Web'],
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Works() {
  return (
    <section id="works" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-6 mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Selected Works</h2>
          <a href="#contact" className="text-sm text-gold hover:underline">Request full portfolio →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a key={p.title} href="#contact" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.07 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={p.image} alt="" className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <div className="text-sm text-zinc-300 mb-1">{p.tags.join(' • ')}</div>
                <div className="text-white font-medium">{p.title}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
