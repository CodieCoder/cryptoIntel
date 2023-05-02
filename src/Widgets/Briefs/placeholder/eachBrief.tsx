import React from "react";
import Placeholder from "react-bootstrap/esm/Placeholder";
import "./asset/index.scss";

const EachBriefPlaceholder: React.FC = () => {
  return (
    <div className="EachBriefPlaceholder">
      <div className="EachBriefPlaceholder-body">
        <Placeholder as="p" animation="wave">
          <Placeholder xs={10} />
        </Placeholder>
        <Placeholder as="p" animation="wave">
          <Placeholder xs={12} />
        </Placeholder>
        <Placeholder as="p" animation="wave">
          <Placeholder xs={8} />
        </Placeholder>
      </div>
    </div>
  );
};

export default EachBriefPlaceholder;
