import { useState, useReducer } from "react";
import CalendarContext from "./CalendarContext";
import dayjs from "dayjs";


function SavedEventReducer(state, {payload,type}) {
    switch(type) {
        case 'push':
        return[...state, payload]

        case 'update':

        return [state.map(event => event.id === payload.id ? payload: event)]

        case 'delete' :
            return [state.filter(event => event.id !== payload.id)]

        default:
            return state
    }
    }

export default function CalendarContextWrapper(props){

    const [monthIndex, setMonthIndex] = useState(dayjs().month())
    const [savedEvents, dispatchCalEvents] = useReducer(SavedEventReducer, [])
    const [modalIsShown, setModalIsShown] = useState(false)
    const [daySelected, setDaySelected] = useState(null)
    const [savedModalIsShown, setSavedModalIsShown] = useState(false)
    
    return(
        <CalendarContext.Provider value={{savedModalIsShown, setSavedModalIsShown, monthIndex, setMonthIndex, dispatchCalEvents, modalIsShown, setModalIsShown, daySelected, setDaySelected, savedEvents}}>
            {props.children}
        </CalendarContext.Provider>
    )
}