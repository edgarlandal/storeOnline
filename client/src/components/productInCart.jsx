import "./productInCart.css";
import { useContext } from "react";
import DataContext from "../store/dataContext";

function ProductInCart(props) {
  const removeFromCart = useContext(DataContext).removeFromCart;

  const handleRemove = () => {
    removeFromCart(props.data);
  };

  const getTotal = () => {
    return props.data.price * props.data.quantity;
  };

  return (
    <div className="product">
      <img src={props.data.src} alt={props.data.title} />
      <div className="content">
        <h5>Name: {props.data.title}</h5>
        <label> Category: {props.data.category}</label>
      </div>

      <div className="content">
        <p> Price: {getTotal()}</p>
        <p> Quantity {props.data.quantity}</p>
        <button onClick={handleRemove} className="btn btn-sm btn-danger">
          Remove
        </button>
      </div>
    </div>
  );
}

export default ProductInCart;
