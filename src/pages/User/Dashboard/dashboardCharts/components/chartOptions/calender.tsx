import { useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-calendar/dist/Calendar.css";
import { Value } from "@wojtekmaj/react-daterange-picker/dist/cjs/shared/types";

interface ICalenderDateRange {
  onChange: (value: any) => void;
}

const CalenderDateRange: React.FC<ICalenderDateRange> = ({ onChange }) => {
  const [isShow, setIsShow] = useState(true);
  const [dates, setDates] = useState<Value>();

  const onHide = () => {
    setIsShow(false);
  };

  return (
    <div className="calender">
      {isShow && (
        <DateRangePicker
          onChange={(values) => {
            setDates(values);
            onChange(values);
          }}
          value={dates}
          calendarClassName="calendarClassName"
          className="calender-date-picker"
          clearIcon={<span></span>}
          isOpen={true}
          calendarIcon={null}
          closeCalendar={true}
          onCalendarClose={onHide}
        />
      )}
    </div>
  );
};

export default CalenderDateRange;
