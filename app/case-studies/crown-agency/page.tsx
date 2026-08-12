'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function CrownAgencyCase() {
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
            <p className="text-cyan font-medium mb-2">TikTok Shop × Fashion</p>
            <h1 className="text-5xl font-bold text-navy mb-6">Crown Agency</h1>
            <p className="text-xl text-gray-600 mb-12">From content bottleneck to viral velocity. 450% ROI in Year 1.</p>

            {/* Hero Image */}
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-12">
              <img src="/ai/images/logos/crown-agency_logo_square_v1.jpg.webp" alt="Crown Agency" className="w-full h-full object-cover" />
            </div>

            {/* Challenge */}
            <div className="mb-16 pb-16 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-navy mb-4">The Challenge</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Crown Agency was scaling fast on TikTok Shop but hitting a production ceiling. They needed 80+ new UGC videos per month but their team could produce 4. Influencer budgets were inefficient, and repeat purchase rates stalled at 15%.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 p-6 bg-gray-100 rounded-lg">
                <div>
                  <div className="text-2xl font-bold text-navy">4</div>
                  <p className="text-sm text-gray-600">videos/month (before)</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-navy">$3k</div>
                  <p className="text-sm text-gray-600">influencer budget wasted</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-navy">15%</div>
                  <p className="text-sm text-gray-600">repeat purchase rate</p>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="mb-16 pb-16 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-navy mb-4">The Solution</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-navy mb-3">1. AI UGC Generation at Scale</h3>
                  <p className="text-gray-600 mb-4">
                    Built a workflow generating authentic Gen-Z UGC using Juggernaut XL. 6 poses × 4 clothing looks = 80+ monthly assets. Consistent person, authentic aesthetic, TikTok-native format.
                  </p>
                  <div className="pl-6 border-l-4 border-cyan">
                    <p className="text-sm font-mono text-gray-600">Prompt: Authentic UGC-style lifestyle photo of Gen-Z model wearing [outfit], natural lighting, TikTok aesthetic, relatable Gen-Z style...</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy mb-3">2. Trend Analysis Automation</h3>
                  <p className="text-gray-600">
                    Daily TikTok trend monitoring via Claude API. Automated trend scoring, competitor analysis, and brief generation. Influencers get context-specific briefs instead of generic requests.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy mb-3">3. Smart Influencer Seeding</h3>
                  <p className="text-gray-600">
                    Micro-influencer targeting with AI-generated pitch content. Higher engagement rates per dollar, authentic creator fit, reduced budget waste.
                  </p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mb-16 pb-16 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-navy mb-4">The Results</h2>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-cyan/10 border border-cyan/20 rounded-lg">
                  <div className="text-3xl font-bold text-navy mb-2">20x</div>
                  <p className="text-gray-600 font-medium">Content velocity increase</p>
                  <p className="text-sm text-gray-500 mt-2">80+ videos/month vs 4</p>
                </div>
                <div className="p-6 bg-cyan/10 border border-cyan/20 rounded-lg">
                  <div className="text-3xl font-bold text-navy mb-2">-60%</div>
                  <p className="text-gray-600 font-medium">Cost per view reduction</p>
                  <p className="text-sm text-gray-500 mt-2">Higher engagement per $ spent</p>
                </div>
                <div className="p-6 bg-cyan/10 border border-cyan/20 rounded-lg">
                  <div className="text-3xl font-bold text-navy mb-2">+28%</div>
                  <p className="text-gray-600 font-medium">Repeat purchase rate</p>
                  <p className="text-sm text-gray-500 mt-2">From 15% to 28%</p>
                </div>
              </div>

              <div className="p-8 bg-soft-white rounded-lg">
                <h4 className="font-bold text-navy mb-3">Revenue Impact:</h4>
                <p className="text-gray-600 mb-4">
                  Month 1-3: $150k additional revenue (from content velocity + repeat purchases)
                </p>
                <p className="text-gray-600 mb-4">
                  Month 4-12: $1.2M additional revenue (compounding effect + platform expansion)
                </p>
                <p className="text-lg font-bold text-navy">
                  Year 1 ROI: 450%
                </p>
              </div>
            </div>

            {/* Implementation */}
            <div className="mb-16 pb-16 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-navy mb-4">Technical Implementation</h2>

              <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto mb-6">
                <pre>{`Architecture:
├── UGC Generation Pipeline
│   ├── Juggernaut XL (image generation)
│   ├── Real-ESRGAN (upscaling)
│   └── ComfyUI (batch processing)
├── Trend Analysis System
│   ├── TikTok API monitoring
│   ├── Claude API (trend scoring)
│   └── n8n (automation workflow)
└── Influencer Briefing
    ├── Automated brief generation
    ├── Distribution via email/Slack
    └── Performance tracking
`}</pre>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-navy mb-2">Models Used:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Juggernaut XL — UGC generation (authentic Gen-Z aesthetic)</li>
                    <li>• Real-ESRGAN 4x — Upscaling to Instagram Reels resolution</li>
                    <li>• Claude 3.5 Sonnet — Trend analysis, brief generation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Lessons */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-4">Lessons Learned</h2>
              <div className="space-y-4">
                <div className="p-4 border-l-4 border-cyan">
                  <h4 className="font-bold text-navy mb-2">1. Consistency beats perfection</h4>
                  <p className="text-gray-600">80 good UGC videos outperform 4 perfect ones. Gen-Z prefers authentic UGC over polished content.</p>
                </div>
                <div className="p-4 border-l-4 border-cyan">
                  <h4 className="font-bold text-navy mb-2">2. Velocity is a feature</h4>
                  <p className="text-gray-600">Rapid content release captures trends in real-time. By the time competitors post, trends have shifted.</p>
                </div>
                <div className="p-4 border-l-4 border-cyan">
                  <h4 className="font-bold text-navy mb-2">3. Influencers still matter</h4>
                  <p className="text-gray-600">AI UGC + smart influencer seeding = best results. Influencers amplify, AI enables scale.</p>
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
