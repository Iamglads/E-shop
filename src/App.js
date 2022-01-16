import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import "./App.css";

import { Products, NavBar } from "./Components";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const getProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const getCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const updateCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item);
  };

  useEffect(() => {
    getProducts();
    getCart();
  }, []);

  return (
    <div>
      <NavBar totalItems={cart.total_items} />
      <div className="main__container">
        <Products products={products} updateCart={updateCart} />
      </div>
    </div>
  );
};

export default App;
