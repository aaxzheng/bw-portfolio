import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import './App.css';
import Main from "./pages/main";
import NavBar from './pages/nav';

const App = () => (
  <HashRouter>
    <div>
      <Route path="/" component={ NavBar } />
      <Route exact path="/" component={Main} />
    </div>
  </HashRouter>
);

export default App;
