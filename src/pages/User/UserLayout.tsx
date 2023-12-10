import React from "react";
import { Container } from "react-bootstrap";
import "./index.scss";

interface IUserLayout {
  children: React.ReactNode;
}

const UserLayout: React.FC<IUserLayout> = ({ children }) => {
  return (
    <Container className="user-layout justify-content-md-center">
      {children}
    </Container>
  );
};

export default UserLayout;
