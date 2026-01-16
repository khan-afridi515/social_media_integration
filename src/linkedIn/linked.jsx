import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom";
import { Youtube_BASE_URL } from '../youtube/youtub';


const Linked = () => {

  const [myRes, setMyRes] = useState(null);
  const navigate = useNavigate();

  // if(myRes){
  //   setTimeout(()=>{
  //       navigate("/");
  //   }, 3000)
  // }

  useEffect(() => {
      
    //Send code to backend to get user info
    axios
      // .get("http://localhost:3000/api/linkedin/sendToken",{
      .get(`${Youtube_BASE_URL}/api/linkedin/sendToken`,{
        withCredentials: true
      })

      .then( (res)=>{
            console.log(res);
            const token = res.data.token;
            console.log("Token recieved:", res);

            setMyRes(res.data.token);

            localStorage.setItem("myaccessToken", res.data.token);

             
      })
      .catch((err) => console.error(err));
  },[]);


 

  const sendAccess = () => {
    const myAccesstoken = localStorage.getItem("myaccessToken");
    console.log(myAccesstoken);
    try{
      axios.post("http://localhost:3000/api/linkedin/getPages", { myAccesstoken })
      .then((res)=>{
        console.log(res);
      })
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div className='flex justify-center items-center h-[70vh]'>
      <p className='text-4xl font-bold'>{myRes ? "Connected":"Connecting..."}</p>
      <button className='py-1 px-2 rounded-md bg-blue-500 text-white' onClick={sendAccess}>Get Pages</button>
    </div>
  )
}

export default Linked
