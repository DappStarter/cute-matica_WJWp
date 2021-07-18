require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom produce bone food stock riot pitch history coral light army gate'; 
let testAccounts = [
"0xd41c84241adf04e2d7db7fd00a98cc4b8360b0122573898eda986236d0ca4fe5",
"0x270c52fbbc94deeda04a70fe44f5b0286d2d41e8e303504990c927e09a2cc04e",
"0x26ed21cd0e6de5c442a4aef720b1714876daa9c95c2bf32c0f062a937330e7bc",
"0x745c2688227ab0f522d97989af891e264aff3aa05838672f123e6f3706ea170a",
"0x7cb13a632f4c00a9960afdf0ffc2dc035602d9ff7d33922c2fedbf5397971c3b",
"0xa082eb03d2d72a058ef22958500b6a7378352fedd1ce21b2f97abebb10f620b7",
"0xbd1e08d7fb9f1a0a2233b6db9fbf245a486d594d079f65ce353cd4cd065eb12d",
"0x7f2a40f20df860b2066b3ac48f25f6d21b2e98dd81deabad538ed0199855fa8e",
"0xfd1e8ad417ab68a22166956b6428ee33166d85a47560920a92f2c30a046ab8bc",
"0xc576aca4c72b7f04213de2bf793d3da6abda2a3631f847f3df2d81e531f53042"
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

