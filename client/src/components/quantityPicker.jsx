import { useState } from "react";

import './quantityPicker.css';


function QuantityPicker() {

    let [count, setCount] = useState(1);
    
    function increase() {
        console.log("increase");
        let value = count + 1;  
        setCount(value);

        
    }

    function decrease(){
        console.log("decrease");
        let value = count - 1;  
        if (count === 1) return;
        setCount(value);
    }
    return (
        <div className="qt-picker">
            <button className="btn btn-primary "disabled={count === 1} onClick={decrease}>-</button>
            <label>{count}</label>
            <button className="btn btn-primary" onClick={increase}>+</button>
        </div>
    );
}

export default QuantityPicker;

