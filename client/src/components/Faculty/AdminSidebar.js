import "../Sidebar/Sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import { useNavigate } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
//import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TaskIcon from "@mui/icons-material/Task";
//import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { Link } from "react-router-dom";
//import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

const AdminSidebar = () => {
  const history=useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    history('/')
  };
  return (
    <div className="sidebar">
      <div className="top">
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">FACULTY</p>
          <Link to="/addfaculty" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Add Faculty</span>
            </li>
          </Link>

          <Link to="/staff" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>View Faculty</span>
            </li>
          </Link>

          <p className="title">NOTIFY</p>
          <Link to="/stats" style={{ textDecoration: "none" }}>
            <li>
              <InsertChartIcon className="icon" />
              <span>Publish</span>
            </li>
          </Link>
          <p className="title">ADMIN</p>
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

export default AdminSidebar;
