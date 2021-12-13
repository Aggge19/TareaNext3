import React, { useEffect, useMemo, useState } from 'react';

export default function useMemoPage() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo(() => { 
        return slowFunction(number) 
    }, [number]);
    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }

    useEffect(() => {
        console.log("Theme Changed")
    }, [themeStyles])

    return (
        <div>

            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button className="btn" onClick={() => setDark(prevDark => !prevDark)}> Change Theme</button>
            <div className="mt-10 font-bold text-2xl text-center border-t" style={themeStyles}>{doubleNumber}</div>
        </div>
    )
}

function slowFunction(num) {
    console.log('Calling Slow Function')
    for (let i = 0; i <= 1000000000; i++) { }
    return num * 2;
}