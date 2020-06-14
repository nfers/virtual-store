import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/';

const ChapeusPage = () => (
  <div>
    <h1>Chapéus</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={HomePage} />
        <Route path='/hats' component={ChapeusPage} />
      </Switch>
    </div>
  );
}

export default App;
