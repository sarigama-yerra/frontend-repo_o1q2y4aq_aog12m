import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Interactive 3D Landing',
    desc: 'A playful hero with WebGL interactions and smooth scroll-driven animations.',
    tags: ['React', 'Spline', 'Framer Motion'],
  },
  {
    title: 'Realtime Dashboard',
    desc: 'Data-rich UI with streaming updates and beautiful micro-interactions.',
    tags: ['React', 'Tailwind', 'WebSockets'],
  },
  {
    title: 'E-commerce Animations',
    desc: 'Delightful cart and checkout transitions with stateful animations.',
    tags: ['React', 'Framer Motion'],
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Selected Work</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">A snapshot of projects that blend performance with playful motion.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/30 bg-white/60 dark:bg-zinc-900/60 backdrop-blur p-6 hover:shadow-xl hover:shadow-black/5 transition"
            >
              <div className="h-40 rounded-xl bg-gradient-to-tr from-indigo-200 via-fuchsia-200 to-cyan-200 dark:from-indigo-900/30 dark:via-fuchsia-900/20 dark:to-cyan-900/20" />
              <h3 className="mt-4 text-xl font-semibold text-zinc-900 dark:text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
