import "../Sidebar/Sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate } from "react-router-dom";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
//import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TaskIcon from "@mui/icons-material/Task";
//import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { Link } from "react-router-dom";
//import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

const TeacherSidebar = () => {
  const history=useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("type");
    history('/')
  };
  return (
    <div className="sidebar">
      <div className="top">

      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <Link to="/staff" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Staff</span>
            </li>
          </Link>
          <p className="title">STUDENTS</p>
          <Link to="/studentreg" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Add Student</span>
            </li>
          </Link>
          <Link to="/student" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>View Students</span>
            </li>
          </Link>
          <Link to="/addMarks" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Add Marks</span>
            </li>
          </Link>
          <p className="title">LECTURES</p>
          <Link to="/calendar" style={{ textDecoration: "none" }}>
            <li>
              <CalendarMonthIcon className="icon" />
              <span>Calendar</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <ExitToAppIcon className="icon" />
              <span>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default TeacherSidebar;
