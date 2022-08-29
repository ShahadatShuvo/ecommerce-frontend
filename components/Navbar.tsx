import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="bg-gray-100">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <Link href="/">
              <a className="mr-5 hover:text-gray-900">Home</a>
            </Link>
            <Link href="/about">
              <a className="mr-5 hover:text-gray-900">About</a>
            </Link>
            <Link href="/products">
              <a className="mr-5 hover:text-gray-900">Products</a>
            </Link>
            <Link href="/contact">
              <a className="hover:text-gray-900">Contact</a>
            </Link>
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <Image
              src="/shopping-cart-svgrepo-com.svg"
              alt="Picture of the author"
              width={30}
              height={30}
            />
            <span className="ml-3 text-xl">MyShop</span>
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end pt-5 md:pt-0 lg:ml-0">
            <Button
              size="small"
              color="info"
              variant="contained"
              sx={{
                color: "black",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              Log in
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
