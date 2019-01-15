import React, { Component } from 'react';
import '../App.css';
import bayer from '../bayer.png';
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
            <p className="navbar-text">
              Signed in as <b>Mery</b>
            </p>
          </div>
        </nav>
        <div className="wrapper bayer">
          <div className="profile-card js-profile-card">
            <div className="profile-card__img">
              <img src={bayer} alt="profile card" />
            </div>
            <div className="profile-card__cnt js-profile-cnt">
              <div className="profile-card__name">Bayer</div>
              <div className="profile-card__txt">
                <strong>Consultoría multinacional</strong>
              </div>

              <div className="profile-card_txt">
                <div className="profile-card-inf__item">
                  <div className="profile-card-inf__txt">
                    Bayer is a global enterprise with core competencies in the
                    Life Science fields of health care and agriculture. Our
                    products and services are designed to benefit people and
                    improve their quality of life. At the same time, we aim to
                    create value through innovation, growth and high earning
                    power. Our products help address some of today’s biggest
                    challenges, including global population growth, an aging
                    society and the need to make efficient – and, wherever
                    possible, sustainable – use of natural resources. In line
                    with our mission “Bayer: Science For A Better Life,” we aim
                    to improve people’s quality of life by preventing,
                    alleviating or curing diseases. We also help provide an
                    adequate supply of high-quality food, feed and renewable
                    plant-based raw materials. For these endeavors, we focus on
                    developing and successfully commercializing innovative
                    products and solutions based on scientific knowledge.
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="send-cv">
                      <button onClick={this.handleClick}>
                        <b>Send CV</b>
                      </button>
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
