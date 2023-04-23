import { Col, Container, Row } from "react-bootstrap";
import DashboardChart from "./dashboardCharts/";
import FavouriteDashboard from "./favouriteDashboard";
import "./index.scss";

const UserDashboard = () => {
  return (
    <Container>
      <div className="userDashboard">
        <Row>
          <Col
            xs={12}
            sm={12}
            md={10}
            lg={4}
            className="userDashboard-pane-box"
          >
            <FavouriteDashboard />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={8}
            className="userDashboard-pane-box"
          >
            <DashboardChart />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default UserDashboard;
