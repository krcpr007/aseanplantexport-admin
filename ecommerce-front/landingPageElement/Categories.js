import React from 'react'
import Link from 'next/link'
import slug from '@/pages/slugs/[slug]'
import Image from 'next/image'
function Categories() {
    return (
        <section className='px-2 md:px-10'>
            <div className='py-5'>
                <h1 className='text-4xl text-center'><span className='text-custom-green font-medium'>Categories</span> from Asean Plant Export</h1>
            </div>
            {/* <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com --> */}


            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-8">
                <div className='relative'>
                    <Link href={{pathname: "/slugs/[slug]",query: { slug:'aroids' },}}>
                        <Image width={300} height={500} loading='lazy' className="h-auto max-w-full rounded-lg" src="/categories/aroids.webp" alt="" />
                    </Link>
                    <div className='absolute top-0 right-0 bg-green-600 rounded-tr-lg'>
                        <p className='text-black font-medium text-xl px-3'>Aroids</p>
                    </div>
                </div>
                <div className='relative'>
                    <Link href={{pathname: "/slugs/[slug]",query: { slug:'hoya' },}}>
                        <Image width={300} height={500} loading='lazy'  className="h-auto max-w-full rounded-lg" src="/categories/hoya.webp" alt="" />
                    </Link>
                    <div className='absolute top-0 right-0 bg-green-600 rounded-tr-lg'>
                        <p className='text-black font-medium text-xl px-3'>Hoya</p>
                    </div>
                </div>
                {/* <div>
                    <img className="h-auto max-w-full rounded-lg" src="/categories/fern.png" alt="" />
                </div> */}
                <div className='relative'>
                    <Link href={{pathname: "/slugs/[slug]",query: { slug:'adenium' },}}>
                        <Image width={300} height={500} loading='lazy'  className="h-auto max-w-full rounded-lg" src="/categories/adenium.webp" alt="" />
                    </Link>
                    <div className='absolute top-0 right-0 bg-green-600 rounded-tr-lg'>
                        <p className='text-black font-medium text-xl px-3'>Adenium</p>
                    </div>
                </div>
                <div className='relative'>
                    <Link href={{pathname: "/slugs/[slug]",query: { slug:'aglaonema' },}}>
                        <Image width={300} height={500} loading='lazy'  className="h-auto max-w-full rounded-lg" src="/categories/Aglaonema.webp" alt="" />
                    </Link>
                    <div className='absolute top-0 right-0 bg-green-600 rounded-tr-lg'>
                        <p className='text-black font-medium text-xl px-3'>Aglaonema</p>
                    </div>
                </div>
                {/* <div>
                    <img className="h-auto max-w-full rounded-lg" src="/categories/Plumeria.webp" alt="" />
                </div> */}
                <div className='relative'>
                    <Link href={{pathname: "/slugs/[slug]",query: { slug:'tillandsia' },}}>
                        <Image width={300} height={500} loading='lazy'  className="h-auto max-w-full rounded-lg" src="/categories/Tillandsia.jpg" alt="" />
                    </Link>
                    <div className='absolute top-0 right-0 bg-green-600 rounded-tr-lg'>
                        <p className='text-black font-medium text-xl px-3'>Tillandsia</p>
                    </div>
                </div>
                <div className='relative'>
                    <Link href={{pathname: "/slugs/[slug]",query: { slug:'caudex' },}}>
                        <Image width={300} height={500} loading='lazy'  className="h-auto max-w-full rounded-lg" src="/categories/Caudex.webp" alt="" />
                    </Link>
                    <div className='absolute top-0 right-0 bg-green-600 rounded-tr-lg'>
                        <p className='text-black font-medium text-xl px-3'>Caudex</p>
                    </div>
                </div>
                <div className='relative'>
                    <Link href={{pathname: "/slugs/[slug]",query: { slug:'cacti' },}}>
                         <Image width={300} height={500} loading='lazy'  className="h-auto max-w-full rounded-lg" src="/categories/Cacti.webp" alt="" />
                    </Link>
                    <div className='absolute top-0 right-0 bg-green-600 rounded-tr-lg'>
                        <p className='text-black font-medium text-xl px-3'>Cacti</p>
                    </div>
                </div>
                <div className='relative'>
                    <Link href={{pathname: "/slugs/[slug]",query: { slug:'terrarium' },}}>
                         <Image width={300} height={500} loading='lazy'  className="h-auto max-w-full rounded-lg" src="/categories/Terrarium.webp" alt="" />
                    </Link>
                    <div className='absolute top-0 right-0 bg-green-600 rounded-tr-lg'>
                        <p className='text-black font-medium text-xl px-3'>Terrarium</p>
                    </div>
                </div>
                <div className='relative'>
                    <Link href={{pathname: "/slugs/[slug]",query: { slug:'colocasia' },}}>
                        <Image width={300} height={500} loading='lazy'  className="h-auto max-w-full rounded-lg" src="/categories/Colocasia.webp" alt="" />
                    </Link>
                    <div className='absolute top-0 right-0 bg-green-600 rounded-tr-lg'>
                        <p className='text-black font-medium text-xl px-3'>Colocasia</p>
                    </div>
                </div>
                {/* <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt='' />
                </div> */}
            </div>

        </section>
    )
}

export default Categories