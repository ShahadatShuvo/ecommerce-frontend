import React from "react";
import "../styles/globals.css";
// import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {}, []);

  const [reloadkey, setReloadKey] = React.useState(1);
  const [cart, setCart] = React.useState([]);

  const addToCart = (product, qty) => {
    let newCart = cart;
    for (let i = 0; i < qty; i++) {
      newCart.push(product);
    }
    setCart(newCart);
    setReloadKey(Math.random());
  };

  const removeFromCart = (product, qty) => {
    let newCart = cart;
    newCart.pop(product);
    setCart(newCart);
  };

  const clearCart = () => {};

  return (
    <div className="relative min-h-[92vh] min-w-[96vw]">
      <div className="container mx-auto px-4">
        <Navbar key={reloadkey} cart={cart} />
        <Component
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          {...pageProps}
        />
      </div>
      <div className="absolute bottom-[-30px] w-full">
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
