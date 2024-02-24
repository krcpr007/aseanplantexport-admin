import React from 'react'

function Blog() {
    return (
        <>
            <section className="relative bg-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-32" style={{backgroundImage:'url("/josefin.jpg")' ,
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center center'}}>
                <div className="py-5">
                    <h2 className="text-4xl leading-tight font-bold">Features of Asean Plant Export</h2>
                    <p className="text-white mt-2 md:max-w-lg">At Asean Plant Export, your satisfaction and keeping your inventory updated are our top priorities. Contact us today to explore the possibilities of broadening your botanical selection.</p>
                </div>
                
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    
                    <div className="">
                        <div className="bg-white rounded border border-gray-300">
                            {/* <div className="w-full h-48 overflow-hidden bg-gray-300"></div> */}
                            <div className="p-4">
                                <p className="text-lg font-semibold leading-tight mt-4">ASEAN's Plant Export Powerhouse</p>
                                <p className="text-gray-600 mt-1">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        {/* "md:px-4 md:w-1/2 xl:w-1/4" */}
                        <div className="bg-white rounded border border-gray-300">
                            {/* <div className="w-full h-48 overflow-hidden bg-gray-300"></div> */}
                            <div className="p-4">
                                <p className="text-lg font-semibold leading-tight mt-4">Meet the ASEAN Plant Exporters</p>
                                <p className="text-gray-600 mt-1">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-white rounded border border-gray-300">
                            {/* <div className="w-full h-48 overflow-hidden bg-gray-300"></div> */}
                            <div className="p-4">
                                <p className="text-lg font-semibold leading-tight mt-4">A Symphony of Colors and Fragrances</p>
                                <p className="text-gray-600 mt-1">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-white rounded border border-gray-300">
                            {/* <div className="w-full h-48 overflow-hidden bg-gray-300"></div> */}
                            <div className="p-4">
                                <p className="text-lg font-semibold leading-tight mt-4">Sustainable Plant Exports from ASEAN</p>
                                <p className="text-gray-600 mt-1">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>

                    {/* <div className="md:px-4 md:w-1/2 xl:w-1/4 mt-4 md:mt-0">
                        <div className="bg-white rounded border border-gray-300 ">
                            <div className="w-full h-48 overflow-hidden bg-gray-300"></div>
                            <div className="p-4">
                                <div className="flex items-center text-sm">
                                    <span className="text-teal-500 font-semibold">Business</span>
                                    <span className="ml-4 text-gray-600">29 Nov, 2019</span>
                                </div>
                                <p className="text-lg font-semibold leading-tight mt-4">Card Title</p>
                                <p className="text-gray-600 mt-1">This card has supporting text below as a natural lead-in to additional
                                    content.
                                </p>
                                <div className="flex items-center mt-4">
                                    <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300"></div>
                                    <div className="ml-4">
                                        <p className="text-gray-600">By <span className="text-gray-900 font-semibold">Abby Sims</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
            {/* <!-- start cta --> */}
            <section
                className="relative bg-custom-green px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 text-center md:text-left">
                <div className="md:flex md:items-center md:justify-center">
                    <h2 className="text-xl font-bold text-white">Get in touch with us today! <br className="block md:hidden" />Call us on: +1
                        562-789-1935</h2>
                    <a href="#"
                        className="px-8 py-4 bg-white text-green-600 rounded inline-block font-semibold md:ml-8 mt-4 md:mt-0">Order Now</a>
                </div>
            </section>
            {/* <!-- end cta --> */}
        </>
    )
}

export default Blog