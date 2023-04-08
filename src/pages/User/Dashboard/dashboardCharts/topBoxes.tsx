import React from "react";
import { Col, Row } from "react-bootstrap";
import "./assets/ChartTopBoxes.scss";

interface IChartTopBoxes {
  title: string;
  data: any;
}

const ChartTopBoxes: React.FC<any> = ({ info }) => {
  return (
    <div className="ChartTopBoxes">
      <Row>
        {info.map((coin: IChartTopBoxes, index: number) => {
          return (
            <Col
              key={index}
              xs={12}
              sm={12}
              md={10}
              lg={3}
              className="ChartTopBoxes-boxes"
            >
              <div className="ChartTopBoxes-title">{coin.title}</div>
              <div className="ChartTopBoxes-content">{coin.data}</div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

//  <Row>
//    <Col xs={12} sm={12} md={10} lg={5} className="userDashboard-pane-fav">
//      <FavouriteDashboard />
//    </Col>
//    <Col xs={12} sm={12} md={12} lg={7} className="userDashboard-pane-fav">
//      <DashboardChart />
//    </Col>
//  </Row>;

export default ChartTopBoxes;
