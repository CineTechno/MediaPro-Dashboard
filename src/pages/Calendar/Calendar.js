import Card from "../../UI/Card";
import Month from "./Month";
import SidePanel from "./SidePanel";
import CalendarHeader from "./CalendarHeader";
import classes from "./Calendar.module.css";
import { getMonth } from "./CalendarUtil";
import { useState } from "react";




const Calendar = () => {
  
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  
  return <Card className={classes.calendarContainer}>
    <CalendarHeader/>
    <div className={classes.sidePanelContainer}>
      <SidePanel/>
      <Month month = {currentMonth}/>
    </div>
  </Card>;
};

export default Calendar;
