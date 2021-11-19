// Library Imports
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages Imports
import HomePage from './Pages/Home';
import TopicsPage from './Pages/Topics';
import FacultyPage from './Pages/Faculty';
import AboutPage from './Pages/About';
import SearchPage from './Pages/Search'

// CSS Imports
import './App.css';

function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/topics" render={props => <TopicsPage {...props} />} />
        <Route exact path="/faculty" render={props => <FacultyPage {...props} />} />
        <Route exact path="/about" render={props => <AboutPage {...props} />} />
        <Route exact path="/search" render={props => <SearchPage {...props} />} />
        <Route exact path="/" render={props => <HomePage {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;