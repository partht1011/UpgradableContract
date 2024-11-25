import { ethers, upgrades } from "hardhat";
async function main() {
    [] = await ethers.getSigners();

    // const coreFactory = await ethers.getContractFactory('Core');
    // const instance = await upgrades.deployProxy(coreFactory, [42], { initializer: 'initialize', kind: 'transparent' });
    // const proxyAddress = await instance.getAddress();
    // console.log("Core Factory:" + proxyAddress);

    const coreV2Factory = await ethers.getContractFactory('CoreV2');
    const upgradedInstance = await upgrades.upgradeProxy("0x3AE2A428D6594086FDFDB67d3dD6DF5788d85F1C", coreV2Factory);
    console.log("CoreV2 Factory:" + await upgradedInstance.getAddress());

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
