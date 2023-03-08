import Card from "../../UI/Card";
import Month from "./Month";
import SidePanel from "./SidePanel";
import CalendarHeader from "./CalendarHeader";
import classes from "./Calendar.module.css";
import { getMonth } from "./CalendarUtil";
import { useState, useContext,useEffect } from "react";
import GlobalContext from "../../Context/GlobalContext";




const Calendar = () => {
  
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const {monthIndex} = useContext(GlobalContext)

  useEffect(()=> {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])
  
  return <Card className={classes.calendarContainer}>
    <CalendarHeader/>
    <div className={classes.sidePanelContainer}>
      <SidePanel/>
      <Month month = {currentMonth}/>
    </div>
  </Card>;
};

export default Calendar;
