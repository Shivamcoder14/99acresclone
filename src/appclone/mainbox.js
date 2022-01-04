import React from "react";
import Navlogo from "../img/navlogo.png";

const MainBox=()=>{
    return(
        <>
        <div className="box-4">
            <h5>GET STARTED WITH EXPLORING REAL ESTATE OPTIONS</h5>
                <div className="box-4-content">
                    <div className="img-detail">
                        <img src={Navlogo}></img>
                        <p> Buying a Home</p>
                    </div>
                    <div className="img-detail">
                        <img src={Navlogo}></img>
                        <p> Renting a Home</p>
                    </div>
                    <div className="img-detail">
                        <img src={Navlogo}></img>
                        <p> Sell/Rent your property</p>
                    </div>
                    <div className="img-detail">
                        <img src={Navlogo}></img>
                        <p> PG and Co-living</p>
                    </div>
                    <div className="img-detail">
                        <img src={Navlogo}></img>
                        <p> Buying Commercial Spaces</p>
                    </div>
                    <div className="img-detail">
                        <img src={Navlogo}></img>
                        <p> Lease Commercial Spaces</p>
                    </div>
                </div>
        </div>
        </>
    );
}
export default MainBox;