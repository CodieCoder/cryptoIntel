import React from "react";
import "./index.scss";

interface ILoading {
  loading: boolean;
  content?: React.ReactNode;
  children?: React.ReactNode;
}

const Loading: React.FC<ILoading> = ({ loading, content, children }) => {
  return (
    <div className="loading-component">
      {loading && (
        <div className="loading-component-content-div">
          <div className="loading-component-content">
            <div className="spinner"></div>
            <br />
            <div className="content">{content && content}</div>
          </div>
        </div>
      )}
      <div className="loadng-component-children">{children && children}</div>
    </div>
  );
};

export default Loading;
