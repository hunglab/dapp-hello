//SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

contract Helloworld {
    string public str = "hello world";

    function getString() public view returns (string memory) {
        return str;
    }
}
