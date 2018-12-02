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
      web3wrapper.sendMoney(
        Globals.accounts.user,
        Globals.accounts.company,
        '5'
      );
    }
  }

  render() {
    return (
      <main role="main" className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <p className="navbar-text">Signed in as <b>Mery</b></p>
          </div>
        </nav>
        <div className="wrapper everos">
          <div className="profile-card js-profile-card">
            <div className="profile-card__img">
              <img src={everos} alt="profile card" />
            </div>
            <div className="profile-card__cnt js-profile-cnt">
              <div className="profile-card__name">EVEROS</div>
              <div className="profile-card__txt">
                <strong>Consultoría multinacional</strong>
              </div>

              <div className="profile-card_txt">
                <div className="profile-card-inf__item">
                  <div className="profile-card-inf__txt">
                    Everos Outsourcing es la unidad de negocio de everos que se
                    encarga de prestar servicios de Gestión de Aplicaciones e
                    Infraestructuras a clientes de primer nivel dentro de un
                    amplio campo de sectores: telecomunicaciones, banca,
                    seguros, energía, industria y sector público. En el ámbito
                    de Gestión de Aplicaciones de la unidad de Outsourcing
                    ponemos a disposición de nuestros clientes soluciones de
                    Mantenimiento y Evolución de aplicaciones con orientación
                    hacia la mejora continua, en una relación de asociación a
                    largo plazo para alcanzar sus objetivos estratégicos de
                    negocio.
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
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default MerySendsCV;
