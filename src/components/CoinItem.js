import "./Coins.css";

export const CoinItem = (props) => {
    return (
        <div className="coin-row">
            <p className="rankHome hashtag">{props.coins.market_cap_rank}</p>
            <div className="img-symbol">
                <img src ={props.coins.image} alt="" />
                <p>{props.coins.name}</p>
                <p className="coinSymbol">{props.coins.symbol.toUpperCase()}</p>
            </div>
            <div className="coin-data">
                <p className="coin-price">${props.coins.current_price.toLocaleString()}</p>
                {props.coins.price_change_percentage_24h < 0 ? (
                    <p className="coin-percent red hide-mobileC3">{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
                ) : (
                    <p className="coin-percent green hide-mobileC3">{props.coins.price_change_percentage_24h.toFixed(2)}%</p>   
                )}
                <p className="coin-marketcap hide-mobileC2">${props.coins.market_cap.toLocaleString()}</p>
                <p className="coin-volume hide-mobileC1">${props.coins.total_volume.toLocaleString()}</p> 
            </div>  
        </div>
    )
}