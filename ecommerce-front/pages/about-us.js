import Header from '@/landingPageElement/Header'
import React from 'react'
import Footer from '@/landingPageElement/Footer'
import Link from 'next/link'
function AboutUs() {
  return (
    <>
    <Header/>
    <div className="py-20 bg-cover bg-no-repeat bg-fixed" style={{"backgroundImage": "url(/aroids-2.webp)"}}>
    <div className="container m-auto text-center px-6 opacity-100">
      <h2 className="text-4xl font-bold mb-2 text-white">Asean Plant Export</h2>
      <h3 className="text-lg md:text-2xl mb-8 text-gray-200 ">Bringing the beauty of nature to your doorstep worldwide! Explore our vibrant selection of plants and transform any space into a lush oasis with ease. Shop now and let your garden dreams bloom, wherever you are!</h3>
      <Link href='/categories'>
        <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent hover:text-green-500 hover:bg-gray-800 transition-all">Categories</button>
      </Link>
    </div>
  </div>
        
        {/* <!-- Features --> */}
        <section className="container mx-auto px-6 p-10">
          <h2 className=" text-lg lg:text-3xl font-bold text-center text-gray-800 mb-8">Welcome to Asean plant export, your premier destination for sourcing the finest plants from around the globe.!</h2>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2 pr-10">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">Journey</h4>
              <p className="text-gray-600 mb-8">Our journey began with a simple mission: to connect plant lovers worldwide with the highest quality botanical treasures, curated with care and delivered straight to your doorstep. With a passion for greenery and a commitment to excellence, we've cultivated a diverse collection of plants that cater to every taste and style.</p>
            </div>
            <div className="w-full md:w-1/2">
              <img className="rounded-lg " src="/Tillandsia-2.webp" alt="Vortex" />
            </div>
          </div>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2">
              <img className="rounded-lg" src="/Plumeria-2.webp" alt="use the force" />
            </div>
            <div className="w-full md:w-1/2 pl-10">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">Our Believe</h4>
              <p className="text-gray-600 mb-8">At Asean plants export, we believe that plants have the power to transform any space, bringing joy, tranquility, and a touch of nature's beauty into your home, office, or garden. Whether you're an avid gardener, a seasoned plant enthusiast, or someone looking to add a splash of green to your life, we're here to make your botanical dreams a reality.</p>
            </div>
          </div>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2 pr-10">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">Life creates it</h4>
              <p className="text-gray-600 mb-8">What sets us apart is our dedication to providing an exceptional shopping experience for our customers. From carefully sourcing our plants from trusted growers to ensuring they're expertly packaged and shipped to you with the utmost care, we prioritize quality at every step of the process. Plus, with our seamless international shipping options, you can enjoy the convenience of ordering your favorite plants from anywhere in the world.</p>
            </div>
            <div className="w-full md:w-1/2">
              <img className="rounded-lg" src="/Cacti.webp" alt="Syncing" />
            </div>
          </div>
        </section>
        
        {/* <!-- Testimonials --> */}
        <section className="bg-gray-100">
          <div className="container mx-auto px-6 py-20">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Testimonials</h2>
            <div className="flex flex-wrap">
              
              <div className="w-full h-auto md:w-1/3 px-2 mb-4">
                <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">I couldn't be happier with my experience shopping at Asean plants export! The selection of plants is incredible, and the quality is top-notch. My order arrived quickly and in perfect condition. I'll definitely be a repeat customer!</p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">Luke D.</p>
                </div>
              </div>
              
              <div className="w-full h-auto md:w-1/3 px-2 mb-4">
                <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">As a plant enthusiast living abroad, finding a reliable source for purchasing plants internationally has always been a challenge. Their wide range of exotic plants and hassle-free shipping options have made it so easy for me to grow my collection. Highly recommend!.</p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">Vinit S.</p>
                </div>
              </div>
              
              <div className="w-full h-auto md:w-1/3 px-2 mb-4">
                <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">I'm amazed by the level of customer service provided by [E-Commerce Platform Name]. When I had questions about caring for my new plants, their team was incredibly helpful and responsive. It's clear that they're passionate about what they do and truly care about their customers' satisfaction</p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">Emily T.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* <!--Call to Action--> */}
        <section className='bg-green-600'>
          <div className="container mx-auto px-6 text-center py-20">
            <h2 className="mb-6 text-4xl font-bold text-center text-white">Asean Plant Export</h2>
            <h3 className="my-4 text-2xl text-white">Bringing the beauty of nature to your doorstep.</h3>
            <Link href="/products">
              <button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider hover:border-red hover:text-white hover:bg-green-800">Buy Now</button>
            </Link>
          </div>
        </section>
      <Footer/>
    </>
  )
}

export default AboutUs