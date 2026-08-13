'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
    },
  }

  return (
    <section className="min-h-screen bg-bg flex items-center justify-center px-6 md:px-12 pt-24">
      <motion.div
        className="max-w-4xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow Text */}
        <motion.p
          variants={itemVariants}
          className="text-sm tracking-widest uppercase text-accent mb-8"
        >
          Yakir Oren · Full-Stack Product Engineer
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-text mb-8 leading-tight"
        >
          Software that<br />moves work<br />forward
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-text/70 leading-relaxed mb-12 font-light"
        >
          I build production workflow platforms, AI-assisted operations, and TypeScript products.
          <br />
          From complex backends to polished demos, every project is designed to solve a real problem.
        </motion.p>

        {/* Featured Image Placeholder */}
        <motion.div
          variants={itemVariants}
          className="w-full aspect-video bg-light rounded-lg mb-16 overflow-hidden"
        >
          <img
            src="/images/hero-placeholder.jpg"
            alt="Yakir Oren software portfolio"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a
            href="#live-projects"
            className="clickable px-8 py-3 border border-text text-text hover:bg-text hover:text-bg transition-all duration-300"
          >
            Explore Live Projects
          </a>
          <a href="#contact" className="clickable text-text/70 hover:text-text">
            Start a Conversation
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
