import { Fragment } from 'react';
import classes from './Month.module.css'
import Day from './Day';
function Month(props) {
    return (
        <div className={classes.MonthContainer}>
{props.month.map((row,i) => (
    <Fragment key={i} className={classes.rowColor}>
        {row.map((day,idx) => (
            <Day day={day} key={idx} rowIdx={i}/>
        ))}
    </Fragment>
))}
        </div>
    )
}

export default Month;