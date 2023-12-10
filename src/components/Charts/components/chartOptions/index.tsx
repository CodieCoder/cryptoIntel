import React from "react";
import { Col, Row } from "react-bootstrap";
import { IChartInterval } from "utils/dateFormatter";
import { ChartTypeEnum } from "../../constants";
import ChartIntervals from "./interval";
import SwitchChartType from "./switchChart";

interface IChartTools {
  intervalType: IChartInterval;
  setIntervalType: React.Dispatch<React.SetStateAction<IChartInterval>>;
  chartType: ChartTypeEnum;
  setChartType: React.Dispatch<React.SetStateAction<ChartTypeEnum>>;
}

const ChartTools: React.FC<IChartTools> = ({
  intervalType,
  setIntervalType,
  chartType,
  setChartType,
}) => {
  return (
    <div className="chartTools">
      <Row>
        <Col lg={4} xl={4} sm={12} className="chartTools-cols">
          <SwitchChartType switchChart={setChartType} activeChart={chartType} />
        </Col>
        {chartType !== ChartTypeEnum.advanced && (
          <Col lg={5} xl={5} sm={12} className="chartTools-cols">
            <div className="chartTools-list-group">
              <ChartIntervals
                currentInterval={setIntervalType}
                intervalType={intervalType}
              />
            </div>
          </Col>
        )}
        <Col className="chartTools-cols"></Col>
      </Row>
    </div>
  );
};

export default ChartTools;
