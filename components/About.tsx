export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="order-2 md:order-1">
            <div className="relative w-full h-96 md:h-[480px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/michel2.jpg"
                alt="Michel Plante — Senior Analytics Leader"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/20 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Senior Analytics Leadership for the Enterprise
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Collier Analytics brings decades of senior analytics leadership to Fortune 500 clients across
              healthcare, education, and business services. We specialize in applying AI and machine learning
              to real business challenges — not theoretical frameworks.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our work spans predictive workforce modeling, enterprise data strategy, and AI system design.
              We partner closely with leadership teams to translate complex data into decisions that move the
              business forward.
            </p>
            <div className="border-l-4 border-[#C9A84C] pl-5 py-1">
              <p className="text-[#C9A84C] font-medium italic">
                &ldquo;Trusted by Fortune 500 enterprises across healthcare, education, and business services.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
