import { useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-calendar/dist/Calendar.css";
import { Value } from "@wojtekmaj/react-daterange-picker/dist/cjs/shared/types";

const Calender = () => {
  const [dates, setDates] = useState<Value>(new Date());
  const onChange = (value: Value) => {
    console.log("Testing onchange : ", value);
    setDates(value);
  };
  return (
    <div className="calender">
      {/* <Form.Group controlId="calender"> */}
      <div>
        <DateRangePicker
          onChange={onChange}
          value={dates}
          calendarClassName="calendarClassName"
          className="calender-date-picker"
          clearIcon={<span></span>}
        />
      </div>
    </div>
  );
};

export default Calender;
