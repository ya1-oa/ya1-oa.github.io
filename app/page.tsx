'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import LiveProjects from '@/components/LiveProjects'
import CaseStudies from '@/components/CaseStudies'
import Capabilities from '@/components/Capabilities'
import ResourcesGallery from '@/components/ResourcesGallery'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="w-full bg-bg">
      <Navigation />
      <Hero />
      <LiveProjects />
      <CaseStudies />
      <Capabilities />
      <ResourcesGallery />
      <Footer />
    </main>
  )
}
