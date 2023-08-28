import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {
    return (
        <Link to="/">
            <div className="navbar">
                <FaCoins className="icon" />
                <h1>Hash <span className="purple">Crypt</span></h1>
            </div>
            <p className="slogan">Unlock the Future of Finance</p>
            <h1 className="hideinDetailsP">Discover the <span style={{color: "#6900ff"}}>Top 100 Crypto Powerhouses</span> on Our Platform!</h1>
        </Link>
    )
}