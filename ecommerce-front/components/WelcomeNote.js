import React from 'react'

function WelcomeNote() {
    return (
        <>
            <div className='md:flex justify-around py-5'>
                <div className='md:w-1/2 px-5'>
                    <h1 className='text-start text-2xl'>Welcome to Asean Plant Export</h1>
                    <p className='text-sm text-justify'>Asean Plant Export  has grown to become one of the World class supplier for Seeds, Rhizome, Tubers, Bulbs and Musa world wide . We able to provide home gardeners with the very best quality products money can buy. In addition to our longstanding presence, Asean Plant Export also operates throughout the world through ecommerce and offers its popular seed range through major garden centres across the world. Our product range has also expanded to include an award winning seed range, young plants, bulbs and fruit trees. All have been carefully selected through stringent testing and trials to make gardening a pleasure and a success for our customers.</p>
                </div>
                <div className='flex justify-center'>
                    <img src="/worldwide-shipping.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default WelcomeNote