import ProductCard from './ProductCard'
import { motion } from 'framer-motion'

const products = [
  {
    title: 'Rice',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSaWNlfGVufDB8MHx8fDE3NjM3OTI5MjF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'Premium grades for export. Basmati, Sona Masoori, and more.'
  },
  {
    title: 'Jaggery',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31b?q=80&w=1600&auto=format&fit=crop',
    description: 'Traditional cane jaggery blocks and powder with consistent quality.'
  },
  {
    title: 'Wood Shavings',
    image: 'https://images.unsplash.com/photo-1470342495351-a5f90c5011cd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXb29kJTIwU2hhdmluZ3N8ZW58MHwwfHx8MTc2Mzc5MjkyMnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'Clean, kiln-dried shavings for animal bedding and packaging.'
  },
  {
    title: 'Coconuts',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1600&auto=format&fit=crop',
    description: 'Fresh and semi-husked coconuts sourced from coastal regions.'
  },
  {
    title: 'Wood Chips',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1600&auto=format&fit=crop',
    description: 'Uniformly sized chips for biomass, horticulture, and industrial use.'
  },
  {
    title: 'Steel Utensils',
    image: 'https://images.unsplash.com/photo-1633536705119-bcc37bf6c84e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdGVlbCUyMFV0ZW5zaWxzfGVufDB8MHx8fDE3NjM3OTI5MjJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'Durable stainless steel cookware and tableware for global markets.'
  }
]

export default function Products() {
  return (
    <section id="products" className="relative z-10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Products
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-2 text-blue-100/80">
              Carefully sourced and quality-checked for international standards.
            </motion.p>
          </div>
          <motion.a href="mailto:worlex.in@gmail.com" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden rounded-xl bg-white/10 px-4 py-2 text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20 md:inline-flex">
            Get Pricing
          </motion.a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
