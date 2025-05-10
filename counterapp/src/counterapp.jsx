import React, {useState} from 'react';

function counterapp (){
    const [number , setNumber] = useState(0);

    function increment (){
        setNumber (number+1)
    }
    function decrement (){
        setNumber (number-1)
    }
    function reset (){
        setNumber (0)
    }
    return(
        <div>
            <p>number: {number}</p>
            <button onclick={decrement}>decrement</button>
            <button onclick={reset}>reset</button>
            <button onclick={increment}>increment</button>

        </div>
    )
}
export default counterapp