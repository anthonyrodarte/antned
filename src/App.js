import React from 'react';

import './App.css';
import Header from './components/Header';
import Counter from './components/Counter'
import Notepad from './components/Notepad'
import Forecast from './components/Forecast'

function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <Notepad />
      <Forecast />
    </div>

  );
}

export default App;
