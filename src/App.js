import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { Home, NavBar, Cart, Footer, About, Contact } from "./Components";

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
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const updateCartQuantity = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const removeFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const removeCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  useEffect(() => {
    getProducts();
    getCart();
  }, []);

  return (
    <Router>
      <div>
        <NavBar totalItems={cart.total_items} />
        <div className="main__container">
          <Routes>
            <Route
              exact
              path="/"
              element={<Home products={products} updateCart={updateCart} />}
            />
            <Route
              exact
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  updateCartQuantity={updateCartQuantity}
                  removeFromCart={removeFromCart}
                  removeCart={removeCart}
                />
              }
            />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
