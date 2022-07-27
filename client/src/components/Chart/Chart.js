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
    month:"dec",
    "marks":45,
    
  },
  {
    month:"dec",
    "marks":45,
  },
  {
    month:"dec",
    "marks":45,
  },
  {
    month:"dec",
   "marks":95,
  },
  {
    month:"dec",
    "marks":45,
  },
];
const data1= [
  {
    month:"dec",
    "marks":45,
    
  },
  {
    month:"dec",
    "marks":45,
  },
  {
    month:"dec",
    "marks":45,
  },
  {
    month:"dec",
   "marks":95,
  },
  {
    month:"dec",
    "marks":45,
  },
];

const Chart = ({ aspect, title }) => {
  return (
      <div className="chart">
        <div className="title">{title}</div>
        
          <div style={{ width: "100%" }} aspect={aspect}>
            <h4>Maths</h4><br/>
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
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="marks"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart>
            </ResponsiveContainer>
            <h4>Physics</h4><br/>
            <ResponsiveContainer width="100%" height={200} >
              <AreaChart
                width={400}
                height={200}
                data={data1}
                syncId="anyId"
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" className="chartgrid"/>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="marks"
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
