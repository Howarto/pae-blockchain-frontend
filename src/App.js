import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Test from './Components/Test';
import ProfileViewer from './Components/ProfileComponent';
import UserLooksValidationComponent from './Components/UserLooksValidationComponent';
import CompanyProfileComponent from './Components/CompanyProfileComponent';
import UniversityProfileComponent from './Components/UniversityProfileComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={ Test } exact />
          <Route path="/users/mery/lookcv" component={ ProfileViewer } />
          <Route path="/users/mery/lookvalidation" component={ UserLooksValidationComponent } />
          <Route path="/companies/everos/sendcv" component={ CompanyProfileComponent } />
          <Route path="/universities/fib/sendcv" component={ UniversityProfileComponent } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
