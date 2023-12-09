import React from "react";
import ListGroup from "react-bootstrap/esm/ListGroup";
import { ChartTypeEnum } from "../../constants";

interface ISwitchChartType {
  switchChart: (value: ChartTypeEnum) => void;
  activeChart: ChartTypeEnum;
}

const SwitchChartType: React.FC<ISwitchChartType> = ({
  switchChart,
  activeChart,
}) => {
  return (
    <div className="chartTools-chartType">
      <ListGroup horizontal={true} className="listGroup">
        <ListGroup.Item
          className={
            activeChart === ChartTypeEnum.line ? "activeItem" : "inactiveItem"
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
  );
};

export default SwitchChartType;
