import { useState, useEffect } from "react";
import Axios from "axios";
import { Coins } from "./components/Coins";
import { ConditionalNavbar } from "./components/ConditionalNavbar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { CoinDetails } from "./routes/CoinDetails";

function App() {

  const [coins, setCoins] = useState([]);

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"

  useEffect(() => {
    Axios.get(url)
         .then((response) => setCoins(response.data))
         .catch((error) => console.log(error))
  }, [url])


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<ConditionalNavbar />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Coins coins={coins} key={coins.id}/>} />
          <Route path="/coin/:coinID" element={<CoinDetails />} />
          <Route path="*" element={<h1>404 Not found</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
