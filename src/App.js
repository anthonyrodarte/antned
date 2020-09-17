import React from 'react';
import { Counter } from './components/counter'
import { Notepad } from './components/notepad'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://cdn.shopify.com/s/files/1/3098/5516/files/BeegDunkey01_web_900x.png?v=1591725443' className="App-logo" alt="logo" />
        <h1>
          BAGUL
        </h1>
      </header>
      <Counter />
      <Notepad />
    </div>
    
  );
}

export default App;
