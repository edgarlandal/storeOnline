/**
 * React Imports
 */
import { useEffect, useState } from "react";

/**
 * Components Imports
 */
import Products from "../components/products";

/**
 * Data Imports
 */
import DataService from "../services/dataServices";

/**
 * Styles Imports
 */
import "./catalog.css";

function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadCatalog();
  });

  const loadCatalog = () => {
    let service = new DataService();
    let prods = service.getProducts();
    setProducts(prods);
  };
  return (
    <div className="catalog">
      <h1>Check out our amazing catalog</h1>
      {products.map((product, i) => (
        <Products product={product} key={i} />
      ))}
    </div>
  );
}

export default Catalog;
