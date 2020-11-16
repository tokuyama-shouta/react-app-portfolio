import React,{useState} from 'react';
import './App.css';

const App = () => {
  const [count,setCount] = useState(0)
  const addClick = () => {
    setCount(count + 1)
  }
  const heruClick = () => {
    setCount(count - 1)
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addClick}>+1</button>
      <button onClick={heruClick}>-1</button>
    </div>
  );
}

export default App;
