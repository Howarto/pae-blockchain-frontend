import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import UniversityCanCreateSmartContractComponent from './Components/UniversityCanCreateSmartContractComponent';
import BayerCanLookCompleteCV from './Components/BayerCanLookCompleteCV';
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
          <Route path="/users/mery/lookcv" component={ BayerCanLookCompleteCV } />
          <Route path="/users/mery/lookvalidation" component={ MeryLooksHerUniversityValidation } />
          <Route path="/companies/bayer/sendcv" component={ MerySendsCV } />
          <Route path="/universities/fib/sendcv" component={ MerySendsFeeToUniversity } />
          <Route path="/universities/fib/smartcontract" component={ UniversityCanCreateSmartContractComponent } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
