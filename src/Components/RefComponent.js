import { useState , useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  // const [renderCount, setRenderCount] = useState(0);

  const renderCount = useRef(0);
  const inputRef = useRef(null);

  // inputRef is my object with a single property called current
  // this current will store that value that we pass to the useRef

  // console.log(inputRef.current)

  // useRef
  //  - to access the DOM element
  //  - to persist the value between renders
  // Without Dependency Array
  // -- It will run for the first time and whenever the state changes

  useEffect(() => {
    console.log("Re render");
    renderCount.current = renderCount.current + 1;
    inputRef.current.focus();
  });

  return (
    <>
      <input type='text' ref={inputRef} />
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <h2>Render Count : {renderCount.current}</h2>
    </>
  )
}

export default App





// import React, { useRef, useEffect } from 'react';

// function RefComponent() {
//   const inputRef = useRef(null);

//   useEffect(() => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, []);

//   return (
//     <>
//       <input type="text" ref={inputRef} />
//     </>
//   );
// }

// export default RefComponent;
