import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProfileViewer from './Components/ProfileComponent';
import CompanyProfileViewer from './Components/CompanyProfileComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/users/mery" component={ ProfileViewer } />
          <Route path="/companies/everos" component={ CompanyProfileViewer } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
