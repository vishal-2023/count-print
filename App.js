import {useState} from "react";
import './App.css';

function App() {
  const [count,setcount] = useState(0);

  function Increment(){
    setcount(count+1);
  }

  return (
    <div>
      <h1>Hello Counter App</h1>
      <p>You clicked {count} times</p>
      
      <h1>{count}</h1>
      
      <button onClick={Increment}>Add</button>
      
    </div>
  );
}

export default App;
