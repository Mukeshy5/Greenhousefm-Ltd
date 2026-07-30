import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const categories = [
  {
    title: "Men's Clothing",
    description: 'Shirts, T-Shirts, Jackets, Trousers and more',
    image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=500&q=80',
    icon: '👔',
  },
  {
    title: "Women's Clothing",
    description: 'Dresses, Tops, Kurtis, Bottoms and more',
    image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=500&q=80',
    icon: '👗',
  },
  {
    title: 'Kids Clothing',
    description: 'Topwear, Bottomwear, Sets and more',
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=500&q=80',
    icon: '🧒',
  },
  {
    title: 'Footwear',
    description: 'Casual, Sports, Formal, Sandals and more',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=500&q=80',
    icon: '👟',
  },
  {
    title: 'Accessories',
    description: 'Bags, Belts, Caps, Socks and more',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=500&q=80',
    icon: '👜',
  },
]

const heroSlides = [
  {
    eyebrow: 'Wholesale of Clothing & Footwear',
    title: 'Premium wholesale fashion for growing businesses',
    description: 'Quality products, competitive prices and trusted service for retailers and resellers across the globe.',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80',
    badge: 'Bulk orders ready',
  },
  {
    eyebrow: 'New arrivals every week',
    title: 'Fresh styles for your store collection',
    description: 'Discover elegant apparel and footwear designed to meet changing customer demand.',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
    badge: 'Trending now',
  },
  {
    eyebrow: 'Trusted by retailers',
    title: 'Flexible sourcing with dependable support',
    description: 'From small businesses to growing distributors, we make wholesale buying simple and efficient.',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
    badge: 'Reliable service',
  },
]

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [])

  const currentSlide = heroSlides[activeSlide]

  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-12 sm:py-16 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_45%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="space-y-5 sm:space-y-6">
            <div className="inline-flex rounded-full border border-emerald-200 bg-white/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700 shadow-sm sm:px-4 sm:text-sm">
              {currentSlide.eyebrow}
            </div>
            <h1 className="max-w-2xl text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-6xl">
              {currentSlide.title}
            </h1>
            <p className="max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              {currentSlide.description}
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <Link to="/products" className="rounded-full bg-emerald-900 px-6 py-3 text-center font-semibold text-white transition hover:bg-emerald-800">
                Explore Products
              </Link>
              <Link to="/enquire" className="rounded-full border border-gray-300 bg-white px-6 py-3 text-center font-semibold text-gray-700 transition hover:border-emerald-400 hover:text-emerald-700">
                Request a Quote
              </Link>
            </div>

            <div className="flex items-center gap-2 pt-2">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.eyebrow}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition ${activeSlide === index ? 'w-8 bg-emerald-700' : 'w-2.5 bg-emerald-200'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/70 bg-white p-2 shadow-[0_20px_80px_rgba(15,23,42,0.14)] sm:rounded-[2rem] sm:p-3">
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              className="h-[280px] w-full rounded-[1.2rem] object-cover sm:h-[360px] lg:h-[420px] lg:rounded-[1.4rem]"
            />
            <div className="absolute inset-0 rounded-[1.2rem] bg-gradient-to-t from-black/50 via-transparent to-transparent sm:rounded-[1.4rem]" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/40 bg-white/90 p-4 shadow-lg backdrop-blur sm:bottom-8 sm:left-8 sm:right-8 sm:p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">{currentSlide.badge}</p>
              <p className="mt-2 text-sm leading-6 text-gray-700">{currentSlide.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Our Categories</p>
          <h2 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">Explore our wholesale collection</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-500 sm:text-base">A broad selection of fashion essentials for men, women, kids and accessories.</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => (
              <div key={category.title} className="overflow-hidden rounded-xl border border-gray-100 bg-gray-50 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <img src={category.image} alt={category.title} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-700 p-2.5 text-2xl text-white shadow-md">
                    {category.icon}
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-gray-900">{category.title}</h3>
                  <p className="mt-1 text-xs text-gray-500">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-50/60 py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Why Partner With Us?</p>
            <h2 className="text-3xl font-extrabold text-gray-900">Your growth is our priority</h2>
            <p className="text-sm leading-relaxed text-gray-600">
              We help retailers and distributors grow with the right products, flexible order quantities and dependable support.
            </p>
            <Link to="/enquire" className="inline-flex rounded-full bg-emerald-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800">
              Partner With Us
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {[
              ['Low MOQ', 'Flexible ordering for small and large businesses'],
              ['Private Label', 'Build your own brand with our options'],
              ['Quality Assurance', 'Strict quality checks for every order'],
              ['24/7 Support', 'Friendly support whenever you need us'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                <h3 className="font-bold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
