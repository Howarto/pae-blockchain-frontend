import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RootRouter extends Component {
  render() {
    return (
      <div>
        <h1>Useful website links</h1>
        <ul>
          <li><Link to="/users/mery/lookcv">EverosCanLookCompleteCV</Link></li>
          <li><Link to="/users/mery/lookvalidation">MeryLooksHerUniversityValidation</Link></li>
          <li><Link to="/companies/everos/sendcv">MerySendsCV</Link></li>
          <li><Link to="/universities/fib/sendcv">MerySendsFeeToUniversity</Link></li>
          <li><Link to="/universities/fib/smartcontract">UniversityCanCreateSmartContractComponent</Link></li>
        </ul>
      </div>
    );
  }
}

export default RootRouter;
