import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function Navbar({ cart }: any) {
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
              <a className="mr-5 hover:text-gray-900">Shop</a>
            </Link>
            <Link href="/contact">
              <a className="hover:text-gray-900">Contact</a>
            </Link>
          </nav>
          <Link href="/products">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <Image
                src="/shopping-cart-svgrepo-com.svg"
                alt="Picture of the author"
                width={30}
                height={30}
              />

              <span className="ml-3 text-xl cursor-pointer">MyShop</span>
            </a>
          </Link>
          <div className="lg:w-2/5 flex lg:justify-end items-center pt-5 md:pt-0 lg:ml-0 ">
            <div className="mr-5">
              <Link href="/cart">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={cart?.length} color="secondary">
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </Link>
            </div>
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
