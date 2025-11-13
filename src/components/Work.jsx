import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Panel Transition Engine',
    desc: 'A page-turner experience with scene wipes and speed-line transitions.',
    tags: ['React', 'Framer Motion', 'GSAP'],
  },
  {
    title: 'Halftone Shader',
    desc: 'Real-time halftone rendering for 3D scenes and images.',
    tags: ['WebGL', 'Three.js', 'Post-Processing'],
  },
  {
    title: 'Speech Bubble UI',
    desc: 'Composable speech bubbles, captions, and SFX utilities.',
    tags: ['Design System', 'Tailwind'],
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Chapters</h2>
          <p className="mt-2 text-zinc-700">Selected projects with an inked, high-contrast aesthetic.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl p-6 panel panel-hover bg-white"
            >
              <div className="h-40 rounded-xl bg-white ink-border" />
              <h3 className="mt-4 text-xl font-extrabold">{p.title}</h3>
              <p className="mt-1 text-sm text-zinc-700">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full border-2 border-black bg-white font-semibold">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
