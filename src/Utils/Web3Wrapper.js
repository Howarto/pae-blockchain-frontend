import Web3 from 'web3';
import Globals from './Globals';

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
            debugger;
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

  /**
   * Deploys a contract.
   * @param {Function} callback - Callback function with contract address as a parameter.
   */
  deployContractUniversity(callback) {
    const contractAbi = [{
      constant: true,
      inputs: [],
      name: 'isValidated',
      outputs: [{
        name: '',
        type: 'bool'
      }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    }, {
      constant: false,
      inputs: [],
      name: 'passSubject',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      constant: false,
      inputs: [],
      name: 'failSubject',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      constant: true,
      inputs: [],
      name: 'getCount',
      outputs: [{
        name: '',
        type: 'int256'
      }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    }, {
      constant: true,
      inputs: [],
      name: 'studentAdress',
      outputs: [{
        name: '',
        type: 'address'
      }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    }];
    const contractCode = '0x6080604052600080556000600160006101000a81548160ff02191690831515021790555034801561002f57600080fd5b506102178061003f6000396000f30060806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063414eb814146100725780637fb37eb8146100a1578063a31c3b5c146100b8578063a87d942c146100cf578063b1bd8b0b146100fa575b600080fd5b34801561007e57600080fd5b50610087610151565b604051808215151515815260200191505060405180910390f35b3480156100ad57600080fd5b506100b6610168565b005b3480156100c457600080fd5b506100cd6101a0565b005b3480156100db57600080fd5b506100e46101bd565b6040518082815260200191505060405180910390f35b34801561010657600080fd5b5061010f6101c6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000600160009054906101000a900460ff16905090565b600160008082825401925050819055506003600054141561019e5760018060006101000a81548160ff0219169083151502179055505b565b6000805413156101bb57600160008082825403925050819055505b565b60008054905090565b6001809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a723058202e37569e797d11b74cc518630aec3233e6a9256e0b90e0c61624045500924e2b0029';

    const MyContract = new this.web3.eth.Contract(contractAbi);

    MyContract.deploy({
      data: contractCode,
    })
      .send({
        from: Globals.accounts.university,
        gas: 4700000
      })
      .then((instance) => {
        callback(instance.options.address, instance._jsonInterface);
      });
  }

  runContractMethod(account, contractAbi, contractAddress, functionName, args = null, callback) {
    const myContract = new this.web3.eth.Contract(contractAbi, contractAddress);

    if (args) {
      myContract.methods[functionName](args).send({ from: account })
        .then(function () {
          console.log('It runs!');
        });
    }
    else {
      myContract.methods[functionName]().send({ from: account })
        .then(callback);
    }
  }

  getUserValidation(callback) {
  }
}

export default Web3Wrapper;
