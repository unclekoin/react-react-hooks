import React from 'react';
import './app.css';
import Main from './components/main';
import Alert from './components/alert';
import { AlertProvider } from './context/alert-context';

const App = () => {
  return (
    <AlertProvider>
      <div className="app">
        <Alert />
        <Main />
      </div>
    </AlertProvider>
  );
};

export default App;
