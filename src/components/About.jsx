import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative z-10">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl font-semibold text-white">
            About Worlex
          </motion.h3>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-3 text-blue-100/85">
            We are an import-export partner focused on reliability and transparency. From farm produce to industrial materials, our network ensures consistent quality and on-time delivery worldwide.
          </motion.p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {["Quality Assurance","Global Logistics","Sustainable Sourcing"].map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 + i*0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-blue-100/85">
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
