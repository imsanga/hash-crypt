import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import Axios from "axios";
import "./CoinDetails.css";

export const CoinDetails = () => {

    const params = useParams();
    const [coinDetails, setCoinDetails] = useState({});
 
    const url = `https://api.coingecko.com/api/v3/coins/${params.coinID}`;

    useEffect(() => {
        Axios.get(url)
             .then((response) => setCoinDetails(response.data))
             .catch((error) => console.log(error))
      }, [url])

   
    return (
        <div> 
            <div className="coin-container">
                <div className='content divD'>
                    <h1 className="coinHcolor">{coinDetails.name}</h1>
                </div>
                <div className="content">
                    <div className="rank">
                        <span className="rank-btn">Rank # {coinDetails.market_cap_rank}</span>
                    </div>
                    <div className="info">
                        <div className="coin-heading">
                            <img src={coinDetails.image?.small} alt=""/>
                            <p>{coinDetails.name}</p>
                            <p className="coinDsymbol">{coinDetails.symbol?.toUpperCase()}/USD</p>
                        </div>
                        <div className="coin-price">
                            <h1>${coinDetails.market_data?.current_price.usd.toLocaleString()}</h1>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <table>
                        <thead>
                            <tr>
                                <th>1h</th>
                                <th>24h</th>
                                <th>7d</th>
                                <th className="hideM2">14d</th>
                                <th>30d</th>
                                <th className="hideM">1yr</th>  
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {coinDetails.market_data?.price_change_percentage_1h_in_currency.usd.toFixed(2) < 0 ? (
                                    <td className="red">{coinDetails.market_data?.price_change_percentage_1h_in_currency.usd.toFixed(2)}%</td>) :
                                    (<td className="green">{coinDetails.market_data?.price_change_percentage_1h_in_currency.usd.toFixed(2)}%</td>)}

                                {coinDetails.market_data?.price_change_percentage_24h_in_currency.usd.toFixed(2) < 0 ? (
                                    <td className="red">{coinDetails.market_data?.price_change_percentage_24h_in_currency.usd.toFixed(2)}%</td>) :
                                    (<td className="green">{coinDetails.market_data?.price_change_percentage_24h_in_currency.usd.toFixed(2)}%</td>)}
                                
                                {coinDetails.market_data?.price_change_percentage_7d_in_currency.usd.toFixed(2) < 0 ? (
                                    <td className="red">{coinDetails.market_data?.price_change_percentage_7d_in_currency.usd.toFixed(2)}%</td>) : 
                                    (<td className="green">{coinDetails.market_data?.price_change_percentage_7d_in_currency.usd.toFixed(2)}%</td>)}

                                {coinDetails.market_data?.price_change_percentage_14d_in_currency.usd.toFixed(2) < 0 ? (
                                    <td className="hideM2 red">{coinDetails.market_data?.price_change_percentage_14d_in_currency.usd.toFixed(2)}%</td>) :
                                    (<td className="hideM2 green">{coinDetails.market_data?.price_change_percentage_14d_in_currency.usd.toFixed(2)}%</td>)}

                                {coinDetails.market_data?.price_change_percentage_30d_in_currency.usd.toFixed(2) < 0 ? (
                                   <td className="red">{coinDetails.market_data?.price_change_percentage_30d_in_currency.usd.toFixed(2)}%</td>) : 
                                   (<td className="green">{coinDetails.market_data?.price_change_percentage_30d_in_currency.usd.toFixed(2)}%</td>)}

                                {coinDetails.market_data?.price_change_percentage_1y_in_currency.usd.toFixed(2) < 0 ? (
                                   <td className="hideM red">{coinDetails.market_data?.price_change_percentage_1y_in_currency.usd.toFixed(2)}%</td>) :
                                   (<td className="hideM green">{coinDetails.market_data?.price_change_percentage_1y_in_currency.usd.toFixed(2)}%</td>)}

                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="content">
                    <div className="stats">
                        <div className="left">
                            <div className="row">
                                <h4>24 Hour Low</h4>
                                <p>${coinDetails.market_data?.low_24h.usd.toLocaleString()}</p>
                            </div>
                            <div className="row">
                                <h4>24 Hour High</h4>
                                <p>${coinDetails.market_data?.high_24h.usd.toLocaleString()}</p>
                            </div>   
                        </div>
                        <div className="right">
                            <div className="row">
                                <h4>Market Cap</h4>
                                <p>${coinDetails.market_data?.market_cap.usd.toLocaleString()}</p>
                            </div>
                            <div className="row">
                                <h4>Circulating Supply</h4>
                                <p>{coinDetails.market_data?.circulating_supply?.toLocaleString()}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="about">
                        <h3>About</h3>
                        <p dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(coinDetails.description?.en)
                        }}>
                        </p>
                    </div>

                </div>
                
            </div>
        </div> 
               
    )
}