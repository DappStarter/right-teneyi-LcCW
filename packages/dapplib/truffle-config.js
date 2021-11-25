require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include enroll sure tribe struggle crawl ridge quality hard light army gate'; 
let testAccounts = [
"0xf05c87b93e26242abed69dd21548663a7e01cb5f21fe3b3b14a8cf823eb966c5",
"0xb2a1e7bb953d2d1eb5d017b98f35832f4b403a75a63b6dc45db7f6a6629a53f4",
"0x1c9d1543e7122fd0af8263c51b026dbd3011bb43188b333a33da92d1972f8a42",
"0x4f32c9120213759eb32c2e4bd02b828986e72ac370ed700dbae5369db12c4dc2",
"0x40afc1fd5e43ec57ee89c6374acc0c3e3e0dad2c1237eb58e7f984d358826a68",
"0xd523938c40221b8419bfc63ec38929fd7c51eaea3a06b2a6f7e16e178512ce88",
"0x8cce89d9b2a2aced53d6b3d48c847f449da60f5cd7445999fa91e4484a5ea89b",
"0xf63f78089f5f69cf81e4842e10585b1b6ca0d463e5f0c0f564faa0fc59117472",
"0x1899e110e8d2068a6cb87a9c84cb99b0cb2d4d2e458779d02e1560434e7260b3",
"0x7c46cd3efeba14896b1f096a6ad49ee23eebd3c97f35afe7676bc645b0073493"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

