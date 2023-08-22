import "./productInCart.css";

function ProductInCart(props) {
  return (
    <div className="product">
      <h5>{props.data.title}</h5>
    </div>
  );
}

export default ProductInCart;
