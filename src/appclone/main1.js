import React from "react";
import Navlogo from "../img/navlogo.png";


const Main1 =()=>{

    return(
        <>
            <div className="box-5">
                <h5>All Property Needs-One Portal</h5>
                <h1>Find Better Places to Live,Work and Wonder...</h1>
                <div className="box-5-content">
                    <div className="box-5-content-1">
                        <img src={Navlogo} alt="img"/>
                    </div>
                    <div className="box-5-content-2">
                        <h3>Buy A Home</h3>
                        <h1>Find,Buy & Own Your Dream House</h1>
                        <p>Explore from Apartments,land,builderfloors,villas and more</p>
                        <button className="main1-btn">Explore Buying</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Main1;