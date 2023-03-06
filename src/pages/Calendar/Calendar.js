import Card from "../../UI/Card";
import classes from './Calendar.module.css'
import dayjs from "dayjs";

const Calendar = () => {
  const getMonth = (month) => {
    const year = dayjs().year()
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day()
    let currentMonthCount = 0 - firstDayOfTheMonth
    const daysMatrix = new Array(5).fill([]).map(()=> {
      return new Array(7).fill(null).map(()=>{
        currentMonthCount++
        return dayjs(new Date(year,month, currentMonthCount)).format()
      })
    })
  return daysMatrix 
  }

console.table(getMonth(3))
    return<Card className={classes.calendarContainer}>
    
    </Card> 
  };
  
  export default Calendar;
  