import React, { Component } from 'react';
import '../App.css';
import everos from '../everos.png';
import Web3Wrapper from '../Utils/Web3Wrapper';
import Globals from '../Utils/Globals';

class MerySendsCV extends Component {
  /**
   * Component constructor.
   * @param {Object} props - Constructor properties.
   */
  constructor(props) {
    super(props);

    this.state = { buttonClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * Handler validation's button.
   */
  handleClick() {
    if (!this.state.buttonClicked) {
      // Change button state.
      this.setState({ buttonClicked: true });
      // Send in blockchain a transaction to the company account.
      const web3wrapper = new Web3Wrapper();
      web3wrapper.sendMoney(Globals.accounts.user, Globals.accounts.company, '5');
    }
  }

  render() {
    return (
      <main role="main" className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <p className="navbar-text">Signed in as Mery</p>
          </div>
        </nav>

        <div className="row">
          <div className="col">
            <div className="photo">
              <img
                style={{ width: 'auto', height: '350px' }}
                className="img-thumbnail rounded float-left"
                src={everos}
                alt="Everos"
              />
            </div>
          </div>
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

        <div className="row">
          <div className="col">
            <div className="send-cv">
              <button onClick={this.handleClick}>Send CV</button>
            </div>
          </div>
        </div>

        {this.state.buttonClicked && (
          <div className="row">
            <div className="col">
              <div className="send-cv">
                <p>Sended!</p>
              </div>
            </div>
          </div>
        )}
      </main>
    );
  }
}

export default MerySendsCV;
