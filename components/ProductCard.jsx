/* eslint-disable @next/next/no-img-element */
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

function ProductCard({ product }) {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-1">
      <div className="border border-blue-100 p-3">
        {product?.attributes?.image?.data?.attributes?.url && (
          <a className="block relative h-48 rounded overflow-hidden">
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
                <p className="mt-1">৳{product?.attributes?.discountedprice}</p>
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
    </div>
  );
}

export default ProductCard;
