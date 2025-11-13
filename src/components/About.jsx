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
            className="aspect-square rounded-3xl bg-white ink-border halftone"
          />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Author's Note</h2>
            <p className="mt-4 text-zinc-800">
              I’m a front‑end developer who loves kinetic layouts and strong black‑and‑white contrasts. My work blends 3D, motion, and comic‑inspired composition to guide the reader’s eye.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <li className="px-4 py-3 bg-white ink-border">React / Next.js</li>
              <li className="px-4 py-3 bg-white ink-border">TypeScript</li>
              <li className="px-4 py-3 bg-white ink-border">Framer Motion</li>
              <li className="px-4 py-3 bg-white ink-border">Spline 3D</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
