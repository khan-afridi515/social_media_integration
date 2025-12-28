import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Chanel = () => {

  const nav = useNavigate();

  useEffect(()=>{
    setTimeout(()=>{
      nav('/');
    }, 4000)
  },[])

  useEffect(() => {
    axios.get("http://localhost:3000/api/youtube/gettingChannel")
    .then((res) =>{
      console.log(res.data);
      console.log("My response", res.data);
      localStorage.setItem("youtubeChannelData", JSON.stringify(res.data));
     
    });
  }, []);

  return (
    <>
      
    <div className="w-[100%] h-[100vh] flex justify-center items-center">

    <h1 className="text-3xl font-bold">Youtube channel connected Successfully!</h1>
    </div>

    </>
  )
}

export default Chanel
