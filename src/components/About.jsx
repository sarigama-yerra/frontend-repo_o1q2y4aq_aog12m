import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="aspect-square rounded-3xl bg-gradient-to-tr from-indigo-200 via-fuchsia-200 to-cyan-200 dark:from-indigo-900/30 dark:via-fuchsia-900/20 dark:to-cyan-900/20"
          />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">About</h2>
            <p className="mt-4 text-zinc-700 dark:text-zinc-300">
              I’m a front-end developer focused on crafting expressive user interfaces with React and motion. I believe the best experiences feel alive—subtle depth, tactile feedback, and smooth transitions that guide users.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="rounded-xl bg-white/60 dark:bg-zinc-900/60 border border-white/30 backdrop-blur px-4 py-3">React / Next.js</li>
              <li className="rounded-xl bg-white/60 dark:bg-zinc-900/60 border border-white/30 backdrop-blur px-4 py-3">TypeScript</li>
              <li className="rounded-xl bg-white/60 dark:bg-zinc-900/60 border border-white/30 backdrop-blur px-4 py-3">Framer Motion</li>
              <li className="rounded-xl bg-white/60 dark:bg-zinc-900/60 border border-white/30 backdrop-blur px-4 py-3">Spline 3D</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
