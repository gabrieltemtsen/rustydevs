
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
import About from './pages/About';
import Footer from './components/Footer';

import {ethers} from 'ethers';
import AvaxLottery from './artifacts/contracts/AvaxLottery.sol/AvaxLottery.json';


const lotteryAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';



function App() {

  const [ticketNumber, setTicketnumber] = useState(0);
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
    if (!ticket) return ;

    if (typeof window.ethereum !== 'undefined'){
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const transaction = new ethers.Contract(lotteryAddress, AvaxLottery.abi, signer);
      try {
        const data = await transaction.create_ticket(ticket);
        console.log('data', data);
      }
      catch (error) {
        console.log('error:', error);
      }
    }

    setTicket('');
  }

  return (
    <>
      <Nav />
      <Header />
      <Trade />
      <Feature />
      <About />
      <Footer />
    </>
    
  );
}

export default App;
