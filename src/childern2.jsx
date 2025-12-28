import { Routes, Route } from "react-router-dom";
import Dish from "./dish/dishboard";
import Create from "./createPost/create";
import View from "./preview/view";
import Chanel from "./youtube/autoredirect";
import Linked from "./linkedIn/linked";
import MainLayout from "./mainLayout";
import PlainLayout from "./plainLayout";


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
            <Dish
              facebookPages={myPages}
              myInsta={myInsta}
              IgIddigit={igIdData}
              channelData={mystoredData}
              finishChannel={removeYoutubeData}
            />
          }
        />
        <Route path="/create" element={<Create postIgId={igIdData} myChannelData={mystoredData} />} />
        <Route path="/view" element={<View />} />
      </Route>

      {/* WITHOUT Navbar + Sidebar */}
      <Route element={<PlainLayout />}>
        <Route path="/youtubeChanel" element={<Chanel />} />
        <Route path="/linked/work" element={<Linked />} />
      </Route>
    </Routes>
  );
};

export default Childdern2;
