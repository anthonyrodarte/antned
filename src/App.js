import React from 'react';

import './App.css';
import Header from './components/Header';
import Counter from './components/Counter'
import Notepad from './components/Notepad'

function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <Notepad />
    </div>

  );
}

export default App;
