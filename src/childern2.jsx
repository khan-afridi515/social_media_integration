import { Routes, Route } from "react-router-dom";
import Dish from "./dish/dishboard";
import Create from "./createPost/create";
import View from "./preview/view";
import Chanel from "./youtube/autoredirect";
import Linked from "./linkedIn/linked";
import MainLayout from "./mainLayout";
import PlainLayout from "./plainLayout";
import Login  from "./login";
import ProtectedRouter from "./protectedRouter";


const Childdern2 = ({ myPages, myInsta, igIdData }) => {
  const storedData = localStorage.getItem("youtubeChannelData");
  const mystoredData = storedData ? JSON.parse(storedData) : null;

  const removeYoutubeData = () => {
    localStorage.removeItem("youtubeChannelData");
  };

  return (
    <Routes>
      {/* WITH Navbar + Sidebar */}
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={
            <ProtectedRouter>
            <Dish
              facebookPages={myPages}
              myInsta={myInsta}
              IgIddigit={igIdData}
              channelData={mystoredData}
              finishChannel={removeYoutubeData}
            /></ProtectedRouter>
          }
        />
        <Route path="/create" element={<ProtectedRouter><Create postIgId={igIdData} myChannelData={mystoredData} /></ProtectedRouter>} />
        <Route path="/view" element={<ProtectedRouter><View /></ProtectedRouter>} />
        
      </Route>

      {/* WITHOUT Navbar + Sidebar */}
      <Route element={<PlainLayout />}>
        <Route path="/youtubeChanel" element={<ProtectedRouter><Chanel /></ProtectedRouter>} />
        <Route path="/linked/work" element={<ProtectedRouter><Linked /></ProtectedRouter>} />
        <Route path="/login" element={<Login/>}/>
      </Route>
    </Routes>
  );
};

export default Childdern2;
