import { Fragment,useState } from 'react';
import classes from './Month.module.css'
import Day from './Day';
import EventModal from './EventModal';

function Month(props) {
    
    const [modalIsShown, setModalIsShown] = useState(null)

    // const modalIsShownHandler = () => {
    //     setModalIsShown(props.id)
    //     console.log(props.id)
    // }
    
    return (
        <div className={classes.MonthContainer}>
            
{props.month.map((row,i) => (
    <Fragment key={i} className={classes.rowColor}>
        {row.map((day,idx) => (
            
            <Day day={day}  key={idx} rowIdx={i} id={idx} modalIsShown={modalIsShown} setModalIsShown= {()=>setModalIsShown(day)}/>
        ))}
    </Fragment>
))}
        </div>
    )
}

export default Month;