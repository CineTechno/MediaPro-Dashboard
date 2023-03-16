import Card from "../../UI/Card";
import Month from "./Month";
import SidePanel from "./SidePanel";
import CalendarHeader from "./CalendarHeader";
import classes from "./Calendar.module.css";
import { getMonth, getWeek } from "./CalendarUtil";
import { useState, useContext,useEffect } from "react";

import CalendarContext from "../../Context/CalendarContext";


getWeek()


const Calendar = () => {
  
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const {monthIndex, setMonthIndex} = useContext(CalendarContext)


  useEffect(()=> {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])
  
  return <Card className={classes.calendarContainer}>
    <CalendarHeader/>
    
    <Month month = {currentMonth}/>
    
      
    
  </Card>;
};

export default Calendar;
