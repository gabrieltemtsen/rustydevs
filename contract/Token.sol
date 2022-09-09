// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract AvaxLottery{
    address payable public owner ;
    uint public prize_pool;

    constructor() {
        // Set the transaction sender as the owner of the contract.
        owner = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner of Contract");
        _;
    }

    // Function to get the current prize pool
    function get_pool_prize() public view returns (uint) {
        return prize_pool;
    }

    // Function to increment prize pool by the ticket amount a user purchase
    function update_prize_pool() public {
        
    }

    // Function to transfer prize base on winning tickets
    function transfer_prize() public {
        
    }

    // array of random generated numbers
    uint[] public generated_numbers;

    function get_generated_numbers() public view returns (uint[] memory) {
        return generated_numbers;
    }
}