import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Box from '@mui/material/Box'
import SidebarMain from "./SidebarMain";
//import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

//import TaskAltIcon from "@mui/icons-material/TaskAlt";

import { Link } from "react-router-dom";
//import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';







const MainPage = () => {
    

  return (
    <div style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg)", height:"100%", backgroundSize:"cover"}}>
        <div className="home">
        <SidebarMain/>
        </div>
    </div>
  );
};

export default MainPage;