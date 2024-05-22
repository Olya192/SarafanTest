import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from './components/container/container';
import { AppRoutes } from './routes';

function App() {
  return (
    <div className="App">
    <div className="App-layout">
      <AppRoutes />
    </div>
  </div>
  );
}

export default App;
