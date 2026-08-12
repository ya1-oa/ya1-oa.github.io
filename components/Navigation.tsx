'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50">
      <motion.div
        className="glass border-b border-text/10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="clickable text-lg font-serif font-bold text-text">
            AURA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="clickable text-sm text-text/70 hover:text-text transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="clickable px-5 py-2 border border-text/30 text-text hover:border-text transition-all duration-300"
            >
              Inquire
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="md:hidden glass border-b border-text/10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="clickable text-sm text-text/70 hover:text-text"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="clickable px-5 py-2 border border-text/30 text-text text-center"
            >
              Inquire
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
