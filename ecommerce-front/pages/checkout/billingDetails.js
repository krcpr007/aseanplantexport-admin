import React, {useState} from 'react'
import { useContext, useEffect } from "react";
import { CartContext } from "@/components/CartContext";
import axios from "axios";
import Table from "@/components/Table";
import Input from "@/components/Input";
import { RevealWrapper } from "next-reveal";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from 'next/router';
function BillingDetails() {
  const router = useRouter();
  const { cartProducts, addProduct, removeProduct, clearCart } =
    useContext(CartContext);
    const { data: session } = useSession();
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [country, setCountry] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [shippingFee, setShippingFee] = useState(null);
    // i want use existing address 
    // or add new address
    //
    useEffect(() => {
        if (cartProducts.length <= 0) {
        
          router.push("/cart");
          return;
        }

        if (!session) {
          return;
        }
        axios.get("/api/address").then((response) => {
          setName(response.data.name);
          setEmail(response.data.email);
          setCity(response.data.city);
          setPostalCode(response.data.postalCode);
          setStreetAddress(response.data.streetAddress);
          setCountry(response.data.country);
        });
      }, [session]);
  return (
    <>
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">Billing Details</h2>
          <p className="text-gray-500 mb-6">Look into Billing Details</p>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Billing Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Full Name</label>
                    <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" defaultValue={name} />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">Email Address</label>
                    <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" defaultValue={email} placeholder="email@domain.com" />
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="address">Address / Street</label>
                    <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" defaultValue="" placeholder="" />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" defaultValue={city} placeholder="" />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="country">Country / region</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input name="country" id="country" placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" defaultValue="" />
                      <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                        <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <button tabIndex="-1" htmlFor="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-green-600">
                        <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                      </button>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="state">State / province</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input name="state" id="state" placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" defaultValue="" />
                      <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                        <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <button tabIndex="-1" htmlFor="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-green-600">
                        <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                      </button>
                    </div>
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="zipcode">Zipcode</label>
                    <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" defaultValue={postalCode} />
                  </div>

                  <div className="md:col-span-5">
                    <div className="inline-flex items-center">
                      <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" />
                      <label htmlFor="billing_same" className="ml-2">My billing address is different than above.</label>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="soda">How many soda pops?</label>
                    <div className="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <button tabIndex="-1" htmlFor="show_more" className="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <input name="soda" id="soda" placeholder="0" className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent" defaultValue="0" />
                      <button tabIndex="-1" htmlFor="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2 fill-current" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                    <Link href="/checkout/deliveryMethod">
                      <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Continue</button>
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default BillingDetails;