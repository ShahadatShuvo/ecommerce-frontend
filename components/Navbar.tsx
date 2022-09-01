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
    <div className="w-full py-3 my-4 rounded-lg px-8 mx-auto bg-gray-100 flex flex-col md:flex-row flex-wrap justify-between text-gray-600">
      <div className="order-2 md:order-1 w-full md:w-1/3 flex justify-center md:justify-start mt-3 md:mt-0 items-center">
        <Link href="/">
          <a className="mr-5 hover:text-gray-900">Home</a>
        </Link>
        <Link href="/about">
          <a className="mr-5 hover:text-gray-900">About</a>
        </Link>
        <Link href="/shop">
          <a className="mr-5 hover:text-gray-900">Shop</a>
        </Link>
        <Link href="/contact">
          <a className="hover:text-gray-900 mr-5">Contact</a>
        </Link>
        <Link href="/user">
          <a className="hover:text-gray-900">User</a>
        </Link>
      </div>
      <div className="order-1 md:order-2 w-full md:w-1/3 flex justify-center hover:font-bold">
        <Link href="/shop">
          <div className="w-full flex justify-center items-center ">
            <Image
              src="/shopping-cart-svgrepo-com.svg"
              alt="Picture of the author"
              width={30}
              height={30}
            />
            <span className="ml-3 text-2xl font-bold md:font-normal cursor-pointer">
              MyShop
            </span>
          </div>
        </Link>
      </div>
      <div className="order-3 w-full md:w-1/3 flex justify-center lg:justify-end items-center pt-3 md:pt-0 lg:ml-0">
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
  );
}

export default Navbar;
