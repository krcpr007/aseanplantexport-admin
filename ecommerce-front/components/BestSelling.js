// for displaying best selling products
import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
function BestSelling() {
    return (
        <>
            <section className=''>
                <div className='my-10'>
                    <div className='container'>
                        <h1 className='text-center text-2xl'>Best selling </h1>
                    </div>
                </div>
                <div class="min-h-screen flex justify-center items-center bg-gradient-to-tr from-green-300 to-white">
                    <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">

                        <div>
                            <div class="max-w-sm bg-white px-4 pt-2 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 w-60">
                                {/* <h3 class="mb-3 text-xl font-bold text-indigo-600">Beginner Friendly</h3> */}
                                <div class="relative">
                                    <img class="w-full rounded-xl" src="https://aseanplantexport.com/image/cache/catalog/++CM%20Begonia/Begonia%20no%20name%201-420x546.png" alt="Colors" />
                                    <p class="absolute top-0 bg-green-400 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">$price</p>
                                </div>
                                <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">title</h1>
                                <div class="my-0">
                                    <button class="mt-0 text-xl w-full text-white bg-green-600 py-2 rounded-xl shadow-lg">Add to cart <FaCartArrowDown className="inline" /></button>
                                    {/* <FlyingButton _id={_id} src={images?.[0]}>Add to cart</FlyingButton> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BestSelling