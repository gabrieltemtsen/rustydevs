/* eslint-disable no-unused-vars */

import './assets/css/main.css';
import './assets/css/bootstrap-5.0.0-alpha-1.min.css';
import './assets/css/LineIcons.2.0.css';
import './assets/css/animate.css';
import './assets/js/bootstrap.bundle-5.0.0.alpha-1-min.js';




import { useState } from 'react';

import Nav from './components/Nav';
import Header from './pages/Header';
import Trade from './pages/Trade';
import Feature from './pages/Feature';
import Footer from './components/Footer';
// import WalletCard from './WalletCard';

import {ethers} from 'ethers';
import AvaxLottery from './artifacts/contracts/AvaxLottery.sol/AvaxLottery.json';


const lotteryAddress = '0xf8c94bd32DAc1912598e30315d18CD55eFc18b5E';



function App() {

  const [getLength, ticketNumber, setTicketnumber] = useState(0);
  const [ticket, setTicket] = useState([{
    text: '',
    numbers: []
  }]);


  
  async function requestAccount() {
    await window.ethereum.request({method: 'eth_requestAccounts'})
  }

  async function getTickets() {
    if (typeof window.ethereum !== 'undefined'){
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(lotteryAddress, AvaxLottery.abi, provider);
      try {
        const data = await contract.get_tickets();
        console.log('data', data);
      }
      catch (error) {
        console.log('error:', error);
      }
    }
  }

  async function createTicket() {
    // if (!ticket) return ;

    if (typeof window.ethereum !== 'undefined'){
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log('signer@: ',signer)
      const transaction = new ethers.Contract(lotteryAddress, AvaxLottery.abi, signer);
      try {
        // const data = await transaction.create_ticket(ticket);
        const getter = await transaction.get_tickets();
        console.log('YEAHHHTISKETNO: ', getter)
        // console.log('data', data);
      }
      catch (error) {
        console.log('error:', error);
      }
    }
    
  }

  return (
    <>
      <Nav connectWallet={requestAccount}/>
      <Header getLength={createTicket} />
      <Trade />
      {/* <WalletCard/> */}
      <Feature />
      <Footer />
    </>
    
  );
}

export default App;
