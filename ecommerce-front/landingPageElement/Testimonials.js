import React from 'react'
import Image from 'next/image'
function Testimonials() {
    return (
        <>
            <section className="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32">
                <div className="flex flex-col lg:flex-row lg:-mx-8">
                    <div className="w-full lg:w-1/2 lg:px-8">
                        <h2 className="text-3xl leading-tight font-bold mt-4">Why choose the Asean Plant Export</h2>
                        <p className="mt-2 leading-relaxed text-justify">Alongside esteemed partners, we’ve curated an exceptional import chain for top-tier rare aroids, bromeliads, caudex plants, colocasia, and more. Experience a seamless process with excellent communication.Simply place your order on the webshop and receive a single invoice, enabling you to restock your webshop or store every 4 weeks hassle-free.</p>
                    </div>

                    <div className="w-full md:max-w-md md:mx-auto lg:w-1/2 lg:px-8 mt-12 mt:md-0">
                        <div className="bg-gray-400 w-full h-72 rounded-lg">
                            <Image width={600} height={500} loading='lazy' className='border-2 border-green-600 rounded w-full'  src="/Tillandsia.webp" alt="" />
                        </div>

                        <p className="italic text-sm mt-2 text-center font-medium">Tillandsia</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials