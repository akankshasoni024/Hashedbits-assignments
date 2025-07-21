import './App.css';
import { useState } from 'react';

function App() {
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(null);

  const calculateResult = () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Please enter valid numbers');
      return;
    }

    let res;
    switch (operator) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case '*':
        res = num1 * num2;
        break;
      case '/':
        res = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        break;
      default:
        res = 'Invalid operator';
    }

    setResult(res);
  };

  return (
    <div className="App">
      <header className="App-header">
        <label>
          Number 1:
          <input placeholder="Enter 1st Number" id="num1" />
        </label>
        <label>
          Number 2:
          <input placeholder="Enter 2nd Number" id="num2" />
        </label>

        <div className="operators">
          <button onClick={() => setOperator('+')}>+</button>
          <button onClick={() => setOperator('-')}>-</button>
          <button onClick={() => setOperator('*')}>*</button>
          <button onClick={() => setOperator('/')}>/</button>
        </div>

        <button type="submit" onClick={calculateResult}>
          Calculate
        </button>

        <div className="output">
          <strong>Result: </strong> {result}
        </div>
      </header>
    </div>
  );
}

export default App;
