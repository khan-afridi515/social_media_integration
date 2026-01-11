import React, { useEffect, useState } from 'react'
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { fbProvider, myAuth } from './facebook/face';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import Join2 from './join2';
import { myRecentAuth, recentfbProvider } from './facebook/recent';
import { fiberAuth, fiberfbProvider } from './facebook/fiberApp';






const App = () => {



  const [MyIgId, setMyIgId] =  useState(null);
  const [faceId, setFaceId] = useState(null);
  const [instaId, setInstaId] = useState(null);


  const showPages = async () => {
    try {
      // fbProvider.addScope("pages_show_list");
      // fbProvider.addScope("pages_read_engagement");
      // fbProvider.addScope("pages_manage_posts");
      // fbProvider.addScope("instagram_basic");
      // fbProvider.addScope("instagram_content_publish");

      fiberfbProvider.addScope("pages_show_list");
      fiberfbProvider.addScope("pages_read_engagement");
      fiberfbProvider.addScope("pages_manage_posts");
      fiberfbProvider.addScope("instagram_basic");
      fiberfbProvider.addScope("instagram_content_publish");

      


      console.log("Work starting...");
  
      // const myResult = await signInWithPopup(myAuth, fbProvider);
      const myResult = await signInWithPopup(fiberAuth, fiberfbProvider);
      // const myResult = await signInWithPopup(myRecentAuth, recentfbProvider);

      const secret = FacebookAuthProvider.credentialFromResult(myResult);

      console.log("These are my secrets:", secret);
  
      if (!secret) return console.log("Credential missing");
  
      const giveToken = secret.accessToken;
      console.log("Access Token:", giveToken)
      
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
      setFaceId(pageData.id);
  
      localStorage.setItem("MypageData", JSON.stringify(pageData));
//       if (pageData.instagram_business_account) {
//         const igId = pageData.instagram_business_account.id;
        
//         localStorage.setItem("igId", igId);
//         console.log("instagram id", igId);
//         setInstaId(igId);

//         const responseIg = await fetch(`https://graph.facebook.com/v18.0/${igId}?fields=username&access_token=${pageAccessToken}
// `)
//       const igData = await responseIg.json();
//       console.log("my igData",igData.username);
//       localStorage.setItem("igUsername", igData.username);
      
// }
      
      console.log("page token", pageAccessToken);
      console.log("page id", pageData.id);
      
      console.log("Instagram account username", pageData.instagram_business_account.username);
  
      alert("Facebook Page Connected Successfully!");
    } catch (err) {
      console.log(err);
    }
  };



  useEffect(()=>{
    const getId = localStorage.getItem("igId");
    setMyIgId(getId);
  },[])
  
  const InstaConnect = async() =>{
    const instaId = localStorage.getItem("igId");
    const myPageToken = localStorage.getItem("pageToken");
    const pageInfo = localStorage.getItem("MypageData");
    const myPageData = JSON.parse(pageInfo);

    console.log(myPageData);


    if (myPageData) {
      const myigId = myPageData.instagram_business_account.id;
      
      // localStorage.setItem("igId", igId);
      console.log("instagram id", myigId);

      localStorage.setItem("igId", myigId);

      const responseIg = await fetch(`https://graph.facebook.com/v18.0/${myigId}?fields=username&access_token=${myPageToken}
`)
    const igData = await responseIg.json();
    console.log("my igData",igData.username);

    localStorage.setItem("igUsername", igData.username);

    myigId && alert("Instagram connected successfully!");
    
}else{
  alert("Please first connect facebook!");
}



    // if(instaId){
    //   alert("Instagram connected successfully!")
    // }else{
    //   alert("Please first connect facebook!");
    // }
    // setMyIgId(instaId)
    
  }

  return (
    <div>
      <Join2 givePages={showPages}  Instawork={InstaConnect} igId={MyIgId} sentFaceId={faceId} sentInstaId={instaId} />
    </div>
  )
}

export default App
