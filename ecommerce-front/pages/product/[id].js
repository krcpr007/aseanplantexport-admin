import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";
import WhiteBox from "@/components/WhiteBox";
import ProductImages from "@/components/ProductImages";
import CartIcon from "@/components/icons/CartIcon";
import FlyingButton from "@/components/FlyingButton";
import ProductReviews from "@/components/ProductReviews";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: .8fr 1.2fr;
  }
  gap: 40px;
  margin: 40px 0;
`;
const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Price = styled.span`
  font-size: 1.4rem;
`;

export default function ProductPage({ product }) {
  const linkIfy = (text) => {
    //eslint-disable-next-line
    let urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text?.replace(urlRegex, function (url) {
      return '<a style="color:#70B5F9;text-decoration:underline" target="_blank" className="hover:underline" href="' + url + '">' + url + '</a>';
    });
  }
  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBox>
            <ProductImages images={product.images} />
          </WhiteBox>
          <div>
            <Title>{product.title}</Title>
            {/* <p>{product.description}</p> */}
            <p className='text-sm font-medium'>{product.description?.split(new RegExp('\r?\n', 'g')).map(function (item, idx) {
              // it replace the enter key or \n  with <br/> tag.
              return (
                <span key={idx}>
                  {<span dangerouslySetInnerHTML={{ __html: linkIfy(item) }} />}
                  {/* {item} */}
                  <br />
                </span>
              )
            })}</p>
            <PriceRow>
              <div>
                <Price>${product.price}</Price>
              </div>
              <div>
                <FlyingButton main _id={product._id} src={product.images?.[0]}>
                  <CartIcon />Add to cart
                </FlyingButton>
              </div>
            </PriceRow>
          </div>
        </ColWrapper>
        <ProductReviews product={product} />
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    }
  }
}