const hre = require("hardhat");
const { utils } = require("ethers");
const { sleep } = require("./shared/helpers");

async function main() {
    const [ deployer ] = await hre.ethers.getSigners();

    console.log(`operating on network ${hre.network.name}`)

    console.log(`Deploying contracts with account: ${ deployer.address }`);

    console.log(`Deployer account balance: ${ (await deployer.getBalance()).toString()}`);

    const PriceConsumerV3Factory = await hre.ethers.getContractFactory("PriceConsumerV3", deployer);

    const PriceConsumerV3Instance = await PriceConsumerV3Factory.deploy();

    const PriceConsumerV3Address = PriceConsumerV3Instance.address;
    console.log(`PriceConsumerV3 address: ${PriceConsumerV3Address}`);
    console.log(`deployed from address ${PriceConsumerV3Instance.deployTransaction.from}`);

    const PriceConsumerV3DeployTxHash = PriceConsumerV3Instance.deployTransaction.hash;

    while ((await hre.ethers.provider.getTransactionReceipt(PriceConsumerV3DeployTxHash)) == null) {
        console.log(`waiting for PriceConsumerV3 implementation deployment to be finished.`);
        await sleep(10);
    }

    const PriceConsumerV3DeployReceipt = await hre.ethers.provider.getTransactionReceipt(PriceConsumerV3DeployTxHash);

    console.log(`PriceConsumerV3 deployment is finished`);
    console.log(`gas used ${PriceConsumerV3DeployReceipt.gasUsed}`);

    await sleep(120);

    await hre.run("verify:verify", {
        address: PriceConsumerV3Address,
        constructorArguments: [ ],
    })
}

main()
    .then(() => process.exit(0))
    .catch(error => {
    console.error(error);
    process.exit(1);
    });