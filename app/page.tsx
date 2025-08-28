export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
          {/* Header */}
          <header className="w-full bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="text-2xl font-bold text-green-600">Cleareds</span>
                  </div>
                </div>
                <nav className="hidden md:flex space-x-8" aria-label="Main navigation">
                  <a href="#products" className="text-gray-700 hover:text-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:rounded px-2 py-1">
                    Products
                  </a>
                  <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:rounded px-2 py-1">
                    Contact
                  </a>
                </nav>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-grow">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 bg-gradient-to-br from-green-50 to-blue-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                    Ethical software for humans,
                    <span className="text-green-600"> pets</span>, and the 
                    <span className="text-blue-600"> planet</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    Vegan-first apps, pet-friendly bots, and AI tools for conscious e-commerce.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
                      Get Early Access
                    </button>
                    <a 
                      href="#products" 
                      className="bg-transparent border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
                    >
                      Explore Products
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Built on ethical principles
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Privacy-first solutions with no dark patterns. Warm, clear, and credible technology.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🔒</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Privacy First</h3>
                    <p className="text-gray-600">No dark patterns, clear data usage, transparent practices.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">💚</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Kindness</h3>
                    <p className="text-gray-600">Designed with compassion for all living beings.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">✨</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Clarity</h3>
                    <p className="text-gray-600">Simple, jargon-free, and easy to understand.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Products Section */}
            <section id="products" className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Our Products
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Ethical solutions for indie founders, pet businesses, and conscious consumers.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-xl">🛒</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">E-commerce Tools</h3>
                    <p className="text-gray-600 mb-4">Ethical e-commerce solutions for conscious brands.</p>
                    <span className="text-sm text-green-600 font-medium">Coming Soon</span>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-xl">🤖</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Pet-Friendly Bots</h3>
                    <p className="text-gray-600 mb-4">AI assistants designed with pet welfare in mind.</p>
                    <span className="text-sm text-blue-600 font-medium">In Development</span>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-xl">🌱</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Vegan-First Apps</h3>
                    <p className="text-gray-600 mb-4">Applications built with plant-based principles.</p>
                    <span className="text-sm text-purple-600 font-medium">Planning</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Early Access Section */}
            <section className="py-16 bg-green-600">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Be part of the ethical tech revolution
                </h2>
                <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                  Get early access to our tools and be the first to know when we launch.
                </p>
                <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input 
                    id="email"
                    type="email" 
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                    required
                    aria-describedby="email-description"
                  />
                  <button 
                    type="submit"
                    className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
                    aria-describedby="email-description"
                  >
                    Join Waitlist
                  </button>
                  <p id="email-description" className="sr-only">
                    Enter your email to get early access to our ethical software tools
                  </p>
                </form>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Have questions or want to collaborate? We&apos;d love to hear from you.
                </p>
                <a 
                  href="mailto:hello@cleareds.com" 
                  className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="mb-8">
                  <span className="text-2xl font-bold text-green-400">Cleareds</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Ethical software for humans, pets, and the planet.
                </p>
                <div className="border-t border-gray-800 pt-8">
                  <p className="text-sm text-gray-500">
                    © 2024 Cleareds. Building a kinder, clearer future.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
  );
}