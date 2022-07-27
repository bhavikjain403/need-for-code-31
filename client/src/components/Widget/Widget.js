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
    case "present":
      data = {
        title: "No. of Days Present",
        ishour: false,
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
    case "absent":
      data = {
        title: "No.of Days Absent",
        ishour: false,
        value:diff,
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