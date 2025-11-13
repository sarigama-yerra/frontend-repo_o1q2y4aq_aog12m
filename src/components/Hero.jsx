import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0 halftone">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-24 sm:pt-44">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
       >
          <div className="inline-flex items-center gap-2 px-4 py-2 speech">
            <span className="h-2 w-2 rounded-full bg-black animate-pulse" />
            Now serializing weekly!
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight title-outline">
            Crafting Interfaces with Manga Energy
          </h1>

          <p className="mt-4 text-lg text-zinc-800">
            Bold panels, halftone textures, and kinetic motion. I design and build expressive web experiences with React, 3D, and animation.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#work" className="group inline-flex items-center gap-2 px-6 py-3 bg-black text-white ink-border transition-transform hover:-translate-y-0.5">
              View Chapters
              <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white ink-border transition-transform hover:-translate-y-0.5">
              Send a Raven
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
