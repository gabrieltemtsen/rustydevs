require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  paths: {
    artifacts: './src/artifacts'
  },
  networks: {
    fuji: {
      url: "https://attentive-floral-meadow.avalanche-testnet.discover.quiknode.pro/6df2e541c25fcabf179320a849ba31d19363c938/ext/bc/C/rpc",
      accounts: [`0x8b1143d22ecb317d271bc024f946c97bc6246061b8cffade562cdcfeaa9ef195`],
      chainId: 43113,
    }
  }
};