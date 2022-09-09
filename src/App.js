import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { getByPlaceholderText } from '@testing-library/react';

function App() {
  const [age, setAge] = useState(0)
  const [result1, setResult1] = useState(0)
  const [result2, setResult2] = useState(0)

  function calculate() {
    const result1 = (220 - age) * 0.65
    const result2 = (220 - age) * 0.85
    setResult1(result1);
    setResult2(result2);
  }
  return (
    <div>
      <h3>Heart Rate Limits Calcuators</h3>
      <form>
        <div>
          <label>Age </label>
          <div>
          <input type="number" 
           placeholder="Input age here" 
           value={age} 
           onChange={e => setAge(e.target.value)}/>
          </div>
        </div>
        <div>
          <label>Heart Rate Limits</label>
          <div>
            <output>{result1} - {result2}</output>
          </div>
        </div>
        <button type="button" onClick={calculate}>Calculate</button>
      </form>
    </div>
  );
}

export default App;
