import React, { useState, useRef, useEffect } from 'react';
import axios from  'axios';


const Create = ({postIgId, myChannelData}) => {
    const [facebook, setFacebook] = useState(false);
    const [instagram, setInstagram] = useState(false);
    const [linkedIn, setLinkedIn] = useState(false);
    const [youtube, setYoutube] = useState(false);
    const [image, setImage] = useState(null);
    const [myText, setMyText] = useState("");
    const [video, setVideo] = useState(null);

  
    const myRef = useRef();

    //youtube states
    const [channels, setChannels] = useState([]);
    const [channel, setChannel] = useState("");
    const [description, setDescription] = useState("");
    const [privacyStatus, setPrivacyStatus] = useState("private");
    const [madeForKids, setMadeForKids] = useState(false);
    const [loading, setLoading] = useState(false);

    
    const facebookPagetoken = localStorage.getItem("pageToken");
    const facebookPageId = localStorage.getItem("pageId");
    const linkedInToken = localStorage.getItem("myaccessToken");

    const fileInputRef = useRef(null);
    const videoInputRef = useRef(null);


    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleVideo = () => {
        videoInputRef.current.click();
    };

  

    const sharePost = () => {
        if(facebook && myText && facebookPagetoken){
            
            console.log("Posted to Facebook:", myText , image);
            const url = "http://localhost:3001/app/facebook/pagePost";

    const formData = new FormData();
    formData.append("content", myText);
    formData.append("image", image);
    formData.append("video", video);
    formData.append("myPageId", facebookPageId);
    formData.append("mypageToken", facebookPagetoken);

    
  
    console.log("Image File:", image);
    console.log("Video File:", video);
    console.log("pageId:", facebookPageId);
    console.log("pageToken:", facebookPagetoken);

    axios.post(url, formData, {
      headers:{
        "Content-Type": "multipart/form-data",
      }
    })
    .then((res)=>{
      console.log("This is facebook response", res);
      if(res) alert("Posted to Facebook Successfully Done!");
    }).catch*((err)=>{
        console.error("Error posting to Facebook:", err);
        alert("Failed to post to Facebook.");
    })
             

    }


       
        const media = image || video;
        if(instagram && myText && postIgId && media){
            const instaUrl = "http://localhost:3001/app/facebook/instagramPost";
            const instaFormData = new FormData();
            instaFormData.append("caption", myText);
            instaFormData.append("igUserId", postIgId);
            instaFormData.append("pageAccessToken", facebookPagetoken);
            if(image) instaFormData.append("imageFile", image);
            if(video) instaFormData.append("videoFile", video);
            console.log("Posted to Instagram:", myText, image, "Insta Id ", postIgId, "facebook page token", facebookPagetoken, "My video", video);
            console.log("My Insta form data", instaFormData);
           
            axios.post(instaUrl, instaFormData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                  },
              })
            .then((res)=>{
                console.log("This is Instagram responns", res);
                alert("Video uploaded to Instagram successfully Done!");
            }).catch*((err)=>{
              console.error("Error posting to Instagram:", err);
              alert("Failed to post to Instagram.");
          })

        }


        
        if(linkedIn && myText && linkedInToken){
            console.log("Posted to LinkedIn:", myText, image);
            const shareUrl = "http://localhost:3000/api/linkedin/sharePost";

            const newformData = new FormData();

            newformData.append("content", myText);
            newformData.append("image", image);
            newformData.append("accessToken", linkedInToken);


            
            axios.post (shareUrl, newformData)
                .then((res)=>{
                  console.log("post shared from linkedIn:", res);
                  alert("Video uploaded to linkedIn successfully Done!");
                }).catch*((err)=>{
                  console.error("Error posting to LinkedIn:", err);
                  alert("Failed to post to LinkedIn.");
              })
          
              
        }





        if(youtube && myText && video){
            const uploadUrl = "http://localhost:3000/api/youtube/shareVideo";

            const uploadForm = new FormData();

            uploadForm.append("channel", channel),
            uploadForm.append("title", myText),
            uploadForm.append("description", description),
            uploadForm.append("privacyStatus", privacyStatus),
            uploadForm.append("madeForKids", madeForKids),
            uploadForm.append("video", video),

            console.log("video details2:", channel, description, myText, privacyStatus, madeForKids, video,  "uploadUrl:",uploadUrl);
            axios.post(uploadUrl, uploadForm,
                    {
                      headers: {
                        "Content-Type": "multipart/form-data"
                      },
                    })
                  .then((res)=>{
                    console.log(res.data);
                    alert("Video uploaded to YouTube successfully Done!");
                  }).catch*((err)=>{
                    console.error("Error posting to Youtube:", err);
                    alert("Failed to post to Youtube.");
                })

        
          }

        if(!facebook && !instagram && !linkedIn && !youtube){
            alert("Please check a box first!");
        }

        setMyText("");
        setImage(null);
    }


 

   useEffect(()=>{
    if(youtube){
      myRef.current.style.display="block";
    }
   },[youtube])

    const formShow = () => {
        myRef.current.style.display="none";
    }

    const complete = () => {
      if(channel && description && privacyStatus && madeForKids!==null){
      
        myRef.current.style.display="none";
        console.log("video details:", channel, description, privacyStatus, madeForKids, myChannelData);
      }
      else{
        alert("Please fill all the fields");
      }
    }

  return (
    <div className='w-full px-4 py-8 relative'>
      <div className='flex flex-col gap-6'>
        <div>
            <h1 className='text-2xl font-bold'>Create Post</h1>
        </div>
        <div>
                <textarea name="" type="text" value={myText} onChange={(e)=>setMyText(e.target.value)} className='oultine-none border border-1 p-2 sm:w-105 w-80 h-35' id=""></textarea>
        </div>
        <div className='px-3 flex gap-7'>
            <div className='flex flex-col gap-1 justify-center cursor-pointer' onClick={handleImageClick}>
                <img src="posted/folder.png" className="w-9 h-9 rounded-ful" alt="" />
                <input type="file" ref={fileInputRef} onChange={(e)=>setImage(e.target.files[0])} className='hidden' accept="image/*" />
                <p className='text-sm'>Image</p>
            </div>

            <div className='flex flex-col gap-1 justify-center' onClick={handleVideo}>
                <img src="posted/pause.png" className="w-9 h-9 rounded-ful" alt="" />
                <input type="file" accept="video/*" ref={videoInputRef} onChange={(e)=>setVideo(e.target.files[0])} className='hidden'/>
                <p className='text-sm'>Videos</p>
            </div>

            <div className='flex flex-col gap-1 justify-center'>
                <img src="posted/smile.png" className="w-9 h-9 rounded-ful" alt="" />
                <p className='text-sm'>Emogi</p>
            </div>

          
        </div>
        <div className='flex flex-col gap-3'>
        <div>
            <p className='text-xl font-bold '>Select Platform</p>
        </div>
        <div className='flex flex-col gap-3'>
            <div className='flex gap-2'>
                <input type="checkbox" checked={facebook} onChange={(e)=>setFacebook(e.target.checked)} className='w-4'/>
                <p>Facebook</p>
            </div>
            <div className='flex gap-2'>
                <input type="checkbox" checked={instagram} onChange={(e)=>setInstagram(e.target.checked)} className='w-4'/>
                <p>Instagram</p>
            </div>
            <div className='flex gap-2'>
                <input type="checkbox" checked={linkedIn} onChange={(e)=>setLinkedIn(e.target.checked)} className='w-4'/>
                <p>LinkedIn</p>
            </div>
            <div className='flex gap-2'>
                <input type="checkbox" checked={youtube} onChange={(e)=>setYoutube(e.target.checked)} className='w-4'/>
                <p>Youtube</p>
            </div>
        </div>
        </div>
        <div className='flex justify-end mr-3'>
            <button className='bg-blue-600 text-white px-3 py-1 rounded-md' onClick={sharePost}>Publish</button>
        </div>
      </div>



  {/*Data for youtube*/}

<div className='w-100 border border-1 py-3 px-2 absolute top-30 left-60 bg-white hidden' ref={myRef}>
  <form action="" className='w-full relative'>
    <div className='w-full'>

      <button type="button" className='w-20 absolute top-1 right-0' onClick={formShow}><i className="fa-sharp-duotone fa-regular fa-circle-xmark w-full text-xl cursor-pointer"></i></button>
      <h1 className='text-center text-2xl font-bold'>Upload Video</h1>

      <div className='flex flex-col gap-3 py-3 w-full'>
        <div className='flex flex-col gap-1 w-full'>
          <label htmlFor="" className='text-sm'>Select a Channel</label>
          <select name="" id="" value={channel} onChange={(e)=>setChannel(e.target.value)} className='border border-1 p-1 text-black'>
            <option value="">Choose a channel</option>
            {myChannelData ? (myChannelData.map(ch => (
                <option key={ch.channel} value={ch.channel} className='text-black'>{ch.channelTitle}</option>

              ))):(<option value="" className='text-black'>No channel Available</option>)
            }
          </select>
        </div>

        <div className='flex flex-col gap-1 w-full'>
          <label htmlFor="" className='text-sm'>Description</label>
          <textarea name="" id="" value={description} onChange={(e)=>setDescription(e.target.value)} className='w-full h-15 px-1 py-2 border border-1 text-sm'></textarea>
        </div>

        <div className='w-full flex gap-2'>
          <div className='w-[49%]'>
          <label htmlFor="" className='text-sm'>Privacy</label>
            <select name="" id="" value={privacyStatus} onChange={(e)=>setPrivacyStatus(e.target.value)}className='border border-1 p-1 w-full'>
              <option value="private">Private</option>
              <option value="public">Public</option>
              <option value="unlisted">Unlisted</option>
            </select>
          </div>
          <div className='w-[49%]'>
            <label htmlFor="" className='text-sm'>Permission</label>
            <select name="" id="" value={madeForKids} onChange={(e)=>setMadeForKids(e.target.value === "true")} className='border border-1 p-1 w-full'>
              <option value="false">No made for kids</option>
              <option value="true">made for kids</option>
            </select>
          </div>
        </div>

      </div>
        <div className='w-full bg-gray-600 p-1'><button type="button" onClick={complete} className='w-full text-white'>Done</button></div>
    </div>
  </form>
</div>
    </div>
  )
}
export default Create
