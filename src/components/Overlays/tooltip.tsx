import React from "react";
import { OverlayTrigger, Tooltip as DefaultTooltip } from "react-bootstrap";
import "./asset/index.scss";

interface ITooltip {
  title: React.ReactNode;
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  position?:
    | "auto-start"
    | "auto"
    | "auto-end"
    | "top-start"
    | "top"
    | "top-end"
    | "right-start"
    | "right"
    | "right-end"
    | "bottom-end"
    | "bottom"
    | "bottom-start"
    | "left-end"
    | "left"
    | "left-start";
}

const Tooltip: React.FC<ITooltip> = ({ title, children, position }) => {
  return (
    <OverlayTrigger
      placement={position || "bottom"}
      overlay={
        <DefaultTooltip
          className="default-tooltip"
          id="something-else"
          arrowProps={{
            style: {
              background: "rgb(40, 179, 178)",
              border: "2px solid  rgba(40, 179, 178)",
            },
          }}
        >
          {title}
        </DefaultTooltip>
      }
    >
      {children}
    </OverlayTrigger>
  );
};

export default Tooltip;
