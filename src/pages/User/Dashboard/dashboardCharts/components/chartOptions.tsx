import React, { useState } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { IChartInterval } from "utils/dateFormatter";
import { ChartTypeEnum } from "../constants";
import ChartIntervals from "./interval";

interface IChartTools {
  intervalType?: IChartInterval;
  setIntervalType: React.Dispatch<React.SetStateAction<IChartInterval>>;
  setChartType: React.Dispatch<React.SetStateAction<ChartTypeEnum>>;
}

const ChartTools: React.FC<IChartTools> = ({
  intervalType,
  setIntervalType,
  setChartType,
}) => {
  const [activeChart, setActiveChart] = useState<ChartTypeEnum>();

  const switchChart = (value: ChartTypeEnum) => {
    setActiveChart(value);
    setChartType(value);
  };

  return (
    <div className="chartTools">
      <Row>
        <Col lg={6} xl={6} sm={12}>
          <div className="chartTools-boxes">
            <div className="chartTools-list-group">
              <ChartIntervals currentInterval={setIntervalType} />
            </div>
          </div>
        </Col>
        <Col lg={6} xl={6} sm={12}>
          <div className="chartTools-boxes">
            <div className="chartTools-chartType">
              <ListGroup horizontal={true} className="listGroup">
                <ListGroup.Item
                  className={
                    activeChart === ChartTypeEnum.line
                      ? "activeItem"
                      : "inactiveItem"
                  }
                  onClick={() => switchChart(ChartTypeEnum.line)}
                >
                  Line
                </ListGroup.Item>
                <ListGroup.Item
                  className={
                    activeChart === ChartTypeEnum.advanced
                      ? "activeItem"
                      : "inactiveItem"
                  }
                  onClick={() => switchChart(ChartTypeEnum.advanced)}
                >
                  TradeView
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ChartTools;
