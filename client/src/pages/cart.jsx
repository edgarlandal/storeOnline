import ProductInCart from "../components/productInCart";
import { useContext } from "react";
import DataContext from "../store/dataContext";
import "./cart.css";

function Cart() {
  const cart = useContext(DataContext).cart;

  const getTotalCout = () => {
    return cart.length;
  };

  return (
    <div className="cart page">
      <h1>Your products are 1 click away</h1>
      <h5>You have {getTotalCout()} products in the element</h5>

      <div className="list">
        {cart.map((prod, i) => (
          <ProductInCart key={i} data={prod} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
