import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './reduxStore/posts/actions/fetch_posts';
import PostPropertyList from  './PostPropertyList';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './App.css';
// import Acres from "./appclone/99acres";
import Home from './routes/Home';
import PostProperty from './routes/PostProperty';
import Navbar from './appclone/navbar';
import PostCity from './routes/PostCity';

function App() {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchPosts())
  // }, [])
  return (
    
    <div className="App ">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/properties" element={<PostProperty/>}/>
          <Route path="/properties/:id" element={<PostProperty/>}/>
          <Route path="/cities" element={<PostCity/>}/>
          <Route path="/cities/:id" element={<PostCity/>}/>


        </Routes>
      </Router>
      {/* <PostPropertyList/> */}
    </div>
  );
}

export default App;
