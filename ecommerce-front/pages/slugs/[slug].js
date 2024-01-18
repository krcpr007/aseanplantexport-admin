import { useRouter } from "next/router";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "@/components/Spinner";
import Header from "@/landingPageElement/Header";
export default function Slug() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Header />
      <div className="container">
        
      <p>Post: {router.query.slug}</p>
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  // Get the slug parameter from the route
  const { slug } = context.query;
  const category = await Category.findOne({ slug: slug.toLowerCase() });
  // console.log(category);
  const categoryId = category._id;
  const products = await Product.find({ category: categoryId });
  // console.log(products);
  return {
    props: {
      products: JSON.parse(JSON.stringify(products))
    }
  }
}
