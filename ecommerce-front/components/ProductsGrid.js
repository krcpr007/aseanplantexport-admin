import styled from "styled-components";
import ProductBox from "@/components/ProductBox";
import { RevealWrapper } from 'next-reveal'

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default function ProductsGrid({ products, wishedProducts = [] }) {
  return (<>
    {/* <StyledProductsGrid interval={100}> */}
    {/* <div className="grid grid-cols-3 gap-3"> */}
    <div className="min-h-screen bg-gradient-to-tr from-green-300 to-white flex justify-center items-center py-20">
      <div className="md:px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0">
        {products?.length > 0 && products.map((product, index) => (
          // <RevealWrapper key={product._id} delay={index * 50}>
          <ProductBox {...product} wished={wishedProducts.includes(product._id)}  key={product._id}/>
          // </RevealWrapper>

          // <div className="min-h-screen bg-gray-900 flex items-center">

          // </div>
        ))}
        {/* </StyledProductsGrid> */}
        {/* </div> */}
      </div>
    </div >
  </>
  );
}