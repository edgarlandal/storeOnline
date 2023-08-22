import QuantityPicker from "./quantityPicker";

import "./products.css";
import { useState, useContext } from "react";
import DataContext from "../store/dataContext";

function Products({ product }) {
  const [count, setCount] = useState(1);

  const addToCart = useContext(DataContext).addToCart;

  const handleClick = (num) => {
    setCount(num);
  };

  const handleAdd = () => {
    const prodWitQuantity = {
      ...product,
      quantity: count,
    };
    addToCart(prodWitQuantity);
  };

  return (
    <div className="product">
      <img src={product.src} alt={product.title} />
      <h5>{[product.title]}</h5>
      <div className="prices">
        <label>
          Prices: <span>{product.price.toFixed(2)}</span>
        </label>
        <label>
          Total: <span>{(product.price * count).toFixed(2)}</span>
        </label>
      </div>
      <QuantityPicker handleClick={handleClick} />
      <button onClick={handleAdd} className="btn btn-sm btn-success">
        Add
      </button>
    </div>
  );
}

export default Products;
