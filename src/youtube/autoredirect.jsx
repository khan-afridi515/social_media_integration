import axios from "axios";
import { useEffect, useState } from "react";
const Chanel = () => {
    // const [channels, setChannels] = useState([]);
    // const [channel, setChannel] = useState("");
    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    // const [privacyStatus, setPrivacyStatus] = useState("private");
    // const [madeForKids, setMadeForKids] = useState(false);
    // const [video, setVideo] = useState(null);
    // const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/api/youtube/gettingChannel")
    .then((res) =>{
      console.log(res.data);
      console.log("My response", res.data);
      localStorage.setItem("youtubeChannelData", JSON.stringify(res.data));
      // setChannels(res.data);
    });
  }, []);

  
  

// const submitHandler = async (e) => {
//     e.preventDefault();

//     const uploadUrl = "http://localhost:3000/api/youtube/shareVideo";

//     console.log("video upload data", channel, title, description, privacyStatus, madeForKids, video)

//     const uploadForm = new FormData();

//     uploadForm.append("channel", channel),
//     uploadForm.append("title", title),
//     uploadForm.append("description", description),
//     uploadForm.append("privacyStatus", privacyStatus),
//     uploadForm.append("madeForKids", madeForKids),
//     uploadForm.append("video", video),

//     axios.post(uploadUrl, uploadForm,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data"
//         },
//       })
//     .then((res)=>{
//       console.log(res.data);
//     })


// }



// http://localhost:5173/youtubeChanel
  return (
    <>
      

    <h1 className="text-3xl font-bold">Youtube channel connected Successfully!</h1>

    </>
  )
}

export default Chanel
