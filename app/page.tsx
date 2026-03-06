import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
          {/* Header */}
          <header className="w-full bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center items-center h-16">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <Image src="/download.svg" alt="Cleareds Logo" width={40} height={40} />
                  </div>
                  <span className="text-2xl ml-[-10px] font-bold text-green-600">leareds</span>
                </div>
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
                    <span className="text-green-600"> animals</span>, and the
                    <span className="text-blue-600"> planet</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    Vegan-first apps, animal-friendly bots, and AI tools for conscious e-commerce.
                  </p>
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
                    Our Projects
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Ethical solutions for indie founders, animal businesses, and conscious consumers.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <a
                    href="https://plantspack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
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
                        <h3 className="text-xl font-semibold text-gray-900">PlantsPack</h3>
                        <span className="text-xs bg-green-100 text-green-700 font-medium px-2 py-0.5 rounded-full">Beta</span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        A vegan social network to connect with plant-based enthusiasts, discover vegan and pet-friendly places, share your green journey, and explore events around the world.
                      </p>
                      <span className="text-green-600 font-medium text-sm group-hover:underline">Visit plantspack.com →</span>
                    </div>
                  </a>
                  <a
                    href="https://eu-ua.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="overflow-hidden">
                      <Image
                        src="/eu-ua-screenshot.png"
                        alt="EU-UA.com — Ukraine & Europe"
                        width={800}
                        height={450}
                        className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">EU-UA.com</h3>
                        <span className="text-xs bg-blue-100 text-blue-700 font-medium px-2 py-0.5 rounded-full">Independent</span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        An independent initiative exploring Ukraine&apos;s deep European roots, tracking the EU accession journey, and mapping cultural connections between two continents.
                      </p>
                      <span className="text-blue-600 font-medium text-sm group-hover:underline">Visit eu-ua.com →</span>
                    </div>
                  </a>
                </div>
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
                <div className="flex flex-col items-center gap-4">
                  <p className="text-lg text-gray-700">
                    Email us at: <span className="font-semibold text-green-600">hello@cleareds.com</span>
                  </p>
                  <a
                    href="mailto:hello@cleareds.com"
                    className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="mb-8 flex items-center justify-center gap-3">
                  <Image src="/download.svg" alt="Cleareds Logo" width={32} height={32} />
                  <span className="text-2xl ml-[-10px] font-bold text-green-400">leareds</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Ethical software for humans, animals, and the planet.
                </p>
                <div className="border-t border-gray-800 pt-8">
                  <p className="text-sm text-gray-500">
                    © 2025 Cleareds. Building a kinder, clearer future.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
  );
}
