'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Resource {
  id: string
  title: string
  category: string
  image: string
  description: string
}

export default function ResourcesGallery() {
  const resources: Resource[] = [
    // Luxe Collective Products
    {
      id: 'luxe-01',
      title: 'Ceramic Planter Photography',
      category: 'Product Photography',
      image: '/ai/images/luxe-collective/product-photography/luxe-collective_product_ceramic-planter_v1.jpg.webp',
      description: 'Hand-thrown ceramic with studio lighting',
    },
    {
      id: 'luxe-02',
      title: 'Linen Pillow Styling',
      category: 'Product Photography',
      image: '/ai/images/logos/luxe-collective_logo_square_v1.jpg.webp',
      description: 'Lifestyle product integration',
    },
    {
      id: 'luxe-03',
      title: 'Brass Mirror Detail',
      category: 'Product Photography',
      image: '/ai/images/logos/luxe-collective_logo_square_v1.jpg.webp',
      description: 'Luxury fixture showcase',
    },
    // Crown Agency UGC
    {
      id: 'crown-01',
      title: 'Streetwear Styling',
      category: 'UGC Content',
      image: '/ai/images/logos/crown-agency_logo_square_v1.jpg.webp',
      description: 'Gen-Z fashion authenticity',
    },
    {
      id: 'crown-02',
      title: 'Soft Glam Look',
      category: 'UGC Content',
      image: '/ai/images/logos/crown-agency_logo_square_v1.jpg.webp',
      description: 'Luxury aesthetic content',
    },
    {
      id: 'crown-03',
      title: 'Y2K Revival',
      category: 'UGC Content',
      image: '/ai/images/logos/crown-agency_logo_square_v1.jpg.webp',
      description: 'Nostalgic trend content',
    },
    {
      id: 'crown-04',
      title: 'Festival Ready',
      category: 'UGC Content',
      image: '/ai/images/logos/crown-agency_logo_square_v1.jpg.webp',
      description: 'High-energy lifestyle',
    },
    // Lumina Estates Staging
    {
      id: 'lumina-01',
      title: 'Modern Living Room',
      category: 'Virtual Staging',
      image: '/ai/images/logos/lumina-estates_logo_square_v1.jpg.webp',
      description: 'Architectural staging for luxury properties',
    },
    {
      id: 'lumina-02',
      title: 'Master Bedroom Luxury',
      category: 'Virtual Staging',
      image: '/ai/images/logos/lumina-estates_logo_square_v1.jpg.webp',
      description: 'High-end residential design',
    },
    // Elevate Coaching
    {
      id: 'elevate-01',
      title: 'Professional Coaching',
      category: 'Brand Photography',
      image: '/ai/images/logos/elevate_logo_square_v1.jpg.webp',
      description: 'Executive presence imagery',
    },
  ]

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = [
    'All',
    'Product Photography',
    'UGC Content',
    'Virtual Staging',
    'Brand Photography',
  ]

  const filteredResources =
    selectedCategory === 'All'
      ? resources
      : resources.filter((r) => r.category === selectedCategory)

  const currentResource = filteredResources[selectedIndex]

  const next = () => {
    setSelectedIndex((prev) => (prev + 1) % filteredResources.length)
  }

  const prev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? filteredResources.length - 1 : prev - 1
    )
  }

  return (
    <section className="bg-bg space-top space-bottom">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-serif text-4xl text-text mb-4">Creative Gallery</h2>
          <p className="text-lg text-text/60">
            Production-quality AI-generated assets across all client work.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex gap-3 mb-12 overflow-x-auto pb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat)
                setSelectedIndex(0)
              }}
              className={`clickable px-6 py-2 rounded text-sm whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-text text-light'
                  : 'border border-text/20 text-text/60 hover:border-text/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Main Gallery Display */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentResource.id}
              className="relative aspect-video bg-light rounded-lg overflow-hidden group"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={currentResource.image}
                alt={currentResource.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Navigation Buttons */}
              <button
                onClick={prev}
                className="clickable absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full backdrop-blur transition-all"
                aria-label="Previous"
              >
                <ChevronLeft size={24} className="text-text" />
              </button>
              <button
                onClick={next}
                className="clickable absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full backdrop-blur transition-all"
                aria-label="Next"
              >
                <ChevronRight size={24} className="text-text" />
              </button>

              {/* Counter */}
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 text-white rounded text-sm backdrop-blur">
                {selectedIndex + 1} / {filteredResources.length}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Image Info */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentResource.id}
              className="mt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-serif text-2xl text-text">
                    {currentResource.title}
                  </h3>
                  <p className="text-sm text-accent tracking-widest uppercase mt-1">
                    {currentResource.category}
                  </p>
                </div>
              </div>
              <p className="text-text/60 leading-relaxed">
                {currentResource.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Thumbnail Grid */}
        <motion.div
          className="grid grid-cols-3 md:grid-cols-6 gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {filteredResources.slice(0, 12).map((resource, idx) => (
            <motion.button
              key={resource.id}
              onClick={() => setSelectedIndex(idx)}
              className={`clickable aspect-square rounded overflow-hidden border-2 transition-all ${
                selectedIndex === idx
                  ? 'border-text scale-105'
                  : 'border-text/10 hover:border-text/30'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={resource.image}
                alt={resource.title}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
