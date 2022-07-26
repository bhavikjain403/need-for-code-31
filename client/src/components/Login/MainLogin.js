import {useState}  from "react";
import AdminLogin from "./AdminLogin";
import TeacherLogin from "./TeacherLogin";
import StudentLogin from "./StudentLogin";

export default function MainLogin() {
    const [buttons, setButtons] = useState([
      { label: "STUDENT", value: true },
      { label: "TEACHER", value: false },
      { label: "ADMIN", value: false },
    ]);
  
    const handleButtonsChange = ({
      buttons,
      setButtons
    }) => label => {
      const newButtonsState = buttons.map(button => {
        if (button.label === label) {
          return (button = { label: button.label, value: true });
        }
        return {
          label: button.label,
          value: false
        };
      });
      setButtons(newButtonsState);
    };
    return (
        <div style={{background:"#f8f2e6"}}>
            <header style={{textAlign:"center", fontSize:"250%", paddingTop:"5%", paddingBottom:"3%"}}>LOGIN</header>
            <Specialbuton {...{ buttons, setButtons, handleButtonsChange }} />
            {buttons[0].value && <div><StudentLogin/></div>}
            {buttons[1].value && <div><TeacherLogin/></div>}
            {buttons[2].value && <div><AdminLogin/></div>}
        </div>
    );
  };
  
  const Specialbuton = ({ buttons, setButtons, handleButtonsChange }) => {
    return (
      <div style={{textAlign:"center", paddingBottom:"2%"}}>
        {buttons.map((button, index) => (
          <button id="allbutton"
            key={`${button.label}-${index}`}
            onClick={() =>
              handleButtonsChange({ buttons, setButtons })(button.label)
            }
          >
            {button.label.toUpperCase()}
          </button>
        ))}
      </div>
    );
};