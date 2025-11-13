import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80 dark:from-zinc-950/60 dark:via-zinc-950/10 dark:to-zinc-950/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-24 sm:pt-44">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/40 backdrop-blur px-3 py-1 text-xs text-zinc-700 dark:text-zinc-200">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for freelance work
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-zinc-900 dark:text-white">
            Building modern, animated experiences for the web
          </h1>

          <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300">
            I craft performant interfaces with React, 3D interactions, and delightful micro-animations. Here's a selection of work and experiments.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#work" className="group inline-flex items-center gap-2 rounded-xl bg-zinc-900 text-white px-5 py-3 hover:bg-zinc-800 transition">
              View Projects
              <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white/70 backdrop-blur border border-white/30 px-5 py-3 text-zinc-900 dark:text-white hover:bg-white/90 transition">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
