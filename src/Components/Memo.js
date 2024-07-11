// // useMemo -
// // 1. useMemo is a hook that is used to memoize/Cached the result of a function.
// // 2. it is used to optimize the performance of the application.

// // useCallback- return function

// import { useState, useMemo } from 'react'

// export default function Memo(){
//     const [Increment, setIncrement] = useState(0);
//     const [Decrement, setDecrement] = useState(0);
//     const [count, setCount] = useState(0);


//     const calculateSquare =(value) => {
//         console.log("Calculating Square");
//         console.log(value * value)
//         return value * value;
//     }
//     // calculateSquare(count)
//     // useMemo(callback, dependency)
//     const cacheValue = useMemo(()=>{
//          return calculateSquare(Increment)
//     },[Increment])

//     return (
//         <>
//             <h1>Memo</h1>
//             <h1>Increment : {Increment}</h1>
//             <h1>Decrement : {Decrement}</h1>
//             <button onClick={() => setIncrement(Increment +1)}>Increment</button>
//             <button onClick={() => setDecrement(Decrement-1)}>Decrement</button>
//             <h2>Result of Calculation : {cacheValue}</h2>
//         </>
//     )
// }






//.........................................................................

