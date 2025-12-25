import axios from "axios";
import { useEffect, useState } from "react";
const Chanel = () => {

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
      

    <h1 className="text-3xl font-bold">Youtube channel connected Successfully!</h1>

    </>
  )
}

export default Chanel
