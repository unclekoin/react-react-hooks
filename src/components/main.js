import React from 'react';
import { useAlert } from '../context/alert-context';

const Main = () => {
  const { show } = useAlert();

  return (
    <div className="mb-5">
      <h1>Hello Context Example!</h1>
      <button className="btn btn-success" onClick={() => show('This is a text from main.js')}>
        Show alert
      </button>
    </div>
  );
};

export default Main;
