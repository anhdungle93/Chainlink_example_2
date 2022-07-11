require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");
const { utils } = require("ethers");
/* const { sleep } = require("./scripts/helpers"); */

module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
        url: process.env.RinkebyInfuraAPI,
        accounts: [ process.env.RinkebyDeployerPrivateKey],
        },
        mainnet: {
            url: process.env.MainnetInfuraAPI,
            accounts: [ ],
            /* gasPrice: 30000000000 */
        }
    },
    etherscan: {
        apiKey: process.env.EtherscanApiKey,
    }
};