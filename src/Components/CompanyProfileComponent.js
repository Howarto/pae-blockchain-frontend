import React, { Component } from 'react';
import '../App.css';
import everos from '../everos.png';

class CompanyProfileViewer extends Component {
  /**
   * Component constructor.
   * @param {Object} props - Constructor properties.
   */
  constructor(props) {
    super(props);

    this.state = { buttonClicked: false };
    this.setState(this.state);

    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * Handler validation's button.
   */
  handleClick() {
    this.setState({ buttonClicked: true });
    // Send in blockchain a transaction to the company account.
  }

  render() {
    return (
      <main role="main" className="container">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <p class="navbar-text">Signed in as Mery</p>
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

export default CompanyProfileViewer;
