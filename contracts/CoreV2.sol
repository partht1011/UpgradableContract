// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract CoreV2 is Initializable {
	uint256 public x;
	uint256 public y; // New state variable

	function initialize(uint256 _x) public virtual initializer {
		x = _x;
		y = 0; // Initialize new variable
	}

	function setX(uint256 _x) public {
		x = _x;
	}

	function setY(uint256 _y) public {
		y = _y; // New function to set y
	}
}
