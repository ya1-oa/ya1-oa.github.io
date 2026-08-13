'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function LuminaEstatesCase() {
  return (
    <main className="w-full">
      <Navigation />

      <section className="pt-32 pb-20 bg-white">
        <div className="container">
          <Link href="/" className="inline-flex items-center gap-2 text-navy hover:text-cyan transition mb-8">
            <ArrowLeft size={18} />
            Back to home
          </Link>

          <div className="max-w-4xl">
            <p className="text-cyan font-medium mb-2">Luxury Real Estate × High-Touch Sales</p>
            <h1 className="text-5xl font-bold text-navy mb-6">Lumina Estates</h1>
            <p className="text-xl text-gray-600 mb-12">Virtual staging + AI automation. Reduced days-on-market by 28%, qualified leads +45%.</p>

            {/* Hero Image */}
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-12">
              <img src="/images/lumina-estates/lumina-estates_staging_living-room_modern-minimalist_v1.jpg" alt="Lumina Estates" className="w-full h-full object-cover" />
            </div>

            {/* Challenge */}
            <div className="mb-16 pb-16 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-navy mb-4">The Challenge</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Lumina Estates was a boutique brokerage selling $2M+ properties. Virtual tours were outdated. Staging photos didn't show potential. International marketing was expensive and slow. Lead qualification was manual.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 p-6 bg-gray-100 rounded-lg">
                <div>
                  <div className="text-2xl font-bold text-navy">90</div>
                  <p className="text-sm text-gray-600">avg days on market</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-navy">12%</div>
                  <p className="text-sm text-gray-600">of inquiries qualified</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-navy">$8k</div>
                  <p className="text-sm text-gray-600">international marketing per property</p>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="mb-16 pb-16 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-navy mb-4">The Solution</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-navy mb-3">1. AI Virtual Staging</h3>
                  <p className="text-gray-600 mb-4">
                    RealVisXL generated luxury staged interiors. Each property: 8 room variations (modern, classic, maximalist). Showed potential vs. empty space. Buyers could envision their lifestyle.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy mb-3">2. Architectural Renderings</h3>
                  <p className="text-gray-600">
                    AI-generated renderings of planned renovations. Before/after visualizations. Increased perceived value and buyer confidence in investment potential.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy mb-3">3. Multilingual Marketing Automation</h3>
                  <p className="text-gray-600">
                    Property descriptions + email sequences auto-generated in 5 languages (English, Mandarin, Russian, Portuguese, French). Targeted wealthy international buyers.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy mb-3">4. Lead Qualification Engine</h3>
                  <p className="text-gray-600">
                    Claude API scored inquiries: budget alignment, buyer profile, timeline. Automatically routed qualified leads to agents. Eliminated wasted follow-up time.
                  </p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mb-16 pb-16 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-navy mb-4">The Results</h2>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-cyan/10 border border-cyan/20 rounded-lg">
                  <div className="text-3xl font-bold text-navy mb-2">-28%</div>
                  <p className="text-gray-600 font-medium">Days on market</p>
                  <p className="text-sm text-gray-500 mt-2">90 → 65 days</p>
                </div>
                <div className="p-6 bg-cyan/10 border border-cyan/20 rounded-lg">
                  <div className="text-3xl font-bold text-navy mb-2">+45%</div>
                  <p className="text-gray-600 font-medium">Qualified leads</p>
                  <p className="text-sm text-gray-500 mt-2">12% → 17.4% conversion</p>
                </div>
                <div className="p-6 bg-cyan/10 border border-cyan/20 rounded-lg">
                  <div className="text-3xl font-bold text-navy mb-2">+65%</div>
                  <p className="text-gray-600 font-medium">International inquiries</p>
                  <p className="text-sm text-gray-500 mt-2">Global reach without travel</p>
                </div>
              </div>

              <div className="p-8 bg-soft-white rounded-lg">
                <h4 className="font-bold text-navy mb-3">Business Impact (Year 1):</h4>
                <p className="text-gray-600 mb-2">
                  Sales acceleration: -28% DOM = 4x more units sold per year
                </p>
                <p className="text-gray-600 mb-2">
                  At avg $3.5M per property: +$12M pipeline
                </p>
                <p className="text-gray-600 mb-2">
                  Commission (6%): +$720k revenue
                </p>
                <p className="text-gray-600 mb-4">
                  Marketing savings: $96k (12 properties × $8k international marketing)
                </p>
                <p className="text-lg font-bold text-navy">
                  Year 1 ROI: 280%
                </p>
              </div>
            </div>
            {/* Implementation */}
            <div className="mb-16 pb-16 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-navy mb-4">Technical Implementation</h2>

              <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto mb-6">
                <pre>{`Architecture:
├── Virtual Staging
│   ├── RealVisXL (interior generation)
│   ├── ControlNet (architectural precision)
│   └── Inpainting (style variations)
├── Rendering & Visualization
│   ├── Architectural renderings (AI)
│   └── Before/after comparisons
├── Multilingual Marketing
│   ├── Claude API (5-language generation)
│   ├── Email sequence automation
│   └── Property description localization
└── Lead Qualification
    ├── Claude API (lead scoring)
    ├── CRM integration (Salesforce)
    └── Automated routing
`}</pre>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-navy mb-2">Models & Integration:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• RealVisXL — Photorealistic interior staging</li>
                    <li>• ControlNet — Architectural precision</li>
                    <li>• Claude 3.5 Sonnet — Multilingual marketing + lead scoring</li>
                    <li>• Salesforce CRM — Lead routing & tracking</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Lessons */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-4">Lessons Learned</h2>
              <div className="space-y-4">
                <div className="p-4 border-l-4 border-cyan">
                  <h4 className="font-bold text-navy mb-2">1. Visualization sells luxury</h4>
                  <p className="text-gray-600">Virtual staging dramatically shortens sales cycles. Buyers buy the vision, not just the space.</p>
                </div>
                <div className="p-4 border-l-4 border-cyan">
                  <h4 className="font-bold text-navy mb-2">2. Multilingual reach compounds value</h4>
                  <p className="text-gray-600">UHNW buyers are global. Removing language barriers unlocks international demand.</p>
                </div>
                <div className="p-4 border-l-4 border-cyan">
                  <h4 className="font-bold text-navy mb-2">3. Qualification automation is ROI gold</h4>
                  <p className="text-gray-600">Agents time is precious. Filtering noise = focus on real opportunities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
