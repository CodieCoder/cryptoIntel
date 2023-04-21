import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import "./asset/index.scss";
import { ChartIntervalsObject } from "components/Charts/constants";
import Tooltip from "components/Overlays/tooltip";
import { IChartInterval, simpleIntervals } from "utils/dateFormatter";

interface IChartIntervals {
  currentInterval: (value: IChartInterval) => void;
}
const ChartIntervals: React.FC<IChartIntervals> = ({ currentInterval }) => {
  const [activeInterval, setActiveInterval] = useState(
    ChartIntervalsObject[0].short
  );

  useEffect(() => {
    currentInterval(simpleIntervals(activeInterval));
    // eslint-disable-next-line
  }, [activeInterval]);

  return (
    <div className="ChartIntervals">
      <ListGroup horizontal={true} className="listGroup">
        {ChartIntervalsObject.map((interval, index: number) => (
          <Tooltip title={interval.title} key={index} position="top">
            <ListGroup.Item
              className={
                activeInterval === interval.short
                  ? "activeItem"
                  : "inactiveItem"
              }
              onClick={() => setActiveInterval(interval.short)}
            >
              {interval.short}
            </ListGroup.Item>
          </Tooltip>
        ))}
      </ListGroup>
    </div>
  );
};

export default ChartIntervals;
