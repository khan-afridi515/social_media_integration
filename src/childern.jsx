import React, { useEffect, useState } from 'react'
import Linked from './linkedIn/linked'
import Linked2 from './linkedIn/linked2'
import Dish from './dish/dishboard';
import Create from './createPost/create';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import View from './preview/view';
import Chanel from './youtube/autoredirect';


const Childdern = ({myPages, myInsta, igIdData}) => {

  const [mystoredData, setMyStoredData] = useState(() => {
    const storedData = localStorage.getItem("youtubeChannelData");
    return storedData ? JSON.parse(storedData) : null;
  });

  
  const removeYoutubeData = () => {
    localStorage.removeItem("youtubeChannelData");
    setMyStoredData(null);
  }


  return (
    <div>
  
      <Routes>
        <Route path="/" element={<Dish facebookPages={myPages} myInsta={myInsta} IgIddigit={igIdData} channelData={mystoredData} finishChannel={removeYoutubeData}/>}/>
        <Route path="/create" element={<Create postIgId={igIdData} myChannelData={mystoredData}/>}/>
        <Route path="/view" element={<View/>}/>
        <Route path="/youtubeChanel" element={<Chanel/>}/>
        <Route path="/linked/work" element={<Linked/>}/>
      </Routes>
    
      
    </div>
  )
}

export default Childdern
