'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'

export default function Footer() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <footer id="contact" className="bg-light border-t border-text/10">
      <div className="container space-top space-bottom">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="font-serif text-4xl text-text mb-6">
            Start a Conversation
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-text/60 mb-8">
            Ready to explore what's possible? We'd love to discuss your vision and how we can bring it to life.
          </motion.p>
          <motion.a
            variants={itemVariants}
            href="mailto:someuserdotcom@gmail.com"
            className="clickable inline-block px-8 py-3 border border-text text-text hover:bg-text hover:text-light transition-all duration-300"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Links */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-text/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <p className="text-xs tracking-widest uppercase text-accent mb-4">Navigation</p>
            <div className="space-y-2">
              <a href="#work" className="clickable block text-sm text-text/70 hover:text-text">
                Work
              </a>
              <a href="#process" className="clickable block text-sm text-text/70 hover:text-text">
                Process
              </a>
              <a href="#contact" className="clickable block text-sm text-text/70 hover:text-text">
                Contact
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-xs tracking-widest uppercase text-accent mb-4">Connect</p>
            <div className="space-y-3">
              <a
                href="mailto:someuserdotcom@gmail.com"
                className="clickable flex items-center gap-2 text-sm text-text/70 hover:text-text"
              >
                <Mail size={16} />
                Email
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="clickable flex items-center gap-2 text-sm text-text/70 hover:text-text"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="clickable flex items-center gap-2 text-sm text-text/70 hover:text-text"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-xs tracking-widest uppercase text-accent mb-4">About</p>
            <p className="text-sm text-text/70 leading-relaxed">
              Aura Studio is an LA-based creative boutique specializing in production AI systems for ambitious brands.
            </p>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-12 border-t border-text/10 text-center text-xs text-text/50"
        >
          <p>© {new Date().getFullYear()} Aura Studio. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
