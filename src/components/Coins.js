import { useState } from 'react';
import { CoinItem } from "./CoinItem";
import { CoinDetails } from "../routes/CoinDetails";
import { Link } from "react-router-dom";
import "./Coins.css";

export const Coins = (props) => {
    const [search, setSearch] = useState('');

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const filteredCoins = props.coins.filter(coins =>
        coins.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container">
            <div className="coin-search">
                <form>
                    <input
                        className="coin-input"
                        type="text"
                        onChange={handleChange}
                        placeholder="Search"
                    />
                </form>
            </div>
            <div>
                <div className="heading">
                    <p className="navRank">#</p>
                    <p className="coin-name">Coin</p>
                    <div className="coin-data">
                        <p className="coin-price">Price</p>
                        <p className="coin-priceChange hide-mobileC3">24h %</p>
                        <p className="coin-marketCap hide-mobileC2">Market cap</p>
                        <p className="coin-volume hide-mobileC1">Volume(24h)</p>
                    </div>
                </div>

                {filteredCoins.map(coins => {
                    return (
                        <Link to={`/coin/${coins.id}`} element={<CoinDetails />} key={coins.id}>
                            <CoinItem coins={coins} />
                        </Link>
                    )
                })}

            </div>
        </div>
    )
}