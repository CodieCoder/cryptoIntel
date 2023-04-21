import Loading from "components/Loading";
import React from "react";
import { Container } from "react-bootstrap";
import { BsFillPieChartFill, BsStarFill } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import "./asset/index.scss";
import { IContainerBox, IconTypesEnum } from "./constants";

const ContainerBox: React.FC<IContainerBox> = ({
  title,
  icon,
  children,
  className,
  style,
  shadow = true,
  windowsButton,
  loading,
}) => {
  const getClassName = () => {
    let _class = `containerBox-body`;
    if (shadow) _class = _class + ` add-shadow`;
    if (className) _class = _class + ` ${className}`;
    return _class;
  };

  const getIcon = () => {
    if (icon) {
      return commonIconTypes(icon);
    } else {
      return "";
    }
  };

  const commonIconTypes = (iconName: string) => {
    switch (iconName) {
      case IconTypesEnum.chart:
        return <BsFillPieChartFill className="icon-component" />;
      case IconTypesEnum.favourite:
        return <BsStarFill className="icon-component" />;
      case IconTypesEnum.userProfile:
        return (
          <BiUser className="icon-component" style={{ fontSize: "1.7rem" }} />
        );
      default:
        return;
    }
  };

  return (
    <Container className="containerBox">
      <Loading loading={loading || false}>
        <div className={getClassName()}>
          <div className="containerBox-header">
            <div className="containerBox-icon">{getIcon()}</div>
            <div className="containerBox-title">{title}</div>
          </div>
          <div className="containerBox-content">{children}</div>
        </div>
      </Loading>
    </Container>
  );
};

export default ContainerBox;
