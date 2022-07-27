import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import "./CompleteCalendar.css";
import Calendar from "./Calendar";

const CompleteCalendar = () => {
  return (
    <div className="home">
      <Sidebar />
        <span>
        <Calendar/></span>
    </div>
  );
};

export default CompleteCalendar;
