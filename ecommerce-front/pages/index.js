import Header from "@/components/Header";
import Featured from "@/components/Featured";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import { WishedProduct } from "@/models/WishedProduct";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Setting } from "@/models/Setting";
import Footer from "@/components/Footer";
import WelcomeNote from "@/components/WelcomeNote";
import BestSelling from "@/components/BestSelling";
import Head from "next/head";
import LandingPage from "@/landingPageElement/LandingPage";
// import '../styles/globals.css'
export default function HomePage({ featuredProduct, newProducts, wishedNewProducts }) {
  return (
    <>
      <LandingPage newProducts={newProducts} wishedNewProducts={wishedNewProducts} />
      {/* <Featured product={featuredProduct} />
      <NewProducts products={newProducts} wishedProducts={wishedNewProducts} />
      <BestSelling />
      <WelcomeNote />
      <Footer /> */}
    </>
  );
}


export async function getServerSideProps(ctx) {
  await mongooseConnect();
  const featuredProductSetting = await Setting.findOne({ name: 'featuredProductId' });
  // console.log("featuredProductSetting", featuredProductSetting._id);
  const featuredProductId = featuredProductSetting._id.toString();;
  // console.log("featuredProductId", featuredProductId);
  const featuredProduct = await Product.findOne({ _id: featuredProductId });
  const newProducts = await Product.find({}, null, { sort: { '_id': -1 }, limit: 10 }).limit(6);
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  const wishedNewProducts = session?.user
    ? await WishedProduct.find({
      userEmail: session.user.email,
      product: newProducts.map(p => p._id.toString()),
    })
    : [];
  // console.log("featuredProduct", featuredProduct);
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      wishedNewProducts: wishedNewProducts.map(i => i.product.toString()),
    },
  };
}
