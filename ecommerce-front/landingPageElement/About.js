import React from 'react'

function About() {
    return (
        <>
            <section className="relative px-4 py-16 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 lg:py-32">
                <div className="flex flex-col lg:flex-row lg:-mx-8">
                    <div className="w-full lg:w-1/2 lg:px-8">
                        <h2 className="text-3xl leading-tight font-bold mt-4">Welcome to the Asean Plant Export</h2>
                        <p className="text-lg mt-4 font-semibold">Excellence in Dentistry in the Heart of NY</p>
                        <p className="mt-2 leading-relaxed">At Asean Plant Export, our door-to-door service ensures top-quality rare aroids and exquisite tropical plants for businesses.</p>
                    </div>

                    <div className="w-full lg:w-1/2 lg:px-8 mt-12 lg:mt-0">
                        <div className="md:flex">
                            <div>
                                <div className="w-16 h-16 bg-[#9DE62A] rounded-full"></div>
                            </div>
                            <div className="md:ml-8 mt-4 md:mt-0">
                                <h4 className="text-xl font-bold leading-tight">Everything You Need Under One Roof</h4>
                                <p className="mt-2 leading-relaxed text-justify">Asean Plant Export selects quality tropical plants from prestigious Thai nurseries, ensuring impeccable condition upon delivery to your company. We accommodate all businesses with no minimum order. Supporting your aspirations in tropical plant sales through dedication to customer service and exceptional quality.</p>
                            </div>
                        </div>

                        <div className="md:flex mt-8">
                            <div>
                                <div className="w-16 h-16 bg-[#9DE62A] rounded-full"></div>
                            </div>
                            <div className="md:ml-8 mt-4 md:mt-0">
                                <h4 className="text-xl font-bold leading-tight">Our Patient-Focused Approach</h4>
                                <p className="mt-2 leading-relaxed text-justify">Explore our wholesale webshop categories for premium tropical plants – rare aroids, stunning Caudex varieties, all sourced from Thailand’s selected nurseries. Our sustainable approach ensures no chemicals or fertilizers, offering an impressive selection. Captivate your customers with our diverse range of high-quality, exquisite plants. Browse now for an exceptional botanical experience..</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:flex md:flex-wrap mt-24 text-center md:-mx-4">
                    <div className="md:w-1/2 md:px-4 lg:w-1/4">
                        <div className="bg-white rounded-lg border border-gray-300 p-8">
                            <img src="/svg/experieance.svg" alt="" className="h-20 mx-auto" />

                            <h4 className="text-xl font-bold mt-4">10+ Years of Experience</h4>
                            <p className="mt-1">Our esteemed partners bring 10 years.</p>
                            {/* <a href="#" className="block mt-4">Read More</a> */}
                        </div>
                    </div>

                    <div className="md:w-1/2 md:px-4 mt-4 md:mt-0 lg:w-1/4">
                        <div className="bg-white rounded-lg border border-gray-300 p-8">


                            <img src="svg/top-quality.svg" alt="" className="h-20 mx-auto" />

                            <h4 className="text-xl font-bold mt-4">Top Quality Plants</h4>
                            <div className='flex'>
                            <p className="mt-1 items-end">Discover top-quality plants.</p>
                            </div>
                            {/* <a href="#" className="block mt-4">Read More</a> */}
                        </div>
                    </div>

                    <div className="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/4">
                        <div className="bg-white rounded-lg border border-gray-300 p-8">
                            <img src="/svg/plant.svg" alt="" className="h-20 mx-auto" />

                            <h4 className="text-xl font-bold mt-4">All in one Service</h4>
                            <p className="mt-1">Simplified service – one invoice.</p>
                            {/* <a href="#" className="block mt-4">Read More</a> */}
                        </div>
                    </div>

                    <div className="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/4">
                        <div className="bg-white rounded-lg border border-gray-300 p-8">
                            <img src="/svg/No_minimum.svg" alt="" className="h-20 mx-auto" />

                            <h4 className="text-xl font-bold mt-4">No Minimum Order</h4>
                            <p className="mt-1">Perfect for both small and large businesses.</p>
                            {/* <a href="#" className="block mt-4">Read More</a> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About