import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import UniversityCanCreateSmartContractComponent from './Components/UniversityCanCreateSmartContractComponent';
import EverosCanLookCompleteCV from './Components/EverosCanLookCompleteCV';
import MeryLooksHerUniversityValidation from './Components/MeryLooksHerUniversityValidation';
import MerySendsCV from './Components/MerySendsCV';
import MerySendsFeeToUniversity from './Components/MerySendsFeeToUniversity';
import RootRouter from './Components/RootRouter';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={ RootRouter } exact />
          <Route path="/users/mery/lookcv" component={ EverosCanLookCompleteCV } />
          <Route path="/users/mery/lookvalidation" component={ MeryLooksHerUniversityValidation } />
          <Route path="/companies/everos/sendcv" component={ MerySendsCV } />
          <Route path="/universities/fib/sendcv" component={ MerySendsFeeToUniversity } />
          <Route path="/universities/fib/smartcontract" component={ UniversityCanCreateSmartContractComponent } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
