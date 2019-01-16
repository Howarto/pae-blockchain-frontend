import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Web3Wrapper from '../Utils/Web3Wrapper';
import Globals from '../Utils/Globals';
import MeryLooksHerUniversityValidation from './MeryLooksHerUniversityValidation';
import fib from '../facu_quimica.jpg';

class UniversityCanCreateSmartContractComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { formCreation: false };

    this.handleClickPassedSubject = this.handleClickPassedSubject.bind(this);
    this.handleClickCreateSmartContract = this.handleClickCreateSmartContract.bind(
      this
    );
    this.handleClickCreateForm = this.handleClickCreateForm.bind(this);
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
      result => {}
    );
  }

  /**
   * Handler to show smart contract form.
   */
  handleClickCreateForm() {
    this.setState({ formCreation: true });
  }

  /**
   * Handler to create student's smart contract.
   */
  handleClickCreateSmartContract() {
    const web3wrapper = new Web3Wrapper();
    web3wrapper.deployContractUniversity(
      function(contractAddress, contractAbi) {
        console.log(`Contract deployed! at address ${contractAddress}`);
        MeryLooksHerUniversityValidation.contractAddress = contractAddress;
        MeryLooksHerUniversityValidation.contractAbi = contractAbi;
      }.bind(this)
    );
  }

  render() {
    return (
      <main role="main" className="container">
        <ul>
          <li>
            <Link to="/users/mery/lookvalidation">
              Look Edu's profile as Bayer
            </Link>
          </li>
        </ul>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <p className="navbar-text">
              Signed in as <b>UB: Facultat de química</b>
            </p>
          </div>
        </nav>
        <div className="wrapper fib">
          <div className="profile-card js-profile-card">
            <div className="profile-card__img fib">
              <img src={fib} alt="profile card" />
            </div>
            <div className="profile-card__cnt js-profile-cnt">
              <div className="profile-card__name">UB: Facultat de Química</div>
              <div className="profile-card__txt">
                <strong>Universidad</strong>
              </div>

              <div className="profile-card_txt">
                <div className="profile-card-inf__item">
                  <div className="profile-card-inf__txt">
                    La Facultad de Química imparte desde hace años los estudios
                    de Química, de Ingeniería Química y de Ingeniería de
                    Materiales, con una amplia experiencia y tradición, y con la
                    mejor calidad docente, sobradamente reconocida. Los
                    titulados y profesionales del sector químico, tanto
                    licenciados recientes como personal de empresas o de
                    instituciones públicas o privadas, también pueden completar
                    la formación mediante cursos de posgrado y de extensión
                    universitaria, másteres y doctorados. La Facultad participa
                    en proyectos de investigación nacionales e internacionales,
                    con una movilidad considerable de conocimientos, profesorado
                    y estudiantes. Con estos proyectos, se alcanza una
                    producción científica muy elevada, que justifica la calidad
                    reconocida de la investigación de la Facultad.
                  </div>
                </div>
                <div style={{ backgroundColor: 'palevioletred' }}>
                  <h3>Edu sent you a enrolment request</h3>
                  <button onClick={this.handleClickCreateForm}>
                    <b>Create smart contract</b>
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button onClick={this.handleClickPassedSubject}>
                    <b>The student pass one subject more!</b>
                  </button>
                </div>
              </div>
            </div>
            {this.state.formCreation && (
              <div
                style={{ margin: '0px 100px 0px 100px' }}
                className="wrap-contact100"
              >
                <span className="contact100-form-title">
                  Formulario de inscripción
                </span>

                <div
                  className="wrap-input100 validate-input"
                  data-validate="Name is required"
                >
                  <span className="label-input100">Nombre del estudiante</span>
                  <input
                    className="input100"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                  />
                  <span className="focus-input100" />
                </div>

                <div
                  className="wrap-input100 validate-input"
                  data-validate="Valid email is required: ex@abc.xyz"
                >
                  <span className="label-input100">Email</span>
                  <input
                    className="input100"
                    type="text"
                    name="email"
                    placeholder="Enter your email addess"
                  />
                  <span className="focus-input100" />
                </div>

                <div className="wrap-input100 input100-select">
                  <span className="label-input100">Estudios</span>
                  <div>
                    <select className="selection-2" name="estudios">
                      <option>Química</option>
                    </select>
                  </div>
                  <span className="focus-input100" />
                </div>

                <div className="wrap-input100 input100-select">
                  <span className="label-input100">
                    Descuentos del estado aplicables
                  </span>
                  <div>
                    <select className="selection-2" name="descuento">
                      <option>Selecciona descuento</option>
                      <option>100% Matrícula de honor</option>
                      <option>70% Família numerosa</option>
                      <option>10% Residente</option>
                    </select>
                  </div>
                  <span className="focus-input100" />
                </div>

                <div
                  className="wrap-input100 validate-input"
                  data-validate="Message is required"
                >
                  <span className="label-input100">Condición de aprobado</span>
                  <textarea
                    className="input100"
                    name="message"
                    placeholder="Condición de aprobado..."
                  />
                  <span className="focus-input100" />
                </div>

                <div className="container-contact100-form-btn">
                  <div className="wrap-contact100-form-btn">
                    <div className="contact100-form-bgbtn" />
                    <button
                      onClick={this.handleClickCreateSmartContract}
                      className="contact100-form-btn"
                    >
                      <span>
                        Submit
                        <i
                          className="fa fa-long-arrow-right m-l-7"
                          aria-hidden="true"
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    );
  }
}

export default UniversityCanCreateSmartContractComponent;
