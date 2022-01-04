import React from "react";
import Navlogo from "../img/navlogo.png";


const Navbar =()=>{
    return(
        <>
            <div className="Nav-container fixed-top ">
                <div className="Nav-left">
                    <img src={Navlogo} alt="img"/>
                </div>
                <div className="Nav-right">
                <a className="nav-btn" href="/"> For Buyers</a>
                    <a className="nav-btn"href="/">For Tenants</a>
                    <a className="nav-btn" href="/">For Owners</a>
                    <a className="nav-btn" href="/">For Dealers/Builders</a>
                    <a className="nav-btn" href="/">Post Property</a>
                </div>
            </div>
        </>
    );
}

export default Navbar;