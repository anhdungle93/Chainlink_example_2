const { utils, BigNumber, Wallet } = require("ethers");

function secondsSinceEpoch() {
    return Math.round(Date.now() / 1000);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomBigNumber(max) {
    return BigNumber.from(utils.randomBytes(32)).mod(max);
}

function getInputData(functionSig, functionName, args) {
    let ABI = [functionSig];
    let iface = new utils.Interface(ABI);
    return iface.encodeFunctionData(functionName, args);
}

function sleep(s) {
    if (s > 0) {
        console.log(`Waiting for ${s} seconds`);
        return new Promise(resolve => setTimeout(resolve, s*1000));
    }
}

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }

function createNewWallets(numberOfWallets) {
    let wallets = [];
    for(let i=0; i<numberOfWallets; i++) {
        let w = Wallet.createRandom();
        wallets.push(w);
    }
    return wallets;
}

function getRandomBigNumber(max) {
    return BigNumber.from(utils.randomBytes(32)).mod(max);
}

module.exports = {
    createNewWallets,
    timeConverter,
    getInputData,
    sleep,
    secondsSinceEpoch,
    getRandomInt,
    getRandomBigNumber
}