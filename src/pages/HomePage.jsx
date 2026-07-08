import React from "react";
import CategoryFilter from "../components/CategoryFilter/CategoryFilter";
import ProductList from "../components/ProductList/ProductList";

const HomePage = ({
  products,
  selectedCategory,
  setSelectedCategory,
  categories,
  onAddToCart,
  onRemoveFromCatalog,
}) => {
  return (
    <div>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ProductList
        products={products}
        selectedCategory={selectedCategory}
        onAddToCart={onAddToCart}
        onRemoveFromCatalog={onRemoveFromCatalog}
      />
    </div>
  );
};

export default HomePage;
