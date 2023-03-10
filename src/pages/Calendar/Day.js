import classes from './Month.module.css'
import dayjs from 'dayjs';
import { Fragment, useState,useContext } from 'react';
import EventModal from './EventModal';

import Month from './Month';


function Day(props) {

    const getCurrentDay = () => {    
        
        return props.day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? classes.dayContainerCurrent:''
    }

    

    return ( 
    <Fragment>
        
        <div className={classes.dayContainer} onClick={()=>props.setModalIsShown(props.day)}>
        
            <header className={classes.dayContainerFormat}>
            
             {props.rowIdx ===0 && (<p>{props.day.format('ddd')}</p>)}   
            
            <p className={getCurrentDay()}>{props.day.format('DD')}</p>
            </header>
            {props.modalIsShown===props.day ? <EventModal/>:''}
            
            
        </div>
    </Fragment>
     );
}

export default Day;