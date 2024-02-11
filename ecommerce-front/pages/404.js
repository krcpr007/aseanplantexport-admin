import Header from "@/landingPageElement/Header";
import React from "react";

function Error() {
  return (
    <>
      <Header />
      <div>
        <div class="flex flex-col bg-gray-50 items-center justify-center h-screen">
          <h1 class="text-4xl font-bold mb-4">404 - Not Found</h1>
          <p class="text-gray-600">
            Sorry, the page you're looking for doesn't exist.
          </p>

          {/* <div class="mt-6">
            <input
              type="text"
              placeholder="Search for content..."
              class="px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
            />
          </div> */}

          <div class="mt-4 text-center">
            <p class="text-gray-600 mb-3">Or, you might want to explore:</p>
            <a href="/category" class="text-green-500 hover:underline">
              Categories
            </a>
            <a href="/products" class="text-green-500 hover:underline ml-2">
              Products
            </a>
            <a href="/contact-us" class="text-green-500 hover:underline ml-2">
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error;
