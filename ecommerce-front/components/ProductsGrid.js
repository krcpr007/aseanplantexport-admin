import styled from "styled-components";
import ProductBox from "@/components/ProductBox";
import { RevealWrapper } from "next-reveal";
import Title from "./Title";

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
import React, { useEffect, useRef, useState } from "react";
import Breadcrumb from "./BreadCrumb";

export default function ProductsGrid({
  title,
  products,
  wishedProducts = [],
  hasMore: initialHasMore,
  pages=[
    { name: "Products", href: "/products", current: false },
  
  ],
}) {
  const [items, setItems] = useState(products);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const loader = useRef(null);
  const pageRef = useRef(1); // Use useRef for page variable
  
  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
  
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);
  
  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      loadMore();
    }
  };
  
  const loadMore = () => {
    if (hasMore) {
      const nextPage = pageRef.current + 1; // Access page using pageRef
      fetch(`/api/products?page=${nextPage}`)
        .then((res) => res.json())
        .then((newProducts) => {
          setItems((prevItems) => [...prevItems, ...newProducts]);
          pageRef.current = nextPage; // Update page using pageRef
          setHasMore(newProducts.length > 0);
        });
    }
  };
  
  
  return (
    <>
      <div className="min-h-screen bg-gradient-to-tr from-green-300 to-white flex justify-center items-center py-20">
        <div>
          <Breadcrumb pages={pages} />
          <Title>
            <span dangerouslySetInnerHTML={{ __html: title }} />
          </Title>
          <div className="md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0">
            {items?.length > 0 &&
              items.map((product, index) => (
                <RevealWrapper key={product._id+index} delay={index * 10}>
                  <ProductBox
                    {...product}
                    wished={wishedProducts.includes(product._id)}
                    key={product._id}
                  />
                </RevealWrapper>
              ))}
          </div>
            <div className="loading py-4" ref={loader}>
              <h2>Loading More...</h2>
            </div>
        </div>
      </div>
    </>
  );
}
