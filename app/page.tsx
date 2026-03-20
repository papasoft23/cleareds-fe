import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Header */}
      <header className="w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <Image src="/download.svg" alt="Cleareds Logo" width={36} height={36} />
              </div>
              <span className="text-xl ml-[-10px] font-bold text-green-700">leareds</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
              <a href="#what-we-build" className="hover:text-gray-900 transition-colors">Services</a>
              <a href="#how-we-work" className="hover:text-gray-900 transition-colors">Process</a>
              <a href="#offers" className="hover:text-gray-900 transition-colors">Offers</a>
              <a href="#why-cleareds" className="hover:text-gray-900 transition-colors">Why us</a>
            </nav>
            <a
              href="#contact"
              className="bg-green-700 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors"
            >
              Start a project
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* ========== 1. HERO SECTION ========== */}
        <section className="relative py-24 lg:py-36 bg-gradient-to-br from-green-50 via-white to-emerald-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-medium text-green-700 tracking-wide uppercase mb-4">
              AI-native product studio
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Modern digital products for vegan and sustainable brands
              <span className="text-green-700"> — in days, not months</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Cleareds helps purpose-driven brands launch landing pages, MVPs, and web experiences fast — using AI-powered delivery, modern infrastructure, and continuous iteration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-green-700 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-green-800 transition-colors"
              >
                Discuss your project
              </a>
              <a
                href="#how-we-work"
                className="inline-flex items-center justify-center bg-white text-gray-700 px-8 py-4 rounded-lg text-base font-semibold border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
              >
                See how it works
              </a>
            </div>
          </div>
        </section>

        {/* ========== 2. WHO IT'S FOR ========== */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Built for brands that care
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We work best with mission-driven teams who need a fast, reliable technical partner — not a bloated agency.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">A good fit</h3>
                <ul className="space-y-3">
                  {[
                    'Vegan and plant-based brands',
                    'Sustainable product businesses',
                    'Purpose-driven startups and founders',
                    'Eco-conscious ecommerce brands',
                    'Community and membership projects',
                    'Small-to-mid European brands going digital',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700">
                      <span className="text-green-600 mt-0.5 flex-shrink-0">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Not the right fit</h3>
                <ul className="space-y-3">
                  {[
                    'Large enterprise transformation programs',
                    'Undefined scope with no prioritization',
                    'Clients looking for the cheapest option',
                    'Projects that need 20-person agency teams',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-500">
                      <span className="mt-0.5 flex-shrink-0">&#10007;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========== 3. WHAT WE BUILD ========== */}
        <section id="what-we-build" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What we build
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Practical, elegant digital products — scoped for impact, not complexity.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Conversion-focused landing pages',
                  desc: 'High-performance pages designed to turn visitors into customers, built for speed and clarity.',
                },
                {
                  title: 'Fast MVPs for startup ideas',
                  desc: 'Validate your concept with a working product in days — not a slide deck in months.',
                },
                {
                  title: 'Sustainable brand websites',
                  desc: 'Modern, clean websites that reflect your mission and build trust with conscious consumers.',
                },
                {
                  title: 'Content-led web platforms',
                  desc: 'Blog, editorial, or resource hubs with great SEO and a smooth editorial workflow.',
                },
                {
                  title: 'Lightweight commerce experiences',
                  desc: 'Focused ecommerce setups for product-led brands — no bloated platforms, no overkill.',
                },
                {
                  title: 'Membership and community products',
                  desc: 'Spaces for your audience to connect, subscribe, or access gated content.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:border-green-200 transition-colors"
                >
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== 4. HOW WE WORK ========== */}
        <section id="how-we-work" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How we work
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A clear, focused process — from first conversation to live product. No endless discovery phases.
              </p>
            </div>
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Understand the goal',
                  desc: 'A short conversation to clarify what you need, who it serves, and what success looks like.',
                },
                {
                  step: '02',
                  title: 'Define the smallest valuable version',
                  desc: 'We scope the first version tightly — enough to launch, learn, and iterate. No feature bloat.',
                },
                {
                  step: '03',
                  title: 'Build fast with AI-native workflow',
                  desc: 'Using modern AI tooling and proven infrastructure, we move from plan to working product in days.',
                },
                {
                  step: '04',
                  title: 'Launch on modern infrastructure',
                  desc: 'Your product goes live on fast, scalable, production-grade infrastructure — ready for real users.',
                },
                {
                  step: '05',
                  title: 'Improve continuously',
                  desc: 'After launch, we iterate based on real feedback. New features, fixes, and optimizations — ongoing.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="text-2xl font-bold text-green-700 w-10 flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== 5/6. WHY CLEAREDS ========== */}
        <section id="why-cleareds" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Cleareds
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Not a generic agency. Not a cheap freelancer. A focused technical partner for brands with purpose.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'AI-native, not AI-hype',
                  desc: 'AI is integrated into how we actually build — code, deployment, iteration. It makes us faster and more precise, not just trendy.',
                },
                {
                  title: 'Founder-led, not delegated',
                  desc: 'A senior engineer and product thinker does the work. No junior handoffs. No account managers relaying messages.',
                },
                {
                  title: 'Speed without shortcuts',
                  desc: 'We ship in days because of better tooling and tighter scope — not because we skip testing or cut corners.',
                },
                {
                  title: 'Infrastructure included',
                  desc: 'Hosting, deployment, monitoring, CI/CD — all set up and managed. You get a production-grade product, not just code files.',
                },
                {
                  title: 'Your niche is our focus',
                  desc: 'Vegan, sustainable, purpose-driven. We chose this niche because we believe in it — and that means we understand your audience.',
                },
                {
                  title: 'No black box',
                  desc: 'You own the code, see progress daily, and get honest updates. We scope clearly so there are no budget surprises.',
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== 7. EXAMPLE OFFERS ========== */}
        <section id="offers" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choose your starting point
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Three clear engagement paths. Pick the one that matches your stage — or tell us what you need.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Launch Page */}
              <div className="bg-white rounded-xl p-8 border border-gray-100 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Launch Page</h3>
                <p className="text-sm text-gray-500 mb-4">For brands ready to go live</p>
                <p className="text-gray-600 text-sm mb-6">
                  A high-converting landing page or brand website — designed, built, and deployed on modern infrastructure within days.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 mb-8">
                  <li className="flex items-start gap-2"><span className="text-green-600">&#10003;</span> Custom design and responsive development</li>
                  <li className="flex items-start gap-2"><span className="text-green-600">&#10003;</span> SEO setup and performance optimization</li>
                  <li className="flex items-start gap-2"><span className="text-green-600">&#10003;</span> Hosting and deployment included</li>
                  <li className="flex items-start gap-2"><span className="text-green-600">&#10003;</span> Analytics integration</li>
                </ul>
                <div className="mt-auto">
                  <p className="text-sm font-medium text-gray-900 mb-1">One-time project</p>
                  <p className="text-xs text-gray-500 mb-3">Typical delivery: 3-7 days</p>
                  <a href="#contact" className="block text-center bg-white text-green-700 border border-green-700 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-green-50 transition-colors">
                    Get started
                  </a>
                </div>
              </div>

              {/* Fast MVP */}
              <div className="bg-white rounded-xl p-8 border-2 border-green-200 flex flex-col relative">
                <div className="absolute -top-3 left-8">
                  <span className="bg-green-700 text-white text-xs font-medium px-3 py-1 rounded-full">Most popular</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Fast MVP</h3>
                <p className="text-sm text-gray-500 mb-4">For startups validating an idea</p>
                <p className="text-gray-600 text-sm mb-6">
                  A working product with core functionality — built to launch, test assumptions, and attract early users or investors.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 mb-8">
                  <li className="flex items-start gap-2"><span className="text-green-600">&#10003;</span> Product scoping and architecture</li>
                  <li className="flex items-start gap-2"><span className="text-green-600">&#10003;</span> Full-stack development</li>
                  <li className="flex items-start gap-2"><span className="text-green-600">&#10003;</span> Database, auth, and API setup</li>
                  <li className="flex items-start gap-2"><span className="text-green-600">&#10003;</span> Production deployment and monitoring</li>
                  <li className="flex items-start gap-2"><span className="text-green-600">&#10003;</span> Post-launch iteration support</li>
                </ul>
                <div className="mt-auto">
                  <p className="text-sm font-medium text-gray-900 mb-1">Project + optional retainer</p>
                  <p className="text-xs text-gray-500 mb-3">Typical delivery: 1-3 weeks</p>
                  <a href="#contact" className="block text-center bg-green-700 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-green-800 transition-colors">
                    Get started
                  </a>
                </div>
              </div>

              {/* Growth Partner */}
              <div className="bg-white rounded-xl p-8 border border-gray-100 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Growth Partner</h3>
                <p className="text-sm text-gray-500 mb-4">For brands ready to scale</p>
                <p className="text-gray-600 text-sm mb-6">
                  Ongoing product development, infrastructure management, and feature iteration — a dedicated technical partner, not a vendor.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 mb-8">
                  <li className="flex items-start gap-2"><span className="text-green-600">&#10003;</span> Monthly development hours</li>
                  <li className="flex items-start gap-2"><span className="text-green-600">&#10003;</span> Continuous feature development</li>
                  <li className="flex items-start gap-2"><span className="text-green-600">&#10003;</span> Infrastructure and performance care</li>
                  <li className="flex items-start gap-2"><span className="text-green-600">&#10003;</span> Priority response and direct access</li>
                  <li className="flex items-start gap-2"><span className="text-green-600">&#10003;</span> Strategic product guidance</li>
                </ul>
                <div className="mt-auto">
                  <p className="text-sm font-medium text-gray-900 mb-1">Monthly partnership</p>
                  <p className="text-xs text-gray-500 mb-3">Ongoing collaboration</p>
                  <a href="#contact" className="block text-center bg-white text-green-700 border border-green-700 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-green-50 transition-colors">
                    Get started
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-10 bg-green-50 rounded-xl p-6 text-center max-w-2xl mx-auto">
              <p className="text-sm font-semibold text-green-800 mb-1">Founding partner program</p>
              <p className="text-sm text-green-700">
                For aligned vegan and sustainable brands: reduced initial investment in exchange for a long-term collaboration commitment. <a href="#contact" className="underline font-medium">Ask about it.</a>
              </p>
            </div>
          </div>
        </section>

        {/* ========== 8. TRUST / CREDIBILITY ========== */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Real projects, real delivery
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Cleareds is founder-led with senior engineering and product experience. Here are projects we&apos;ve built and shipped.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <a
                href="https://plantspack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="overflow-hidden">
                  <Image
                    src="/plantspack-screenshot.png"
                    alt="PlantsPack — vegan social network"
                    width={800}
                    height={450}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">PlantsPack</h3>
                    <span className="text-xs bg-green-100 text-green-700 font-medium px-2 py-0.5 rounded-full">Live</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    A vegan social network connecting plant-based communities — discover places, share journeys, explore events worldwide.
                  </p>
                  <span className="text-green-700 font-medium text-sm mt-3 inline-block group-hover:underline">plantspack.com &#8594;</span>
                </div>
              </a>
              <a
                href="https://eu-ua.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="overflow-hidden">
                  <Image
                    src="/eu-ua-screenshot.png"
                    alt="EU-UA.com — Ukraine and Europe cultural connection"
                    width={800}
                    height={450}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">EU-UA.com</h3>
                    <span className="text-xs bg-blue-100 text-blue-700 font-medium px-2 py-0.5 rounded-full">Live</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    A purpose-driven platform exploring Ukraine&apos;s European roots — cultural mapping, heritage, and accession tracking.
                  </p>
                  <span className="text-blue-600 font-medium text-sm mt-3 inline-block group-hover:underline">eu-ua.com &#8594;</span>
                </div>
              </a>
            </div>
            {/* Trust signals */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-gray-100">
              {[
                { label: 'Founder-led', desc: 'Senior engineer, direct collaboration' },
                { label: 'AI-native workflow', desc: 'Modern tooling for faster delivery' },
                { label: 'Production-grade stack', desc: 'Next.js, Vercel, Supabase' },
                { label: 'Transparent scope', desc: 'No surprises, no hidden costs' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== 9. FINAL CTA ========== */}
        <section className="py-20 bg-green-700">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Building something for a sustainable brand?
            </h2>
            <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
              Whether you need a landing page, an MVP, or an ongoing technical partner — let&apos;s find the smallest useful version and launch it fast.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-white text-green-700 px-8 py-4 rounded-lg text-base font-semibold hover:bg-green-50 transition-colors"
            >
              Start a conversation
            </a>
          </div>
        </section>

        {/* ========== 10. CONTACT / LEAD FORM ========== */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tell us about your project
              </h2>
              <p className="text-lg text-gray-600">
                Share the basics and we&apos;ll get back to you within 24 hours with a clear next step.
              </p>
            </div>
            <form
              action="mailto:hello@cleareds.com"
              method="POST"
              encType="text/plain"
              className="space-y-6"
            >
              <div>
                <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">
                  Brand or project name
                </label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-colors text-gray-900"
                  placeholder="e.g. GreenLeaf Foods"
                />
              </div>
              <div>
                <label htmlFor="building" className="block text-sm font-medium text-gray-700 mb-1">
                  What are you building?
                </label>
                <textarea
                  id="building"
                  name="building"
                  rows={3}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-colors text-gray-900 resize-none"
                  placeholder="Describe your project in a few sentences..."
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="stage" className="block text-sm font-medium text-gray-700 mb-1">
                    Stage
                  </label>
                  <select
                    id="stage"
                    name="stage"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-colors text-gray-900 bg-white"
                  >
                    <option value="">Select stage...</option>
                    <option value="idea">Idea / concept</option>
                    <option value="existing">Existing business</option>
                    <option value="redesign">Redesign / rebuild</option>
                    <option value="mvp">MVP / prototype</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-colors text-gray-900 bg-white"
                  >
                    <option value="">Select timeline...</option>
                    <option value="asap">As soon as possible</option>
                    <option value="1-2weeks">1-2 weeks</option>
                    <option value="1month">Within a month</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                  Budget range
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-colors text-gray-900 bg-white"
                >
                  <option value="">Select range...</option>
                  <option value="1-3k">1,000 - 3,000 EUR</option>
                  <option value="3-5k">3,000 - 5,000 EUR</option>
                  <option value="5-10k">5,000 - 10,000 EUR</option>
                  <option value="10k+">10,000+ EUR</option>
                  <option value="discuss">Let&apos;s discuss</option>
                </select>
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                  Website or social links <span className="text-gray-400">(optional)</span>
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-colors text-gray-900"
                  placeholder="https://yourbrand.com or @handle"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-700 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-green-800 transition-colors"
              >
                Send project details
              </button>
              <p className="text-xs text-gray-400 text-center">
                Or email us directly at <a href="mailto:hello@cleareds.com" className="text-green-700 hover:underline">hello@cleareds.com</a>
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <Image src="/download.svg" alt="Cleareds Logo" width={28} height={28} />
              <span className="text-lg ml-[-10px] font-bold text-green-400">leareds</span>
            </div>
            <p className="text-gray-400 text-sm text-center">
              AI-powered digital products for vegan and sustainable brands.
            </p>
            <a
              href="mailto:hello@cleareds.com"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              hello@cleareds.com
            </a>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8">
            <p className="text-xs text-gray-500 text-center">
              &copy; 2025 Cleareds. Building modern digital products for purpose-driven brands.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
