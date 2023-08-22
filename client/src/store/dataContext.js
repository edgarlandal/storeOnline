import { createContext } from "react";

const DataContext = createContext({
  cart: [],
  user: {},
  addToCart: () => {},
  removeFromCart: () => {},
});

export default DataContext;
