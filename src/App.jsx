import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen manga-paper text-zinc-900">
      <Navbar />

      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>

      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="panel rounded-2xl p-6 text-sm flex items-center justify-between panel-hover transition-transform">
            <p>© {new Date().getFullYear()} Your Name — All rights reserved.</p>
            <p className="opacity-80">Thanks for reading! 次回もお楽しみに。</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
