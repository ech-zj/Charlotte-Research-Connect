// Library Imports
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Pages Imports
import HomePage from './Pages/Home';
import TopicsPage from './Pages/Topics'
import FacultyPage from './Pages/Faculty';
import AboutPage from './Pages/About'

// CSS Imports
import './App.css';

function App(props) {
  return (
    <BrowserRouter>
      <Route exact path="/topics" render={props => <TopicsPage {...props} />} />
      <Route exact path="/faculty" render={props => <FacultyPage {...props} />} />
      <Route exact path="/about" render={props => <AboutPage {...props} />} />
      <Route exact path="/" render={props => <HomePage {...props} />} />
    </BrowserRouter>
  );
}

export default App;