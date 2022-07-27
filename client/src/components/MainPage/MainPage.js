import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Box from '@mui/material/Box'
import SidebarMain from "./SidebarMain";
//import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Widget from "../Widget/Widget";
//import TaskAltIcon from "@mui/icons-material/TaskAlt";

import { Link } from "react-router-dom";
import { Card, CardHeader } from "reactstrap";
//import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';







const MainPage = () => {
    

  return (
    <>
    <div style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg)", height:"100%", backgroundSize:"cover"}}>
        <div className="home">
        <SidebarMain/>
        <div className="homeContainer">
        <div className="widgets" style={{marginLeft:"400px"}}>
            <Card style={{background:'transparent'}}>
                <CardHeader style={{color:'snow', fontSize:"50px"}}>TechyCraft</CardHeader>
            </Card>
        </div>
        <div className="charts">
          {/* <Featured />
          <Chart title="Metrics For Overtime (Weekly)" aspect={2 / 1} /> */}
        </div>
      </div>
        </div>
    </div>
    </>
  );
};

export default MainPage;