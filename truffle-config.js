require('dotenv').config();  
const HDWalletProvider = require('@truffle/hdwallet-provider'); 
const privateKeys = process.env.PRIVATE_KEYS
module.exports = {
  networks: {
    AuroraMainnet: {
      provider: function() {
        return new HDWalletProvider(
          privateKeys.split(','), // Array of account private keys
          `https://mainnet.aurora.dev`// Url to Node
        )
      },
      gas: 25000000,
      gasPrice: 10000000000,
      network_id: 1313161554,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    AuroraTestnet: {
      provider: function() {
        return new HDWalletProvider(
          privateKeys.split(','), // array of private keys
          `https://testnet.aurora.dev` // Url to node
        )
      },
      gas: 25000000,
      gasPrice: 10000000000,
      network_id: 1313161555,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },

   contracts_directory: './client/src/contracts',
   contracts_build_directory: './client/src/contracts',
 
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
};
