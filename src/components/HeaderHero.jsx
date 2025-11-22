import { motion } from 'framer-motion'
import { Menu, Mail, Leaf, Boxes } from 'lucide-react'
import { useState } from 'react'

export default function HeaderHero() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative overflow-hidden">
      {/* Gradient background with abstract orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-emerald-400/20 to-blue-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.12),transparent_30%)]" />
      </div>

      <header className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15 backdrop-blur">
                <Boxes className="h-6 w-6 text-white" />
              </motion.div>
              <motion.span initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-xl font-semibold tracking-tight text-white">
                Worlex
              </motion.span>
            </div>

            <nav className="hidden items-center gap-8 text-sm text-blue-100/90 md:flex">
              <a href="#products" className="transition hover:text-white/90">Products</a>
              <a href="#about" className="transition hover:text-white/90">About</a>
              <a href="#contact" className="transition hover:text-white/90">Contact</a>
              <a href="mailto:worlex.in@gmail.com" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-white/20">
                <Mail className="h-4 w-4" /> Get Pricing
              </a>
            </nav>

            <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center rounded-lg bg-white/10 p-2 text-white ring-1 ring-white/15 backdrop-blur">
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {open && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 flex flex-col gap-3 text-blue-100/90 md:hidden">
              <a href="#products" className="rounded-lg bg-white/5 px-4 py-2 ring-1 ring-white/10">Products</a>
              <a href="#about" className="rounded-lg bg-white/5 px-4 py-2 ring-1 ring-white/10">About</a>
              <a href="#contact" className="rounded-lg bg-white/5 px-4 py-2 ring-1 ring-white/10">Contact</a>
              <a href="mailto:worlex.in@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-white ring-1 ring-white/15">
                <Mail className="h-4 w-4" /> Get Pricing
              </a>
            </motion.div>
          )}
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                Global Import & Export Solutions
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-4 text-lg text-blue-100/80">
                Worlex connects quality products with markets worldwide — reliably, transparently, and at scale.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#products" className="rounded-xl bg-white px-5 py-3 text-slate-900 shadow/50 shadow-white/10 transition hover:shadow-md hover:shadow-blue-500/20">Explore Products</a>
                <a href="#contact" className="rounded-xl bg-white/10 px-5 py-3 text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20">Contact Us</a>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-8 flex items-center gap-4 text-blue-100/80">
                <Leaf className="h-5 w-5" />
                Sustainable sourcing across our product lines
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
              <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent p-[1px]">
                <div className="h-full w-full rounded-[2rem] bg-gradient-to-br from-white/5 to-white/0" />
              </div>
              <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=800&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1586201375761-83865001e31b?q=80&w=800&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1526404229305-5b7abf4b69d3?q=80&w=800&auto=format&fit=crop'
                  ].map((src, i) => (
                    <motion.img
                      key={i}
                      src={src}
                      alt="Worlex"
                      className="h-32 w-full rounded-xl object-cover"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
