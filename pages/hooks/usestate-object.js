import React, {useState} from 'react';

function useStatePage() {
    // useState return array with value and setter for that value, receives 
    // an optional argument with initial state.
    // const [value, setValue] = useState(initialValue);
    const [state, setState] = useState({
        count: 4,
        color: "blue"
    });

    const count = state.count;
    const color = state.color;

    // Decrement Count function
    function decrementCount(){
        // Incorrect, this replace full object wiht {count: value} so 
        // blue attribute will dissapear
        // setState(prevState => {
        //     return { count : prevState.count - 1}
        // });

        // Correct way
        setState(prevState => {
            return {...prevState, count : prevState.count - 1}
        });
    }

    // Increment Coutn Function
    function incrementCount(){
         // Incorrect, this replace full object wiht {count: value} so 
        // blue attribute will dissapear
        // setState(prevState => {
        //     return { count : prevState.count + 1}
        // });

        // Correct way
        setState(prevState => {
            return {...prevState, count : prevState.count + 1}
        });
    }

    return (
        <>
            <div className="flex flex-row items-center justify-center w-full flex-1 px-20 text-center pt-20">
                <button className="btn text-2xl" onClick={decrementCount}>-</button>
                <span className="text-2xl mx-4">{count}</span>
                <span className="text-2xl mx-4">{color}</span>
                <button className="btn text-2xl" onClick={incrementCount}>+</button>
            </div>
        </>
    )
}

export default useStatePage;