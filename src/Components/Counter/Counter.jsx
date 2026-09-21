import { useState } from "react";
import "../Css/Global.css"
import useCounter from "../../hooks/useCounter";

function Counter() {
    const useCounterResult = useCounter()
    if (useCounterResult.count === 0){
    return (
        <div>
            <button onClick={useCounterResult.handleIncrement}>Comprar</button>
        </div>
    )
}
    return(
        <div>
            <h2>Contador: {useCounterResult.count}</h2>
            {useCounterResult.count === 10 && (
                <p className="limit-message">
                    Has alcanzado el limite
                </p>
            )}
            <button onClick={useCounterResult.handleDecrement}>-</button>
            <button onClick={useCounterResult.handleIncrement} disabled={useCounterResult.count >= 10}>+</button>
        </div>
    )
}
export default Counter