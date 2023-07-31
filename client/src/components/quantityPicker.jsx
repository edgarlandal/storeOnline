import { useState } from "react";


import './quantityPicker.css';


function QuantityPicker({handleClick}) {

    let [count, setCount] = useState(1);
    
    function increase() {
        let value = count + 1;  
        setCount(value);   
        handleClick(value);     
    }

    function decrease(){
        let value = count - 1;  
        if (count === 1) return;
        setCount(value);
        handleClick(value);
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

