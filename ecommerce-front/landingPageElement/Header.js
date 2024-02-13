import React, { useContext } from 'react'
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { FaHeart, FaPhoneAlt ,FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Link from 'next/link'
import { CartContext } from "@/components/CartContext";
function Header() {
    const { cartProducts } = useContext(CartContext);
    return (
        <>
            <header className="w-full z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 bg-[#1B1B1B] border-b-2 border-black">
                <div className="hidden md:flex justify-between items-center text-sm py-3 border-b border-black rounded-t"
                    style={{ "borderColor": "rgba(255,255,255,.25)" }}>
                    <div className="">
                        <ul className="flex text-white font-medium ">
                            <li>
                                <div className="flex items-center h-10">
                                    <FaLocationDot className='text-xl' />
                                    <span className="ml-2">Sukhumvit 50, Bangkok, 10260, Thailand</span>
                                </div>
                            </li>
                            <li className="ml-6">
                                <div className="flex items-center h-10">
                                    <FaPhoneAlt className='text-xl' />
                                    <span className="ml-2">+66 xxx-xxx-xxxx</span>
                                </div>
                            </li>
                            
                        </ul>
                    </div>

                    <div className="">
                        <ul className="flex  text-white">
                            <li className="flex items-center">
                            <Link href={'/search'}> 
                                <FaSearch className='text-xl' />
                            </Link>
                            </li>
                            <li className="">
                                <Link href="/contact-us"><TfiHeadphoneAlt className='text-xl mx-2' /></Link>
                            </li>
                            <li>
                                <Link href="/account"><VscAccount className='text-xl mx-2' /></Link>
                            </li>
                            <li>
                                <Link href="/account"><FaHeart className='text-xl mx-2' /></Link>
                            </li>
                            <li>
                                <Link href="/checkout"><FiShoppingCart className='text-xl mx-2' /> <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-green-500 border-2 border-white rounded-full animate-pulse -top-2 -end-2 ">{cartProducts.length}</div></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <dir className="hidden md:flex justify-evenly  text-green-600 py-3 mt-0 rounded-b">
                    <Link href={{pathname: "/slugs/[slug]",query: { slug:'terrarium' },}}>Terrarium</Link>
                    <Link href={{pathname: "/slugs/[slug]",query: { slug:'adenium' },}}>Adenium</Link>
                    <Link href={{pathname: "/slugs/[slug]",query: { slug:'aglaonema' },}}>Aglaonema</Link>
                    <Link href={{pathname: "/slugs/[slug]",query: { slug:'aroids' },}}>Aroids</Link>
                    <Link href={{pathname: "/slugs/[slug]",query: { slug:'bromeliads' },}}>Bromeliads</Link>
                    <Link href={{pathname: "/slugs/[slug]",query: { slug:'cacti' },}}>Cacti</Link>
                    <Link href={{pathname: "/slugs/[slug]",query: { slug:'caudex' },}}>Caudex</Link>
                    <Link href={{pathname: "/slugs/[slug]",query: { slug:'colocasia' },}}>Colocasia</Link>
                    <Link href={{pathname: "/slugs/[slug]",query: { slug:'sansevieria' },}}>Sansevieria</Link>
                    <Link href={{pathname: "/slugs/[slug]",query: { slug:'hoya' },}}>Hoya</Link>
                    <Link href={{pathname: "/slugs/[slug]",query: { slug:'tillandsia' },}}>Tillandsia</Link>
                </dir>
                <div className="flex flex-wrap items-center justify-between pb-6">
                    <div className="w-1/2 md:w-auto">
                        <Link href="/" className="text-green-700 font-bold text-2xl">
                            Asean Plant Export
                        </Link>
                    </div>

                    <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block"><svg className="fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg></label>

                    <input className="hidden" type="checkbox" id="menu-toggle" />

                    <div className="hidden md:block w-full md:w-auto" id="menu">
                        <nav
                            className="w-full bg-white md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
                            <ul className="md:flex items-center">
                                <li><Link className="py-2 inline-block md:text-white md:hidden lg:block font-semibold" href="/about-us">About Us</Link></li>
                                <li className="md:ml-4">
                                    <Link className="py-2 inline-block md:text-white md:px-2 font-semibold"
                                        href="/bestselling">Bestselling</Link>
                                </li>
                                <li className="md:ml-4">
                                    <Link className="py-2 inline-block md:text-white md:px-2 font-semibold"
                                        href="/categories">Categories</Link>
                                </li>
                                <li className="md:ml-4"><Link className="py-2 inline-block md:text-white md:px-2 font-semibold" href="/contact-us">Contact
                                    Us</Link></li>
                                <li className="md:ml-4"><Link className="py-2 inline-block md:text-white md:px-2 font-semibold" href="/account">Account</Link></li>
                                <li className="md:ml-4 md:hidden lg:block"><Link className="py-2 inline-block md:text-white md:px-2 font-semibold"
                                    href="/checkout">Cart</Link></li>
                                <li className="md:ml-6 mt-3 md:mt-0">
                                    <Link className="inline-block font-semibold px-4 py-2 text-white bg-green-600 md:bg-transparent md:text-white border border-white rounded" href="/products">See All Products</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header