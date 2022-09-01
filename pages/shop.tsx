/* eslint-disable @next/next/no-img-element */
import { Button, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductProps } from "../interfaces";

function Shop({ products }: ProductProps | any) {
  const [search, setSearch] = React.useState("");
  return (
    <div>
      <div className="w-[30%] mx-auto">
        <TextField
          fullWidth
          size="small"
          id="outlined-basic"
          label="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          variant="outlined"
        />
      </div>
      <p className="my-5 text-center">{search}</p>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 md:py-5 mx-auto">
          <div className="flex flex-wrap">
            {products.data.map((product: any) => (
              <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                {product?.attributes?.image?.data?.attributes?.url && (
                  <a className="block relative h-48 rounded overflow-hidden">
                    {/* <Image
                      src="http://127.0.0.1:1337/uploads/shirt3_08610a78db.jpeg"
                      // src={product?.attributes?.image?.data?.attributes?.url}
                      alt="Picture of the author"
                      width={200}
                      height={200}
                    /> */}
                    <img
                      src={`http://localhost:1337${product?.attributes?.image?.data?.attributes?.url}`}
                      alt="Picture of the author"
                    />
                  </a>
                )}
                <div className="flex justify-between items-center">
                  <div className="w-full mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {product?.attributes?.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium capitalize">
                      {product?.attributes?.title}
                    </h2>
                    <div className="w-full flex justify-between items-center">
                      <div className="flex">
                        <p className="mt-1">
                          ৳{product?.attributes?.discountedprice}
                        </p>
                        <p className="mt-1 ml-3 text-red-600 line-through">
                          ৳{product?.attributes?.price}
                        </p>
                      </div>
                      <div>
                        <Link href={`/products/${product?.attributes?.slug}`}>
                          <Button size="small" variant="text">
                            Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
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
  return {
    props: {
      products,
    },
  };
}
export default Shop;
