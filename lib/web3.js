import Web3 from 'web3';

let web3 = new Web3(Web3.givenProvider || "wss://mainnet.infura.io/ws/v3/50fcd1139db84c29914ece5dbc677d85")

export {
    web3
}
