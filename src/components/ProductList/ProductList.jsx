import React from "react";
import "../../styles/ProductList.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({
  products,
  selectedCategory,
  onAddToCart,
  onRemoveFromCatalog,
}) => {
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="product-list">
      {filteredProducts.length === 0 ? (
        <p className="no-products">No products found</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onRemoveFromCatalog={onRemoveFromCatalog}
          />
        ))
      )}
    </div>
  );
};

export default ProductList;
