import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import { Youtube_BASE_URL } from '../youtube/youtub';


const Linked = () => {

  const [myRes, setMyRes] = useState(null);

  const token = localStorage.getItem("myLoginToken");

  const [searchParams] = useSearchParams();
    const id = searchParams.get("id");

    
  useEffect(() => {

    if(!id) return;

      axios
      .get(`${Youtube_BASE_URL}/api/linkedin/getData?id=${id}`,{
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`
        }
        
      })

      .then( (res)=>{
            console.log(res);
            const token = res.data.accessToken;
            console.log("Token recieved:", token);

            setMyRes(token);

            localStorage.setItem("myaccessToken", token);

             
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
