import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserContext from "../context";
import DashboardChart from "./dashboardCharts/";
import FavouriteDashboard from "./favouriteDashboard";
import "./index.scss";

const UserDashboard = () => {
  const { selectedCoin } = useContext(UserContext);
  return (
    <Container>
      <div className="userDashboard">
        <Row>
          <Col
            xs={12}
            sm={12}
            md={10}
            lg={4}
            className="userDashboard-pane-fav"
          >
            <FavouriteDashboard />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={8}
            className="userDashboard-pane-fav"
          >
            {selectedCoin && <DashboardChart />}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default UserDashboard;
