import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative z-10">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl font-semibold text-white">
                Need pricing or specifications?
              </motion.h3>
              <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-2 text-blue-100/85">
                Tap the button to email us. Include product name, quantity, and destination port.
              </motion.p>
            </div>
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              href="mailto:worlex.in@gmail.com?subject=Worlex%20Pricing%20Request&body=Hello%20Worlex%20Team%2C%0A%0AWe%20would%20like%20pricing%20for%3A%0A-%20Product%3A%20%0A-%20Quantity%3A%20%0A-%20Destination%20Port%3A%20%0A%0ARegards%2C%0A"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-slate-900 shadow transition hover:shadow-md"
            >
              <Mail className="h-5 w-5" /> Email Worlex
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
