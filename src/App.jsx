import React, { useState } from "react";
import Header from "./components/Header/Header";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Header cartCount={cart.length} />
      <CategoryFilter />
      <ProductList />
      <Cart />
      <Footer />
    </div>
  );
};

export default App;
