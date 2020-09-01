import React from "react";
import Product from "./Product";
function ListRendering() {
  //const names = ["Arjun", "Harvi", "Ajay"];
  //const namesList = names.map(name => <h1>{name}</h1>);

  const products = [
    {
      id: 1,
      title: "Jeans",
      description: "Mid rise Classic Jeans",
      price: "$40.99"
    },
    {
      id: 2,
      title: "Jeans",
      description: "kids slim jeans",
      price: "$25.99"
    },
    {
      id: 3,
      title: "Jeans",
      description: "High Rise Cigarette jeans",
      price: "$60.99"
    }
  ];

  const productList = products.map(product => (
    <Product key={product.id} product={product} />
  ));
  return <div>{productList}</div>;
}
export default ListRendering;
