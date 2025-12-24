import React from 'react'
import Linked from './linkedIn/linked'
import Linked2 from './linkedIn/linked2'
import Dish from './dish/dishboard';
import Create from './createPost/create';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import View from './preview/view';
import Chanel from './youtube/autoredirect';


const Childdern = ({myPages, myInsta, igIdData}) => {
  return (
    <div>
  
      <Routes>
        <Route path="/" element={<Dish facebookPages={myPages} myInsta={myInsta} IgIddigit={igIdData}/>}/>
        <Route path="/create" element={<Create postIgId={igIdData}/>}/>
        <Route path="/view" element={<View/>}/>
        <Route path="/youtubeChanel" element={<Chanel/>}/>
        <Route path="/linked/work" element={<Linked/>}/>
      </Routes>
    
      
    </div>
  )
}

export default Childdern
