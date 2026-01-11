import React from "react";
import Childdern2 from "./childern2";


const Join2 = ({ givePages, Instawork, igId, sentFaceId, sentInstaId }) => {
  return (
    <Childdern2
      myPages={givePages}
      myInsta={Instawork}
      igIdData={igId}
      receiveFaceId={sentFaceId}
      reciecveInstaId={sentInstaId}
    />
  );
};

export default Join2;
