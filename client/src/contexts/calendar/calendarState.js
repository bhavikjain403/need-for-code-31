import calendar from "./calendarContext";
import { useState } from "react";

function CalendarState(props){
    const s={}
    const [cal,setCal]=useState(s)
    
    return (
        <calendar.Provider value={{cal,setCal}}>
            {props.children}
        </calendar.Provider>
    )
}
export default CalendarState