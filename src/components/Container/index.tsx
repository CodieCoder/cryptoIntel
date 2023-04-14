import React from "react";
import { Container } from "react-bootstrap";
import "./asset/index.scss";

interface IContainerBox {
  title?: React.ReactNode;
  icon?: "chart" | "favourite" | React.ReactNode;
  children: React.ReactNode;
  style?: string;
  className?: string;
  shadow?: boolean;
  windowsButton?: boolean;
}

const ContainerBox: React.FC<IContainerBox> = ({
  title,
  icon,
  children,
  className,
  style,
  shadow = true,
  windowsButton,
}) => {
  const getClassName = () => {
    let _class = ``;
    if (shadow) _class = _class + ` add-shadow`;
    if (className) _class = _class + ` ${className}`;
    return _class;
  };
  const getIcon = () => {
    if (icon) {
      return icon;
    } else {
      return "";
    }
  };
  return (
    <Container className="containerBox">
      <div className={getClassName()}>
        <div className="containerBox-header">
          <div className="containerBox-icon">{getIcon()}</div>
          <div className="containerBox-title">{title}</div>
        </div>
        <div className="containerBox-content">{children}</div>
      </div>
    </Container>
  );
};

export default ContainerBox;
