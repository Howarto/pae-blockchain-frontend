import React, { Component } from 'react';
import '../App.css';
import fib from '../fib.jpg';
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
            <p className="navbar-text">Signed in as Mery</p>
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
              Bayer is a global enterprise with core competencies in the Life
              Science fields of health care and agriculture. Our products and
              services are designed to benefit people and improve their quality
              of life. At the same time, we aim to create value through
              innovation, growth and high earning power. Our products help
              address some of today’s biggest challenges, including global
              population growth, an aging society and the need to make efficient
              – and, wherever possible, sustainable – use of natural resources.
              In line with our mission “Bayer: Science For A Better Life,” we
              aim to improve people’s quality of life by preventing, alleviating
              or curing diseases. We also help provide an adequate supply of
              high-quality food, feed and renewable plant-based raw materials.
              For these endeavors, we focus on developing and successfully
              commercializing innovative products and solutions based on
              scientific knowledge.
            </div>
          </div>
        </div>

        {!this.state.wasPaid && (
          <div className="row">
            <div className="col">
              <div className="send-cv">
                <button onClick={this.handleClick}>
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
