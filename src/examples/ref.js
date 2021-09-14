import React, { useState, useEffect, useRef } from 'react';
import './app.css';

// let renderCount = 1;

function App() {
  // const [renderCount, setRenderCount] = useState(1);
  const [value, setValue] = useState('');
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef('')

  useEffect(() => {
    // setRenderCount(renderCount + 1);
    // renderCount++;
    renderCount.current++;
    console.log(inputRef.current.value)
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value])

  const focus = () => {
    inputRef.current.focus();
  }

  return (
    <div className="app">
      <h1>Render Count {renderCount.current}</h1>
      <h2>Prev Value: {prevValue.current}</h2>
      <div className="input-group flex-nowrap mb-3">
        <span className="input-group-text" id="addon-wrapping">
          value:
        </span>
        <input
          ref={inputRef}
          // onChange={(event) => setValue(event.target.value)}
          onChange={() => setValue(inputRef.current.value)}
          value={value}
          type="text"
          className="form-control"
          placeholder="value..."
          aria-label="value"
          aria-describedby="addon-wrapping"
        />
      </div>
      <button className="btn btn-success" onClick={focus}>Focus</button>
    </div>
  );
}

export default App;
