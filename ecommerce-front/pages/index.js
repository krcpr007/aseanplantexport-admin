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
// import '../styles/globals.css'
export default function HomePage({ featuredProduct, newProducts, wishedNewProducts }) {
  return (
    <>
      <Head>
        <title>Asean Plant Export | Thailand Supplier of Thai Plants | Rhizome, Tubers, Bulbs, Seeds, Hoy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Asean Plant Export is one of the World class supplier from Thailand for Seeds, Rhizome, Tubers, Bulbs and Musa world wide" />
        <meta name="keywords" content="Caudex Plants, Flowering Plants, Shrubs, Fruit Trees, Hoya Plants, Hoya Rooted Cuttings, Mangrove, Musa, Banana, Materials & Decoration, Seeds, Tuber, Bulbs, Rhizomes, Waterlily , Aquatic Plants, Adenium,Plumeria, Lotus Rhizomes, Giant Grafted Hibiscus, Books" />
      </Head>
      <Header />
      <div class="container">
        <div class="hero">
          <div class="row">
            <div class="hero__text flex-basis">
              <h1 class="hero-title">Get your <span>plants</span> right here</h1>
              <p class="hero-text">Vel deserunt blanditiis quibusdam saepe assumenda omnis voluptas. Et dolorum dolor et. Enim cum nostrum et. Id dolorum fuga deserunt aut qui fuga placeat qui. Nam neque qui nobis aut. Consectetur et dicta magnam ducimus</p>
            </div>

            <div class="hero__image flex-basis">
              <img id="header-img" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngmart.com%2Ffiles%2F7%2FGrowing-Plant-PNG-Transparent-Picture.png&f=1&nofb=1" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Featured product={featuredProduct} />
      <NewProducts products={newProducts} wishedProducts={wishedNewProducts} />
      <BestSelling />
      <WelcomeNote />
      <Footer />
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
  const newProducts = await Product.find({}, null, { sort: { '_id': -1 }, limit: 10 });
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
