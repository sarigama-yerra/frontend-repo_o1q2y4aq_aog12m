import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 bg-white rounded-2xl panel">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="group inline-flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-black to-zinc-700" />
              <span className="font-extrabold tracking-tight text-zinc-900 uppercase">Manga.dev</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="font-semibold hover:underline underline-offset-4">
                  {l.label}
                </a>
              ))}
              <div className="h-5 w-px bg-zinc-300" />
              <div className="flex items-center gap-3">
                <a href="mailto:you@example.com" className="p-2 rounded-lg hover:bg-zinc-100 transition" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-zinc-100 transition" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-zinc-100 transition" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-zinc-100 transition" aria-label="Menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="px-4 pb-4 md:hidden">
              <div className="flex flex-col gap-2">
                {navLinks.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-zinc-100">
                    {l.label}
                  </a>
                ))}
                <div className="flex items-center gap-3 pt-2">
                  <a href="mailto:you@example.com" className="p-2 rounded-lg hover:bg-zinc-100 transition" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-zinc-100 transition" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-zinc-100 transition" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
