import Header from "@/landingPageElement/Header";
// import styled from "styled-components";
// import Center from "@/components/Center";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
// import Title from "@/components/Title";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { WishedProduct } from "@/models/WishedProduct";

export default function ProductsPage({ products, wishedProducts , page, hasMore}) {
  return (
    <>
      <Header />
      <ProductsGrid title={"Explore all products"} hasMore={hasMore} page={page} products={products} wishedProducts={wishedProducts} />
    </>
  );
}

// export async function getServerSideProps(ctx) {
//   await mongooseConnect();
//   const products = await Product.find({}, null, { sort: { '_id': -1 } });
//   const session = await getServerSession(ctx.req, ctx.res, authOptions);
//   const wishedProducts = session?.user
//     ? await WishedProduct.find({
//       userEmail: session?.user.email,
//       product: products.map(p => p._id.toString()),
//     })
//     : [];
//   return {
//     props: {
//       products: JSON.parse(JSON.stringify(products)),
//       wishedProducts: wishedProducts.map(i => i.product.toString()),
//     }
//   };
// }
export async function getServerSideProps(ctx) {
  const page = ctx.query.page ? parseInt(ctx.query.page) : 1;
  const limit = 16;
  const skip = (page - 1) * limit;

  await mongooseConnect();
  const products = await Product.find({}, null, { 
    sort: { '_id': -1 },
    skip: skip,
    limit: limit,
   })
  // .skip(skip).limit(limit);
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  const wishedProducts = session?.user
    ? await WishedProduct.find({
      userEmail: session?.user.email,
      product: products.map(p => p._id.toString()),
    })
    : [];
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      wishedProducts: wishedProducts.map(i => i.product.toString()),
      page: page,
      hasMore: products.length === limit,
    }
  };
}