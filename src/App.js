import React from 'react';

import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import Notepad from './components/Notepad';
import OLMap from './components/Map'

function App() {
  return (
    <div className="App">
      <Header />
      <OLMap />
      <Notepad />
      <Counter />
    </div>

  );
}

export default App;
