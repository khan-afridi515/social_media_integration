import React, { useEffect, useState } from 'react'

// import { auth, provider, storage } from './firebase';
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { fbProvider, myAuth } from './facebook/face';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import Join2 from './join2';
// import { myRecentAuth, recentfbProvider } from './facebook/recentApp';
// import { myNewAuth, NewfbProvider } from './facebook/newFace';




const App = () => {



  const [MyIgId, setMyIgId] =  useState(null);


  const showPages = async () => {
    try {
      fbProvider.addScope("pages_show_list");
      fbProvider.addScope("pages_read_engagement");
      fbProvider.addScope("pages_manage_posts");
      fbProvider.addScope("instagram_basic");
      fbProvider.addScope("instagram_content_publish");

      // recentfbProvider.addScope("pages_show_list");
      // recentfbProvider.addScope("pages_read_engagement");
      // recentfbProvider.addScope("pages_manage_posts");
      // recentfbProvider.addScope("instagram_basic");
      // recentfbProvider.addScope("instagram_content_publish");

      // NewfbProvider.addScope("pages_show_list");
      // NewfbProvider.addScope("pages_read_engagement");
      // NewfbProvider.addScope("pages_manage_posts");
      // NewfbProvider.addScope("instagram_basic");
      // NewfbProvider.addScope("instagram_content_publish");

    


      console.log("Work starting...");
  
     
      // const myResult = await signInWithPopup(myRecentAuth, recentfbProvider);
      const myResult = await signInWithPopup(myAuth, fbProvider);
      const secret = FacebookAuthProvider.credentialFromResult(myResult);

      console.log("These are my secrets:", secret);
  
      if (!secret) return console.log("Credential missing");
  
      const giveToken = secret.accessToken;
      console.log("Access Token:", giveToken)
      
      // const pageId = "930537653472224";
      const pageId = import.meta.env.VITE_PAGE_ID;
      console.log('page', pageId);
  
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
        console.log("instagram id", igId);

        const responseIg = await fetch(`https://graph.facebook.com/v18.0/${igId}?fields=username&access_token=${pageAccessToken}
`)
      const igData = await responseIg.json();
      console.log("my igData",igData.username);
      localStorage.setItem("igUsername", igData.username);
}
      
      console.log("page token", pageAccessToken);
      console.log("page id", pageData.id);
      
      console.log("Instagram account username", pageData.instagram_business_account.username);
  
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
