import React from "react";
import HeaderLogo from "../images/logo.png";
import {NavLink} from "react-router-dom";

function Header() {
    return(
        <div id="header">
            <div className="main-header">
                <div className="logo">
                    <img src={HeaderLogo} />
                </div>
                <div className="main-navigation">
                    <ul className="navigation-bar">
                        <NavLink to="/home" style={{textDecoration: "none"}}>
                            <li>Home</li>
                        </NavLink>
                        <NavLink to="/about" style={{textDecoration: "none"}}>
                            <li>About Us</li>
                        </NavLink>
                        <NavLink to="/portfolio" style={{textDecoration: "none"}}>
                            <li>Portfolio</li>
                        </NavLink>
                        <NavLink to="/contact" style={{textDecoration: "none"}}>
                            <li>Contact Us</li>
                        </NavLink>
                        <NavLink to="/news" style={{textDecoration: "none"}}>
                            <li>News</li>
                        </NavLink>   
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Header;
