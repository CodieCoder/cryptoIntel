import React from "react";
import NftList from "./NftList";
import "./index.scss";
import Timeline from "./Timeline";

const LeftBody = () => {
  return (
    <div className="left-body">
      <Timeline />
      <hr />
      <NftList />
    </div>
  );
};

export default LeftBody;
