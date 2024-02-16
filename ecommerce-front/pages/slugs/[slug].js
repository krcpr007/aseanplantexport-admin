import { useRouter } from "next/router";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "@/components/Spinner";
import Header from "@/landingPageElement/Header";
import Title from "@/components/Title";
import ProductBox from "@/components/ProductBox";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { WishedProduct } from "@/models/WishedProduct";
import { RevealWrapper } from "next-reveal";
export default function Slug({ products = [], wishedProducts = [] }) {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-tr from-green-300 to-white flex justify-center items-center py-20">
        <div className="md:px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0">
          {products?.length > 0 &&
            products.map((product, index) => (
              <RevealWrapper key={product._id} delay={index * 50}>
                <ProductBox
                  {...product}
                  wished={wishedProducts.includes(product._id)}
                  key={product._id}
                />
              </RevealWrapper>
            ))}
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  // Get the slug parameter from the route
  const { slug } = context.query;
  const category = await Category.findOne({ slug: { $regex: slug, $options: 'i' } });
  const categoryId = category._id;
  const products = await Product.find({ category: categoryId });
  const session = await getServerSession(context.req, context.res, authOptions);
  const wishedProducts = session?.user
    ? await WishedProduct.find({
        userEmail: session?.user.email,
        product: products.map((p) => p._id.toString()),
      })
    : [];
  // console.log(products);
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      wishedProducts: wishedProducts.map((i) => i.product.toString()),
    },
  };
}
