import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import AboutUs from './page/AboutUs'
import Products from './page/Products'
import ContectUs from './page/ContectUs'
import EnquireNow from './page/EnquireNow'
import LoadingScreen from './components/LoadingScreen'

const App = () => {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    setIsLoading(true)

    const timer = window.setTimeout(() => {
      setIsLoading(false)
    }, 700)

    return () => window.clearTimeout(timer)
  }, [location.key])

  return (
    <div className="min-h-screen bg-gray-50">
      {isLoading && <LoadingScreen />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContectUs />} />
        <Route path="/enquire" element={<EnquireNow />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
