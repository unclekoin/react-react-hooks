import React from 'react';
import { useAlert } from '../context/alert-context';

const Alert = () => {
  const { visible, text, hide } = useAlert();

  return (
    <>
      {visible && (
        <div className="alert alert-danger" onClick={hide} role="alert">
          { text }
        </div>
      )}
    </>
  );
};

export default Alert;
