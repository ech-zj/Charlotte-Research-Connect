// Library Imports
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages Imports
import HomePage from './Pages/Home';
import TopicsPage from './Pages/Topics';
import FacultyPage from './Pages/Faculty';
import AboutPage from './Pages/About';
import SearchPage from './Pages/Search'
import LoginPage from './Pages/Login';
import LogoutPage from './Pages/Logout';


// Admin User Pages
import AdminHome from './Pages/Admin/AdminHome'
import CollegesPage from './Pages/Admin/Colleges'
import MainTopicsPage from './Pages/Admin/MainTopics'
import SubTopicsPage from './Pages/Admin/SubTopics'
import FacultyAdminPage from './Pages/Admin/FacultyAdmin'

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
        <Route exact path="/login" render={props => <LoginPage {...props} />} />
        <Route exact path="/logout" render={props => <LogoutPage {...props} />} />
        <Route exact path="/a/home" render={props => <AdminHome {...props} />} />
        <Route exact path="/a/college" render={props => <CollegesPage {...props} />} />
        <Route exact path="/a/main" render={props => <MainTopicsPage {...props} />} />
        <Route exact path="/a/sub" render={props => <SubTopicsPage {...props} />} />
        <Route exact path="/a/faculty" render={props => <FacultyAdminPage {...props} />} />
        <Route exact path="/" render={props => <HomePage {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;