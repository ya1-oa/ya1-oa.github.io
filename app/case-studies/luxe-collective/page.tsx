'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function LuxeCollectiveCase() {
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
            <p className="text-cyan font-medium mb-2">Amazon FBA × Home Décor</p>
            <h1 className="text-5xl font-bold text-navy mb-6">Luxe Collective</h1>
            <p className="text-xl text-gray-600 mb-12">Product photography on demand. 320% ROI through automation and conversion lift.</p>

            {/* Hero Image */}
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-12">
              <img src="/ai/images/luxe-collective/product-photography/luxe-collective_product_ceramic-planter_v1.jpg.webp" alt="Luxe Collective" className="w-full h-full object-cover" />
            </div>

            {/* Challenge */}
            <div className="mb-16 pb-16 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-navy mb-4">The Challenge</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Luxe Collective was a $850k–$2.2M Amazon FBA seller hitting growth limits. Product photography was inconsistent and expensive (outsourced at $200/product). Listings underperformed competitors. Inventory forecasting was manual and error-prone.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 p-6 bg-gray-100 rounded-lg">
                <div>
                  <div className="text-2xl font-bold text-navy">$200</div>
                  <p className="text-sm text-gray-600">per product photo</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-navy">2–3%</div>
                  <p className="text-sm text-gray-600">conversion rate</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-navy">Manual</div>
                  <p className="text-sm text-gray-600">inventory planning</p>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="mb-16 pb-16 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-navy mb-4">The Solution</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-navy mb-3">1. AI Product Photography Pipeline</h3>
                  <p className="text-gray-600 mb-4">
                    Built Juggernaut XL workflow generating 4 product variants per SKU: straight-on, 45°, lifestyle, detail shot. Upscaled via Real-ESRGAN. Cost: $0.02/image vs. $200 outsourced.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy mb-3">2. Listing Optimization Engine</h3>
                  <p className="text-gray-600">
                    AI-generated product descriptions optimized for Amazon A9 algorithm. Tested against competitor listings. Increased keyword relevance and conversion signals.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy mb-3">3. Demand Forecasting Automation</h3>
                  <p className="text-gray-600">
                    Historical sales data + seasonal trends analyzed by Claude API. Inventory forecasting reduced manual work from 8 hours/week to automated daily updates.
                  </p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mb-16 pb-16 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-navy mb-4">The Results</h2>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-cyan/10 border border-cyan/20 rounded-lg">
                  <div className="text-3xl font-bold text-navy mb-2">+18%</div>
                  <p className="text-gray-600 font-medium">Conversion rate increase</p>
                  <p className="text-sm text-gray-500 mt-2">3% to 3.54%</p>
                </div>
                <div className="p-6 bg-cyan/10 border border-cyan/20 rounded-lg">
                  <div className="text-3xl font-bold text-navy mb-2">-12%</div>
                  <p className="text-gray-600 font-medium">ACOS reduction</p>
                  <p className="text-sm text-gray-500 mt-2">Lower advertising spend needed</p>
                </div>
                <div className="p-6 bg-cyan/10 border border-cyan/20 rounded-lg">
                  <div className="text-3xl font-bold text-navy mb-2">+22%</div>
                  <p className="text-gray-600 font-medium">Inventory turnover</p>
                  <p className="text-sm text-gray-500 mt-2">Faster cash flow</p>
                </div>
              </div>

              <div className="p-8 bg-soft-white rounded-lg">
                <h4 className="font-bold text-navy mb-3">Financial Impact (Year 1):</h4>
                <p className="text-gray-600 mb-2">
                  Photography cost savings: $50k/year (250 products × $200 → $0.02 per image)
                </p>
                <p className="text-gray-600 mb-2">
                  Conversion lift: +$280k revenue (18% improvement on $1.5M average)
                </p>
                <p className="text-gray-600 mb-4">
                  Inventory optimization: +$65k (faster turnover, reduced holding costs)
                </p>
                <p className="text-lg font-bold text-navy">
                  Year 1 ROI: 320%
                </p>
              </div>
            </div>

            {/* Implementation */}
            <div className="mb-16 pb-16 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-navy mb-4">Technical Implementation</h2>

              <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto mb-6">
                <pre>{`Architecture:
├── Product Photography
│   ├── Juggernaut XL (generation)
│   ├── Real-ESRGAN 4x (upscaling)
│   └── ComfyUI (batch processing)
├── Listing Optimization
│   ├── Claude API (copy generation)
│   ├── Keyword research (automated)
│   └── A/B testing workflow
└── Demand Forecasting
    ├── Amazon Selling Partner API (sales data)
    ├── Claude analysis (trend detection)
    └── Automated inventory alerts
`}</pre>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-navy mb-2">Models & Tools:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Juggernaut XL — Luxury product photography</li>
                    <li>• Claude 3.5 Sonnet — Copy generation & analysis</li>
                    <li>• Real-ESRGAN — Upscaling to 4K</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Lessons */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-4">Lessons Learned</h2>
              <div className="space-y-4">
                <div className="p-4 border-l-4 border-cyan">
                  <h4 className="font-bold text-navy mb-2">1. Photography is underrated</h4>
                  <p className="text-gray-600">Better images drive disproportionate conversion lift. Worth automating first.</p>
                </div>
                <div className="p-4 border-l-4 border-cyan">
                  <h4 className="font-bold text-navy mb-2">2. Consistency scales profitability</h4>
                  <p className="text-gray-600">Automated processes enable growth without proportional cost increases.</p>
                </div>
                <div className="p-4 border-l-4 border-cyan">
                  <h4 className="font-bold text-navy mb-2">3. Time is capital</h4>
                  <p className="text-gray-600">Freeing up 8 hours/week on inventory planning allowed founder to focus on strategy.</p>
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
