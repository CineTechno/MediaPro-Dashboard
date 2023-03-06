import { Link, NavLink } from 'react-router-dom'
import classes from './Sidebar.module.css'
import portrait from '../assets/Portrait.jpg'
import Card from '../UI/Card'
import { useState } from 'react'

const Sidebar =() => 
{
    const menuCategoryHighlight = ({isActive})=>isActive?classes.categoryContainer__active:classes.categoryContainer
    return (
    <aside className={classes.sidebarContainer}>
        <Card className={classes.sidebarPortrait}>
            <div className={classes.portraitContainer}>
                <img src = {portrait} className={classes.portrait}/>
            </div>
            <div >
                <h1 >Michał Popowicz</h1>
                <h2 >Motion Designer</h2>
            </div>
        </Card>
        <Card className={classes.menuContainer}>
            <NavLink exact to='/' className={menuCategoryHighlight}>
                <ion-icon name="home-outline"/>
                Home
            </NavLink>
            <NavLink to='/calendar' className={menuCategoryHighlight}> 
                <ion-icon name="calendar-outline"></ion-icon>
                Kalendarz
            </NavLink>
            <button className={classes.categoryContainer}>
                <ion-icon name="briefcase-outline"></ion-icon>
                Projekty
            </button>
            <button className={classes.categoryContainer}>
                <ion-icon name="person-outline"></ion-icon>
                Personel
            </button>
            <button className={classes.categoryContainer}>
                <ion-icon name="pencil-outline"></ion-icon>
                Do zrobienia
            </button>
        </Card>
     </aside>
    )
}

export default Sidebar