'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ElevateCase() {
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
            <p className="text-cyan font-medium mb-2">Executive Coaching × Service Scaling</p>
            <h1 className="text-5xl font-bold text-navy mb-6">Elevate</h1>
            <p className="text-xl text-gray-600 mb-12">AI-assisted coaching at scale. 8x content production. 340% ROI through automation and leverage.</p>

            {/* Hero Image */}
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-12">
              <img src="/images/elevate/elevate_coaching_professional-portrait_v1.jpg" alt="Elevate" className="w-full h-full object-cover" />
            </div>

            {/* Challenge */}
            <div className="mb-16 pb-16 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-navy mb-4">The Challenge</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Elevate was a boutique executive coaching firm hitting a time ceiling. High-touch coaching commands premium fees but doesn't scale. Founder was limited to ~40 client-hours/week. Lead-to-client conversion was manual. Content production couldn't keep up with demand.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 p-6 bg-gray-100 rounded-lg">
                <div>
                  <div className="text-2xl font-bold text-navy">40</div>
                  <p className="text-sm text-gray-600">billable hours/week max</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-navy">22%</div>
                  <p className="text-sm text-gray-600">lead-to-client conversion</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-navy">8hrs</div>
                  <p className="text-sm text-gray-600">admin work per week</p>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="mb-16 pb-16 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-navy mb-4">The Solution</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-navy mb-3">1. Automated Client Assessment</h3>
                  <p className="text-gray-600 mb-4">
                    AI-powered pre-coaching questionnaire analyzing leadership blind spots. Claude API generated personalized assessment reports. Eliminated 4 hours of manual intake per client.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy mb-3">2. Personalized Email Campaigns</h3>
                  <p className="text-gray-600">
                    AI-generated email sequences for lead nurturing. Personalization based on prospect profile. 32% higher open rates than generic sequences.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy mb-3">3. Automated Follow-Up Worksheets</h3>
                  <p className="text-gray-600">
                    Post-session worksheets auto-generated based on session notes. Reinforced coaching insights. Reduced admin time by 3 hours/week.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy mb-3">4. Thought Leadership Content at Scale</h3>
                  <p className="text-gray-600">
                    8x monthly content production via AI assistance. LinkedIn posts, articles, email tips auto-drafted. Founder edits/approves only. Maintained personal voice while scaling reach.
                  </p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mb-16 pb-16 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-navy mb-4">The Results</h2>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-cyan/10 border border-cyan/20 rounded-lg">
                  <div className="text-3xl font-bold text-navy mb-2">+32%</div>
                  <p className="text-gray-600 font-medium">Lead-to-client conversion</p>
                  <p className="text-sm text-gray-500 mt-2">22% → 29%</p>
                </div>
                <div className="p-6 bg-cyan/10 border border-cyan/20 rounded-lg">
                  <div className="text-3xl font-bold text-navy mb-2">8x</div>
                  <p className="text-gray-600 font-medium">Content production</p>
                  <p className="text-sm text-gray-500 mt-2">4 posts → 32 per month</p>
                </div>
                <div className="p-6 bg-cyan/10 border border-cyan/20 rounded-lg">
                  <div className="text-3xl font-bold text-navy mb-2">-12hrs</div>
                  <p className="text-gray-600 font-medium">Admin time per week</p>
                  <p className="text-sm text-gray-500 mt-2">Freed for strategy</p>
                </div>
              </div>

              <div className="p-8 bg-soft-white rounded-lg">
                <h4 className="font-bold text-navy mb-3">Financial Impact (Year 1):</h4>
                <p className="text-gray-600 mb-2">
                  Lead conversion improvement: +$84k (7 additional clients × $12k/client)
                </p>
                <p className="text-gray-600 mb-2">
                  Time savings (12 hrs/week): Can serve 2 additional group workshops = $45k
                </p>
                <p className="text-gray-600 mb-2">
                  Thought leadership compound: +$120k (higher brand value, easier sales)
                </p>
                <p className="text-gray-600 mb-4">
                  Operational cost reduction: Reduced admin contractor need = $18k saved
                </p>
                <p className="text-lg font-bold text-navy">
                  Year 1 ROI: 340%
                </p>
              </div>
            </div>

            {/* Implementation */}
            <div className="mb-16 pb-16 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-navy mb-4">Technical Implementation</h2>

              <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto mb-6">
                <pre>{`Architecture:
├── Client Assessment
│   ├── Intake form (Google Forms)
│   ├── Claude API analysis
│   └── Report generation (PDF export)
├── Email Automation
│   ├── Segment identification
│   ├── Claude-generated sequences
│   └── Mailchimp integration
├── Worksheet Generation
│   ├── Session note processing
│   ├── AI insight extraction
│   └── Personalized worksheet output
└── Content Production
    ├── Topic scheduling (Google Calendar)
    ├── Claude drafting
    ├── LinkedIn integration
    └── Editorial approval workflow
`}</pre>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-navy mb-2">Stack Used:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Claude 3.5 Sonnet — All AI generation + analysis</li>
                    <li>• Google Forms — Client intake</li>
                    <li>• Mailchimp — Email campaigns</li>
                    <li>• Make/n8n — Workflow automation</li>
                    <li>• Google Sheets — CRM tracking</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Lessons */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-4">Lessons Learned</h2>
              <div className="space-y-4">
                <div className="p-4 border-l-4 border-cyan">
                  <h4 className="font-bold text-navy mb-2">1. AI augments, doesn't replace</h4>
                  <p className="text-gray-600">AI handled tedious admin. Human expertise still owns client outcomes. Best of both worlds.</p>
                </div>
                <div className="p-4 border-l-4 border-cyan">
                  <h4 className="font-bold text-navy mb-2">2. Leverage is underrated in service businesses</h4>
                  <p className="text-gray-600">High-touch work scales via thoughtful automation, not by hiring more people.</p>
                </div>
                <div className="p-4 border-l-4 border-cyan">
                  <h4 className="font-bold text-navy mb-2">3. Founder time is most valuable resource</h4>
                  <p className="text-gray-600">Saving 12 hours/week freed founder for strategy, not just delivery.</p>
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
