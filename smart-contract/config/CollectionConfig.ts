import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.hardhatLocal,
  mainnet: Networks.polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'SuperCryptoEggs',
  tokenName: 'Super Crypto Eggs',
  tokenSymbol: 'SCE',
  hiddenMetadataUri: "ipfs://QmaqHw8bazecWQcasCXszcvuSJN8DvxXosM8EvAUG4yjDd/",
  maxSupply: 999,
  whitelistSale: {
    price: 3,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 5,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 10,
    maxMintAmountPerTx: 5,
  },
  contractAddress: '0xEfdd9061769820288a2E3F0a1Bfacc952Aedc104',
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
