import styled from "styled-components";
import Button, { ButtonStyle } from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import { primary } from "@/lib/colors";
import FlyingButton from "@/components/FlyingButton";
import HeartOutlineIcon from "@/components/icons/HeartOutlineIcon";
import HeartSolidIcon from "@/components/icons/HeartSolidIcon";
import axios from "axios";
// import {CartContext} from "@/components/CartContext";
import toast, { Toaster } from 'react-hot-toast';
import { FaCartArrowDown } from "react-icons/fa";
const ProductWrapper = styled.div`
  button{
    width: 100%;
    text-align: center;
    justify-content: center;
  }
`;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  position: relative;
  img{
    max-width: 100%;
    max-height: 80px;
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size:.9rem;
  color:inherit;
  text-decoration:none;
  margin:0;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content:space-between;
  margin-top:2px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight:400;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight:600;
    text-align: left;
  }
`;

const WishlistButton = styled.button`
  border:0;
  width: 40px !important;
  height: 40px;
  padding: 10px;
  position: absolute;
  top:0;
  right:0;
  background:transparent;
  cursor: pointer;
  ${props => props.wished ? `
    color:red;
  ` : `
    color:black;
  `}
  svg{
    width: 16px;
  }
`;

export default function ProductBox({
  _id, title, description, price, images, wished = false,
  onRemoveFromWishlist = () => { },
}) {
  const { addProduct } = useContext(CartContext);
  const url = '/product/' + _id;
  const [isWished, setIsWished] = useState(wished);
  function addToWishlist(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    const nextValue = !isWished;
    if (nextValue === false && onRemoveFromWishlist) {
      onRemoveFromWishlist(_id);
    }
    axios.post('/api/wishlist', {
      product: _id,
    }).then(() => {
      // toast.success('Added to wishlist')
    });
    setIsWished(nextValue);
  }
  return (
    <>
      {/* <ProductWrapper>
        <WhiteBox href={url}>
          <div>
            <WishlistButton wished={isWished} onClick={addToWishlist}>
              {isWished ? <HeartSolidIcon /> : <HeartOutlineIcon />}
            </WishlistButton>
            <img src={images?.[0]} alt="" />
          </div>
        </WhiteBox>
        <ProductInfoBox>
          <Title href={url}>{title}</Title>
          <PriceRow>
            <Price>
              ${price}
            </Price>
            <FlyingButton _id={_id} src={images?.[0]}>Add to cart</FlyingButton>
          </PriceRow>
        </ProductInfoBox>
      </ProductWrapper>
      <Toaster/> */}


      <div class="max-w-sm bg-white px-4 pt-2 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 w-60">
        <div class="relative">
          <img class="w-full rounded-xl" src="https://aseanplantexport.com/image/cache/catalog/++CM%20Begonia/Begonia%20no%20name%201-420x546.png" alt="Colors" />
          <p class="absolute top-0 bg-green-400 text-sm text-gray-800 font-semibold py-1 px-1 rounded-br-lg rounded-tl-lg">${price}</p>
          <WishlistButton wished={isWished} title="Whishlist" onClick={addToWishlist}>
            {isWished ? <HeartSolidIcon className="text-2xl" /> : <HeartOutlineIcon className="text-2xl" />}
          </WishlistButton>
        </div>
        <h1 class="mt-4 text-gray-800 text-xl font-medium cursor-pointer">{title}</h1>
        <div class="my-0">
          <button onClick={() => addProduct(_id)} class="mt-0 text-base w-full text-white bg-green-600 py-2 rounded-xl shadow-lg">Add to cart <FaCartArrowDown className="inline" />
            {/* <FlyingButton _id={_id} src={images?.[0]}>Add to cart</FlyingButton> */}
          </button>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}