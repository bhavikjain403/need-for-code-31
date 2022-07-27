import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import Widget from "../Widget/Widget";
import Featured from "../Featured/Featured";
import Chart from "../Chart/Chart";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="present" />
          <Widget type="absent" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Metrics For Overtime (Weekly)" aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Home;
