import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Web3Wrapper from '../Utils/Web3Wrapper';
import Globals from '../Utils/Globals';
import MeryLooksHerUniversityValidation from './MeryLooksHerUniversityValidation';
import fib from '../fib.jpg';

class UniversityCanCreateSmartContractComponent extends Component {
  constructor(props) {
    super(props);

    this.handleClickPassedSubject = this.handleClickPassedSubject.bind(this);
    this.handleClickCreateSmartContract = this.handleClickCreateSmartContract.bind(this);
  }

  /**
   * Handler to increase student's subject number that it has passed.
   */
  handleClickPassedSubject() {
    const web3wrapper = new Web3Wrapper();
    web3wrapper.runContractMethod(
      Globals.accounts.user,
      MeryLooksHerUniversityValidation.contractAbi,
      MeryLooksHerUniversityValidation.contractAddress,
      'passSubject',
      true,
      null,
      (result) => { }
    );
  }

  /**
   * Handler to create student's smart contract.
   */
  handleClickCreateSmartContract() {
    const web3wrapper = new Web3Wrapper();
    web3wrapper.deployContractUniversity(function (contractAddress, contractAbi) {
      console.log(`Contract deployed! at address ${contractAddress}`);
      MeryLooksHerUniversityValidation.contractAddress = contractAddress;
      MeryLooksHerUniversityValidation.contractAbi = contractAbi;
    }.bind(this));
  }

  render() {
    return (
      <main role="main" className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <p className="navbar-text">Signed in as FIB</p>
          </div>
        </nav>

        <ul>
          <li><Link to="/users/mery/lookvalidation">MeryLooksHerUniversityValidation</Link></li>
        </ul>

        <div className="row">
          <div className="col">
            <div className="photo">
              <img
                style={{ width: '400px', height: 'auto' }}
                className="img-thumbnail rounded float-left"
                src={fib}
                alt="FIB-UPC"
              />
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: 'palevioletred' }}>
          <h3>Mery send you a enrolment request</h3>
          <button onClick={ this.handleClickCreateSmartContract } >Create smart contract</button>
          <button onClick={this.handleClickPassedSubject} >
            The student pass one subject more!</button>
        </div>

        <div className="row">
          <div className="col">
            <div className="summary">
              Everos Outsourcing es la unidad de negocio de everos que se
              encarga de prestar servicios de Gestión de Aplicaciones e
              Infraestructuras a clientes de primer nivel dentro de un amplio
              campo de sectores: telecomunicaciones, banca, seguros, energía,
              industria y sector público. En el ámbito de Gestión de
              Aplicaciones de la unidad de Outsourcing ponemos a disposición de
              nuestros clientes soluciones de Mantenimiento y Evolución de
              aplicaciones con orientación hacia la mejora continua, en una
              relación de asociación a largo plazo para alcanzar sus objetivos
              estratégicos de negocio.
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default UniversityCanCreateSmartContractComponent;
