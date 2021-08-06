# dapp-helloworld

# First Decentralized Application

## Development Stacks:

-   Truffle
-   Ganache
-   Web3
-   NextJS
-   ReactJS

## Development Steps:

### 1. Install truffle and ganache:

-   Run: npm i -g truffle, npm i -g ganache-cli
-   Run: ganache-cli
-   Connect Metamask to Ganache: Import account from Ganache to Metamask
    Run: Copy code from cli -> Import account to Metamask

### 2. Create blockchain smart contract

-   Config truffle file: truffle-config.js. Uncomment network details
-   Create network. Ex: ganache

### 3. Deploy smart contract with truffle and ganache

-   Truffle compile -> truffle console -> truffle migrate
-   If error try with: truffle console --network name_of_network
    Ex: truffle console --network ganache

-   After run truffle migrate, truffle will deploy smart contracts. And show Summary if success.

It will create "networks" data detail in contract json in build\contracts

Ex:
Summary

> Total deployments: 2
> Final cost: 0.00973148 ETH

-   Blocks: 0 Seconds: 0
-   Saving migration to chain.
-   Blocks: 0 Seconds: 0
-   Saving migration to chain.

### 4. Setup frontend with NextJS

-   Create smart contract instance
