import classes from './Month.module.css'
import dayjs from 'dayjs';
function Day(props) {

    const getCurrentDay = () => {
        console.log (props.day)
        return props.day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? classes.dayContainerCurrent:''
    }

    return ( 
        <div className={classes.dayContainer}>
            <header className={classes.dayContainerFormat}>
             {props.rowIdx ===0 && (<p>{props.day.format('ddd')}</p>)}   
            
            <p className={getCurrentDay()}>{props.day.format('DD')}</p>
            </header>
            
        </div>
     );
}

export default Day;