import React, { useEffect, useState } from "react";
import Percentage from './Percentage.js';
import Chart from './Chart.js';
import './Chat.css';

function Chat() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const priceUrl =
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en';

        const response = await fetch(priceUrl);

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }

        const data = await response.json();

        // Assuming your data structure has a 'currencies' property
        setCurrencies(data);
      } catch (error) {
        console.error("Failed to receive data", error);
      }
    };

    fetchData();
  }, []);

  function formatToUsd(val) {
    const formattedValue = val.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    const trimmedValue = formattedValue.replace(".00", "");

    return trimmedValue;
  }

  return (
    <div className="crypto-prices">
      <div className="title">
        <h1>Prices</h1>
        <p>
          <a href="https://www.coingecko.com/">CoinGecko</a>
        </p>
      </div>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>price</th>
            <th>1h</th>
            <th>24</th>
            <th>7d</th>
            <th>24 Volume</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map((coin) => (
            <tr key={coin.id}>
              <td>{coin.market_cap_rank}</td>
              <td>
                <div className="coin">
                  <img src={coin.image} alt={coin.symbol} />
                  <h4>{coin.name}</h4>
                  <small>{coin.symbol}</small>
                </div>
              </td>
              <td>{formatToUsd(coin.current_price)}</td>
              <Percentage coin={coin.price_change_percentage_1h_in_currency} />
              <Percentage coin={coin.price_change_percentage_24h_in_currency} />
              <Percentage coin={coin.price_change_percentage_7d_in_currency} />
              <td>{formatToUsd(coin.total_volume)}</td>
              <td>{formatToUsd(coin.market_cap)}</td>
              <td>
                <Chart sparkline={coin.sparkline_in_7d} priceChange={coin.price_change_percentage_7d_in_currency} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Chat;
