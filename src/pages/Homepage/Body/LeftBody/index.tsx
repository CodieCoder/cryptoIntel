import React from "react";
import NftList from "./NftList";
import "./index.scss";
import NewsBrief from "../../../../Widgets/Briefs";

const LeftBody = () => {
  return (
    <div className="left-body">
      <div className="">
        {/* <NftList /> */}
        <hr />
      </div>
      <div className="news-brief">
        <NewsBrief />
      </div>
    </div>
  );
};

export default LeftBody;
