import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [inpValue, setInpValue] = useState('')

  const addItem = () => {
    console.log('Function Called')
  }

  return (
    <div className="App">
      <h3>{inpValue}</h3>
      <input onChange={(e)=>setInpValue(e.target.value)} placeholder='Enter Value' />
      
      
      
      <button onClick={addItem}>Add</button>

      {/* <ul>
        {val().map((item, index) => {
          return <li key={item}>{item} index = {index}</li>
        })}
      </ul> */}
    </div>
  );
}

export default App;
