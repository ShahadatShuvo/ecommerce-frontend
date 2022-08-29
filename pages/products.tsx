import Image from "next/image";
import React from "react";
import { ProductProps } from "../interfaces";

function Products({ products }: ProductProps | any) {
  console.log("products:", products);
  console.log(
    "img:",
    products.data[0]?.attributes?.image?.data?.attributes?.url
  );
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.data.map((product: any) => (
              <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <Image
                    src="/dummyImage.png"
                    // src={product?.attributes?.image?.data?.attributes?.url}
                    alt="Picture of the author"
                    width={200}
                    height={200}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product?.attributes?.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {product?.attributes?.title}
                  </h2>
                  <p className="mt-1">${product?.attributes?.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const res = await fetch("http://localhost:1337/api/products?populate=*");
  const products = await res.json();
  console.log("products:", products);
  return {
    props: {
      products,
    },
  };
}
export default Products;
