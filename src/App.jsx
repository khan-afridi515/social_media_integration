import React, { useEffect, useState } from 'react'
import Join from './join'
// import { auth, provider, storage } from './firebase';
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { fbProvider, myAuth } from './facebook/face';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';


const App = () => {

  // const showPages = async () => {

  //   try{
      

  //     fbProvider.addScope("pages_show_list");
  //     fbProvider.addScope("pages_read_engagement");
  //     fbProvider.addScope("pages_manage_posts");
      

  //     const myResult = await signInWithPopup(myAuth, fbProvider);
  
  //     const secret = FacebookAuthProvider.credentialFromResult(myResult);

  //     if (!secret) {
  //       console.log("Credential missing");
  //       return;
  //     }
  
  //     const giveToken = secret.accessToken;

  //     console.log("This is my given token:", giveToken);
  
  //     const response = await fetch(`https://graph.facebook.com/me/accounts?access_token=${giveToken}`);

  //     console.log("this is my", response)
  
  //     const myData = await response.json();

  //   //  console.log(myData);
  //   //   if (myData.error) {
  //   //     console.log("Graph API error:", myData.error);
  //   //     return;
  //   //   }
  
  //   //   if (!myData.data || myData.data.length === 0) {
  //   //     console.log("No pages found or permissions missing.");
  //   //     return;
  //   //   }
      
  //     console.log(myData);

  //     if(response) alert("Facebook Account Connected Successfully!");

  //     const page = myData.data[0];  
  //     const pageAccessToken = page.access_token;
  //     const pageId = page.id;

  //     // window.open(`https://facebook.com/${pageId}`, "_blank");
      
  //     console.log("Page Token:", pageAccessToken);
  //     console.log("Page ID:", pageId);

  //     localStorage.setItem("pageToken", pageAccessToken);
  //     localStorage.setItem("pageId", pageId);

  //     const pageInfo = await fetch(
  //       `https://graph.facebook.com/${pageId}?fields=name,fan_count&access_token=${pageAccessToken}`
  //     );
      
  //     const result = await pageInfo.json();


  //     console.log(result);
  
  //     console.log(myData);

   
      
  //   }
  //   catch(err){
  //     console.log(err);
  //   }
   
  // }

  // const showPages = async () => {
  //   try {
  //     fbProvider.addScope("pages_show_list");
  //     fbProvider.addScope("pages_read_engagement");
  //     fbProvider.addScope("pages_manage_posts");
  //     fbProvider.addScope("instagram_basic");
  //     fbProvider.addScope("instagram_content_publish");
  
  //     const myResult = await signInWithPopup(myAuth, fbProvider);
  //     const secret = FacebookAuthProvider.credentialFromResult(myResult);
  
  //     if (!secret) return console.log("Credential missing");
  
  //     const giveToken = secret.accessToken;
  //     console.log("Token:", giveToken);
  
  //     const response = await fetch(
  //       `https://graph.facebook.com/me?fields=id,name,accounts{instagram_business_account,name,access_token}&access_token=${giveToken}`
  //     );
  //     const myData = await response.json();
  //     console.log("My data:", myData);
  
  //     if (!myData.accounts || myData.accounts.data.length === 0)
  //       return console.log("No pages found or permissions missing");
  
  //     const page = myData.accounts.data[0];
  //     const pageAccessToken = page.access_token;
  //     const pageId = page.id;
  
  //     console.log("Page Token:", pageAccessToken);
  //     console.log("Page ID:", pageId);
  
  //     localStorage.setItem("pageToken", pageAccessToken);
  //     localStorage.setItem("pageId", pageId);
  
  //     // Check Instagram Business Account
  //     if (page.instagram_business_account) {
  //       const igId = page.instagram_business_account.id;
  //       console.log("Connected Instagram Business Account ID:", igId);
  //       localStorage.setItem("igId", igId);
  //     }
  
  //     alert("Facebook Account Connected Successfully!");
  
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  


  const [MyIgId, setMyIgId] =  useState(null);


  const showPages = async () => {
    try {
      fbProvider.addScope("pages_show_list");
      fbProvider.addScope("pages_read_engagement");
      fbProvider.addScope("pages_manage_posts");
      fbProvider.addScope("instagram_basic");
      fbProvider.addScope("instagram_content_publish");
  
      const myResult = await signInWithPopup(myAuth, fbProvider);
      const secret = FacebookAuthProvider.credentialFromResult(myResult);
  
      if (!secret) return console.log("Credential missing");
  
      const giveToken = secret.accessToken;
      console.log("User token:", giveToken);
  
      // Use the Page ID from debugger (your "Original Product")
      // this id is taken from access token debugger where pages_show_list : 930537653472224
      // we will add giveToken in accesstoken debugger 
      const pageId = "930537653472224";
  
      const response = await fetch(
        `https://graph.facebook.com/${pageId}?fields=id,name,access_token,instagram_business_account&access_token=${giveToken}`
      );
  
      const pageData = await response.json();
      console.log("Page data:", pageData);
  
      if (!pageData || !pageData.access_token) {
        return console.log("Cannot access Page token");
      }
  
      const pageAccessToken = pageData.access_token;
      localStorage.setItem("pageToken", pageAccessToken);
      localStorage.setItem("pageId", pageData.id);
  
      if (pageData.instagram_business_account) {
        const igId = pageData.instagram_business_account.id;
        console.log("Connected Instagram Business Account ID:", igId);
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
    console.log("This is my instagram account");
  }

  return (
    <div>
      <Join givePages={showPages}  Instawork={InstaConnect} igId={MyIgId} />
    </div>
  )
}

export default App
