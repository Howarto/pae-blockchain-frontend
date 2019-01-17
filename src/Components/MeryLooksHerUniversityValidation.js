import React, { Component } from 'react';
import '../App.css';
import edu from '../edu_head.png';
import Web3Wrapper from '../Utils/Web3Wrapper';
import Globals from '../Utils/Globals';
import checkSVG from '../check.svg';

class MeryLooksHerUniversityValidation extends Component {
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
    if (
      MeryLooksHerUniversityValidation.contractAbi &&
      MeryLooksHerUniversityValidation.contractAddress
    ) {
      const web3wrapper = new Web3Wrapper();
      const userAccount = Globals.accounts.user;
      web3wrapper.runContractMethod(
        userAccount,
        MeryLooksHerUniversityValidation.contractAbi,
        MeryLooksHerUniversityValidation.contractAddress,
        'isValidated',
        false,
        null,
        function(result) {
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
            <p className="navbar-text">
              Signed in as <b>Bayer</b>
            </p>
          </div>
        </nav>
        <div className="wrapper">
          <div className="profile-card js-profile-card">
            <div className="profile-card__img">
              <img
                src={edu}
                style={{ objectFit: 'contain' }}
                alt="profile card"
              />
            </div>
            <div className="profile-card__cnt js-profile-cnt">
              <div className="profile-card__name">Edu</div>
              <div className="profile-card__txt">
                Ingeniero químico graduado en <strong>UB: Facultat de química</strong>
              </div>

              <div className="profile-card_txt">
                <div className="profile-card-inf__item">
                  <div className="profile-card-inf__txt">
                    Hasta hace poco, lideré la comercialización de XYZ Corp, una
                    empresa que impulsa el I+D de reactivos metalúrgicos.
                    Centrada en la industria de hidrocarburos. En este papel me
                    centré en el desarrollo y producción, aunque he realizado
                    una amplia labor técnica en el pasado. Los éxitos incluyen
                    la creación de un desarrollo de un hidrocarburo con un 25%
                    más de eficiencia respecto al mercado y un reactivo que fue
                    clave para el éxito del lanzamiento del producto químico
                    Zwango en 2010. La experiencia previa incluye el trabajo con
                    la empresa XYZ &amp; Partners y Red Dog.
                  </div>
                </div>
                {this.state.verified && (
                  <div className="row">
                    <div className="col">
                      <div className="aptitudes">
                        <h3>
                          This user had been verified by UB: Facultat de química{' '}
                          <img width="22px" height="22px" src={checkSVG} />
                        </h3>
                      </div>
                    </div>
                  </div>
                )}
                {this.state.hasCVAccess && (
                  <div className="row">
                    <div className="col">
                      <div className="aptitudes">
                        <h2>Aptitudes validadas</h2>
                        <h4>
                          <div>
                            Estudió <b>Marketing y Comunicación</b> en{' '}
                            <b>ISEBA Business School</b>
                            &nbsp;
                            <img width="22px" height="22px" src={checkSVG} />
                          </div>
                        </h4>
                        <h4>
                          <div>
                            Trabajó en <b>XYZ Corp</b> como persona encargada de
                            la comercialización y marketing. &nbsp;
                            <img width="22px" height="22px" src={checkSVG} />
                          </div>
                        </h4>
                        <h4>
                          <div>
                            Trabajó en <b>Red Dog</b> como persona encargada del
                            marketing de producto. &nbsp;
                            <img width="22px" height="22px" src={checkSVG} />
                          </div>
                        </h4>
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
MeryLooksHerUniversityValidation.contractAddress = null;
MeryLooksHerUniversityValidation.contractAbi = null;

export default MeryLooksHerUniversityValidation;
