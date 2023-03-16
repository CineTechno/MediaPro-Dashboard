import CalendarContext from "../../Context/CalendarContext";
import { useContext } from "react";
import classes from './EventModal.module.css'



function EventModalSaved() {

const {savedModalIsShown, setSavedModalIsShown} = useContext(CalendarContext)

    return ( 
        <div className={classes.EventModalContainer} style ={{color:'black'}}>
            <header>
            
            </header>
            <div className={classes.EventModalForm}>
            <h3>{savedModalIsShown.message}</h3>
            <h3>{savedModalIsShown.date}</h3>
            <h3>{savedModalIsShown.project}</h3>

            </div>
        </div>
     );
}

export default EventModalSaved;