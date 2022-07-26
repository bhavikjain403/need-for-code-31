import "./Widget.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import StarRateIcon from '@mui/icons-material/StarRate';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MoreTimeIcon from '@mui/icons-material/MoreTime';

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 59;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "No. of Lecture Taken",
        ishour: false,
        link: "See Details",
        value:amount,
        icon: (
          <AutoStoriesIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Hours Of Lectures",
        ishour: true,
        link: "see details",
        value:amount,
        icon: (
          <AccessTimeIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "Overtime",
        ishour: true,
        link: "See details",
        value:amount-45,
        icon: (
          <MoreTimeIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      
      break;
    case "balance":
      data = {
        title: "Rating",
        isMoney: false,
        link: "Calculated based on Student's Feedback",
        value:4.80,
        icon: (
          <StarRateIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.value} {data.ishour && "hr"} 
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;