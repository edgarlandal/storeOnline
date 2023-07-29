import QuantityPicker from "./quantityPicker";

import './products.css'
function Products() {
    return (
        <div className="product">
            <img src="https://picsum.photos/200/200" alt=""/>
            <h5>Title goes here</h5>
            <div className="prices">
                <label>Prices</label>
                <label>Total</label>
            </div>
            <QuantityPicker/>
        </div>
    )
}

export default Products;