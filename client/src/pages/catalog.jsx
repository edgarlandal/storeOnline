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
  const [categorys, setCategorys] = useState([]);
  // const [prodsToDis, setProdsToDis] = useState([]);

  useEffect(() => {
    loadCatalog();
  }, []);

  const loadCatalog = () => {
    let service = new DataService();
    let prods = service.getProducts();
    setProducts(prods);
    setProdsToDis(prods);

    // here on the load of the page i want to create the categories

    let cats = ["Fruit", "Vegetable"];
    setCategorys(cats);
  };

  const filter = (caty) => {
    let list = [];

    products.forEach((p) => {
      if (p.category === caty) {
        list.push(p);
      }
    });

    setProdsToDis(list);
  };

  return (
    <div className="catalog">
      <h1>Check out our amazing catalog</h1>
      <br />

      {categorys.map((category, i) => (
        <button
          key={i}
          onClick={() => {
            filter(category);
          }}
          className="btn btn-sm btn-primary btn-filter"
        >
          {category}
        </button>
      ))}

      <br />
      {prodsToDis.map((product, i) => (
        <Products product={product} key={i} />
      ))}
    </div>
  );
}

export default Catalog;
