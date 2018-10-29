import React, { Component } from 'react';
import '../App.css';
import girlUser from '../girlUser.jpeg';

class ProfileViewer extends Component {
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
    this.setState({ buttonClicked: !this.state.buttonClicked });
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
              <img className="img-thumbnail" src={girlUser} alt="Mery" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="summary">
              Hasta hace poco, lideré la comercialización de XYZ Corp, un
              desarrollador de software centrado en el middleware para la industria
              de los videojuegos. En este papel me centré en el marketing B2B,
              aunque he realizado una amplia labor de B2C en el pasado. Los éxitos
              incluyen la creación de una campaña de los medios sociales y la
              publicidad en línea que generaron enorme repercusión en los medios de
              comunicación y fue clave para el éxito del lanzamiento del software
              Zwango en 2010. La experiencia previa incluye el trabajo con la
              agencia XYZ & Partners y Red Dog de Marketing.
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="validations" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="askForValidations">
              <button onClick={this.handleClick}>Ask for validation</button>
            </div>
          </div>
        </div>

        { this.state.buttonClicked
          && (
            <div className="row">
              <div className="col">
                <div className="askForValidations">
                  <div className="row">
                    <div className="col">
                      <input type="text" placeholder="Company's name or user's name" />
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
          )
        }
      </main>
    );
  }
}

export default ProfileViewer;
