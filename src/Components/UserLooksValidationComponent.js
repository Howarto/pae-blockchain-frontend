import React, { Component } from 'react';
import '../App.css';
import girlUser from '../girlUser.jpeg';
import Web3Wrapper from '../Utils/Web3Wrapper';
import Globals from '../Utils/Globals';

class UserLooksValidationComponent extends Component {
  /**
   * Component constructor.
   * @param {Object} props - Constructor properties.
   */
  constructor(props) {
    super(props);

    this.state = {
      buttonClicked: false,
      hasCVAccess: false,
      verified: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (UserLooksValidationComponent.contractAbi && UserLooksValidationComponent.contractAddress) {
      const web3wrapper = new Web3Wrapper();
      const userAccount = Globals.accounts.user;
      web3wrapper.runContractMethod(
        userAccount,
        UserLooksValidationComponent.contractAbi,
        UserLooksValidationComponent.contractAddress,
        'isValidated',
        false,
        null,
        function (result) {
          if (result) {
            this.setState({ verified: result });
          }
        }.bind(this)
      );
    }
  }

  /**
   * Handler validation's button.
   */
  handleClick() {
    this.setState({ buttonClicked: !this.state.buttonClicked });
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
              <img className="img-thumbnail" src={girlUser} alt="Mery" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="summary">
              Hasta hace poco, lideré la comercialización de XYZ Corp, un
              desarrollador de software centrado en el middleware para la
              industria de los videojuegos. En este papel me centré en el
              marketing B2B, aunque he realizado una amplia labor de B2C en el
              pasado. Los éxitos incluyen la creación de una campaña de los
              medios sociales y la publicidad en línea que generaron enorme
              repercusión en los medios de comunicación y fue clave para el
              éxito del lanzamiento del software Zwango en 2010. La experiencia
              previa incluye el trabajo con la agencia XYZ & Partners y Red Dog
              de Marketing.
            </div>
          </div>
        </div>

        {this.state.verified && (
          <div className="row">
            <div className="col">
              <div className="aptitudes">
                <h3>
                  This user had been verified by FIB
                </h3>
              </div>
            </div>
          </div>
        )}

        {this.state.hasCVAccess && (
          <div className="row">
            <div className="col">
              <div className="aptitudes">
                <h3>
                  Estas aptitudes no se verían si no existiera en la Blockchain
                  la transacción
                </h3>
              </div>
            </div>
          </div>
        )}

        <div className="row">
          <div className="col">
            <div className="askForValidations">
              <button onClick={this.handleClick}>Ask for validation</button>
            </div>
          </div>
        </div>

        {this.state.buttonClicked && (
          <div className="row">
            <div className="col">
              <div className="askForValidations">
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      placeholder="Company's name or user's name"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <input type="text" placeholder="Aptitude" />
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <button>Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    );
  }
}
UserLooksValidationComponent.contractAddress = null;
UserLooksValidationComponent.contractAbi = null;

export default UserLooksValidationComponent;
