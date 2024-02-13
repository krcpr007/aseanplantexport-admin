import Header from '@/landingPageElement/Header';
import Footer from '@/landingPageElement/Footer';
import Head from 'next/head'
function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Asean Plant Export | Thailand Supplier of Thai Plants | Rhizome, Tubers, Bulbs, Seeds, Hoy</title>
        <link rel="icon" href="/Cacti.webp" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Asean Plant Export is one of the World class supplier from Thailand for Seeds, Rhizome, Tubers, Bulbs and Musa world wide" />
        <meta name="keywords" content="Caudex Plants, Flowering Plants, Shrubs, Fruit Trees, Hoya Plants, Hoya Rooted Cuttings, Mangrove, Musa, Banana, Materials & Decoration, Seeds, Tuber, Bulbs, Rhizomes, Waterlily , Aquatic Plants, Adenium,Plumeria, Lotus Rhizomes, Giant Grafted Hibiscus, Books" />
      </Head>
      <div className="cursor"></div>
      {/* <Header /> */}
      {children}
      <Footer/>   
    </>
  );
}
export default Layout; 