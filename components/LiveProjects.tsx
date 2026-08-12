'use client'

import { ArrowUpRight, Boxes, FileSignature, Mic2, ShieldCheck, ShoppingBag, TrendingUp } from 'lucide-react'

const projects = [
  {
    name: 'ContractFlow',
    summary: 'Visual project planning that turns parties, milestones, compensation, and clauses into a signed-ready contractor agreement.',
    stack: ['Next.js', 'TypeScript', 'React Flow', 'FastAPI', 'PostgreSQL'],
    href: 'https://contractflow-demo.vercel.app/demo',
    action: 'Open interactive demo',
    status: 'Live demo',
    icon: FileSignature,
  },
  {
    name: 'Claimet App',
    summary: 'A production claims operations platform spanning ALE leases, contents reports, photo audits, signatures, pricing, email, SMS, and reporting.',
    stack: ['Django', 'Celery', 'PostgreSQL', 'Claude Vision', 'Encircle'],
    href: 'https://claimetapp.com/',
    action: 'View production platform',
    status: 'Production',
    icon: ShieldCheck,
  },
  {
    name: 'TaskScribe',
    summary: 'An asynchronous AI workflow that turns recorded client notes into structured, delivered checklists with observable job processing.',
    stack: ['Next.js', 'TypeScript', 'FastAPI', 'Redis', 'Whisper'],
    href: 'https://taskscribe-demo.vercel.app/',
    action: 'Open interactive demo',
    status: 'Live demo',
    icon: Mic2,
  },
  {
    name: 'LaNatureal',
    summary: 'A polished storefront concept with product discovery, cart state, animated interactions, and a safe simulated checkout using curated demo products.',
    stack: ['React', 'TypeScript', 'Vite', 'Motion', 'Tailwind'],
    href: 'https://lanatureal-demo.vercel.app/',
    action: 'Open storefront demo',
    status: 'Live demo',
    icon: ShoppingBag,
  },
  {
    name: 'The Trading Camp',
    summary: 'A TypeScript and Solidity trading education platform with tiered learning modules, wallet connectivity, referral economics, token rewards, and NFT subscription access.',
    stack: ['React', 'TypeScript', 'Solidity', 'Viem', 'Hardhat'],
    href: 'https://trading-camp-demo.vercel.app/',
    action: 'Open Web3 demo',
    status: 'Live demo',
    icon: TrendingUp,
  },
]

export default function LiveProjects() {
  return (
    <section id="live-projects" className="bg-white space-top space-bottom">
      <div className="container">
        <div className="mb-12 grid gap-6 md:grid-cols-[1fr_420px] md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent">Live product portfolio</p>
            <h2 className="font-serif text-text">Explore the software, not just screenshots.</h2>
          </div>
          <p className="text-text/60">Each project is presented with its business purpose, architecture, implementation status, and a direct path into the live experience.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon
            const live = project.href.startsWith('http')
            return (
              <article key={project.name} id={project.name.toLowerCase().replaceAll(' ', '-')} className="group flex min-h-[330px] flex-col rounded-2xl border border-black/10 bg-bg p-7 transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl">
                <div className="mb-7 flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-text text-white"><Icon size={22} /></span>
                  <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-text/60">{project.status}</span>
                </div>
                <h3 className="font-serif text-2xl text-text">{project.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-text/60">{project.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => <span key={item} className="rounded-md bg-white px-2.5 py-1 text-[11px] font-medium text-text/60">{item}</span>)}
                </div>
                <a href={project.href} target={live ? '_blank' : undefined} rel={live ? 'noreferrer' : undefined} className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold ${live ? 'text-accent' : 'text-text/40'}`}>
                  {project.action} {live ? <ArrowUpRight size={15} /> : <Boxes size={15} />}
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
