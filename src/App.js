import './App.css';
import {useState} from 'react'

function App() {

  let [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>React counter app</h1>
      <h2>Current Count : {count}</h2>
      <button className='btn' onClick={() => count < 1 ? '' : setCount(count-1)}>Decrement</button>
      <button className='btn' onClick={() => count >= 10 ? '' : setCount(count+1)}>Increment</button>
      <button className='btn' onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
