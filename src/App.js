import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProfileViewer from './Components/ProfileComponent';
import CompanyProfileComponent from './Components/CompanyProfileComponent';
import UniversityProfileComponent from './Components/UniversityProfileComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/users/mery" component={ ProfileViewer } />
          <Route path="/companies/everos/sendcv" component={ CompanyProfileComponent } />
          <Route path="/universities/fib/sendcv" component={ UniversityProfileComponent } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
