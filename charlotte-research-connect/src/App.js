import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" render={props => <HomePage {...props} />} />
    </BrowserRouter>
  );
}

export default App;
