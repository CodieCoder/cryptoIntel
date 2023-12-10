import React from "react";
import EachNewsPlaceholder from "./eachBrief";

interface IBriefPlaceholder {
  count: number;
}
const BriefPlaceholder: React.FC<IBriefPlaceholder> = ({ count }) => {
  const render = () => {
    const result: React.ReactNode[] = [];
    for (let i = 0; i <= count; i++) {
      result.push(<EachNewsPlaceholder key={i} />);
    }
    return result;
  };

  return <div className="NewsPlaceholder">{render()}</div>;
};

export default BriefPlaceholder;
