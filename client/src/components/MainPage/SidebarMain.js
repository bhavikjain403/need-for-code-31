import "./SidebarMain.css";
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

const SidebarMain = () => {
  const history=useNavigate()
  return (
    <div className="sidebar">
      <div className="top" style={{'marginBottom':"150px"}}>
      </div>
      <hr />
      <div className="center">
        <ul>
          <Link to="/adminLogin" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>ADMIN LOGIN</span>
            </li>
          </Link>

          <Link to="/teacherLogin" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>TEACHER LOGIN</span>
            </li>
          </Link>

          <Link to="/studentLogin" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>STUDENT LOGIN</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SidebarMain;
