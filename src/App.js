import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProfileViewer from './Viewers/ProfileViewer';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/user" component={ ProfileViewer } />
      </BrowserRouter>
    );
  }
}

export default App;
