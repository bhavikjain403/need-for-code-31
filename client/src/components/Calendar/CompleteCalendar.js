import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import "./CompleteCalendar.css";
import Calendar from "./Calendar";

const CompleteCalendar = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <span>
        <Calendar/></span>
      </div>
    </div>
  );
};

export default CompleteCalendar;
