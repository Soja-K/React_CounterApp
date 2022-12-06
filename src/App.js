import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  

  function incrementCounter() {
    setCounter(counter + 1)
  }
  function decrementCounter(){
    setCounter(counter-1)

  }
  function resetCounter(){
    setCounter(0)
  }
  return (
    <div  style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center'
    }}

    
    
    
    
    
    
    className="App">
      <header className="App-header">
       <u> <h1>COUNTER APPLICATION</h1></u>
        <strong><h1>{counter}</h1></strong>
       <button
        style={{
          backgroundColor:'green',
          color:'black',
          border:'2px solid red',
          padding:'20px',
          margin:'20px',
          fontWeight:'bold',
          
          
        }}
        
        
        
        onClick={incrementCounter}>Increment</button>
        <button 
         style={{
          backgroundColor:'yellow',
          color:'black',
          border:'2px solid blue',
          padding:'20px',
          margin:'20px',
          fontWeight:'bold'
        }}
        onClick={decrementCounter}>Decrement</button>
        <button 
       
        style={{
         backgroundColor:'red',
         color:'white',
         border:'2px solid black',
         padding:'20px',
         margin:'20px',
         fontWeight:'bold'
       }}
        onClick={resetCounter}>Reset</button>

      </header>
    </div>
  );
}

export default App;
