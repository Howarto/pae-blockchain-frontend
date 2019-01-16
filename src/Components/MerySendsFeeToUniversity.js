import React, { Component } from 'react';
import '../App.css';
import fib from '../facu_quimica.jpg';
import Web3Wrapper from '../Utils/Web3Wrapper';
import Globals from '../Utils/Globals';

class MerySendsFeeToUniversity extends Component {
  /**
   * Component constructor.
   * @param {Object} props - Constructor properties.
   */
  constructor(props) {
    super(props);

    this.state = { buttonClicked: false, wasPaid: false };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const web3wrapper = new Web3Wrapper();
    web3wrapper.getAccountsTransactions(
      Globals.accounts.user,
      Globals.accounts.university,
      function(transactions) {
        if (transactions.length > 0) {
          this.setState({ wasPaid: true });
        }
      }.bind(this)
    );
  }

  /**
   * Handler validation's button.
   */
  handleClick() {
    if (!this.state.buttonClicked) {
      // Change button state.
      this.setState({ buttonClicked: true });
      // Send in blockchain a transaction to university account.
      const web3wrapper = new Web3Wrapper();
      web3wrapper.sendMoney(
        Globals.accounts.user,
        Globals.accounts.university,
        '30'
      );
    }
  }

  render() {
    return (
      <main role="main" className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <p className="navbar-text">Signed in as <b>Edu</b></p>
          </div>
        </nav>

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

        <div className="row">
          <div className="col">
            <div className="summary">
              La Facultad de Química imparte desde hace años los estudios de
              Química, de Ingeniería Química y de Ingeniería de Materiales, con
              una amplia experiencia y tradición, y con la mejor calidad
              docente, sobradamente reconocida. Los titulados y profesionales
              del sector químico, tanto licenciados recientes como personal de
              empresas o de instituciones públicas o privadas, también pueden
              completar la formación mediante cursos de posgrado y de extensión
              universitaria, másteres y doctorados. La Facultad participa en
              proyectos de investigación nacionales e internacionales, con una
              movilidad considerable de conocimientos, profesorado y
              estudiantes. Con estos proyectos, se alcanza una producción
              científica muy elevada, que justifica la calidad reconocida de la
              investigación de la Facultad.{' '}
            </div>
          </div>
        </div>

        {!this.state.wasPaid && (
          <div className="row">
            <div className="col">
              <div className="send-cv">
                <button
                  style={{ background: 'lightgray' }}
                  onClick={this.handleClick}
                >
                  Send personal data and fee
                </button>
              </div>
            </div>
          </div>
        )}

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

export default MerySendsFeeToUniversity;
