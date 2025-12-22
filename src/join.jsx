import React, { useRef, useState } from 'react'
import Childdern from './childern'
import Sidebar from './sidebar'
import Navbar from './navbar'


const Join = ({givePages, Instawork, igId}) => {

  const [showSidebar, setShowSidebar] = useState(false);
  const myRef = useRef();
  const myTimes = useRef();

 const showBar = () => {
    setShowSidebar(true);
    myRef.current.style.display = "none";
    myTimes.current.style.display = "block";
    if(showSidebar){

      console.log("mytrue");
    }
 }

 const turnBar = () =>{
    setShowSidebar(false);
    myRef.current.style.display = "block";
    myTimes.current.style.display = "none";
 }

  return (
    <div className='w-[100%] relative '>
      <div className='fixed top-0 left-0 w-full z-50 bg-white'>
          <Navbar/>
        </div>
      <div className='relative w-[100%] flex h-[100vh]'>

        
             
        <div className={showSidebar ? 'absolute top-16 fixed h-[100%] z-50 block left-0 md:w-[22%] sm:w-[32%] w-[53%] bg-white mywork':'absolute top-16 bg-whtie fixed h-[100%] md:block hidden left-0 w-[20%] mywork'}>
        <div className='relative w-[100%] '>
              <Sidebar/>
              
              <div className={showSidebar? 'absolute top-2 right-4 text-2xl block':'absolute top-5 right-6 text-2xl hidden'} onClick={turnBar}>
              <i className="fa-solid fa-times "></i> 
              </div>
         </div>
        </div>
         
         <div className='absolute top-16 md:left-[22%] left-0 h-[100%] md:w-[78%] w-[100%]'>
            <Childdern myPages={givePages} myInsta={Instawork} igIdData={igId}/>
         </div>
      </div>

      <div className='absolute top-5 fixed left-4 md:hidden block z-50' ref={myRef} onClick={showBar}>
                <i className="fa-solid fa-bars text-2xl"></i>
      </div>
    </div>
  )
}

export default Join
