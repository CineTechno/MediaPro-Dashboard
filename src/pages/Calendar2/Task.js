import { useContext } from 'react';
import CalendarContext from '../../Context/CalendarContext';
import classes from './Month.module.css'




function Task ({task,children}) {
    const {setModalIsShown, setSavedModalIsShown, setSavedModal} = useContext(CalendarContext)

    const savedModalHandler = (e) =>{
        e.stopPropagation()
        setSavedModalIsShown(task)
        setModalIsShown(false)
    }
    
    
    return ( 
    <div className={classes.calendarTask} onClick ={savedModalHandler}>
        {task.message}
    </div> );
}

export default Task ;