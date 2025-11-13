import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Demo only
    await new Promise((r) => setTimeout(r, 800))
    setStatus('Message sent! I will get back to you soon.')
  }

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Let’s collaborate</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">Tell me about your project or just say hello.</p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-8 grid gap-4 max-w-xl"
        >
          <input required placeholder="Your name" className="w-full rounded-xl border border-white/30 bg-white/60 dark:bg-zinc-900/60 backdrop-blur px-4 py-3 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <input required type="email" placeholder="Your email" className="w-full rounded-xl border border-white/30 bg-white/60 dark:bg-zinc-900/60 backdrop-blur px-4 py-3 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <textarea required placeholder="Your message" rows={5} className="w-full rounded-xl border border-white/30 bg-white/60 dark:bg-zinc-900/60 backdrop-blur px-4 py-3 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <div className="flex items-center gap-3">
            <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 text-white px-5 py-3 hover:bg-zinc-800 transition">Send message</button>
            <span className="text-sm text-zinc-600 dark:text-zinc-400">{status}</span>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
