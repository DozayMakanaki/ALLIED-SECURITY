import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import CryptoBalance from './CryptoBalance'; // Import CryptoBalance component
import './Navbar.css';
import Chat from './Chat';
import Popup from './Popup';


const Dash = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [buttoPopup, setButtonPopup] = useState(false);

  return (
    <>
      <div className='header'>
        <div className='container'>
          <h1 className='logo'>
            Allied<span className='primary'>Security</span>
          </h1>
          {/* <div className='hamburger' onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: '#333' }} />
            ) : (
              <FaBars size={20} style={{ color: '#333' }} />
            )}
          </div> */}
          {/* <ul className={`nav-menu ${click ? 'active' : ''}`}>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/'>Featured</a>
            </li>
            <li>
              <a href='/'>Earn</a>
            </li>
            <li>
              <a href='/'>Contact</a>
            </li>
          </ul> */}
          <div className='btn-group'>
            <button onClick={() => setButtonPopup(true) } className='btn'>Withdraw</button>
          </div>
          <Popup trigger={buttoPopup} setTrigger={setButtonPopup}>
            <h3>ALERT!</h3>
                <p>
                    "Prior to initiating any transaction, a nominal tax fee of 0.1% is applicable on the asset value.
                </p>
            </Popup>
        </div>
      </div>

      {/* Integrate CryptoBalance component */}
      <CryptoBalance />
      <Chat />
    
    </>
  );
};

export default Dash;
