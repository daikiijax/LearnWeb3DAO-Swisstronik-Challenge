// Imports the Alchemy SDK
const { Alchemy, Network } = require("alchemy-sdk");

// Configures the Alchemy SDK
const config = {
  apiKey: "JpDRkW97oGGj0VQP6tYRa-tMTaWpgDxG", // Replace with your Alchemy API key
  network: Network.ETH_MAINNET, // Use the Ethereum mainnet
};

// Creates an Alchemy object instance with the config to use for making requests
const alchemy = new Alchemy(config);

const main = async () => {
  // Initialize variables for the parameters
  const address = "0xf84Df872D385997aBc28E3f07A2E3cd707c9698a"; // Replace with the address of the deployed smart contract
  const position = 0; // Slot number of the storage variable

  // Call the method to get storage
  const response = await alchemy.core.getStorageAt(address, position);

  // Logging the response to the console
  console.log(response);
};

main();
