require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKeys = process.env.PRIVATE_KEYS || "";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    mumbai: {
      provider: () => new HDWalletProvider(
        privateKeys.split(','), // Array of account private keys
        'https://polygon-zkevm-cardona.blockpi.network/v1/rpc/public' // Provided RPC URL for Polygon ZKEVM
      ),
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 2442 // Polygon ZKEVM network ID
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "0.8.0", // Specify the solc version you are using
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
