import Web3 from 'web3';

class Web3Wrapper {
  /**
   * Web3Wrapper constructor.
   */
  constructor() {
    this.web3 = new Web3(
      new Web3.providers.HttpProvider('http://localhost:7545')
    );
  }

  /**
   * Sends money from an account to other account.
   * @param {String} from - account which sends the money.
   * @param {String} to - account which receives the money.
   * @param {String} etherValueToSend - ether quantity to send.
   * @returns {Promise} - Transaction's promise.
   */
  sendMoney(from, to, etherValueToSend) {
    this.web3.eth.sendTransaction({
      from,
      to,
      value: this.web3.utils.toWei(etherValueToSend, 'ether')
    });
  }

  /**
   * Returns balance from a specific account.
   * @param {String} from - account where look the balance.
   * @param {Function} callback - callback to execute when balance is extracted.
   */
  getBalance(from, callback) {
    this.web3.eth.getBalance(from, (err, result) => {
      callback(result);
    });
  }

  /**
   * Gets transactions with 'address' used as a sender or receiver.
   * @param {String} address - address to inspect transactions.
   * @param {Function} callback - functions executed when transactions
   * are received. Its fist parameter is a transaction array.
   */
  getAccountTransactions(address, callback) {
    this.web3.eth.getBlockNumber().then(function (endBlock) {
      const startBlock = 0;
      const promisesArray = [];
      for (let i = startBlock; i <= endBlock; i++) {
        promisesArray.push(this.web3.eth.getBlock(i, true));
      }
      Promise.all(promisesArray).then(function (promisesValues) {
        const transactions = [];
        for (const block of promisesValues) {
          if (block && block.transactions) {
            block.transactions.forEach((elem) => {
              if (address === '*' || address === elem.from || address === elem.to) {
                transactions.push(elem);
              }
            });
          }
        }
        callback(transactions);
      });
    }.bind(this));
  }

  /**
   * Gets transactions with 'address1' used as a sender and 'address2' as receiver.
   * @param {String} address1 - sender address.
   * @param {String} address2 - receiver address.
   * @param {Function} callback - functions executed when transactions
   * are received. Its fist parameter is a transaction array.
   */
  getAccountsTransactions(address1, address2, callback) {
    this.web3.eth.getBlockNumber().then(function (endBlock) {
      const startBlock = 0;
      const promisesArray = [];
      for (let i = startBlock; i <= endBlock; i++) {
        promisesArray.push(this.web3.eth.getBlock(i, true));
      }
      Promise.all(promisesArray).then(function (promisesValues) {
        const transactions = [];
        for (const block of promisesValues) {
          if (block && block.transactions) {
            block.transactions.forEach((elem) => {
              if (address1 === '*' || address1 === elem.from) {
                if (address2 === elem.to) {
                  transactions.push(elem);
                }
              }
            });
          }
        }
        callback(transactions);
      });
    }.bind(this));
  }
}

export default Web3Wrapper;
