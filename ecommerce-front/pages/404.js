import Header from "@/landingPageElement/Header";
import Link from 'next/link'

function Error() {
  return (
    <>
      <Header />
      <div>
        <div className="flex flex-col bg-gray-100 items-center justify-center h-screen">
          <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
          <p className="text-gray-600">
            Sorry, the page you're looking for doesn't exist.
          </p>

          {/* <div className="mt-6">
            <input
              type="text"
              placeholder="Search for content..."
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
            />
          </div> */}

          <div className="mt-4 text-center">
            <p className="text-gray-600 mb-3 font-medium">Or, you might want to explore:</p>
            <Link href="/category" className="text-green-500 ">
              Categories
            </Link>
            <Link href="/products" className="text-green-500  ml-2">
              Products
            </Link>
            <Link href="/contact-us" className="text-green-500  ml-2">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error;
