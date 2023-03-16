import { Fragment,useState,useContext,useEffect } from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { getMonth } from "./pages/Calendar2/CalendarUtil";
import classes from "./App.module.css";
import ProfileBox from "./SideBar/Sidebar";
import Header from "./SearchBar/Header";
import Card from './UI/Card'
import Main from './Main/Main'
import Sidebar from './SideBar/Sidebar'
import Home from "./pages/Home.js/Home";
import Calendar from "./pages/Calendar2/Calendar";




function App() {
 
  return (
  <div className={classes.container}>
  <Header />
  
  <Main>
  <Sidebar/>
  <Routes>
  <Route path="/" element={<Home/>}/>
  
  <Route path='/calendar' element={<Calendar/>}/>
  
  </Routes>
  </Main>
  </div>
  )
}

export default App;
