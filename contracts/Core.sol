// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Core is Initializable {
	uint256 public x;

	// Initialize function to set the initial value of x
	function initialize(uint256 _x) public virtual initializer {
		x = _x;
	}

	// Function to update the value of x
	function setX(uint256 _x) public {
		x = _x;
	}
}
