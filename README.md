# Solidity Ethereum Smart Contract Example

The main purpose of this project is to create a smart contract with the polygon blockchain built on the ethereum blockchain.
You can get the details for Polygon at `https://polygon.technology`.

In the project, we show how to create a smart contract in a simple way with the help of truffle and npm, which are javascript libraries. We describe the project step by step from the installation to the final state.
It would be good to know some solidity language for writing smart contracts within the project.

Inside an empty project folder, we run the following code in the terminal to first use our package management and create an npm based project.

```bash
npm init
```

We download the `truffle` package that we use in the project with the help of npm.

```
npm install -g truffle
```

Knowing a little about the truffle package contribute to this project. Then we need to start a truffle project.

```
truffle init
```

This command create the folders and files we need for a truffle project. A file structure like the one below greet you inside the project.
We download the `truffle` package that we use in the project with the help of npm.

```
npm install -g truffle
```

Knowing a little about the truffle package contribute to this project. Then we need to start a truffle project.

```
truffle init
```

This command create the folders and files we need for a truffle project. A file structure like the one below will greet you inside the project.

```
Solidity-Example:
    > contracts:
        Migrations.sol
    > migrations:
        1_initial_migration.js
    > test
    truffle-config.js
```

The project we are currently in is ready to be compiled. You can run `npm install` in the home directory to install all other packages. From here, you can create the contracts you will write in the `contrats` folder. You can then migrate and deploy the contracts you created in the `migrations` folder.

Let's talk a little about some tools to make full use of the project.

**_Metamask_**
Metamask is a wallet for ethereum. With its easy use, you can create a network immediately. To test the structure in the project, I suggest you examine the network on the polygon and how the test coins are received.

**_Remix_**
An online contract creation and deployment tool for Remix ethereum. You can reach it at `https://remix.ethereum.org/`.

**_PolygonScan_**
PolygonScan is a tool that allows to review and monitor created contracts. You can access it at `https://mumbai.polygonscan.com/` and examine its usage.

In the project, only how it can be done was mentioned and a 'HelloWorld' application was made in the simplest extent.

If you have questions, you can contact me with `barisakdas00@gmail.com` e-mail address.
