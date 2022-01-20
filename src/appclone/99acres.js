import React from "react";
import Navbar from "./navbar";
import Searchbar from "./searchbar";
import MainBox from "./mainbox";
import Main1 from "./main1";
import PostsList from "../PostsList";

const Acres = () => {

    return (
        <div>
            {/* <Navbar/> */}
            <Searchbar />
            <MainBox />
            <Main1 />
            {/* <PostsList/> */}
        </div>
    );
}


export default Acres;


