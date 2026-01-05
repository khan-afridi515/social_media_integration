import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const signOut = () => {
     localStorage.removeItem("myLoginToken");
  }
  return (
    <div className='px-[40px] py-[12px] flex justify-between shadow-sm'>
      <div className='flex gap-3 mt-1'>
        <img src="plus.png" className="w-4 h-4 mt-1.5" alt="" />
        <h3 className='text-[18px] font-bold'>SocialSync</h3>
      </div>
      <div className='flex gap-5'>
        <button className='bg-black px-3 rounded-md text-white cursor-pointer' onClick={signOut}>Log Out</button>
        <Link to="/view"><img  className="w-5 h-5 mt-2" src="question.png" alt="" /></Link>
        <img src="women.png" className='w-10 h-10 rounded-full' alt="" />
      </div>
    </div>
  )
}

export default Navbar
