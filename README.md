# Chainlink price feed test

Example of accessing ETH/USD price feed on rinkeby testnet
## Installation
```
npm install
```


## Deployment
### Zap contract

Make sure you have the environment variables setup as required by the `hardhat.config.js`. This includes the netwrok RPC to connect to and the private key for the deployer to send transactions from.

To get the price feed on rinkeby run the following command:
```
npx hardhat run scripts/interactPriceConsumerV3.js --network rinkeby
```
