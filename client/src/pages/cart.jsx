import ProductInCart from "../components/productInCart";
import "./cart.css";

function Cart() {
  const cart = [];
  const getTotalCout = () => {
    return 0;
  };
  return (
    <div className="cart page">
      <h1>Your products are 1 click away</h1>
      <h5>You have {getTotalCout()} products in the element</h5>

      <div className="list">
        {cart.map((prod) => (
          <ProductInCart data={prod} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
