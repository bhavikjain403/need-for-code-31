import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Cardf from "../Cards/Cards";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import StarRateIcon from "@mui/icons-material/StarRate";
import Featured from "../Featured/Featured";
import "./Stats.css";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import "../Cards/Cards.css"
const Stats = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <span className="sta">
          <div className="leftf">
            <div className="featured">
              <div className="top">
                <h1 className="title">Rating</h1>
                <MoreVertIcon fontSize="small" />
              </div>
              <div className="bottom">
                <div className="featuredChart">
                  <CircularProgressbar
                    value={96}
                    text={"96%"}
                    strokeWidth={5}
                  />
                </div>
                <p className="title">Rating</p>
                <p className="amount">
                  4.8 <StarRateIcon fontSize="small" />
                </p>
                <p className="desc">
                  above rating depends on student's feedback and work life.
                </p>
                <div className="summary">
                  <div className="item">
                    <div className="itemTitle">Current</div>
                    <div className="itemResult positive">
                      <KeyboardArrowUpOutlinedIcon fontSize="small" />
                      <div className="resultAmount">4.8</div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="itemTitle">Last Sem</div>
                    <div className="itemResult positive">
                      <KeyboardArrowUpOutlinedIcon fontSize="small" />
                      <div className="resultAmount">4.5</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="leftf">
            <div className="featured">
              <div className="top">
                <h1 className="title">Overtime</h1>
                <MoreVertIcon fontSize="small" />
              </div>
              <div className="bottom">
                <div className="featuredChart">
                  <CircularProgressbar
                    value={70}
                    text={"70%"}
                    strokeWidth={5}
                  />
                </div>
                <p className="title">Overtime</p>
                <p className="amount">14 hr</p>
                <p className="desc">Overtime of Your current week</p>
                <div className="summary">
                  <div className="item">
                    <div className="itemTitle">Current</div>
                    <div className="itemResult negative">
                      <KeyboardArrowDown fontSize="small" />
                      <div className="resultAmount">14 hr</div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult positive">
                      <KeyboardArrowUpOutlinedIcon fontSize="small" />
                      <div className="resultAmount">20 hr</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="leftf">{<Featured />}</div>
          <div className="full">
            <div className="featured">
              <div className="top">
                <h1 className="title">Rewards</h1>
                <MoreVertIcon fontSize="small" />
              </div>
              <div className="wrapperca">
              <Cardf title="Udemy" des="Need 20 hr overtime click on redeem and get the any course for free" urlc="https://www.udemy.com/" />
              <Cardf title="Udacity" des="Need 40 hr overtime click on redeem and get the any course for free" urlc="https://www.udacity.com/" />
              <Cardf title="Cocademy" des="Need 60 hr overtime click on redeem and get the any course for free" urlc="https://www.codecademy.com/" />
              <Cardf title="Envato Elements" des="Need 80 hr overtime click on redeem and get the 1 month pro subscription for free" urlc="https://elements.envato.com/" />
              <Cardf title="Udemy" des="Need another 100 hr overtime click on redeem and get the any course for free" urlc="https://www.udemy.com/" />
              <Cardf title="Udacity" des="Need another 120 hr overtime click on redeem and get the any course for free" urlc="https://www.udacity.com/" />
              <Cardf title="Cocademy" des="Need another 140 hr overtime click on redeem and get the any course for free" urlc="https://www.codecademy.com/" />
              <Cardf title="Envato Elements" des="Need another 160 hr overtime click on redeem and get the 1 month pro subscription for free" urlc="https://elements.envato.com/" />
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Stats;
