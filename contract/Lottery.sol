// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract AvaxLottery{
    address payable public owner ;
    uint public prize_pool;

    // Enum to track ticket progress
    enum TicketStatus {
        Pending,
        InProgress,
        Ended
    }
    
    //initialize enum
    TicketStatus public ticket_status ;

    // Info about ticket
    struct TicketInfo {
        string title;
        uint[6] public generated_numbers; // array of random generated numbers
    }

    //initialize struct
    TicketInfo[] public ticket_info;

    // struct User {
    //     uint id;
    //     uint[6] ticket;
    //     uint ticket_type;
    // }

    constructor() {
        // Set the transaction sender as the owner of the contract.
        owner = payable(msg.sender());
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

    // Function to create ticket by the owner of the contract
    function create_ticket (string memory _text, uint[] memory _numbers) public onlyOwner returns (TicketInfo){
        ticket_info.push(TicketInfo(_numbers, _text));
    }

    function get_generated_numbers() public view returns (uint[] memory) {
        return generated_numbers;
    }
}