import React from "react";
import "../assets/ChartTopBoxes.scss";
import { IChartBox } from "../constants";

interface IChartTopBoxes {
  info: IChartBox[];
}

const ChartTopBoxes: React.FC<IChartTopBoxes> = ({ info }) => {
  return (
    <div className="ChartTopBoxes">
      <div className="ChartTopBoxes-row">
        {info.map((coin: IChartBox, index: number) => {
          return (
            <div className="ChartTopBoxes-boxes" key={index}>
              <div className="ChartTopBoxes-title">{coin.title}</div>
              <div className="ChartTopBoxes-content">{coin.data}</div>
            </div>
          );
        })}
      </div>
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
