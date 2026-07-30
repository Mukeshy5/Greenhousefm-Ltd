import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact Us' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-base font-bold text-white shadow-md sm:h-11 sm:w-11 sm:text-lg">
            G
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-emerald-900 sm:text-base">Greenhousefm Ltd</p>
            <p className="truncate text-[10px] text-gray-500 sm:text-xs">Wholesale of Clothing and Footwear</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-gray-700 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? 'rounded-full bg-emerald-50 px-3 py-2 text-emerald-700'
                  : 'rounded-full px-3 py-2 transition hover:bg-emerald-50 hover:text-emerald-700'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <NavLink
            to="/enquire"
            className="hidden rounded-full bg-emerald-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 md:inline-flex"
          >
            Enquire Now
          </NavLink>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-xl text-gray-700 shadow-sm md:hidden"
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? 'rounded-xl bg-emerald-50 px-3 py-2 font-semibold text-emerald-700'
                    : 'rounded-xl px-3 py-2 font-semibold text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-700'
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/enquire"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-emerald-900 px-3 py-2 text-center font-semibold text-white"
            >
              Enquire Now
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
