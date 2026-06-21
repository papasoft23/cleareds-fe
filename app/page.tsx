'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import {
  Zap,
  Rocket,
  Globe,
  FileText,
  ShoppingBag,
  Users,
  MessageSquare,
  Target,
  Layers,
  Cpu,
  CloudUpload,
  RefreshCw,
  Bot,
  UserCheck,
  Gauge,
  Server,
  Heart,
  Eye,
  Check,
  X,
  ArrowRight,
  Mail,
  Clock,
  Shield,
  Star,
  Send,
  Leaf,
  Sparkles,
} from 'lucide-react';

const OFFERS = [
  {
    name: 'Launch Page',
    icon: Globe,
    tagline: 'For brands ready to go live',
    desc: 'A high-converting landing page or brand website — designed, built, and deployed on modern infrastructure within days.',
    features: [
      'Custom design and responsive development',
      'SEO setup and performance optimization',
      'Hosting and deployment included',
      'Analytics integration',
    ],
    cadence: 'One-time project',
    delivery: 'Typical delivery: 3-7 days',
    featured: false,
  },
  {
    name: 'Fast MVP',
    icon: Rocket,
    tagline: 'For startups validating an idea',
    desc: 'A working product with core functionality — built to launch, test assumptions, and attract early users or investors.',
    features: [
      'Product scoping and architecture',
      'Full-stack development',
      'Database, auth, and API setup',
      'Production deployment and monitoring',
      'Post-launch iteration support',
    ],
    cadence: 'Project + optional retainer',
    delivery: 'Typical delivery: 1-3 weeks',
    featured: true,
  },
  {
    name: 'Growth Partner',
    icon: RefreshCw,
    tagline: 'For brands ready to scale',
    desc: 'Ongoing product development, infrastructure management, and feature iteration — a dedicated technical partner, not a vendor.',
    features: [
      'Monthly development hours',
      'Continuous feature development',
      'Infrastructure and performance care',
      'Priority response and direct access',
      'Strategic product guidance',
    ],
    cadence: 'Monthly partnership',
    delivery: 'Ongoing collaboration',
    featured: false,
  },
];

const PLAN_OPTIONS = ['Launch Page', 'Fast MVP', 'Growth Partner', 'Not sure yet'];

export default function HomePage() {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [planPrefilled, setPlanPrefilled] = useState(false);
  const [form, setForm] = useState({
    brand: '',
    building: '',
    stage: '',
    timeline: '',
    budget: '',
    website: '',
  });
  const [errors, setErrors] = useState<{ brand?: string; building?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const brandInputRef = useRef<HTMLInputElement>(null);

  // Wire a pricing card to the contact form: prefill the plan, scroll, focus.
  const choosePlan = (plan: string) => {
    setSelectedPlan(plan);
    setPlanPrefilled(true);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    window.setTimeout(() => brandInputRef.current?.focus(), 600);
  };

  const update = (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      if (errors[field as keyof typeof errors]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: typeof errors = {};
    if (!form.brand.trim()) nextErrors.brand = 'Please tell us your brand or project name.';
    if (!form.building.trim()) nextErrors.building = 'A sentence or two about your project helps a lot.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const body = [
      `Brand / project: ${form.brand}`,
      `Interested in: ${selectedPlan || 'Not specified'}`,
      '',
      `What they're building: ${form.building}`,
      '',
      `Stage: ${form.stage || '—'}`,
      `Timeline: ${form.timeline || '—'}`,
      `Budget: ${form.budget || '—'}`,
      `Links: ${form.website || '—'}`,
    ].join('\n');

    const subject = `New project enquiry${selectedPlan ? ` — ${selectedPlan}` : ''}: ${form.brand}`;
    window.location.href = `mailto:hello@cleareds.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 outline-none transition-all text-gray-900';

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Header */}
      <header className="w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#top" className="flex items-center flex-shrink-0">
              <Image
                src="/cleareds-logo.png"
                alt="Cleareds"
                width={170}
                height={36}
                priority
                className="h-8 w-auto"
              />
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
              <a href="#what-we-build" className="hover:text-brand-700 transition-colors">Services</a>
              <a href="#how-we-work" className="hover:text-brand-700 transition-colors">Process</a>
              <a href="#offers" className="hover:text-brand-700 transition-colors">Offers</a>
              <a href="#why-cleareds" className="hover:text-brand-700 transition-colors">Why us</a>
            </nav>
            <a
              href="#contact"
              className="bg-brand-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors flex items-center gap-2"
            >
              <Rocket className="w-4 h-4" />
              Start a project
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="flex-grow">
        {/* ========== 1. HERO SECTION ========== */}
        <section className="relative py-24 lg:py-36 bg-gradient-to-br from-brand-50 via-white to-brand-100 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-200/40 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-100/50 rounded-full blur-3xl" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 text-sm font-medium tracking-wide uppercase mb-6 px-4 py-2 rounded-full">
              <Leaf className="w-4 h-4" />
              AI-native product studio
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6 leading-tight">
              Modern digital products for vegan and sustainable brands
              <span className="text-brand-600"> — in days, not months</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Cleareds helps purpose-driven brands launch landing pages, MVPs, and web experiences fast — using AI-powered delivery, modern infrastructure, and continuous iteration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/20"
              >
                <MessageSquare className="w-5 h-5" />
                Discuss your project
              </a>
              <a
                href="#how-we-work"
                className="inline-flex items-center justify-center gap-2 bg-white text-ink px-8 py-4 rounded-lg text-base font-semibold border border-gray-200 hover:border-brand-300 hover:bg-brand-50 transition-colors"
              >
                See how it works
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* ========== 2. WHO IT'S FOR ========== */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-100 rounded-xl mb-4">
                <Heart className="w-6 h-6 text-brand-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
                Built for brands that care
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We work best with mission-driven teams who need a fast, reliable technical partner — not a bloated agency.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="bg-brand-50 rounded-xl p-6 border border-brand-100">
                <h3 className="text-lg font-semibold text-ink mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-brand-600" />
                  A good fit
                </h3>
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
                      <Check className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-ink mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-gray-400" />
                  Not the right fit
                </h3>
                <ul className="space-y-3">
                  {[
                    'Large enterprise transformation programs',
                    'Undefined scope with no prioritization',
                    'Clients looking for the cheapest option',
                    'Projects that need 20-person agency teams',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-500">
                      <X className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
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
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-100 rounded-xl mb-4">
                <Layers className="w-6 h-6 text-brand-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
                What we build
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Practical, elegant digital products — scoped for impact, not complexity.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Target className="w-6 h-6 text-brand-600" />,
                  title: 'Conversion-focused landing pages',
                  desc: 'High-performance pages designed to turn visitors into customers, built for speed and clarity.',
                },
                {
                  icon: <Rocket className="w-6 h-6 text-brand-600" />,
                  title: 'Fast MVPs for startup ideas',
                  desc: 'Validate your concept with a working product in days — not a slide deck in months.',
                },
                {
                  icon: <Globe className="w-6 h-6 text-brand-600" />,
                  title: 'Sustainable brand websites',
                  desc: 'Modern, clean websites that reflect your mission and build trust with conscious consumers.',
                },
                {
                  icon: <FileText className="w-6 h-6 text-brand-600" />,
                  title: 'Content-led web platforms',
                  desc: 'Blog, editorial, or resource hubs with great SEO and a smooth editorial workflow.',
                },
                {
                  icon: <ShoppingBag className="w-6 h-6 text-brand-600" />,
                  title: 'Lightweight commerce experiences',
                  desc: 'Focused ecommerce setups for product-led brands — no bloated platforms, no overkill.',
                },
                {
                  icon: <Users className="w-6 h-6 text-brand-600" />,
                  title: 'Membership and community products',
                  desc: 'Spaces for your audience to connect, subscribe, or access gated content.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-semibold text-ink mb-2">{item.title}</h3>
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
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-100 rounded-xl mb-4">
                <Zap className="w-6 h-6 text-brand-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
                How we work
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A clear, focused process — from first conversation to live product. No endless discovery phases.
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  step: '01',
                  icon: <MessageSquare className="w-5 h-5 text-white" />,
                  title: 'Understand the goal',
                  desc: 'A short conversation to clarify what you need, who it serves, and what success looks like.',
                },
                {
                  step: '02',
                  icon: <Target className="w-5 h-5 text-white" />,
                  title: 'Define the smallest valuable version',
                  desc: 'We scope the first version tightly — enough to launch, learn, and iterate. No feature bloat.',
                },
                {
                  step: '03',
                  icon: <Cpu className="w-5 h-5 text-white" />,
                  title: 'Build fast with AI-native workflow',
                  desc: 'Using modern AI tooling and proven infrastructure, we move from plan to working product in days.',
                },
                {
                  step: '04',
                  icon: <CloudUpload className="w-5 h-5 text-white" />,
                  title: 'Launch on modern infrastructure',
                  desc: 'Your product goes live on fast, scalable, production-grade infrastructure — ready for real users.',
                },
                {
                  step: '05',
                  icon: <RefreshCw className="w-5 h-5 text-white" />,
                  title: 'Improve continuously',
                  desc: 'After launch, we iterate based on real feedback. New features, fixes, and optimizations — ongoing.',
                },
              ].map((item, index) => (
                <div key={item.step} className="flex gap-6 items-start group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-brand-600 text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md shadow-brand-600/30">
                      {item.icon}
                    </div>
                    {index < 4 && <div className="w-0.5 h-6 bg-brand-200 mt-2" />}
                  </div>
                  <div className="pb-2">
                    <p className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-1">Step {item.step}</p>
                    <h3 className="text-lg font-semibold text-ink mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== 5/6. WHY CLEAREDS ========== */}
        <section id="why-cleareds" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-100 rounded-xl mb-4">
                <Star className="w-6 h-6 text-brand-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
                Why Cleareds
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Not a generic agency. Not a cheap freelancer. A focused technical partner for brands with purpose.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Bot className="w-6 h-6 text-brand-600" />,
                  title: 'AI-native, not AI-hype',
                  desc: 'AI is integrated into how we actually build — code, deployment, iteration. It makes us faster and more precise, not just trendy.',
                },
                {
                  icon: <UserCheck className="w-6 h-6 text-brand-600" />,
                  title: 'Founder-led, not delegated',
                  desc: 'A senior engineer and product thinker does the work. No junior handoffs. No account managers relaying messages.',
                },
                {
                  icon: <Gauge className="w-6 h-6 text-brand-600" />,
                  title: 'Speed without shortcuts',
                  desc: 'We ship in days because of better tooling and tighter scope — not because we skip testing or cut corners.',
                },
                {
                  icon: <Server className="w-6 h-6 text-brand-600" />,
                  title: 'Infrastructure included',
                  desc: 'Hosting, deployment, monitoring, CI/CD — all set up and managed. You get a production-grade product, not just code files.',
                },
                {
                  icon: <Heart className="w-6 h-6 text-brand-600" />,
                  title: 'Your niche is our focus',
                  desc: 'Vegan, sustainable, purpose-driven. We chose this niche because we believe in it — and that means we understand your audience.',
                },
                {
                  icon: <Eye className="w-6 h-6 text-brand-600" />,
                  title: 'No black box',
                  desc: 'You own the code, see progress daily, and get honest updates. We scope clearly so there are no budget surprises.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md hover:border-brand-200 transition-all">
                  <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-semibold text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== 7. EXAMPLE OFFERS ========== */}
        <section id="offers" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-100 rounded-xl mb-4">
                <Zap className="w-6 h-6 text-brand-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
                Choose your starting point
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Three clear engagement paths. Pick the one that matches your stage — we&apos;ll prefill the form for you.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {OFFERS.map((offer) => {
                const Icon = offer.icon;
                const isSelected = selectedPlan === offer.name;
                return (
                  <div
                    key={offer.name}
                    className={`bg-white rounded-xl p-8 flex flex-col relative transition-all ${
                      offer.featured
                        ? 'border-2 border-brand-300 shadow-lg shadow-brand-600/5'
                        : 'border border-gray-100 hover:shadow-lg'
                    } ${isSelected ? 'ring-2 ring-brand-500 ring-offset-2' : ''}`}
                  >
                    {offer.featured && (
                      <div className="absolute -top-3 left-8">
                        <span className="bg-brand-600 text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                          <Star className="w-3 h-3" /> Most popular
                        </span>
                      </div>
                    )}
                    {isSelected && (
                      <div className="absolute -top-3 right-8">
                        <span className="bg-ink text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                          <Check className="w-3 h-3" /> Selected
                        </span>
                      </div>
                    )}
                    <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-ink mb-1">{offer.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{offer.tagline}</p>
                    <p className="text-gray-600 text-sm mb-6">{offer.desc}</p>
                    <ul className="space-y-2 text-sm text-gray-700 mb-8">
                      {offer.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" /> {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <p className="text-sm font-medium text-ink">{offer.cadence}</p>
                      </div>
                      <p className="text-xs text-gray-500 mb-3 ml-6">{offer.delivery}</p>
                      <button
                        type="button"
                        onClick={() => choosePlan(offer.name)}
                        className={`w-full text-center px-6 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2 ${
                          offer.featured
                            ? 'bg-brand-600 text-white hover:bg-brand-700'
                            : 'bg-white text-brand-700 border border-brand-600 hover:bg-brand-50'
                        }`}
                      >
                        {isSelected ? 'Selected — finish below' : 'Get started'}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 bg-brand-50 rounded-xl p-6 text-center max-w-2xl mx-auto border border-brand-100">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Heart className="w-4 h-4 text-brand-700" />
                <p className="text-sm font-semibold text-brand-800">Founding partner program</p>
              </div>
              <p className="text-sm text-brand-700">
                For aligned vegan and sustainable brands: reduced initial investment in exchange for a long-term collaboration commitment. <a href="#contact" className="underline font-medium">Ask about it.</a>
              </p>
            </div>
          </div>
        </section>

        {/* ========== 8. TRUST / CREDIBILITY ========== */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-100 rounded-xl mb-4">
                <Shield className="w-6 h-6 text-brand-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
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
                className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
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
                    <h3 className="text-lg font-semibold text-ink">PlantsPack</h3>
                    <span className="text-xs bg-brand-100 text-brand-700 font-medium px-2 py-0.5 rounded-full">Live</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    A vegan social network connecting plant-based communities — discover places, share journeys, explore events worldwide.
                  </p>
                  <span className="text-brand-600 font-medium text-sm mt-3 inline-flex items-center gap-1 group-hover:underline">
                    plantspack.com <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
              <a
                href="https://eu-ua.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
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
                    <h3 className="text-lg font-semibold text-ink">EU-UA.com</h3>
                    <span className="text-xs bg-brand-100 text-brand-700 font-medium px-2 py-0.5 rounded-full">Live</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    A purpose-driven platform exploring Ukraine&apos;s European roots — cultural mapping, heritage, and accession tracking.
                  </p>
                  <span className="text-brand-600 font-medium text-sm mt-3 inline-flex items-center gap-1 group-hover:underline">
                    eu-ua.com <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            </div>
            {/* Trust signals */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
              {[
                { icon: <UserCheck className="w-5 h-5 text-brand-600" />, label: 'Founder-led', desc: 'Senior engineer, direct collaboration' },
                { icon: <Bot className="w-5 h-5 text-brand-600" />, label: 'AI-native workflow', desc: 'Modern tooling for faster delivery' },
                { icon: <Server className="w-5 h-5 text-brand-600" />, label: 'Production-grade stack', desc: 'Next.js, Vercel, Supabase' },
                { icon: <Eye className="w-5 h-5 text-brand-600" />, label: 'Transparent scope', desc: 'No surprises, no hidden costs' },
              ].map((item) => (
                <div key={item.label} className="text-center flex flex-col items-center">
                  <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center mb-3">
                    {item.icon}
                  </div>
                  <p className="text-sm font-semibold text-ink">{item.label}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== 9. FINAL CTA ========== */}
        <section className="py-20 bg-ink relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-ink to-brand-900" />
          <div className="absolute top-10 right-20 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-48 h-48 bg-brand-400/10 rounded-full blur-3xl" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Leaf className="w-7 h-7 text-brand-300" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Building something for a sustainable brand?
            </h2>
            <p className="text-lg text-brand-100/80 mb-8 max-w-2xl mx-auto">
              Whether you need a landing page, an MVP, or an ongoing technical partner — let&apos;s find the smallest useful version and launch it fast.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-lg text-base font-semibold hover:bg-brand-50 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              Start a conversation
            </a>
          </div>
        </section>

        {/* ========== 10. CONTACT / LEAD FORM ========== */}
        <section id="contact" className="py-20 bg-white scroll-mt-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-100 rounded-xl mb-4">
                <Send className="w-6 h-6 text-brand-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
                Tell us about your project
              </h2>
              <p className="text-lg text-gray-600">
                Share the basics and we&apos;ll get back to you within 24 hours with a clear next step.
              </p>
            </div>

            {submitted ? (
              <div className="bg-brand-50 border border-brand-200 rounded-2xl p-10 text-center animate-fade-in-up">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-600 rounded-full mb-5">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-ink mb-2">Thanks, {form.brand}!</h3>
                <p className="text-gray-600 max-w-md mx-auto mb-6">
                  Your project details are ready in your email client.
                  {selectedPlan && selectedPlan !== 'Not sure yet' && (
                    <> We&apos;ve noted you&apos;re interested in the <strong className="text-brand-700">{selectedPlan}</strong> path.</>
                  )}{' '}
                  We&apos;ll reply within 24 hours with a clear next step.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ brand: '', building: '', stage: '', timeline: '', budget: '', website: '' });
                    setSelectedPlan('');
                    setPlanPrefilled(false);
                  }}
                  className="text-sm font-semibold text-brand-700 hover:underline inline-flex items-center gap-1"
                >
                  Send another enquiry <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Interactive plan picker — synced with the pricing cards */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    I&apos;m interested in
                    {planPrefilled && (
                      <span className="ml-2 inline-flex items-center gap-1 text-xs font-medium text-brand-700 bg-brand-100 px-2 py-0.5 rounded-full">
                        <Sparkles className="w-3 h-3" /> Prefilled from your pick
                      </span>
                    )}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {PLAN_OPTIONS.map((plan) => {
                      const active = selectedPlan === plan;
                      return (
                        <button
                          key={plan}
                          type="button"
                          onClick={() => {
                            setSelectedPlan(active ? '' : plan);
                            setPlanPrefilled(false);
                          }}
                          className={`px-4 py-2 rounded-full text-sm font-medium border transition-all flex items-center gap-1.5 ${
                            active
                              ? 'bg-brand-600 text-white border-brand-600 shadow-sm shadow-brand-600/30'
                              : 'bg-white text-gray-600 border-gray-200 hover:border-brand-300 hover:text-brand-700'
                          }`}
                        >
                          {active && <Check className="w-3.5 h-3.5" />}
                          {plan}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">
                    Brand or project name
                  </label>
                  <input
                    ref={brandInputRef}
                    type="text"
                    id="brand"
                    name="brand"
                    value={form.brand}
                    onChange={update('brand')}
                    className={`${inputClass} ${errors.brand ? 'border-red-400 focus:border-red-400 focus:ring-red-400/30' : ''}`}
                    placeholder="e.g. GreenLeaf Foods"
                  />
                  {errors.brand && <p className="text-sm text-red-500 mt-1">{errors.brand}</p>}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="building" className="block text-sm font-medium text-gray-700">
                      What are you building?
                    </label>
                    <span className="text-xs text-gray-400">{form.building.length}/600</span>
                  </div>
                  <textarea
                    id="building"
                    name="building"
                    rows={3}
                    maxLength={600}
                    value={form.building}
                    onChange={update('building')}
                    className={`${inputClass} resize-none ${errors.building ? 'border-red-400 focus:border-red-400 focus:ring-red-400/30' : ''}`}
                    placeholder="Describe your project in a few sentences..."
                  />
                  {errors.building && <p className="text-sm text-red-500 mt-1">{errors.building}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="stage" className="block text-sm font-medium text-gray-700 mb-1">
                      Stage
                    </label>
                    <select id="stage" name="stage" value={form.stage} onChange={update('stage')} className={`${inputClass} bg-white`}>
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
                    <select id="timeline" name="timeline" value={form.timeline} onChange={update('timeline')} className={`${inputClass} bg-white`}>
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
                  <select id="budget" name="budget" value={form.budget} onChange={update('budget')} className={`${inputClass} bg-white`}>
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
                    value={form.website}
                    onChange={update('website')}
                    className={inputClass}
                    placeholder="https://yourbrand.com or @handle"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-600 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-brand-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-600/20"
                >
                  <Send className="w-5 h-5" />
                  Send project details
                </button>
                <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1">
                  Or email us directly at <a href="mailto:hello@cleareds.com" className="text-brand-600 hover:underline flex items-center gap-1"><Mail className="w-3 h-3" /> hello@cleareds.com</a>
                </p>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-ink text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-lg p-1.5 flex-shrink-0">
                <Image src="/cleareds-icon.png" alt="Cleareds" width={28} height={28} />
              </div>
              <span className="text-lg font-bold text-white">Cleareds</span>
            </div>
            <p className="text-white/60 text-sm text-center">
              AI-powered digital products for vegan and sustainable brands.
            </p>
            <a
              href="mailto:hello@cleareds.com"
              className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              hello@cleareds.com
            </a>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8">
            <p className="text-xs text-white/40 text-center">
              &copy; 2025 Cleareds. Building modern digital products for purpose-driven brands.
            </p>
            <p className="text-xs text-white/40 text-center mt-2">
              Company number (Belgium): 1026.978.194
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
