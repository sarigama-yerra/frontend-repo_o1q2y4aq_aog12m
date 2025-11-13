import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    await new Promise((r) => setTimeout(r, 800))
    setStatus('Delivered! See you next page.')
  }

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Fan Mail</h2>
          <p className="mt-2 text-zinc-700">Send a message — cliffhangers welcome.</p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-8 grid gap-4 max-w-xl"
        >
          <input required placeholder="Your name" className="w-full rounded-none border-2 border-black bg-white px-4 py-3 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-black" />
          <input required type="email" placeholder="Your email" className="w-full rounded-none border-2 border-black bg-white px-4 py-3 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-black" />
          <textarea required placeholder="Your message" rows={5} className="w-full rounded-none border-2 border-black bg-white px-4 py-3 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-black" />
          <div className="flex items-center gap-3">
            <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white ink-border transition-transform hover:-translate-y-0.5">Send</button>
            <span className="text-sm text-zinc-700">{status}</span>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
