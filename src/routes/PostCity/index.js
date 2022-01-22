import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import "../PostCity/style.css"
import Pic from "../../img/navlogo.png"
import axios from "axios";


const PostCity = () => {

    let {id}=useParams();

    const [data, setData] = useState({
        name: "",
        createdAt: "",
        updatedAt: ""
    });
    

    const formCityInput = (e) => {

        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
    }

    // Axios POST Request 

    const formCitySubmit = (e) => {
        e.preventDefault();

          
        axios.post("https://fswi-99acres-clone.herokuapp.com/cities/",
            {
                name: data.name,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.log(err))

        

    }

    // Axios  GET Request 

    const [post, setPost] = useState(null);

    useEffect(() => {
        getAllTypes();
    }, []);
    const getAllTypes = () => {
        axios.get('https://fswi-99acres-clone.herokuapp.com/cities')
            .then((res) => {
                console.log(res.data)
                setPost(res.data);

            })
            .catch(error => console.error("Error"));

            axios.get(`https://fswi-99acres-clone.herokuapp.com/cities/${id}`)
            .then((res) => {
                console.log(res.data)
                // setPost(res.data);

            })
            .catch(error => console.error("Error"));
            

    }

    // Axios DELETE Request 
    
    const cityDelete=(iid,e)=>{
        e.preventDefault();
        // alert(id)
        axios.delete(`https://fswi-99acres-clone.herokuapp.coms/cities/${iid}`,{...data,name:""})
        .then((res)=>{
            console.log("City Deleted",res)
        })
        .catch(error=>console.log("Error",error))
    }

    // Axios UPDATE Request 

    const cityUpdate=(id,e)=>{
        e.preventDefault();

        axios.put(`https://fswi-99acres-clone.herokuapp.com/cities/${id}`,{...data,name:"Ranchi"})
        .then((res)=>{
            console.log("City Updated",res)
        })
        .catch(error=>console.log("Error"))
    }

    // DISPLAY Request 

    const displayCityData = () => {

        return post ? (
            post.map((post) => {
                return (
                    <div className="citydata" key={post.id}>
                        <h3>{post._id}</h3>
                        <h3>{post.name}</h3>
                        <h3>{post.createdAt}</h3>
                        <h3>{post.updatedAt}</h3>
                        {/* <button onClick={(e)=>cityDelete(post._id,e)}>Delete</button> */}
                        <button onClick={(e)=>cityUpdate(post._id,e)}>Update</button>

                    </div>
                );
            })
        ) : (
            <h3>No Post Yet</h3>
        );
    }





    return (
        <>
            <div id="roots-city">
                <div className="ccmain">
                    <div className="cc-main-left">
                        <div>
                            <span>REACH UPTO 42 LACS BUYERS</span>
                        </div>
                        <div>
                            <h2>Sell or Rent your City on 99acres</h2>
                        </div>
                        <img src={Pic} />
                    </div>
                    <div className="cc-post">
                        <form onSubmit={formCitySubmit}>
                            {/* <h3>Welcome {id} !</h3> */}
                            <div className="cc-post-maintext">
                                <h4>Begin Posting your City</h4>
                            </div>
                            <div className="cc-post-mainsubtext">
                                Add Basic Details
                            </div>
                            <div className="cc-post-inputs">
                                <div className="cc-post-items">
                                    <span>Name</span>
                                    <input onChange={formCityInput} id="name" value={data.name} type="text" autoComplete="off" ></input>
                                </div>
                                <div className="cc-post-items">
                                    <span>Created At</span>
                                    <input onChange={formCityInput} id="createdAt" value={data.createdAt} type="date" autoComplete="off" ></input>
                                </div>
                                <div className="cc-post-items">
                                    <span>Updated At</span>
                                    <input onChange={formCityInput} id="updatedAt" value={data.updatedAt} type="date" autoComplete="off" ></input>
                                </div>
                                
                                <div className="cc-post-items">
                                    <button className="cc-btn">Begin to Post Your City</button>
                                </div>
                                {/* <div className="cc-post-items">
                                <button className="cc-show-btn">Show Property</button>
                            </div> */}
                            </div>
                        </form>

                    </div>
                </div>
                <div className="cc-data-box">

                    {displayCityData()}
                </div>


            </div>
        </>
    )
}

export default PostCity;