const hre = require("hardhat");
const { utils } = require("ethers");
const { sleep } = require("./shared/helpers");

async function main() {
    const [ deployer ] = await hre.ethers.getSigners();

    let PriceConsumerV3Address;

    if (hre.network.name == "rinkeby") {
        PriceConsumerV3Address = "0x37B0B1f4776F1e973f25bC7afA766af8E7062CF1";
    } 

    console.log(`operating on network ${hre.network.name}`)

    console.log(`Deploying contracts with account: ${ deployer.address }`);

    console.log(`Deployer account balance: ${ (await deployer.getBalance()).toString()}`);

    const PriceConsumerV3Factory = await hre.ethers.getContractFactory("PriceConsumerV3", deployer);

    const PriceConsumerV3Instance = await PriceConsumerV3Factory.attach(PriceConsumerV3Address);

    const price = await PriceConsumerV3Instance.getLatestPrice();

    console.log(`price from chainlink ETH/USD price oracle is ${price}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
    console.error(error);
    process.exit(1);
    });