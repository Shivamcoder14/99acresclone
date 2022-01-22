import React from "react";
import Navlogo from "../img/navlogo.png";
import { Link } from "react-router-dom";

const Navbar =()=>{
    return(
        <>
            <div className="Nav-container fixed-top ">
                <div className="Nav-left">
                    <img src={Navlogo} alt="img"/>
                </div>
                <div className="Nav-right">
                <Link className="nav-btn" to="/"> Home</Link>
                    <Link className="nav-btn"to="/">For Buyers</Link>
                    <Link className="nav-btn" to="/">For Owners</Link>
                    <Link className="nav-btn" to="/cities">Post City</Link>
                    <Link className="nav-btn" to="/properties">Post Property</Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;