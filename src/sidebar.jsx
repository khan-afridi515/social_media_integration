import React from 'react'
import "./side.css";
import { Link } from 'react-router-dom';



const Sidebar = () => {
  return (
    <div className='px-10 py-4'>
      <div className='flex gap-2'>
      <img src="women.png" className='w-10 h-10 rounded-full work' alt="" />
      <div className='flex flex-col '>
        <p className='font-bold'>Sophia</p>
        <p>@Sophia.miler</p>
      </div>
      </div>

      <div className='py-5 flex flex-col gap-3'>
      <Link to="/"><div className='py-1 px-2 flex gap-5 hover:bg-gray-200 transition-colors duration-200 cursor-pointer'>
          <i className="fa-solid fa-house w-3 h-3 mt-1"></i>
          <p>Home</p>
        </div></Link>

        <div className='py-1 px-2 flex gap-5 hover:bg-gray-200 transition-colors duration-200 cursor-pointer'>
        <i className="fa-sharp fa-regular fa-bell text-[19px] mt-1"></i>
          <p>Notifications</p>
        </div>

        <div className='py-1 px-2 flex gap-5 hover:bg-gray-200 transition-colors duration-400 cursor-pointer'>
        {/* <i className="fa-sharp fa-regular fa-bell text-[19px] mt-1"></i> */}
        <img src="post.png" className='w-5 h-5 mt-1' alt="" />
          <p>Posts</p>
        </div>

      </div>
    </div>
  )
}

export default Sidebar
