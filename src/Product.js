import React from "react";
function Product({ product }) {
  return (
    <div>
      <h2>Product Details</h2>
      <h2>Title : {product.title}</h2>
      <h3>Description : {product.description}</h3>
      <h4>Price : {product.price}</h4>
    </div>
  );
}
export default Product;
