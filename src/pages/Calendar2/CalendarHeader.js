import React, { useContext, useState } from 'react';
import GlobalContext from '../../Context/CalendarContext';
import classes from './Calendar.module.css'
import dayjs from 'dayjs';
const CalendarHeader = () => {
    const {monthIndex,setMonthIndex}= useContext(GlobalContext)

    const prevMonthHandler = () => {
        setMonthIndex(monthIndex- 1)
    }
    const nextMonthHandler = () => {
        setMonthIndex(monthIndex + 1)
    }
    return (
        <header className={classes.CalendarHeader}>
            <button className={classes.buttonCalendarHeader}>Today</button>
            
            <button className={classes.iconCalendarHeader} onClick = {prevMonthHandler}><ion-icon name="chevron-back-outline"></ion-icon></button>
            <button className={classes.iconCalendarHeader} onClick = {nextMonthHandler}><ion-icon name="chevron-forward-outline"></ion-icon></button>
            <h1> {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}</h1>

        </header>
    )
}
 
export default CalendarHeader;