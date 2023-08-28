import { CoinItem } from "./CoinItem";
import { CoinDetails } from "../routes/CoinDetails";
import { Link } from "react-router-dom";
import "./Coins.css";

export const Coins = (props) => {
    return (
        <div className="container">
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

                {props.coins.map(coins => {
                    return (
                        <Link to={`/coin/${coins.id}`} element={<CoinDetails />} key={coins.id}>
                            <CoinItem coins={coins}/>
                        </Link>
                    )
                })}

            </div>
        </div>
    )
}