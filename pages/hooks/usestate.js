import React, {useState} from 'react';

function useStatePage() {
    // useState return array with value and setter for that value, receives 
    // an optional argument with initial state.
    // const [value, setValue] = useState(initialValue);
    const [count, setCount] = useState(4);

    // Decrement Count function
    function decrementCount(){
        // Not perfect way
        // setCount(count - 1);
        // Recomended way
        setCount(prevCount => prevCount - 1);
    }

    // Increment Coutn Function
    function incrementCount(){
         // Not perfect way
        // setCount(count + 1);
        // Recomended way
        setCount(prevCount => prevCount + 1);
    }

    return (
        <>
            <div className="flex flex-row items-center justify-center w-full flex-1 px-20 text-center pt-20">
                <button className="btn text-2xl" onClick={decrementCount}>-</button>
                <span className="text-2xl mx-4">{count}</span>
                <button className="btn text-2xl" onClick={incrementCount}>+</button>
            </div>
        </>
    )
}

export default useStatePage;