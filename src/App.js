import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './reduxStore/posts/actions/fetch_posts';
import PostsList from './PostsList';

import './App.css';
import Acres from "./appclone/99acres";

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchPosts())
  },[])
  return (
    <div className="App ">
      <Acres />
      <PostsList/>
    </div>
  );
}

export default App;
