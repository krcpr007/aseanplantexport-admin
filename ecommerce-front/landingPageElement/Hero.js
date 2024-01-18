import React from 'react'

function Hero() {
    return (
        <>
            <section className="bg-cover relative bg-green-200 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex
      items-center min-h-screen" style={{backgroundImage:'url("/flower-coverpage.jpg")' ,
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
      backgroundPosition:'center center', 
      opacity:'0.8'}} >
                <div className="h-full absolute top-0 left-0 z-0">
                    {/* <img src="/flower-coverpage.jpg" alt="" className="w-full h-full object-cover opacity-20" /> */}
                </div>

                <div className="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
                    <div>
                        <h1 className="text-black text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">A better life starts with a
                            beautiful
                            Plant.</h1>
                        <p className="text-blue-100 text-xl md:text-2xl leading-snug mt-4">Welcome to the Asean Plant Export </p>
                        <a href="#" className="px-8 py-4 bg-green-500 text-white rounded-full inline-block mt-8 font-semibold mr-2">Buy Plants</a>
                        <a href="" className='px-8 py-4 bg-green-500 text-white rounded-full inline-block mt-8 font-semibold'>Create your account</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero