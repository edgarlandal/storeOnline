import React from "react";

import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="home page">
      <h1>Welcome to my super online store</h1>
      <Link className="btn btn-dark" to="/store">
        Check our amazing catalog
      </Link>
    </div>
  );
}

export default Home;
