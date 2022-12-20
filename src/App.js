import React, { useState, useRef } from 'react';
import './App.css';
 
function App() {
  const [result, setResult] = useState(0)
  const resultRef = useRef()
  const inputRef = useRef()

  const add = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  const subtract = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  const multiply = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  const divide = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value=0;
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult((result) => 0 * Number(inputRef.current.value));
  };

  return ( 
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input 
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <br></br>
        <button onClick={add}>add</button> 
        <button onClick={subtract}>subtract</button>
        <button onClick={multiply}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form>  
        
    </div> 
  ); 
}; 
 
export default App;