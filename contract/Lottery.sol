// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract AvaxLottery{
    address payable public owner ;
    uint public prize_pool;

    enum TicketStatus {
        Pending,
        InProgress,
        Ended
    }
                     
    TicketStatus public ticket_status ;

     // Update ticket status
    function set_ticket_status(TicketStatus _status) public onlyOwner {
        ticket_status = _status;
    }

    // resets the enum to pending
    function reset_ticket_status() public onlyOwner{
        delete ticket_status;
    }

    // get the status of the ticket
    function get_ticket_status() public view returns (TicketStatus) {
        return ticket_status;
    }

    struct TicketInfo {
        string title;
        uint[6] generated_numbers; // array of random generated numbers
    }

    TicketInfo[] public ticket_info;

    struct User {
        uint id;
        uint[6] ticket;
        uint ticket_type;
    }

    constructor() {
        // Set the transaction sender as the owner of the contract.
        owner = payable(msg.sender);
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

    // modifier to check the length of guessed input is 6
    modifier checkLengthOfTicket(uint[6] memory numbers) {
        require(numbers.length != 0, "Inputted Guess Must be 6 in length");
        _;
    }

     // Function to create ticket by the owner of the contract
    function create_ticket (string memory _text, uint[6] memory _numbers) public onlyOwner checkLengthOfTicket(_numbers){
        ticket_info.push(TicketInfo( _text, _numbers));
    }

    // function get_generated_numbers() public view returns (uint[6]) {
    //     return ticket_info.generated_numbers;
    // }
}