import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Web3Wrapper from '../Utils/Web3Wrapper';
import Globals from '../Utils/Globals';
import UserLooksValidationComponent from './UserLooksValidationComponent';

class Test extends Component {
  componentDidMount() {
    const web3wrapper = new Web3Wrapper();
    debugger;
    web3wrapper.deployContractUniversity(function (contractAddress, contractAbi) {
      console.log(`Contract deployed! at address ${contractAddress}`);
      UserLooksValidationComponent.contractAddress = contractAddress;
      UserLooksValidationComponent.contractAbi = contractAbi;
    }.bind(this));
  }

  render() {
    return (

      <main role="main" className="container">
        <p>HOLA TEST</p>
        <ul>
          <li><Link to="/users/mery/lookvalidation">UserLooksValidationComponent</Link></li>
        </ul>
      </main>
    );
  }
}

export default Test;
