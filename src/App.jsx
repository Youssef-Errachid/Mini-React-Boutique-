import React, { useState } from "react";
import productsData from "./data/products.json";

import Header from "./components/Header/Header";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  return (
    <div>
      <Header cartCount={cart.length} />

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <ProductList products={products} />
      <Cart />
      <Footer />
    </div>
  );
};

export default App;
