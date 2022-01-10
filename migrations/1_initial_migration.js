const HelloWorld = artifacts.require("Migrations");

module.exports = function (deployer) {
  var message = "First smart contract.";
  deployer.deploy(HelloWorld, message);
};
