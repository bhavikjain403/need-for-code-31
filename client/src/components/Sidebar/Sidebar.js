import "./Sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
//import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TaskIcon from "@mui/icons-material/Task";
//import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { Link } from "react-router-dom";
//import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Synergy</span>
        </Link>
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

          <p className="title">USEFUL</p>
          <Link to="/stats" style={{ textDecoration: "none" }}>
            <li>
              <InsertChartIcon className="icon" />
              <span>Stats</span>
            </li>
          </Link>

          <Link to="/grievance" style={{ textDecoration: "none" }}>
            <li>
              <ListAltIcon className="icon" />
              <span>Grievance</span>
            </li>
          </Link>
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

export default Sidebar;
