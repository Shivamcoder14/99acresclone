import React from "react";
import mainImg from "../img/main.png";

const Searchbar = () => {

    return (
        <>
            <div className="box-1">
                <img src={mainImg} alt="main-image" />
            </div>
            <div className="box-2">
                <div className="btns">
                    <button className="btn">Buy</button>
                    <button className="btn">Rent</button>
                    <button className="btn">PG/Co-living</button>
                    <button className="btn"> Commercial</button>
                    <button className="btn">Co-workings</button>
                    <button className="btn">Projects</button>
                    <button className="btn">Dealers</button>
                </div>
                <div className="box-3">
                    <div className="search-bar">
                        <select>
                            <option value="Buy">Buy</option>
                            <option value="Buy">Rent</option>
                            <option value="Buy">PG/Co-livings</option>

                        </select>
                        <div className="search-input">
                            <input placeholder="Enter City/Locality/Project/Society"></input>
                            <button className="search-bar-btn"> Search </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Searchbar;