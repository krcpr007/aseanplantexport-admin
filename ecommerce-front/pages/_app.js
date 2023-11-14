import { createGlobalStyle } from "styled-components";
import { CartContextProvider } from "@/components/CartContext";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import '../styles/globals.css'
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  body{
    background-color: #eee;
    padding:0;
    margin:0;
    font-family: 'Poppins', sans-serif;
  }
  hr{
    display: block;
    border:0;
    border-top:1px solid #ccc;
  }
`;

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>Asean Plant Export | Thailand Supplier of Thai Plants | Rhizome, Tubers, Bulbs, Seeds, Hoy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Asean Plant Export is one of the World class supplier from Thailand for Seeds, Rhizome, Tubers, Bulbs and Musa world wide" />
        <meta name="keywords" content="Caudex Plants, Flowering Plants, Shrubs, Fruit Trees, Hoya Plants, Hoya Rooted Cuttings, Mangrove, Musa, Banana, Materials & Decoration, Seeds, Tuber, Bulbs, Rhizomes, Waterlily , Aquatic Plants, Adenium,Plumeria, Lotus Rhizomes, Giant Grafted Hibiscus, Books" />
      </Head>
      <GlobalStyles />
      <SessionProvider session={session}>
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </SessionProvider>
    </>
  );
}
