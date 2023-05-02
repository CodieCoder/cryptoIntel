import React from "react";
import { DateFormatter, DateTypeEnum } from "../../utils/dateFormatter";
import { IBrief } from "./constants";
import { cleanTags } from "./helper";

const EachBrief: React.FC<IBrief> = ({ brief }) => {
  return (
    <div className="EachBrief">
      <div className="date">
        {DateFormatter(DateTypeEnum.shortDate, brief.date)}
      </div>
      <div className="title">{brief.title}</div>
      <div className="tags">{cleanTags(brief.tags)}</div>
    </div>
  );
};

export default EachBrief;
