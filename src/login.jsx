import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
import axios from 'axios';

const Login = () => {

  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");

   const nav = useNavigate();


   const loginUrl = "http://localhost:3000/api/youtube/signIn";

   const myData = {email : email,  password : pass}

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!");
        
      
        axios.post(loginUrl, myData)
        .then((res)=>{
          
          res && alert("Login Successfull");
          res && nav("/");
          
          localStorage.setItem("myLoginToken", res.data.token);
        })
        .catch((err)=>{
          console.log(err)
        })

        setEmail("");
        setPass("");
    }

    // localStorage.clear();
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <div className='w-90 border-1 border rounded-md py-8 px-5'>
        <h2 className='text-2xl font-bold text-center my-4'>Admin Login</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <div className='flex flex-col gap-1 w-[95%]'>
                <label htmlFor='username' className='text-md font-bold'>Email</label>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email here!" className='border border oultine-none py-1 px-2 rounded-md'/>
            </div>
            <div className='flex flex-col gap-1 w-[95%]'>
                <label htmlFor='username' className='text-md font-bold'>Password</label>
                <input type="text" value={pass} onChange={(e)=>setPass(e.target.value)} placeholder="Enter Password here!" className='border border oultine-none py-1 px-2 rounded-md'/>
            </div>
            <div className='w-[95%]'>
                <button type="submit" className='w-full text-center text-white py-2 bg-black rounded-md mt-5 text-md font-bold cursor-pointer'>Log In</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
