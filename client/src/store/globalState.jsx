import { useState, useEffect } from "react";
import DataContext from "./dataContext";
import DataService from "../services/dataServices";

function GlobalState(props) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});

  let service = new DataService();
  let prods = service.getProducts();
  const [productsGlobal, setProductGlobal] = useState(prods);

  useEffect(() => {
    setUser({ name: "Edgar", id: 12, email: "mlanda@uabc.edu.mx" });
  }, []);

  const addToCart = (prod) => {
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
    let cpy = [...cart];

    let newCart = cpy.filter((c) => {
      return c._id !== prod._id ? true : false;
    });

    setCart(newCart);
  };

  const addNewProduct = (prod) => {
    let copy = [...productsGlobal];
    copy.push(prod);
    setProductGlobal(copy);
  };

  return (
    <DataContext.Provider
      value={{
        cart: cart,
        user: user,
        prods: productsGlobal,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        addNewProduct: addNewProduct,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default GlobalState;
