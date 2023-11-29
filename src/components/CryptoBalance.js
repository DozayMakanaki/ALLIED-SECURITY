// src/components/CryptoBalance.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BTC from '../assets/btc-img.png';
import './CryptoBalance.css';

const CryptoBalance = () => {
  const [balance, setBalance] = useState(21375080);
  const [bitcoinEquivalent, setBitcoinEquivalent] = useState(null);

  useEffect(() => {
    const fetchBitcoinEquivalent = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
        );
        const bitcoinPrice = response.data.bitcoin.usd;
        setBitcoinEquivalent((balance / bitcoinPrice).toFixed(8));
      } catch (error) {
        console.error('Error fetching Bitcoin equivalent:', error);
      }
    };

    fetchBitcoinEquivalent();
  }, [balance]);

  return (
    <div className='balance'>
      <h4>Balance</h4>
      <h2>${balance.toLocaleString()}</h2>
      {bitcoinEquivalent && (
        <p>
          <img
            src={BTC}
            alt="Bitcoin Logo"
            style={{ height: '20px', width: '20px', marginRight: '5px' }}
          />
          {Number(bitcoinEquivalent).toFixed(4)} BTC
        </p>
      )}
    </div>
  );
};

export default CryptoBalance;
