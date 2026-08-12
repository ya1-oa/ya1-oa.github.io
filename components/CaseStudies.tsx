'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'Crown Agency',
      subtitle: 'TikTok Shop — 450% ROI',
      description: 'Content velocity scaled 20x through AI UGC generation and trend automation.',
      image: '/ai/images/logos/crown-agency_logo_square_v1.jpg.webp',
      link: '/case-studies/crown-agency',
      metrics: '20x • -60% • +28%',
    },
    {
      id: 2,
      title: 'Luxe Collective',
      subtitle: 'Amazon Seller — 320% ROI',
      description: 'Product photography automation enabling inventory scalability and conversion lift.',
      image: '/ai/images/luxe-collective/product-photography/luxe-collective_product_ceramic-planter_v1.jpg.webp',
      link: '/case-studies/luxe-collective',
      metrics: '+18% • -12% • +22%',
    },
    {
      id: 3,
      title: 'Lumina Estates',
      subtitle: 'Luxury Real Estate — 280% ROI',
      description: 'Virtual staging and lead qualification automation reducing sales cycles.',
      image: '/ai/images/logos/lumina-estates_logo_square_v1.jpg.webp',
      link: '/case-studies/lumina-estates',
      metrics: '-28% • +45% • +65%',
    },
    {
      id: 4,
      title: 'Elevate',
      subtitle: 'Executive Coaching — 340% ROI',
      description: 'AI-powered assessment and automation enabling coaching at scale.',
      image: '/ai/images/logos/elevate_logo_square_v1.jpg.webp',
      link: '/case-studies/elevate',
      metrics: '+32% • 8x • -12hrs',
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
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
    },
  }

  return (
    <section id="work" className="bg-bg space-top space-bottom">
      <div className="container mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-text mb-4">Selected Work</h2>
          <p className="text-lg text-text/60">
            Real results. Real businesses. Real revenue impact.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div className="overflow-x-auto pb-6">
        <motion.div
          className="flex gap-6 px-6 md:px-12 min-w-min"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              variants={itemVariants}
              className="flex-shrink-0 w-80"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={study.link}
                className="clickable group block h-full"
              >
                {/* Image */}
                <div className="relative w-full aspect-video bg-light rounded-lg overflow-hidden mb-6">
                  <motion.img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  />
                </div>

                {/* Content */}
                <div>
                  <p className="text-xs tracking-widest uppercase text-accent mb-2">
                    {study.subtitle}
                  </p>
                  <h3 className="font-serif text-2xl text-text mb-3 group-hover:opacity-70 transition-opacity">
                    {study.title}
                  </h3>
                  <p className="text-sm text-text/60 mb-4 leading-relaxed">
                    {study.description}
                  </p>
                  <p className="text-xs tracking-wider text-accent font-medium">
                    {study.metrics}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
