import React,{useState} from "react";

function Counter(){

    const[count , setCount] = useState(0);

    const decrement = () =>{
        setCount(count-1);
    }

    const increment = () =>{
        setCount(count+1);
    }

    const reset = () =>{
        setCount(0);
    }

    return(
        <div className="counter-container">
            <div className="counter-value-container">
                <p>{count}</p>
            </div>
            <div className="counter-btn-container">
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
                <button onClick={increment}>Increment</button>
            </div> 
        </div>
    );

}

export default Counter;