require("@nomicfoundation/hardhat-toolbox");

const DATAHUB_API_KEY = 'YOUR_DATAHUB_API_KEY';
const FUJI_PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  paths: {
    artifacts: './src/artifacts'
  },
  networks: {
    fuji: {
      url: `https://avalanche--fuji--rpc.datahub.figment.io/apikey/${DATAHUB_API_KEY}/ext/bc/C/rpc`,
      accounts: [`0x${FUJI_PRIVATE_KEY}`],
    },
  }
}
