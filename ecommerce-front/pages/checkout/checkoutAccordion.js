import Header from "@/landingPageElement/Header";
import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { CartContext } from "@/components/CartContext";
import axios from "axios";
import Table from "@/components/Table";
import Input from "@/components/Input";
import { RevealWrapper } from "next-reveal";
import { useSession } from "next-auth/react";
// import Link from "next/link";
// import { useRouter } from "next/router";
import styled from "styled-components";
import Center from "@/components/Center";
import Button from "@/components/Button";
// @important 
function calculateShippingPrice(totalWeight, destination) {
  const shippingData = [
      { size: '1', dimensions: [42, 8, 8], volume: 2.7, freight: 0.53, freightCharge: 1, USA: 50, Alaska: 75, Canada: 60, UK: 65, EU: 135, Norway: 75, Switzerland:75, 'Russia, Belarus': 77, Kazachstan:77, Singapore: 87, 'Hong Kong':87, 'South Korea': 64, Japan: 103 },
      { size: '2', dimensions: [42, 8, 17], volume: 5.7, freight: 1.3, freightCharge: 1.5, USA: 69, Alaska: 95, Canada: 85, UK: 90, EU: 170, Norway: 90,Switzerland:90, 'Russia, Belarus': 96, Kazachstan:96, Singapore: 87, 'Hong Kong':87,'South Korea': 89, Japan: 103 },
      { size: '3', dimensions: [62, 16, 9], volume: 8.93, freight: 1.78, freightCharge: 2, USA: 79, Alaska: 105, Canada: 100, UK: 110, EU: 175, Norway: 105, Switzerland:105, 'Russia, Belarus': 115, Kazachstan:115, Singapore: 87,'Hong Kong':87, 'South Korea': 103, Japan: 103 },
      { size: '4', dimensions: [60, 15, 15], volume: 13.5, freight: 2.7, freightCharge: 3, USA: 105, Alaska: 150, Canada: 125, UK: 138, EU: 210, Norway: 140,Switzerland:140, 'Russia, Belarus': 153, Kazachstan:153, Singapore: 87,'Hong Kong':87, 'South Korea': 130, Japan: 103 },
      { size: '5', dimensions: [60, 20, 20], volume: 24, freight: 4.8, freightCharge: 5, USA: 155, Alaska: 225, Canada: 180, UK: 200, EU: 270, Norway: 205, Switzerland:205, 'Russia, Belarus': 230,Kazachstan:230, Singapore: 87, 'Hong Kong':87, 'South Korea': 184, Japan: 103 },
      { size: '6', dimensions: [60, 45, 20], volume: 54, freight: 10.8, freightCharge: 11, USA: 295, Alaska: 440, Canada: 345, UK: 385, EU: 452, Norway: 399,Switzerland:399, 'Russia, Belarus': 460, Kazachstan:460, Singapore: 143, 'Hong Kong':143, 'South Korea': 348, Japan: 1341 },
      { size: '7', dimensions: [100, 30, 30], volume: 90, freight: 18, freightCharge: 18, USA: 460, Alaska: 695, Canada: 530, UK: 585, EU: 653, Norway: 640,Switzerland:640, 'Russia, Belarus': 728, Kazachstan:728, Singapore: 207, 'Hong Kong':207, 'South Korea': 529, Japan: 1378 },
      { size: '8', dimensions: [45, 55, 40], volume: 99, freight: 19.8, freightCharge: 20, USA: 498, Alaska: 760, Canada: 580, UK: 635, EU: 705, Norway: 699, Switzerland:699, 'Russia, Belarus': 793, Kazachstan:728, Singapore: 225, 'Hong Kong':225, 'South Korea': 573, Japan: 1388 }
  ];

  let remainingWeight = totalWeight;
  let totalShippingCost = 0;

  for (let i = shippingData.length-1; i >0 ; i--) {
      const freightCharge = Math.round(shippingData[i].freight);
      if (remainingWeight >= freightCharge) {
          totalShippingCost += shippingData[i][destination];
          remainingWeight -= freightCharge;
      } else {
          for (let j = i + 1; j < shippingData.length; j++) {
              if (remainingWeight >= Math.round(shippingData[j].freight)) {
                  totalShippingCost += shippingData[j][destination];
                  remainingWeight -= Math.round(shippingData[j].freight);
                  break;
              }
          }
      }

      if (remainingWeight === 0) break;
  }

  return totalShippingCost;
}
function checkoutAccordion() {
  const [commentsAboutOrder, setCommentsAboutOrder] = useState("");
  const { data: session } = useSession();
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [state_province, setState_province] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [country, setCountry] = useState("");

  // states for accordion
  //   const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  //   useEffect(() => {
  //     if (!session) {
  //       return;
  //     }
  //     axios.get("/api/address").then((response) => {
  //       setName(response.data.name);
  //       setEmail(response.data.email);
  //       setCity(response.data.city);
  //       setPostalCode(response.data.postalCode);
  //       setStreetAddress(response.data.streetAddress);
  //       setCountry(response.data.country);
  //     });
  //   }, [session]);
  return (
    <>
      <Header />
      <div className="p-6 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <h1 className="text-3xl font-bold mb-3">Checkout</h1>
          <BillingDetailsAccordion
            name={name}
            email={email}
            city={city}
            postalCode={postalCode}
            streetAddress={streetAddress}
            country={country}
            setCity={setCity}
            setCountry={setCountry}
            setEmail={setEmail}
            setPostalCode={setPostalCode}
            setStreetAddress={setStreetAddress}
            setName={setName}
            state_province={state_province}
            setState_province={setState_province}
            isOpen2={isOpen2}
            setIsOpen2={setIsOpen2}
          />
          <DeliveryMethodAccordion
            commentsAboutOrder={commentsAboutOrder}
            setCommentsAboutOrder={setCommentsAboutOrder}
            name={name}
            email={email}
            city={city}
            postalCode={postalCode}
            streetAddress={streetAddress}
            state_province={state_province}
            country={country}
            isOpen2={isOpen2}
            setIsOpen2={setIsOpen2}
            isOpen3={isOpen3}
            setIsOpen3={setIsOpen3}
          />
          <PaymentMethodAccordion
            commentsAboutOrder={commentsAboutOrder}
            name={name}
            email={email}
            city={city}
            postalCode={postalCode}
            streetAddress={streetAddress}
            state_province={state_province}
            country={country}
            isOpen3={isOpen3}
            setIsOpen3={setIsOpen3}
          />
        </div>
      </div>
    </>
  );
}

export default checkoutAccordion;

function BillingDetailsAccordion({
  name,
  email,
  city,
  postalCode,
  streetAddress,
  country,
  setCity,
  setCountry,
  setEmail,
  setPostalCode,
  setStreetAddress,
  setName,
  state_province,
  setState_province,
  isOpen2,
  setIsOpen2,
}) {
  const toggleAccordion = () => {
    if (
      (name === "" ||
        email === "" ||
        city === "" ||
        postalCode === "" ||
        streetAddress === "" ||
        country === "",
      state_province === "")
    ) {
      console.log(name, email, city, postalCode, streetAddress, country);
      alert("Please fill out all the fields.");
      return;
    }
    setIsOpen2(true);
  };
  return (
    <div className="border rounded-md mb-1">
      <button
        className="w-full p-4 text-left bg-gray-200  
                           hover:bg-gray-300 transition duration-300"
        // onClick={toggleAccordion}
      >
        {" Billing Details "}
        <span
          className={`float-right transform ${
            true ? "rotate-180" : "rotate-0"
          }  
            transition-transform duration-300`}
        >
          &#9660;
        </span>
      </button>
      {true && (
        <div className=" bg-white">
          <div className="bg-gray-400 flex justify-center">
            <div className="container max-w-screen-lg mx-auto">
              <div>
                <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div className="text-gray-600">
                      <p className="font-medium text-lg">Billing Details</p>
                      <p>Please fill out all the fields.</p>
                    </div>

                    <div className="lg:col-span-2">
                      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-5">
                          <label htmlFor="full_name">Full Name</label>
                          <input
                            type="text"
                            name="full_name"
                            id="full_name"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            // defaultValue={name}
                            placeholder="John Doe"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>

                        <div className="md:col-span-5">
                          <label htmlFor="email">Email Address</label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            // defaultValue={email}
                            placeholder="email@domain.com"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        <div className="md:col-span-3">
                          <label htmlFor="address">Address / Street</label>
                          <input
                            type="text"
                            name="address"
                            id="address"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            // defaultValue={streetAddress}
                            onChange={(e) => setStreetAddress(e.target.value)}
                            placeholder=""
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label htmlFor="city">City</label>
                          <input
                            type="text"
                            name="city"
                            id="city"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            // defaultValue={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder=""
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label htmlFor="country">Country / region</label>
                          <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            {/* <input
                              name="country"
                              id="country"
                              placeholder="Country"
                              className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                              onChange={(e) => setCountry(e.target.value)}
                              // defaultValue={country}
                            /> */}
                          <select id="countries" onChange={(e) => setCountry(e.target.value)} className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent">
                            <option selected>Choose a country</option>
                            <option value="USA">United States</option>
                            <option value="Alaska">Alaska</option>
                            <option value="Canada">Canada</option>
                            <option value="UK">United Kingdom</option>
                            <option value="EU">Europe</option>
                            <option value="Norway">Norway</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Russia, Belarus">Russia, Belarus</option>
                            <option value="Kazachstan">Kazachstan</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="South Korea">South Korea</option>
                            <option value="Japan">Japan</option>
                          </select>
                          </div>
                        </div>

                        <div className="md:col-span-2">
                          <label htmlFor="state">State / province</label>
                          <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            <input
                              name="state"
                              id="state"
                              placeholder="State"
                              className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                              onChange={(e) =>
                                setState_province(e.target.value)
                              }
                              // defaultValue={state_province}
                            />
                          </div>
                        </div>

                        <div className="md:col-span-1">
                          <label htmlFor="zipcode">Zipcode</label>
                          <input
                            type="text"
                            name="zipcode"
                            id="zipcode"
                            className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder=""
                            onChange={(e) => setPostalCode(e.target.value)}
                            // defaultValue={postalCode}
                          />
                        </div>

                        {/* <div className="md:col-span-5">
                          <div className="inline-flex items-center">
                            <input
                              type="checkbox"
                              name="billing_same"
                              id="billing_same"
                              onChange={handleCheckBox}
                              className="form-checkbox"
                            />
                            <label htmlFor="billing_same" className="ml-2">
                              My billing address is different than above.
                            </label>
                          </div>
                        </div> */}
                        <div className="md:col-span-5 text-right">
                          <div className="inline-flex items-end">
                            {/* <Link href="/checkout/deliveryMethod"> */}
                            <button
                              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                              onClick={toggleAccordion}
                            >
                              Continue
                            </button>
                            {/* </Link> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DeliveryMethodAccordion({
  commentsAboutOrder,
  setCommentsAboutOrder,
  name,
  email,
  city,
  postalCode,
  streetAddress,
  state_province,
  country,
  isOpen2,
  setIsOpen2,
  isOpen3,
  setIsOpen3,
}) {
  const [shippingCost, setShippingCost] = useState(null)
  useEffect(()=>{
    setShippingCost(calculateShippingPrice(27,country))
  },[country])
  const toggleAccordion = () => {
    if (
      (name === "" ||
        email === "" ||
        city === "" ||
        postalCode === "" ||
        streetAddress === "" ||
        country === "",
      state_province === "")
    ) {
      console.log(name, email, city, postalCode, streetAddress, country);
      alert("Please fill out all the fields.");
      return;
    }
    setIsOpen2(!isOpen2);
  };
  const OpenPaymentMethod = () => {
    if (
      (name === "" ||
        email === "" ||
        city === "" ||
        postalCode === "" ||
        streetAddress === "" ||
        country === "",
      state_province === "" || commentsAboutOrder === "")
    ) {
      alert("Please fill out all the fields.");
      return;
    }
    setIsOpen3(true);
  };
  return (
    <div className="border rounded-md mb-1">
      <button
        className="w-full p-4 text-left bg-gray-200  
                             hover:bg-gray-300 transition duration-300"
        onClick={toggleAccordion}
      >
        {" Delivery Method "}
        <span
          className={`float-right transform ${
            isOpen2 ? "rotate-180" : "rotate-0"
          }  
                transition-transform duration-300`}
        >
          &#9660;
        </span>
      </button>
      {isOpen2 && (
        <div className=" bg-white">
          <div className="bg-gray-400 flex justify-center">
            <div className="container max-w-screen-lg mx-auto">
              <div>
                <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div className="text-gray-600">
                      <p className="font-medium text-lg">Delivery Method</p>
                      <p>
                        Please select the preferred shipping method to use on
                        this order.
                      </p>
                    </div>

                    <div className="lg:col-span-2">
                      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-5">
                          <p>Global Courier Service </p>
                          <input type="radio" checked={true} />
                          <label>Global courier service ${shippingCost}</label>
                        </div>
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-5">
                          <label
                            htmlFor="message"
                            className="text-gray-950 sr-only"
                          >
                            Add Comments About Your Order
                          </label>
                          <textarea
                            onChange={(e) =>
                              setCommentsAboutOrder(e.target.value)
                            }
                            className="w-full rounded-lg p-3 text-sm border border-black"
                            placeholder="Add Comments About Your Order"
                            rows="8"
                            id="message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-5">
                          {/* <Link href="/checkout/paymentMethod"> */}
                          <button
                            type="submit"
                            className="inline-block w-full rounded-lg bg-green-600 px-5 py-3 font-medium text-black sm:w-auto"
                            onClick={OpenPaymentMethod}
                          >
                            Continue
                          </button>
                          {/* </Link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr 0.8fr;
  }
  gap: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
  table thead tr th:nth-child(3),
  table tbody tr td:nth-child(3),
  table tbody tr.subtotal td:nth-child(2) {
    text-align: right;
  }
  table tr.subtotal td {
    padding: 15px 0;
  }
  table tbody tr.subtotal td:nth-child(2) {
    font-size: 1.4rem;
  }
  tr.total td {
    font-weight: bold;
  }
`;

const Box = styled.div`
  //   background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

const ProductInfoCell = styled.td`
  padding: 10px 0;
  button {
    padding: 0 !important;
  }
`;

const ProductImageBox = styled.div`
  width: 70px;
  height: 100px;
  padding: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 60px;
    max-height: 60px;
  }
  @media screen and (min-width: 768px) {
    padding: 10px;
    width: 100px;
    height: 100px;
    img {
      max-width: 80px;
      max-height: 80px;
    }
  }
`;

const QuantityLabel = styled.span`
  padding: 0 15px;
  display: block;
  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 0 6px;
  }
`;

const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;

function PaymentMethodAccordion({
  commentsAboutOrder,
  name,
  email,
  city,
  postalCode,
  streetAddress,
  state_province,
  country,
  isOpen3,
  setIsOpen3,
}) {
  const toggleAccordion = () => {
    if (
      (name === "" ||
        email === "" ||
        city === "" ||
        postalCode === "" ||
        streetAddress === "" ||
        country === "",
      state_province === "" || commentsAboutOrder === "")
    ) {
      console.log(name, email, city, postalCode, streetAddress, country);
      alert("Please fill out all the fields.");
      return;
    }
    setIsOpen3(!isOpen3);
  };
  const { cartProducts, addProduct, removeProduct, clearCart } =
    useContext(CartContext);
  const { data: session } = useSession();
  const [products, setProducts] = useState([]);
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [city, setCity] = useState("");
  //   const [postalCode, setPostalCode] = useState("");
  //   const [streetAddress, setStreetAddress] = useState("");
  //   const [country, setCountry] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [shippingFee, setShippingFee] = useState(null);
  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (window?.location.href.includes("success")) {
      setIsSuccess(true);
      clearCart();
    }
    axios.get("/api/settings?name=shippingFee").then((res) => {
      setShippingFee(res.data.value);
    });
  }, []);
  //   useEffect(() => {
  //     if (!session) {
  //       return;
  //     }
  //     axios.get("/api/address").then((response) => {
  //       setName(response.data.name);
  //       setEmail(response.data.email);
  //       setCity(response.data.city);
  //       setPostalCode(response.data.postalCode);
  //       setStreetAddress(response.data.streetAddress);
  //       setCountry(response.data.country);
  //     });
  //   }, [session]);
  function moreOfThisProduct(id) {
    addProduct(id);
  }
  function lessOfThisProduct(id) {
    removeProduct(id);
  }
  async function goToPayment() {
    const response = await axios.post("/api/checkout", {
      name,
      email,
      city,
      postalCode,
      streetAddress,
      state_province,
      country,
      commentsAboutOrder,
      cartProducts,
    });
    if (response.data.url) {
      window.location = response.data.url;
    }
  }
  let productsTotal = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    productsTotal += price;
  }

  if (isSuccess) {
    return (
      <>
        <Header />
        <Center>
          <ColumnsWrapper>
            <Box>
              <h1>Thanks for your order!</h1>
              <p>We will email you when your order will be sent.</p>
            </Box>
          </ColumnsWrapper>
        </Center>
      </>
    );
  }
  return (
    <>
      <div className="border rounded-md mb-1">
        <button
          className="w-full p-4 text-left bg-gray-200  
                             hover:bg-gray-300 transition duration-300"
          onClick={toggleAccordion}
        >
          {"Payment Method"}
          <span
            className={`float-right transform ${
              isOpen3 ? "rotate-180" : "rotate-0"
            }  
                transition-transform duration-300`}
          >
            &#9660;
          </span>
        </button>
        {isOpen3 && (
          <Center>
            <ColumnsWrapper>
             <table>
                <tbody>
                  <>
                    <tr className="subtotal">
                      <td colSpan={2}>Products </td>
                      <td>${productsTotal.toFixed(2)}</td>
                    </tr>
                    <tr className="subtotal">
                      <td colSpan={2}>Shipping </td>
                      <td>${calculateShippingPrice(27,country)}</td>
                    </tr>
                    <tr className="subtotal total">
                      <td colSpan={2}>Total </td>
                      <td>
                        ${parseInt(productsTotal) + parseInt(calculateShippingPrice(27,country) || 0)}
                      </td>
                    </tr>
                  </>
                </tbody>
              </table>
              <div>
                <button className="bg-green-600 px-3 py-2 font-medium text-white" onClick={goToPayment}>
                  Pay Now
                </button>
              </div>
            </ColumnsWrapper>
          </Center>
        )}
      </div>
    </>
  );
}
