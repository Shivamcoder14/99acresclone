import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../PostProperty/style.css"
import Pic from "../../img/navlogo.png"
import axios from "axios";


const PostProperty = () => {

    let { id } = useParams();

    const [data, setData] = useState({
        title: "",
        description: "",
        price: "",
        propertyImage: ""
    });
    // const [records, setRecords] = useState([])

    const formInput = (e) => {

        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
    }
    const formSubmit = (e) => {
        e.preventDefault();

        // const newRecords = { ...data }
        // setRecords([...records, newRecords])

        axios.post("https://fswi-99acres-clone.herokuapp.com/properties/",
            {
                title: data.title,
                description: data.description,
                price: data.price,
                propertyImage: data.propertyImage
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.log(err))

        // setData({ title: "", price: "", description: "", phone: "", pincode: "" })

    }

    // axios.interceptors.response.use(undefined,error=>{
    //     console.log(error.response);
    // })

    const [ppost, setPpost] = useState(null);

    useEffect(() => {
        getAllTypees();
    }, []);

    // Axios GET Request 

    const getAllTypees = () => {
        axios.get('https://fswi-99acres-clone.herokuapp.com/properties/')
            .then((res) => {
                console.log(res.data)
                setPpost(res.data);

            })
            .catch(error => console.error("Error"));

        axios.get(`https://fswi-99acres-clone.herokuapp.com/properties/${id}`)
            .then((res) => {
                console.log(res.data)
                // setPost(res.data);

            })
            .catch(error => console.error("Error"));
    }

    // Axios UPDATE Request 

    const propertyUpdate=(id,e)=>{
        e.preventDefault();

        axios.put(`https://fswi-99acres-clone.herokuapp.com/properties/${id}`,{...data,price:"2000"})
        .then((res)=>{
            console.log("Property Updated",res)
        })
        .catch(error=>console.log("Error"))
    }



    // Axios DELETE Request 
    
    const propertyDelete=(iid,e)=>{
        e.preventDefault();
        // alert(id)
        axios.delete(`https://fswi-99acres-clone.herokuapp.coms/properties/${iid}`,{...data})
        .then((res)=>{
            console.log("Properrty Deleted",res)
        })
        .catch(error=>console.log("Error"))
    }

    // Axios Display Request 

    const displayData = () => {

        return ppost ? (
            ppost.map((ppost) => {
                return (
                    <div className="propertydata" key={ppost.id}>
                        <h3>{ppost._id}</h3>
                        <h3>{ppost.title}</h3>
                        <h3>{ppost.description}</h3>
                        <h3>{ppost.price}</h3>
                        {/* <button onClick={(e)=>propertyUpdate(ppost._id,e)}>Update</button> */}
                        {/* <button onClick={(e)=>propertyDelete(ppost._id,e)}>Delete</button> */}

                    </div>
                );
            })
        ) : (
            <h3>No Post Yet</h3>
        );
    }





    return (
        <>
            <div id="roots">
                <div className="ppmain">
                    <div className="pp-main-left">
                        <div>
                            <span>REACH UPTO 42 LACS BUYERS</span>
                        </div>
                        <div>
                            <h2>Sell or Rent your Property on 99acres</h2>
                        </div>
                        <img src={Pic} />
                    </div>
                    <div className="pp-post">
                        <form onSubmit={formSubmit}>
                            <div className="pp-post-maintext">
                                <h4>Begin Posting your Property</h4>
                            </div>
                            <div className="pp-post-mainsubtext">
                                Add Basic Details
                            </div>
                            <div className="pp-post-inputs">
                                <div className="pp-post-items">
                                    <span>Title</span>
                                    <input onChange={formInput} id="title" value={data.title} type="text" autoComplete="off" ></input>
                                </div>
                                <div className="pp-post-items">
                                    <span>Description</span>
                                    <input onChange={formInput} id="description" value={data.description} type="text" autoComplete="off" ></input>
                                </div>
                                <div className="pp-post-items">
                                    <span>Price</span>
                                    <input onChange={formInput} id="price" value={data.price} type="number" autoComplete="off" ></input>
                                </div>

                                <div className="pp-post-items">
                                    <button className="post-btn">Begin to Post Your Property</button>
                                </div>
                                {/* <div className="pp-post-items">
                                <button className="show-btn">Show Property</button>
                            </div> */}
                            </div>
                        </form>

                    </div>
                </div>
                <div className="pp-data-box">

                    {displayData()}
                </div>


            </div>
        </>
    )
}

export default PostProperty;