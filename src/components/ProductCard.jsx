import { motion } from 'framer-motion'

export default function ProductCard({ title, image, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
    >
      <div className="relative">
        <img src={image} alt={title} className="h-48 w-full rounded-xl object-cover transition duration-500 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/15" />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-blue-100/80">{description}</p>
      </div>
    </motion.div>
  )
}
