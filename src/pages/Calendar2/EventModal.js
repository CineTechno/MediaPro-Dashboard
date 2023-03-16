import classes from './EventModal.module.css'
import Card from '../../UI/Card';
import { useState,useRef, useContext, useEffect } from 'react';
import Day from './Day';
import CalendarContext from '../../Context/CalendarContext';


function EventModal(props) {

    const taskRef=useRef()
    const dateRef=useRef()
    const selectRef = useRef()
    const [id,setId] = useState(0)
    const {dispatchCalEvents, modalIsShown, setModalIsShown, daySelected, setDaySelected,savedEvents} = useContext(CalendarContext)
    /////////Dragging Logic ////////

    const [x, setX] = useState('auto');
    const [y, setY] = useState('auto');

    const [originX, setOriginX] = useState('auto')
    const [originY, setOriginY] = useState('auto')

    const[onDragEndOriginX, setOnDragEndOriginX] = useState(0)
    const[onDragEndOriginY, setOnDragEndOriginY] = useState(0)

    const setOriginHandler = (event) => {
        const top = event.target.getBoundingClientRect().top
        setOriginY(event.clientY - top) 
        
        const left = event.target.getBoundingClientRect().left
        setOriginX(event.clientX - left) 
    }

    const handleDragEnd = (event) => {
    setOnDragEndOriginX(originX)
    setOnDragEndOriginY(originY)
    setX(event.clientX );
    setY(event.clientY );
   
};






/////////Inputs /////////

const onSubmitHandler = (e) => {
e.preventDefault()
if (taskRef.current.value !== '' ){
    const newEvent = {
        message: taskRef.current.value,
        date: dateRef.current.value,
        project: selectRef.current.options[selectRef.current.selectedIndex].value,
        id: id
    } 

    dispatchCalEvents({type: 'push', payload: newEvent})

    setId(id + 1)

    setModalIsShown(false)



    // props.calendarTaskData(taskRef.current.value, dateRef.current.value, selectRef.current.options[selectRef.current.selectedIndex].value)
} 

}
 
///Contaxt///yyyy-MM-ddThh:mm



    return ( 
        
        <div  draggable onDragStart= {setOriginHandler} onDragEnd={handleDragEnd} className={classes.EventModalContainer} style={{left:(x + onDragEndOriginX), top:(y - onDragEndOriginY)}}>
        <header>
            
        </header>
        <form className={classes.EventModalForm} onSubmit ={onSubmitHandler}>
        <input type='text' id = 'task' ref = {taskRef}></input>
        
        <input type='datetime-local' className={classes.EventModalDate} defaultValue={daySelected.format('YYYY-MM-DDThh:mm')} ref={dateRef}></input>
        <label>Projekt</label>
        <select id='projects' ref={selectRef}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        </select>
        <input type='submit' value='Zapisz'></input>
        </form>
        
        </div>
     );
}

export default EventModal;