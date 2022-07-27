import "./Featured.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  const data = [
    {name: 'Physics', students: 70},
    {name: 'Maths', students: 90}
  ];
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Hr of Lec this Week</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
      <BarChart width={400} height={600} data={data}>
        <Bar dataKey="students" fill="lightblue" barSize={50}/>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </BarChart>
      </div>
    </div>
  );
};

export default Featured;
