const services = [
  {
    number: '01',
    title: 'Predictive Analytics',
    description:
      'We build models that forecast workforce needs, operational risks, and market trends before they happen.',
  },
  {
    number: '02',
    title: 'AI Strategy & Consulting',
    description:
      'End-to-end AI roadmaps for enterprise organizations — from data readiness to model deployment.',
  },
  {
    number: '03',
    title: 'Labor Analytics',
    description:
      'Deep workforce intelligence: compensation benchmarking, OFCCP compliance, and talent market analysis.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Do</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Enterprise-grade analytics and AI consulting that drives measurable business outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#0A1628]/70 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#C9A84C]/50 transition-all duration-300 group"
            >
              <span className="block text-[#C9A84C] font-mono text-sm font-bold mb-4">
                {service.number}
              </span>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C9A84C] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
