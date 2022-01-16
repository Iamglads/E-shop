import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import "./App.css";

import { Products, NavBar } from "./Components";

const App = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="main__container">
        <Products products={products} />
      </div>
    </div>
  );
};

export default App;
