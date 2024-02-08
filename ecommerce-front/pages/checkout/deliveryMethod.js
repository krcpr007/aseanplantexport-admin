import React, {use, useState} from 'react'
import { useContext, useEffect } from "react";
import { CartContext } from "@/components/CartContext";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';
function DeliveryMethod() {
  const router = useRouter();
  const { cartProducts, addProduct, removeProduct, clearCart } =
    useContext(CartContext);
    const { data: session } = useSession();

  // i have to show global courier service ems  with cost / price
  // a input area to add comments about order
  // a button to go to next step
  useEffect(() => {
    if (cartProducts.length <= 0) {
      router.push("/cart");
      return;
    }
    if (!session) {
      return;
    }
  },[])
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
              Please select the preferred shipping method to use on this order.
            </p>
          </div>
          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="#" className="space-y-4">

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <div>
                  <p>Global Courier Service </p>
                  <input type="radio" checked={true} />
                  <label>Global courier service - $105.00</label>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
              </div>
              <div>
                <label for="message" className="text-gray-950 sr-only">
                  Add Comments About Your Order
                </label>
                <textarea
                  className="w-full rounded-lg p-3 text-sm border border-black"
                  placeholder="Add Comments About Your Order"
                  rows="8"
                  id="message"
                ></textarea>
              </div>
              <div className="mt-4">
                <Link href="/checkout/paymentMethod">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-green-600 px-5 py-3 font-medium text-black sm:w-auto"
                  >
                    Continue
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeliveryMethod;
