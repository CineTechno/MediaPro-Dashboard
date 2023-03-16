import { Fragment,useState } from 'react';
import classes from './Month.module.css'
import Day from './Day';
import EventModal from './EventModal';

function Month(props) {
    
    const [modalIsShown, setModalIsShown] = useState(0)
    const [calendarTasks, setCalendarTasks] = useState([])
    const [id, setId] = useState(0)

    const setModalIsShownHandler = (day, event) => {
        setModalIsShown((prev) => prev=== 0?day:0)
        
        
    }
    
    const calendarTaskDataMonth = (task, date, project) => {
        setId(prev => prev + 1 )
 
         const newTask = {task,date,project, id}
         setCalendarTasks((prev) =>[...prev, newTask])
         setModalIsShown(0)
         console.log(newTask)
 
     }

     

    return (
        <div className={classes.MonthContainer}>
            
{props.month.map((row,i) => (
    <Fragment key={i}>
        {row.map((day,idx) => (
            
            <Day day={day}  key={day} rowIdx={i} id={idx}/>
        ))}
    </Fragment>
))}
        </div>
    )
}

export default Month;