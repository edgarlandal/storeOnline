import { createContext } from "react";

const DataContext = createContext({
  cart: [],
  user: {},
  prods: [],
  addToCart: () => {},
  removeFromCart: () => {},
  addNewProduct: () => {},
});

export default DataContext;
