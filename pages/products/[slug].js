/* eslint-disable @next/next/no-img-element */
import { Button, TextField } from "@mui/material";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Link from "next/link";

function ProductDetail({ product, addToCart }) {
  const [quantity, setQuantity] = React.useState(1);

  const productItem = product?.data[0]?.attributes;
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-5 md:py-14 mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-[40%]">
              <img
                src={`http://localhost:1337${productItem?.image?.data?.attributes?.url}`}
                alt="Picture of the author"
                className="w-full max-h-[350px] md:max-h-[500px]"
              />
            </div>
            <div className="w-full md:w-[60%] lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 capitalize">
                {productItem?.title}
              </h1>
              <div className="flex">
                <p className="mt-1">৳{productItem?.discountedprice}</p>
                <p className="mt-1 ml-3 text-red-600 line-through">
                  ৳{productItem?.price}
                </p>
              </div>

              <p className="leading-relaxed mt-3">{productItem?.description}</p>
              <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between  mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <p className="hidden bg-white-500 bg-blue-500 bg-gray-500 bg-green-500"></p>
                  <button
                    className={`border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none ${
                      productItem?.color === "black"
                        ? "bg-black"
                        : `bg-${productItem?.color}-500`
                    }`}
                  ></button>
                  {/* <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button> */}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="w-[50%] md:w-[30%] ">
                  <TextField
                    fullWidth
                    size="small"
                    id="outlined-basic"
                    label="Quantity"
                    type={"number"}
                    variant="outlined"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    InputProps={{
                      inputProps: { min: 1, max: 100 },
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ৳{productItem?.discountedprice}
                </span>
                <div className="flex flex-col md:flex-row gap-2">
                  <Button
                    size="small"
                    color="success"
                    variant="outlined"
                    startIcon={<AddShoppingCartIcon />}
                    onClick={() => addToCart(productItem, quantity)}
                  >
                    Add to cart
                  </Button>
                  <Link href="/checkout">
                    <Button
                      size="small"
                      color="info"
                      variant="outlined"
                      sx={{ ml: 2 }}
                      startIcon={<ShoppingCartCheckoutIcon />}
                    >
                      Checkout
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `http://localhost:1337/api/products?filters[slug]=${context.params.slug}&populate=*`
  );
  const product = await res.json();
  return {
    props: {
      product,
    },
  };
}

export default ProductDetail;
