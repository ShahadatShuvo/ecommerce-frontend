/* eslint-disable @next/next/no-img-element */
import { Button, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductProps } from "../interfaces";
import ProductCard from "../components/ProductCard";

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
          <div className="flex flex-wrap mb-10">
            {products.data.map((product: any) => (
              <ProductCard key={product.id} product={product} />
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
