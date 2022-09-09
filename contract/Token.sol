// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract AvaxLottery{
    uint public prize_pool;

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
}