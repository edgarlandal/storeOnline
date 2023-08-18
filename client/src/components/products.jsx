import QuantityPicker from "./quantityPicker";

import './products.css'
import { useState } from "react";
function Products({product}) {

    const [count, setCount] = useState(1);

    const handleClick = num => {
        setCount(num);
    }

    return (
        <div className="product">
            <img src={product.src} alt={product.title} />
            <h5>{[product.title]}</h5>
            <div className="prices">
                <label>Prices: <span>{product.price.toFixed(2)}</span></label>
                <label>Total: <span>{(product.price * count).toFixed(2)}</span></label>
            </div>
            <QuantityPicker handleClick={handleClick}/>
        </div>
    )
}

export default Products;