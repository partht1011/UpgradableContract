
import { ethers, upgrades } from "hardhat";
import { Core } from "typechain-types";
import { CoreV2 } from "typechain-types/contracts/CoreV2.sol";
describe("UpgradableContract", function () {
    before(async () => {
        [] = await ethers.getSigners();

        const coreFactory = await ethers.getContractFactory('Core');
        const instance = await upgrades.deployProxy(coreFactory, [42], { initializer: 'initialize' });
        const proxyAddress = await instance.getAddress();
        console.log("Core Factory:" + proxyAddress);

        const coreV2Factory = await ethers.getContractFactory('CoreV2');
        const upgradedInstance = await upgrades.upgradeProxy(await proxyAddress, coreV2Factory);


        const adminAddress = await upgrades.erc1967.getAdminAddress(proxyAddress);
        console.log("Proxy Admin Address:", adminAddress);

        const implementationAddress = await upgrades.erc1967.getImplementationAddress(proxyAddress);
        console.log("Implementation Address:", implementationAddress);
    })
    it("asdf", async () => {
    })
});