import { useLocation } from "react-router-dom";
import { NavbarCD } from "./NavbarCD";
import { Navbar } from "./Navbar";

export const ConditionalNavbar = () => {
    const location = useLocation();

    if (location.pathname.includes("/coin/")) {
      return <NavbarCD />; 
    }
  
    return <Navbar />;
}