import classes from './Month.module.css'
import dayjs from 'dayjs';
import { Fragment, useState,useContext,useRef, useEffect } from 'react';
import EventModal from './EventModal';
import CalendarContext from '../../Context/CalendarContext';
import { render } from '@testing-library/react';
import Task from './Task';
import EventModalSaved from './EventModalSaved';



function Day(props) {

    

    const {savedEvents, dispatchCalEvents, modalIsShown, setModalIsShown, daySelected, setDaySelected, savedModalIsShown, setSavedModalIsShown} = useContext(CalendarContext)

    const [currentDayEvents, setCurrentDayEvents] = useState([])
    const [editingInProgress, setEditingInProgress] = useState(false)

    useEffect(() => {
        const events = savedEvents.filter(
            (task) => 
            dayjs(task.date).format('YYYY-MM-DD')===props.day.format('YYYY-MM-DD'))
        setCurrentDayEvents(prev => events)
        
    }, [savedEvents])


    const getCurrentDay = () => {    
        
        return props.day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? classes.dayContainerCurrent:''
    }


    const dayHandler = (e, day) => {
        console.log(e.target)
        if (e.target === e.currentTarget) {
            
        setDaySelected(day)
        setModalIsShown(prev=>!prev) }
        setSavedModalIsShown(false)
        
    }


    return (
    <Fragment>
        
        <div className={classes.dayContainer} onClick= {(e)=>dayHandler(e, props.day)} >
        
            <header className={classes.dayContainerFormat}  >
            
             {props.rowIdx ===0 && (<p>{props.day.format('ddd')}</p>)}   
            
            <p className={getCurrentDay()}>{props.day.format('DD')}</p>

            </header>

            {modalIsShown && daySelected ===props.day && <EventModal />}
            {savedModalIsShown && dayjs(savedModalIsShown.date).format('YYYY-MM-DD') === dayjs(props.day).format('YYYY-MM-DD') && <EventModalSaved/>}
        
                
            <div className={classes.taskContainer}>
                
               
                {currentDayEvents.map((task,index)=>index<=1 && 
                <Task task={task} key={task.id}/>)}
                {currentDayEvents.length >= 3 ? <Task><h3>Wiecej...</h3></Task>: ''}
                     
           
             
            <div/>
               
        
                {/* {currentDayEvents.length >= 3 ? <div className={classes.calendarTaskMore}><h3>Wiecej...</h3></div>: ''} */}
                    
           
             
            <div/>
            
            
            
        </div>
        </div>
        
    </Fragment>
     
     )}


export default Day;