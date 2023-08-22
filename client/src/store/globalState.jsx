import { useState, useEffect } from "react";
import DataContext from "./dataContext";

function GlobalState(props) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser({ name: "Edgar", id: 12, email: "mlanda@uabc.edu.mx" });
  }, []);

  const addToCart = (prod) => {
    console.log("global add");

    let copy = [...cart];

    let isExist = false;
    for (let i = 0; i < cart.length; i++) {
      let c = copy[i];
      if (c._id === prod._id) {
        c.quantity += prod.quantity;
        isExist = true;
      }
    }

    if (!isExist) copy.push(prod);

    setCart(copy);
  };

  const removeFromCart = (prod) => {
    console.log("global remove");

    let cpy = [...cart];

    let newCart = cpy.filter((c) => {
      return c._id !== prod._id ? true : false;
    });

    console.log(newCart);

    setCart(newCart);
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
