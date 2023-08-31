import React, { useState, useEffect } from "react";

// import { useContext } from "react";
// import DataContext from "../store/dataContext";

import "./admin.css";
import DataService from "../services/dataServices";

function Admin() {
  const [product, setProduct] = useState({
    title: "",
    category: "",
    img: "",
    price: "",
  });

  const [coupon, setCoupon] = useState({
    code: "",
    discount: "",
  });

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    loadData();
  }, [product]);

  const loadData = async () => {
    let service = new DataService();
    const prods = await service.getProducts();
    setAllProducts(prods);
  };

  const clearForm = () => {
    setProduct({ title: "", category: "", img: "", price: "" });
  };

  const removeProduct = (id) => {
    let service = new DataService();
    service.deleteProduct(id);

    let cpy = allProducts.filter((prod) => prod._id !== id);

    setAllProducts(cpy);
  };

  const saveProduct = () => {
    var count = 0;
    if (Object.keys(product) !== 0) {
      for (const prod in product) {
        if (product[prod] !== "") {
          count++;
        }
      }
      if (count !== 4) {
        alert("Faltan campos");
      } else {
        alert("Completo");

        let service = new DataService();
        service.setProduct(product);
      }
    }
    clearForm();
  };

  const saveCoupon = () => {
    const service = new DataService();
    console.log(coupon);
    service.setCoupon(coupon);
  };
  return (
    <div className="admin page">
      <h1>Store Managment</h1>
      <div className="parent-container">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            className="form-control"
            type="text"
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            className="form-control"
            type="text"
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
            className="form-control"
            type="text"
            value={product.img}
            onChange={(e) => setProduct({ ...product, img: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            className="form-control"
            type="number"
            min={0}
            value={product.price}
            onChange={(e) =>
              setProduct({ ...product, price: parseFloat(e.target.value) })
            }
          />
        </div>
        <div>
          <button className="btn btn-dark" onClick={saveProduct}>
            Save Product
          </button>
        </div>
        <div
          className="card"
          style={{
            width: "100%",
            boxShadow: "2px 2px 2px black",
            marginTop: "10px",
          }}
        >
          <div className="card-header">Products</div>
          <ul className="list-group list-group-flush">
            {allProducts.map((p, i) => (
              <li key={i} className="list-group-item">
                <div className="d-flex justify-content-between">
                  <label>
                    {p.title} :
                    <span style={{ fontWeight: "bold" }}>{p.price}</span>
                  </label>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      removeProduct(p._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="parent-container">
        <div className="mb-3">
          <label className="form-label">Code</label>
          <input
            className="form-control"
            type="text"
            value={coupon.code}
            onChange={(e) => setCoupon({ ...coupon, code: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Discount</label>
          <input
            className="form-control"
            type="number"
            value={coupon.desc}
            onChange={(e) =>
              setCoupon({ ...coupon, discount: parseFloat(e.target.value) })
            }
          />
        </div>
        <div>
          <button className="btn btn-dark" onClick={saveCoupon}>
            Save Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
