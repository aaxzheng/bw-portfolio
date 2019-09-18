import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import './App.css';
import Main from "./pages/main";
import NavBar from './pages/nav';
import Resume from './pages/resume';
import Project from './pages/project';
import Contact from './pages/contact';

const App = () => (
  <HashRouter>
    <div>
      <Route path="/" component={ NavBar } />
      <Route exact path="/" component={Main} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/project" component={Project} />
      <Route exact path="/contact" component={Contact} />
    </div>
  </HashRouter>
);

export default App;
