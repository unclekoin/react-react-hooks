import React, { useEffect, useState, useCallback } from 'react';
import './app.css';

function App() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? 'red' : '',
  };

  const generateItemsFromAPI = useCallback((indexNumber) => {
    return new Array(count).fill('').map((_, index) => `Element ${index + indexNumber}`);
  }, [count]);

  return (
    <div className="app">
      <h1 style={styles}>Calculate property: {count}</h1>
      <button
        className="btn btn-success me-1"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Add
      </button>
      <button
        className="btn btn-danger"
        onClick={() => setColored((prev) => !prev)}
      >
        Change
      </button>
      <ItemsList getItems={generateItemsFromAPI} />
    </div>
  );
}

function ItemsList({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newItems = getItems(42);
    setItems(newItems);
    console.log('render')
  }, [getItems]);

  return (
    <ul>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  )
}

export default App;
