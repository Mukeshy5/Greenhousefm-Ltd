const AboutUs = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="bg-emerald-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <p className="text-base font-semibold uppercase tracking-[0.3em] text-emerald-300">About Greenhousefm Ltd</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Your Trusted Partner in Wholesale Fashion</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-emerald-100">
            Discover our commitment to quality, reliability, and customer success in the fast-paced world of fashion.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Story: From Humble Beginnings to a Fashion Powerhouse</h2>
            <p className="mt-6 text-lg text-gray-600">
              Greenhousefm Ltd was founded with a simple yet powerful vision: to bridge the gap between quality fashion manufacturers and businesses seeking dependable wholesale solutions. We began as a small team of passionate individuals with deep roots in the textile industry, and have since grown into a leading name known for our curated collections and exceptional service.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Our journey has been one of relentless dedication to understanding the market and the needs of our clients. We have built a reputation for sourcing high-quality clothing and footwear that not only meets but exceeds the demands of retailers, distributors, and resellers worldwide.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop" alt="Fashion warehouse" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-100">
              <h3 className="text-2xl font-bold text-emerald-800">Our Mission</h3>
              <p className="mt-4 text-lg text-gray-700">
                To empower businesses by providing access to premium wholesale fashion with unparalleled reliability and customer service. We aim to be more than just a supplier; we want to be a partner in your success, helping you navigate the market with confidence.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-100">
              <h3 className="text-2xl font-bold text-emerald-800">Our Vision</h3>
              <p className="mt-4 text-lg text-gray-700">
                To become the world's most trusted and innovative wholesale fashion platform, celebrated for our curated selections, ethical sourcing practices, and unwavering commitment to client growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Why Businesses Choose Greenhousefm Ltd</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We offer more than just products. We provide a partnership built on trust, quality, and a deep understanding of your business needs.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-8 text-center hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-900">Premium Quality</h3>
            <p className="mt-4 text-base text-gray-600">
              Our products have strong commercial value and are sourced from trusted manufacturers to ensure superior craftsmanship.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-8 text-center hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-900">Flexible Ordering</h3>
            <p className="mt-4 text-base text-gray-600">
              We cater to both small and large buyers with flexible ordering options designed to fit your inventory needs.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-8 text-center hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-900">Reliable & Responsive</h3>
            <p className="mt-4 text-base text-gray-600">
              Benefit from our reliable delivery network and a customer service team that is always ready to assist you.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AboutUs
