import "./Chart.css";
import React from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  {
    name: "Q1-21",
    "Rating ": 2,

    amt: 2400,
  },
  {
    name: "Q2-21",
    "Rating ": 3.9,

    amt: 2210,
  },
  {
    name: "Q3-21",
    "Rating ": 4.1,

    amt: 2290,
  },
  {
    name: "Q1-22",
    "Rating ": 4.8,

    amt: 2000,
  },
  {
    name: "Q2-22",
    "Rating ": 4.8,
    amt: 2181,
  },
];

const Linechart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>

      <div style={{ width: "100%" }} aspect={aspect}>
        <h4>Hrs of Lecture every Week</h4>
        <br />
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Rating "
              stroke="#8884d8"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default Linechart;
