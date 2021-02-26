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
import Quiz from './components/Quiz';

function App() {
  return (
    <Router>
    <div className="App">
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/quiz">Cocktail Quiz</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/quiz">
            <Quiz />
        </Route>
        <Route path="/">
          <Quiz />
        </Route>
      </Switch>
    </div>
  </Router>

  );
}

export default App;
