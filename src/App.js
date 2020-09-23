import React from 'react';

import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import Notepad from './components/Notepad';
import Forecast from './components/Forecast';
import OLMap from './components/Map';

function App() {
  return (
    <div className="App">
      <Header />
      <OLMap />
      <Notepad />
      <Forecast />
      <Counter />
    </div>

  );
}

export default App;
