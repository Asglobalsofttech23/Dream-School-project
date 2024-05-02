import React, { useState } from 'react';
import '../styles/Navbar.css'; 
import { PhoneOutgoing } from 'lucide-react';
import { MessageSquareMore } from 'lucide-react';
import { MdCall } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { Link } from 'react-router-dom';
import schlogo from '../components/schlogo.png';
import msg from '../components/msg.png';
import call from '../components/call.webp';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    
    <nav className="navbar">
      <div className="navbar-container">
        <img className='image' src={schlogo}/>
        <h2 className='navhead'>Dashboard</h2>
        <div className={isOpen ? 'navbar-links active' : 'navbar-links'}>
         
            <button className='navbtn'><Link to="/adminloginform">Admin</Link></button>
          <div className='socialimg'>
            <div className='msg'>
              <img src={msg}/>
            </div>
            <div className='call'>
            <img src={call}/>
            </div>
          </div>
          
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
