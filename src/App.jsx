import HeaderHero from './components/HeaderHero'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <HeaderHero />
      <Products />
      <About />
      <Contact />
      <footer className="border-t border-white/10 py-10 text-center text-blue-200/70">
        © {new Date().getFullYear()} Worlex • Global Import & Export
      </footer>
    </div>
  )
}

export default App
