import React, { useState } from "react";
import fakeData from "../../../fakeData";
import Cart from "../../Cart/Cart";
import Product from "../../Products/Product";
import "./Shop.css";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProduct] = useState(first10);
  const [cart, setCart] = useState([]);
  const handleAddProduct = (product) => {
    console.log('product added', product);
    const newCart = [...cart, product];
    setCart(newCart);
  }

  return (
    <div className="shop-container">
      <div className="product-container">
        <ul>
          {products.map((product) => (
            <Product 
            product={product}
            handleAddProduct ={handleAddProduct}
            >
            </Product>
          ))}
        </ul>
      </div>
      <div className="cart-container">
       <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
