import { useEffect } from "react";
import Products from "../components/products";
import { catalog } from "../services/dataServices";

import "./catalog.css";

function Catalog() {

  useEffect(() => {
    
  });


  return (
    <div className="catalog">
      <h1>Check out our amazing catalog</h1>
      {catalog.map((product, i) => (
        <Products product={product} key={i} />
      ))}
    </div>
  );
}

export default Catalog;
