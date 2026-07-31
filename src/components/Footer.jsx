import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-12 pb-8 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-white">Greenhousefm Ltd</h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            Leading wholesale supplier of premium clothing and footwear for businesses worldwide.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="transition hover:text-white">Home</Link></li>
            <li><Link to="/about" className="transition hover:text-white">About Us</Link></li>
            <li><Link to="/products" className="transition hover:text-white">Products</Link></li>
            <li><Link to="/contact" className="transition hover:text-white">Contact Us</Link></li>
            <li><Link to="/enquire" className="transition hover:text-white">Enquire Now</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>07494625582</li>
            <li>sales@greenhousefmltd.com</li>
            <li>Jolyon House, Amberley Way, Cranford, Hounslow TW4 6BH</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 border-t border-gray-800 px-6 pt-6 text-center text-sm text-gray-500">
        © 2026 Greenhousefm Ltd. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
