import { useState } from "react";
import DataContext from "./dataContext";

function GlobalState(props) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({
    name: "Edgar",
    id: 12,
    email: "mlanda@uabc.edu.mx",
  });

  const addToCart = (prod) => {
    console.log("global add");
    let copy = [...cart];
    copy.push(prod);
    setCart(copy);
  };

  const removeFromCart = () => {
    console.log("global remove");
  };

  return (
    <DataContext.Provider
      value={{
        cart: cart,
        user: user,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default GlobalState;
