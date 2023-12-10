import React, { useState } from "react";
import ListGroup from "react-bootstrap/esm/ListGroup";
import {
  ChartIntervalsObject,
  KlineIntervalEnum,
} from "components/Charts/constants";
import Tooltip from "components/Overlays/tooltip";
import "../../assets/chartOptions.scss";
import { BsCalendar4 } from "react-icons/bs";
import CalenderDateRange from "./calender";
import {
  advanceIntervals,
  IChartInterval,
  simpleIntervals,
} from "utils/dateFormatter";

interface IChartIntervals {
  intervalType: IChartInterval;
  currentInterval: (value: IChartInterval) => void;
}
const ChartIntervals: React.FC<IChartIntervals> = ({
  currentInterval,
  intervalType,
}) => {
  const [showCalender, setShowCalender] = useState(false);
  const [isCalendarActive, setIsCalendarActive] = useState(false);
  const [isInterval, setIsInterval] = useState(KlineIntervalEnum.OneDay);

  const toggleCalender = () => {
    setShowCalender((prev) => !prev);
  };

  const updateCurrentInterval = (interval: KlineIntervalEnum) => {
    setIsCalendarActive(false);
    setShowCalender(false);
    setIsInterval(interval);
    currentInterval(simpleIntervals(interval));
  };

  const updateCurrentIntervalRange = (range: string[]) => {
    currentInterval(advanceIntervals(range));
  };

  return (
    <div className="ChartIntervals">
      <ListGroup horizontal={true} className="listGroup">
        {ChartIntervalsObject.map(
          (
            interval: {
              title: string;
              short: KlineIntervalEnum;
              interval: KlineIntervalEnum;
            },
            index: number
          ) => (
            <Tooltip title={interval.title} key={index} position="top">
              <ListGroup.Item
                className={
                  !isCalendarActive && isInterval === interval.short
                    ? "activeItem"
                    : "inactiveItem"
                }
                onClick={() => {
                  updateCurrentInterval(interval.short);
                }}
              >
                {interval.short.toLocaleUpperCase()}
              </ListGroup.Item>
            </Tooltip>
          )
        )}
        <Tooltip title={"Date range"} key={"date range"} position="top">
          <ListGroup.Item
            className={`calendarItem ${
              (isCalendarActive || showCalender) && "calendarItemActive"
            }`}
            onClick={() => {
              setIsCalendarActive(true);
              toggleCalender();
            }}
          >
            <BsCalendar4 />
          </ListGroup.Item>
        </Tooltip>
      </ListGroup>
      {showCalender && (
        <CalenderDateRange onChange={updateCurrentIntervalRange} />
      )}
    </div>
  );
};

export default ChartIntervals;
