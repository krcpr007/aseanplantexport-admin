import Link from "next/link";
import ProductBox from "@/components/ProductBox";
export default function FewProducts({ newProducts, wishedNewProducts }) {
  return (
    <section
      style={{
        backgroundImage: 'url("/Cacti.webp")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        opacity: "0.8",
      }}
    >
      <div>
        <div className="">
          <h1 className="text-center text-4xl font-bold mt-10 mb-5 text-custom-green">
            Recent Products{" "}
            <span className="text-white">from Aseanplantexport</span>{" "}
          </h1>
          <p className="px-5 md:px-20 text-white text-justify">
            We’re constantly introducing new and exciting additions to ensure
            your store remains at the forefront of the industry. Our range of
            wholesale tropical plants is continuously expanding, keeping pace
            with evolving trends. Can’t find a specific item in our collection?
            Don’t hesitate to reach out! We welcome your requests for any items
            that might be missing from our current offerings. We’ll explore
            every possibility to accommodate your needs by considering special
            orders to ensure you have access to the botanicals your customers
            desire. <br />
            At Biotopo Wholesale, your satisfaction and keeping your inventory
            updated are our top priorities. Contact us today to explore the
            possibilities of broadening your botanical selection.
          </p>
        </div>
      </div>
      <div
        id="Projects"
        className="py-10 w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-8 md:gap-y-20 gap-x-0 md:gap-x-14 mt-5 mb-5"
      >
        {newProducts.map((product) => {
          return (
              <ProductBox {...product} wished={wishedNewProducts.includes(product._id)} key={product._id} />
          );
        })}
      </div>
      <div className="flex justify-center                                 ">
        <Link href="/categories">
          <button className="bg-custom-green text-white px-5 py-2 rounded-lg mb-10 font-medium"> View Category </button>
         </Link>
      </div>
    </section>
  );
}

function Card({product}) {
  return (
    <>
      <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
          <img
            src="https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Product"
            className="h-80 w-72 object-cover rounded-t-xl"
          />
          <div className="px-4 py-3 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
            <p className="text-lg font-bold text-black truncate block capitalize">
              Product Name
            </p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                $149
              </p>
              <del>
                <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
              </del>
              <div className="ml-auto">
                
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
