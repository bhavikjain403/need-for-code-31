import "./Chart.css";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    "Normal of hrs Lec": 4 ,
    "Overtime hrs": 1,
    amt: 2400,
  },
  {
    name: "Tue",
    "Normal of hrs Lec": 2,
    "Overtime hrs": 2,
    amt: 2210,
  },
  {
    name: "Thu",
    "Normal of hrs Lec": 4,
    "Overtime hrs": 0,
    amt: 2290,
  },
  {
    name: "Fri",
    "Normal of hrs Lec": 3,
    "Overtime hrs": 2,
    amt: 2000,
  },
  {
    name: "Sat",
    "Normal of hrs Lec": 4,
    "Overtime hrs":1,
    amt: 2181,
  },
];

const Chart = ({ aspect, title }) => {
  return (
      <div className="chart">
        <div className="title">{title}</div>
        
          <div style={{ width: "100%" }} aspect={aspect}>
            <h4>Hrs of Lecture every Week</h4><br/>
            <ResponsiveContainer width="100%" height={200}  >
              <AreaChart
                width={400}
                height={200}
                data={data}
                syncId="anyId"
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" className="chartgrid"/>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="Normal of hrs Lec"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart>
            </ResponsiveContainer>
            <h4>Overtime Hr of every Week</h4><br/>
            <ResponsiveContainer width="100%" height={200} >
              <AreaChart
                width={400}
                height={200}
                data={data}
                syncId="anyId"
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" className="chartgrid"/>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="Overtime hrs"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

    );
  }
  export default Chart;
