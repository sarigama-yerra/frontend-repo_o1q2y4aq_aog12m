import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-white">
      <Navbar />

      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>

      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-white/30 bg-white/60 dark:bg-zinc-900/60 backdrop-blur p-6 text-sm text-zinc-600 dark:text-zinc-400 flex items-center justify-between">
            <p>© {new Date().getFullYear()} Your Name — All rights reserved.</p>
            <p className="opacity-80">Built with love, React, and a touch of 3D.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
