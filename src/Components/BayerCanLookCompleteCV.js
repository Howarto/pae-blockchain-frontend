import React, { Component } from 'react';
import '../App.css';
import checkSVG from '../check.svg';
import Web3Wrapper from '../Utils/Web3Wrapper';
import Globals from '../Utils/Globals';

class BayerCanLookCompleteCV extends Component {
  /**
   * Component constructor.
   * @param {Object} props - Constructor properties.
   */
  constructor(props) {
    super(props);

    this.state = {
      buttonClicked: false,
      hasCVAccess: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const web3wrapper = new Web3Wrapper();
    const userAccount = Globals.accounts.user;
    const companyAccount = Globals.accounts.company;
    web3wrapper.getAccountsTransactions(userAccount, companyAccount, function (transactions) {
      if (transactions.length > 0) {
        this.setState({ hasCVAccess: true });
      }
    }.bind(this));
  }

  /**
   * Handler validation's button.
   */
  handleClick() {
    this.setState({ buttonClicked: !this.state.buttonClicked });
  }

  render() {
    return <main role="main" className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <p className="navbar-text">Signed in as <b>Bayer</b></p>
        </div>
      </nav>
      <div className="wrapper">


        <div className="profile-card js-profile-card">
          <div className="profile-card__img">
            <img src="data:image/jpeg;base64,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" alt="profile card" />
          </div>
          <div className="profile-card__cnt js-profile-cnt">
            <div className="profile-card__name">Mery</div>
            <div className="profile-card__txt">Marketing y Comunicación en <strong>ISEBA Business School</strong></div>

            <div className="profile-card_txt">

              <div className="profile-card-inf__item">

                <div className="profile-card-inf__txt">Hasta hace poco, lideré la comercialización de XYZ Corp, un
                            desarrollador de software centrado en el middleware para la
                            industria de los videojuegos. En este papel me centré en el
                            marketing B2B, aunque he realizado una amplia labor de B2C en
                            el pasado. Los éxitos incluyen la creación de una campaña de
                            los medios sociales y la publicidad en línea que generaron
                            enorme repercusión en los medios de comunicación y fue clave
                            para el éxito del lanzamiento del software Zwango en 2010. La
                            experiencia previa incluye el trabajo con la agencia XYZ &amp;
                    Partners y Red Dog de Marketing.</div>
              </div>
              {this.state.hasCVAccess && <div className="row">
                <div className="col">
                  <div className="aptitudes">
                    <h2>
                      Aptitudes validadas
                </h2>
                    <h4>
                      <div>
                        Estudió <b>Marketing y Comunicación</b> en <b>ISEBA Business School</b>
                        &nbsp;
                    <img width="22px" height="22px" src={checkSVG} />
                      </div>
                    </h4>
                    <h4>
                      <div>
                        Trabajó en <b>XYZ Corp</b> como persona encargada de la comercialización y marketing.
                        &nbsp;
                    <img width="22px" height="22px" src={checkSVG} />
                      </div>
                    </h4>
                    <h4>
                      <div>
                        Trabajó en <b>Red Dog</b> como persona encargada del marketing de producto.
                        &nbsp;
                    <img width="22px" height="22px" src={checkSVG} />
                      </div>
                    </h4>
                  </div>
                </div>
              </div>}
            </div>
          </div>

        </div>

      </div>
    </main>;
  }
}

export default BayerCanLookCompleteCV;
