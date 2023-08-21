import React, { useState } from "react";
import "./admin.css";
function Admin() {
  const [product, setProduct] = useState({});

  const saveProduct = () => {
    var count = 0;
    if (Object.keys(product) !== 0) {
      for (const prod in product) {
        if (product[prod] !== "") {
          count++;
        }
      }
      if (count !== 4) {
        console.log("Faltan campos");
      } else {
        console.log("Completo");
      }
    }
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
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            className="form-control"
            type="text"
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
            onChange={(e) => setProduct({ ...product, img: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            className="form-control"
            type="number"
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </div>
        <div>
          <button className="btn btn-dark" onClick={saveProduct}>
            Save Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
