import React from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Testimonials from './Testimonials'
import Blog from './Blog'
import Footer from './Footer'
import WelcomeNote from '@/components/WelcomeNote'
import Categories from './Categories'
import FewProducts from './FewProducts'

function LandingPage({ newProducts ,wishedNewProducts}) {
  return (
    <main className="w-full antialiased bg-white font-sans text-gray-900">
      <Header />
      <Hero />
      <About />
      <Testimonials />
      <Blog />
      <Categories />
      <FewProducts newProducts={newProducts } wishedNewProducts={wishedNewProducts}/>
      <WelcomeNote />
      <Footer />
    </main>
  )
}

export default LandingPage