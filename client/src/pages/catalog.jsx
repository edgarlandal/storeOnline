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
// import DataContext from "../store/dataContext";

/**
 * Styles Imports
 */
import "./catalog.css";
import DataService from "../services/dataServices";

function Catalog() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [prodsToDis, setProdsToDis] = useState([]);

  // const prods = useContext(DataContext).prods;

  useEffect(() => {
    loadCatalog();
  }, []);

  const loadCatalog = async () => {
    let service = new DataService();
    let prods = await service.getProducts();

    setProducts(prods);
    setProdsToDis(prods);

    // here on the load of the page i want to create the categories

    let cats = await service.getCategories();
    setCategories(cats);
  };

  const filter = async (caty) => {
    let service = new DataService();
    let prods = await service.getProductsByCat(caty);
    setProdsToDis(prods);
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
      {categories.map((category, i) => (
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
