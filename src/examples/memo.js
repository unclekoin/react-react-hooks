import React, { useState, useMemo, useEffect } from 'react';
import './app.css';

const complexCompute = (number) => {
  console.log('complexCompute');
  let i = 0;
  while (i < 2000000000) i++;
  return number * 2;
};

function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(() => ({
    color: colored ? 'red' : '',
  }), [colored]);

  const computed = useMemo(() => complexCompute(number), [number]);

  useEffect(() => {
    console.log('Styles changed');
  }, [styles]);

  return (
    <div className="app">
      <h1 style={styles}>Calculate property: {computed}</h1>
      <button
        className="btn btn-success me-1"
        onClick={() => setNumber((prev) => prev + 1)}
      >
        Add
      </button>
      <button
        className="btn btn-danger me-1"
        onClick={() => setNumber((prev) => prev - 1)}
      >
        Remove
      </button>
      <button
        className="btn btn-warning"
        onClick={() => setColored((prev) => !prev)}
      >
        Colored
      </button>
    </div>
  );
}

export default App;
