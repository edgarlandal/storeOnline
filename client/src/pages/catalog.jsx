/**
 * React Imports
 */
import { useEffect, useState, useContext } from "react";

/**
 * Components Imports
 */
import Products from "../components/products";

/**
 * Data Imports
 */
import DataContext from "../store/dataContext";

/**
 * Styles Imports
 */
import "./catalog.css";

function Catalog() {
  const [products, setProducts] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [prodsToDis, setProdsToDis] = useState([]);

  const prods = useContext(DataContext).prods;

  useEffect(() => {
    loadCatalog();
  }, []);

  const loadCatalog = () => {
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
    <div className="catalog page">
      <h1>Check out our amazing catalog</h1>
      <h3> Total of products: {prodsToDis.length}</h3>
      <br />
      <button
        className="btn btn-sm btn-dark"
        onClick={() => {
          setProdsToDis(products);
        }}
      >
        All
      </button>
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
