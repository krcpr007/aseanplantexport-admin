import React from 'react'
import Header from "@/landingPageElement/Header";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { BestSeller } from "@/models/BestSelling";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { WishedProduct } from "@/models/WishedProduct";
function bestselling({ products, wishedProducts }) {
    return (
        <>
            <Header />
            <Center>
                <Title>Best Selling</Title>
            </Center>
                <ProductsGrid products={products} wishedProducts={wishedProducts} />
        </>
    )
}

export default bestselling;
export async function getServerSideProps(ctx) {
    await mongooseConnect();
    const products = await BestSeller.find({}, null, { sort: { '_id': -1 } });
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
      }
    };
  }