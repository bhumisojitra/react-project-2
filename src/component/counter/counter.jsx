import { useState } from "react";
import './counter.css'

const Counter = ({count, inc, dec, res}) => {

    return(
        <div className="main">
            <h1 className="count">Counter</h1>
            <h2>{count}</h2>
            <button type="button" onClick={inc} className="btn">INCREMENT</button>
            <button type="button" onClick={dec} className="btn">DECREMENT</button>
            <button type="button" onClick={res} className="btn">RESET</button>
        </div>
    )
}

export default Counter;