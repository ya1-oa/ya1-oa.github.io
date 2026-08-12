'use client'

export default function Resources() {
  const resources = [
    {
      title: 'FLUX Dev Prompt Engineering',
      description: 'Best practices for generating production-quality images. Includes negative prompts, model selection, and quality control.',
      type: 'Guide',
      tags: ['Image Generation', 'FLUX', 'Prompting'],
    },
    {
      title: 'AI Workflow Architecture',
      description: 'Complete n8n workflows for content generation, lead qualification, and customer automation.',
      type: 'Workflow',
      tags: ['Automation', 'n8n', 'Integration'],
    },
    {
      title: 'Product Photography Workflow',
      description: 'Step-by-step guide for automated product image generation, upscaling, and quality control.',
      type: 'Tutorial',
      tags: ['Photography', 'Juggernaut XL', 'ComfyUI'],
    },
    {
      title: 'Email Funnel Templates',
      description: 'AI-generated email sequences for lead nurturing, upsells, and customer retention.',
      type: 'Template',
      tags: ['Copywriting', 'Email', 'Automation'],
    },
    {
      title: 'Virtual Staging Prompts',
      description: 'Detailed prompts and workflows for real estate virtual staging and architectural rendering.',
      type: 'Reference',
      tags: ['Real Estate', 'RealVisXL', 'Staging'],
    },
    {
      title: 'RAG + Claude Integration',
      description: 'Build custom AI systems that understand your brand, products, and customers.',
      type: 'Technical',
      tags: ['Claude API', 'RAG', 'Backend'],
    },
  ]

  return (
    <section id="resources" className="py-20 bg-soft-white">
      <div className="container">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Resources</h2>
          <p className="text-lg text-gray-600">Prompts, workflows, and templates you can implement today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, idx) => (
            <div key={resource.title} className="p-6 bg-white border border-gray-200 rounded-lg hover:border-navy transition animate-slideUp" style={{ animationDelay: `${idx * 100}ms` }}>
              <p className="text-xs font-medium text-cyan uppercase tracking-wider mb-2">{resource.type}</p>
              <h3 className="text-lg font-bold text-navy mb-3">{resource.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{resource.description}</p>

              <div className="flex gap-2 flex-wrap">
                {resource.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 text-xs text-charcoal rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
