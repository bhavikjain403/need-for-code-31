import teacher from "./TeacherContext";
import { useState } from "react";

function TeacherState(props){
    const s={}
    const [te,setTe] = useState({})
    return (
        <teacher.Provider value={{te,setTe}}>
            {props.children}
        </teacher.Provider>
    )
}
export default TeacherState