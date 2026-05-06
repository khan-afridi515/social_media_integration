import React, { use, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { Youtube_BASE_URL } from '../youtube/youtub';



const Dish = ({ facebookPages, myInsta, IgIddigit, channelData, finishChannel,}) => {

  const [IdChannel, setIdChannel] = useState('');

  const [arr, setArr] = useState([]);


  useEffect(() => {
    fetch(`${Youtube_BASE_URL}/api/youtube/allActivities`)
      .then(res => res.json())
      .then(data => {
        setArr(data.data);
        
      });
  }, []);


  const [now, setNow] = useState(Date.now());



  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 60000); // update every minute
  
    return () => clearInterval(interval);
  }, []);


  const getTimeOut = (time) => {
    const diff = Math.floor((now - new Date(time).getTime()) / 1000);
  
    if (diff < 60) return "Just now"; 
  
    if (diff < 3600)
      return `${Math.floor(diff / 60)} min ago`;
  
    if (diff < 86400)
      return `${Math.floor(diff / 3600)} hr ago`;
  
    return `${Math.floor(diff / 86400)} day ago`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setArr(prev => [...prev]); // trigger re-render
    }, 60000); // every 1 minute

    return () => clearInterval(interval);
  }, []);


  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/company/110089937/", "_blank");

  }


  const handlelinkedInLogin = () => {
    const getLoginToken = localStorage.getItem("myLoginToken");

    const params = new URLSearchParams({
      response_type: 'code',
      client_id: import.meta.env.VITE_LINKEDIN_ID,
      redirect_uri: `${Youtube_BASE_URL}/api/linkedIn/callback`,
      scope: 'openid profile email w_member_social r_liteprofile',
      state: getLoginToken
    })
    window.location.href = `https://www.linkedin.com/oauth/v2/authorization?${params}`;
  }


  const linkedInPageLogin = () => {
    const params = new URLSearchParams({
      response_type: "code",
      client_id: import.meta.env.VITE_LINKEDIN_ID,
      redirect_uri: `${Youtube_BASE_URL}/api/linkedIn/callback`,
      scope: [
        "openid",
        "profile",
        "email",
        "r_organization_social",
        "rw_organization_admin",
        "w_organization_social"
      ].join(" "),
      state: crypto.randomUUID()
    });

    window.location.href =
      `https://www.linkedin.com/oauth/v2/authorization?${params.toString()}`;

  }




  //facebook work
  const myPageId = localStorage.getItem("pageId");
  const openFacebookPage = () => {
    if (myPageId) {
      const url = `https://www.facebook.com/${myPageId}`;
      window.open(url, "_blank"); // open in a new tab
    } else {
      alert("Facebook is not connected!");
    }

  };


  //instagram work
  const InstagramUsername = localStorage.getItem('igUsername');
  console.log(InstagramUsername);
  const openInstagram = () => {
    if (InstagramUsername) {
      window.open(`https://www.instagram.com/${InstagramUsername}/`, "_blank");
    } else {
      alert("Instagram is not connected!");
    }


  }

  const moveOut = () => {
    localStorage.removeItem("pageId");
    localStorage.removeItem("pageToken");
    localStorage.removeItem("MypageData");
  }

  const turnDown = () => {
    localStorage.removeItem("igId");
    localStorage.removeItem("igUsername");

  }


  const linkedInToken = localStorage.getItem("myaccessToken");

  console.log("mylinkedIntoken", linkedInToken);
  const turnOut = () => {
    localStorage.removeItem("myaccessToken");
  }



  const connectYoutube = () => {
    window.location.href = `${Youtube_BASE_URL}/api/youtube/connectedYoutube`;
  }

  const showRef = useRef();

  const showChannel = () => {
    showRef.current.style.display = "block";
  }


  const channelAccess = () => {
    console.log(IdChannel);
    showRef.current.style.display = "none";

    const url = `https://www.youtube.com/channel/${IdChannel}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  const icons = {
    facebook: "/platform/facebook.png",
    instagram: "/platform/instagram.png",
    youtube: "/platform/youtube.png"
  };


  return (
    <div className='px-2 py-3 w-full'>
      <div className='py-1 w-full'>
        <h1 className='text-2xl font-bold'>Social Media Integration Dishboard</h1>
        <div className='py-4 flex flex-col gap-3 w-full'>
          <div className='w-full flex flex-wrap  gap-3 mr-10'>
            <div className='md:w-[23%] sm:w-[31%] w-[48%] flex flex-col gap-1 '>
              <img src="platform/facebook.png" onClick={openFacebookPage} className="w-full h-40 object-cover rounded-md cursor-pointer" alt="" />
              <p className='font-bold text-sm'>Facebook</p>
              <p className='text-sm'>Connect your Facebook account</p>
              <div className='w-full flex gap-2'>
                <button className={myPageId ? 'text-sm px-1 py-1 bg-red-700 w-25 rounded-md text-white cursor-pointer' : 'text-sm px-1 py-1 bg-blue-700 w-25 rounded-md text-white cursor-pointer'} onClick={facebookPages}>{myPageId ? "Connected" : "Connect"}</button>
                <button className='text-sm px-1 py-1 bg-green-700 w-25 rounded-md text-white cursor-pointer' onClick={moveOut}>Disconnect</button>
              </div>

            </div>

            <div className='md:w-[23%] sm:w-[31%] w-[48%] flex flex-col gap-1'>
              <img src="platform/instagram.png" className="w-full h-40 object-cover rounded-md cursor-pointer" alt="" onClick={openInstagram} />
              <p className='font-bold text-sm'>Instagram</p>
              <p className='text-sm'>Connect your Instagram account</p>
              <div className='flex gap-1'>
                <button className={IgIddigit ? 'text-sm px-1 py-1 bg-red-700 w-25 rounded-md text-white cursor-pointer' : 'text-sm px-1 py-1 bg-blue-700 w-25 rounded-md text-white cursor-pointer'} onClick={myInsta}>{IgIddigit ? "Connected" : "Connect"}</button>
                <button className='text-sm px-1 py-1 bg-green-700 w-25 rounded-md text-white cursor-pointer' onClick={turnDown}>Disconnect</button>
              </div>
            </div>

            <div className='md:w-[23%] sm:w-[31%] w-[48%] flex flex-col gap-1'>
              <img src="platform/linkedIn.png" className="w-full h-40 object-cover rounded-md cursor-pointer" alt="" onClick={openLinkedIn} />
              <p className='font-bold text-sm'>LinkedIn</p>
              <p className='text-sm'>Connect your LinkedIn account</p>
              <div className='flex gap-1'>
                <button className={linkedInToken ? 'text-sm px-1 py-1 bg-red-700 w-25 rounded-md text-white cursor-pointer' : 'text-sm px-1 py-1 bg-blue-700 w-25 rounded-md text-white cursor-pointer'} onClick={handlelinkedInLogin}>{linkedInToken ? "Connected" : "Connect"}</button>
                {/* <button className='text-sm px-1 py-1 bg-blue-700 w-25 rounded-md text-white cursor-pointer' onClick={linkedInPageLogin}>Connecting</button> */}
                <button className='text-sm px-1 py-1 bg-green-700 w-25 rounded-md text-white cursor-pointer' onClick={turnOut}>Disconnect</button>
              </div>

            </div>

            <div className='relative md:w-[23%] sm:w-[31%] w-[48%] flex flex-col gap-1'>
              <img src="platform/youtube.png" className="w-full h-40 object-cover rounded-md cursor-pointer" onClick={showChannel} alt="" />
              <p className='font-bold text-sm'>Youtube</p>
              <p className='text-sm'>Connect your youtube account</p>
              <div className='flex gap-1 w-full'>
                <button className={channelData ? 'text-sm px-1 py-1 bg-red-700 w-25 rounded-md text-white cursor-pointer' : 'cursor-pointer text-sm px-1 py-1 bg-blue-700 w-25 rounded-md text-white'} onClick={connectYoutube}>{channelData ? "Connected" : "Connect"}</button>
                <button type="button" className='text-sm px-1 py-1 bg-green-700 w-25 rounded-md text-white cursor-pointer' onClick={finishChannel}>Disconnect</button>

                <div className='hidden' ref={showRef}>
                  <div className='absolute top-2 left-2 flex gap-1 flex-col' >
                    <select name="" value={IdChannel} className="px-3 py-2 border-1 " onChange={(e) => setIdChannel(e.target.value)} id="">
                      <option className="py-1 px-3 text-black" value="">Choose channel</option>
                      {channelData ? (channelData.map((ch) => {
                        return (

                          <option className="py-1 px-3 text-black" value={ch.channel}>{ch.channelTitle}</option>
                        )
                      })) : (<option value="" className='py-1 px-3 text-black'>No Channel Here</option>)}
                    </select>
                    <button type="button" className='py-1 px-3 text-black border-1 cursor-pointer' onClick={channelAccess}>Done</button>
                  </div>
                </div>



              </div>

            </div>

          </div>

<div className='py-3'>
  <h1 className='py-3 text-xl font-bold'>Activity Feeds</h1>
  <div className='flex flex-col'>

    {
      arr.length === 0 ? (
        <p className='text-gray-500 text-center py-5'>
          No activity found. Start by creating a post 🚀
        </p>
      ) : (
        arr.map((item) => (
          <div className='flex gap-2 py-2' key={item._id}>
            <img
              src={icons[item.platform]}
              className='w-10 h-10 rounded-full'
              alt=""
            />

            <div className='flex flex-col'>
              <p>Posted to {item.platform}</p>
              <p>{getTimeOut(item.createdAt)}</p>
            </div>
          </div>
        ))
      )
    }

    <div className='py-2 flex justify-end px-4'>
      <Link to="/create">
        <button className='py-1 px-3 bg-blue-700 text-white rounded-md cursor-pointer'>
          <span className='text-2xl font-bold'>+</span> Post Now
        </button>
      </Link>
    </div>

  </div>
</div>

        </div>

      </div>
    </div>
  )
}

export default Dish
