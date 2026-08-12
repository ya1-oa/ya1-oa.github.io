'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function AboutPage() {
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
    <main className="bg-bg">
      <div className="container space-top space-bottom">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link href="/" className="clickable inline-flex items-center gap-2 text-text/60 hover:text-text">
            <ArrowLeft size={18} />
            Back
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="max-w-3xl mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="font-serif text-5xl text-text mb-6">
            About Yakir Oren
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-text/60 leading-relaxed">
            I build production software, AI-assisted operations, and polished TypeScript products around real business workflows.
          </motion.p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="w-full aspect-video bg-light rounded-lg overflow-hidden mb-16"
        >
          <img
            src="/ai/images/luxe-collective/product-photography/luxe-collective_product_ceramic-planter_v1.jpg.webp"
            alt="Selected product work"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Mission */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="font-serif text-3xl text-text mb-4">Our Mission</h2>
            <p className="text-text/60 leading-relaxed">
              We believe the future of creative work isn't about replacing human creativity with AI. It's about amplifying human vision with intelligent systems.
            </p>
            <p className="text-text/60 leading-relaxed mt-4">
              We build production-ready AI systems that transform ambitious visions into scalable reality. No experiments. No hype. Just results.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="font-serif text-3xl text-text mb-4">Our Approach</h2>
            <p className="text-text/60 leading-relaxed">
              We start by understanding your business deeply. What are your constraints? What's your vision? Then we engineer AI systems that fit seamlessly into your workflow.
            </p>
            <p className="text-text/60 leading-relaxed mt-4">
              Strategy first. Technology second. Results always.
            </p>
          </motion.div>
        </motion.div>

        {/* Values */}
        <motion.div
          className="mb-16 pb-16 border-b border-text/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="font-serif text-3xl text-text mb-8">
            What We Value
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'Authenticity',
                description: 'We build real systems for real businesses. No vanity metrics.',
              },
              {
                title: 'Craftsmanship',
                description: 'Every implementation is thoughtfully designed and rigorously tested.',
              },
              {
                title: 'Transparency',
                description: 'You understand what we built, why we built it, and how to scale it.',
              },
            ].map((value) => (
              <motion.div key={value.title} variants={itemVariants}>
                <h3 className="font-serif text-xl text-text mb-2">{value.title}</h3>
                <p className="text-sm text-text/60">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="font-serif text-3xl text-text mb-8">
            Our Creative Output
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              '/ai/images/logos/crown-agency_logo_square_v1.jpg.webp',
              '/ai/images/logos/elevate_logo_square_v1.jpg.webp',
              '/ai/images/logos/lumina-estates_logo_square_v1.jpg.webp',
              '/ai/images/logos/luxe-collective_logo_square_v1.jpg.webp',
            ].map((image, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="aspect-square bg-light rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="bg-light rounded-lg p-12 text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl text-text mb-4">Ready to Create Together?</h2>
          <p className="text-text/60 mb-8 max-w-2xl mx-auto">
            We'd love to discuss your vision and explore what's possible.
          </p>
          <a
            href="/#contact"
            className="clickable inline-block px-8 py-3 border border-text text-text hover:bg-text hover:text-light transition-all duration-300"
          >
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </main>
  )
}
