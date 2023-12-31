import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css"

export const NavbarCD = () => {
    return (
        <div>
            <Link to="/">
                <div className="navbar">
                    <FaCoins className="icon" />
                    <h1>Hash <span className="purple">Crypt</span></h1>
                </div>
            </Link>
            <p className="slogan">Unlock the Future of Finance</p>
        </div>
    )
}