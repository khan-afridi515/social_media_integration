import React, { useEffect, useState } from 'react'

// import { auth, provider, storage } from './firebase';
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { fbProvider, myAuth } from './facebook/face';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import Join2 from './join2';


const App = () => {

  

  const [MyIgId, setMyIgId] =  useState(null);


  const showPages = async () => {
    try {
      fbProvider.addScope("pages_show_list");
      fbProvider.addScope("pages_read_engagement");
      fbProvider.addScope("pages_manage_posts");
      fbProvider.addScope("instagram_basic");
      fbProvider.addScope("instagram_content_publish");


      console.log("Work starting...");
  
      // const myResult = await signInWithPopup(myAuth, fbProvider);
      const myResult = await signInWithPopup(myAuth, fbProvider);
      const secret = FacebookAuthProvider.credentialFromResult(myResult);
  
      if (!secret) return console.log("Credential missing");
  
      const giveToken = secret.accessToken;
      
  
      // Use the Page ID from debugger (your "Original Product")
      // this id is taken from access token debugger where pages_show_list : 930537653472224
      // we will add giveToken in accesstoken debugger 
      const pageId = "930537653472224";
  
      const response = await fetch(
        `https://graph.facebook.com/${pageId}?fields=id,name,access_token,instagram_business_account&access_token=${giveToken}`
      );
  
      const pageData = await response.json();
     
  
      if (!pageData || !pageData.access_token) {
        return console.log("Cannot access Page token");
      }
  
      const pageAccessToken = pageData.access_token;
      localStorage.setItem("pageToken", pageAccessToken);
      localStorage.setItem("pageId", pageData.id);
  
      if (pageData.instagram_business_account) {
        const igId = pageData.instagram_business_account.id;
        
        localStorage.setItem("igId", igId);
      }
  
      alert("Facebook Page & Instagram Connected Successfully!");
    } catch (err) {
      console.log(err);
    }
  };



  useEffect(()=>{
    const getId = localStorage.getItem("igId");
    setMyIgId(getId);
  })
  
  const InstaConnect = () =>{
    const instaId = localStorage.getItem("idId");
    setMyIgId(instaId)
    
  }

  return (
    <div>
      <Join2 givePages={showPages}  Instawork={InstaConnect} igId={MyIgId} />
    </div>
  )
}

export default App
