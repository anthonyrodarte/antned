import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import Notepad from './components/Notepad';
import Forecast from './components/Forecast';
import OLMap from './components/Map';

function App() {
  return (
    <Router>
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/bagul">bagul</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/forecast">Forecast</Link>
          </li>
          <li>
            <Link to="/notepad">Notepad</Link>
          </li>
          <li>
            <Link to="/map">Map</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/forecast">
          <Forecast />
        </Route>
        <Route path="/notepad">
          <Notepad />
        </Route>
        <Route path="/map">
          <OLMap />
        </Route>
        <Route path="/bagul">
            <Header />
        </Route>
        <Route path="/">
          <Header />
        </Route>
      </Switch>
    </div>
  </Router>

  );
}

export default App;
