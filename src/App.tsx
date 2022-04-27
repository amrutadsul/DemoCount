import React,{useState} from 'react';
import './App.css';

function App() {

  const [count,setCount] = useState<number>(0)

  const handleCount = () => {
    setCount(count+1)
  }

  return (
    <div className="App">
      <button onClick={handleCount}>Count</button>
      <div>{`Count is ${count}`}</div>
    </div>
  );
}

export default App;
