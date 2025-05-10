import React, { useState } from 'react';

function CounterApp (){

    const [count, setCount] = useState(0);

    function increment (){
        setCount (count + 1);
    };
    function decrement (){
        setCount (count - 1);
    };
    function reset (){
        setCount (0);
    };
    return(
        <div>
            <p>number: {count}</p>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
            <button onClick={increment}>increment</button>

        </div>
    );
}
export default CounterApp;