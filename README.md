api-key
JpDRkW97oGGj0VQP6tYRa-tMTaWpgDxG
HTTPS
https://eth-mainnet.g.alchemy.com/v2/JpDRkW97oGGj0VQP6tYRa-tMTaWpgDxG
websocket
wss://eth-mainnet.g.alchemy.com/v2/JpDRkW97oGGj0VQP6tYRa-tMTaWpgDxG

Code Example

Installation
# CLI 
npm install alchemy-sdk

Code example

// index.js
import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
    apiKey: "JpDRkW97oGGj0VQP6tYRa-tMTaWpgDxG",
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

// Get the latest block
const latestBlock = alchemy.core.getBlockNumber();

// Get all outbound transfers for a provided address
alchemy.core
    .getTokenBalances('0x994b342dd87fc825f66e51ffa3ef71ad818b6893')
    .then(console.log);

// Get all the NFTs owned by an address
const nfts = alchemy.nft.getNftsForOwner("vitalik.eth");

// Listen to all new pending transactions
alchemy.ws.on(
    { method: "alchemy_pendingTransactions",
    fromAddress: "vitalik.eth" },
    (res) => console.log(res)
);

Run node

# CLI
node index.js





# LearnWeb3DAO-Swisstronik-Challenge
.
.
To make a JSON RPC call using `eth_getStorageAt()` to get the first storage variable (slot #0) of any deployed smart contract, you can use the `alchemy-sdk` library. Here's an example code snippet in JavaScript:

```javascript
// Imports the Alchemy SDK
const { Alchemy, Network } = require("alchemy-sdk");

// Configures the Alchemy SDK
const config = {
  apiKey: "YOUR_API_KEY", // Replace with your Alchemy API key
  network: Network.ETH_MAINNET, // Use the Ethereum mainnet
};

// Creates an Alchemy object instance with the config to use for making requests
const alchemy = new Alchemy(config);

const main = async () => {
  // Initialize variables for the parameters
  const address = "YOUR_CONTRACT_ADDRESS"; // Replace with the address of the deployed smart contract
  const position = 0; // Slot number of the storage variable

  // Call the method to get storage
  const response = await alchemy.core.getStorageAt(address, position);

  // Logging the response to the console
  console.log(response);
};

main();
```

Replace `"YOUR_API_KEY"` with your actual Alchemy API key and `"YOUR_CONTRACT_ADDRESS"` with the address of the deployed smart contract you want to retrieve the storage variable from.

The retrieved value will depend on the specific smart contract and its implementation. The `eth_getStorageAt()` method allows you to access the state of a contract's storage directly, even if it's not exposed through the contract's methods. The retrieved value will be in `Bytes32` format.

Regarding the difference with other blockchains when using this RPC method, the `eth_getStorageAt()` method is specific to Ethereum and its testnets. It allows you to access the storage of a deployed smart contract on the Ethereum network. If you want to use this method on a testnet, it is recommended to use Sepolia over Goerli.
