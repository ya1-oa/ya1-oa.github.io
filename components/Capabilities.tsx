'use client'

import { motion } from 'framer-motion'

export default function Capabilities() {
  const capabilities = [
    {
      title: 'Creative Production',
      description: 'AI-generated photography, video, and commercial assets tailored to your brand voice.',
      items: ['Product Photography', 'UGC Content', 'Commercials', 'Brand Imagery'],
    },
    {
      title: 'Revenue Automation',
      description: 'Lead qualification, customer segmentation, and lifecycle automation systems.',
      items: ['Lead Scoring', 'Email Workflows', 'Customer Segmentation', 'CRM Integration'],
    },
    {
      title: 'Strategic Systems',
      description: 'End-to-end AI infrastructure designed for production scale and reliability.',
      items: ['Architecture Design', 'API Integration', 'Quality Control', 'Monitoring'],
    },
    {
      title: 'Brand Integration',
      description: 'AI baked into your digital presence, websites, and customer experiences.',
      items: ['Custom Workflows', 'Platform Integration', 'Analytics Dashboards', 'Voice Integration'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
    },
  }

  return (
    <section id="process" className="bg-bg space-top space-bottom">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-text mb-4">What We Do</h2>
          <p className="text-lg text-text/60">
            Production-ready AI systems for every stage of your journey.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.title}
              variants={itemVariants}
              className="group"
            >
              <h3 className="font-serif text-2xl text-text mb-4 group-hover:opacity-70 transition-opacity">
                {cap.title}
              </h3>
              <p className="text-text/60 mb-6 leading-relaxed">
                {cap.description}
              </p>
              <div className="space-y-2">
                {cap.items.map((item) => (
                  <p key={item} className="text-sm text-text/50">
                    • {item}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
