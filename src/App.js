// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header.js';
import LandingPage from './components/LandingPage.js';
import StorePage from './components/StorePage.js';
import CartPage from './components/CartPage.js';
import Register from './components/Register.js';
import Login from './components/Login.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/store" component={StorePage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
