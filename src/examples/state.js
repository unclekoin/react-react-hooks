import React, { useState } from 'react';
import './app.css';

const computInitialState = () => {
  console.log('Some calculations...');
  return Math.trunc(Math.random() * 30);
};

function App() {
  // const [counter, setCounter] = useState(0);
  const [counter, setCounter] = useState(() => {
    return computInitialState();
  });

  const [state, setState] = useState({
    title: 'Counter',
    date: Date.now()
  })

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const updateTitle = () => {
    setState((prevState) => {
      return {
        ...prevState,
        title: 'New Title'
      }
    })
  }

  return (
    <div className="app">
      <h1>Counter: {counter}</h1>
      <button onClick={increment} className="btn btn-primary me-1">
        Add
      </button>
      <button onClick={decrement} className="btn btn-danger me-1">
        Remove
      </button>
      <button onClick={updateTitle} className="btn btn-success">Change title</button>
    <br/>
    <br/>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
