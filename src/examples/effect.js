import React, { useState, useEffect } from 'react';
import './app.css';

function App() {
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  const mouseMoveHandler = (event) => {
    setPos({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(() => {
    console.log('effect', type);
    fetch(`https://jsonplaceholder.typicode.com/${type}/2`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [type]);

  useEffect(() => {
    console.log('ComponentDidMount');
    window.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    }
  }, []);

  

  console.log('render');

  return (
    <div className="app">
      <h1>Source: {type}</h1>

      <button onClick={() => setType('users')} className="btn btn-primary me-1">
        Users
      </button>
      <button onClick={() => setType('todos')} className="btn btn-primary me-1">
        Todos
      </button>
      <button onClick={() => setType('posts')} className="btn btn-primary me-1">
        Posts
      </button>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
}

export default App;
