import { useState, useCallback } from 'react';

export default function Memo() {
    const [Increment, setIncrement] = useState(0);
    const [Decrement, setDecrement] = useState(0);
    const [count, setCount] = useState(0);

    const calculateSquare = useCallback((value) => {
        console.log("Calculating Square");
        return value * value;
    }, []);

    const incrementValue = () => setIncrement(Increment + 1);
    const decrementValue = () => setDecrement(Decrement - 1);

    return (
        <>
            <h1>useCallback</h1>
            <h1>Increment : {Increment}</h1>
            <h1>Decrement : {Decrement}</h1>
            <button onClick={incrementValue}>Increment</button>
            <button onClick={decrementValue}>Decrement</button>
            <h2>Result of Calculation : {calculateSquare(Increment)}</h2>
        </>
    );
}
