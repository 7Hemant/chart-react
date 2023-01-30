import { Radar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const RadarChart = ({ chartdata }) => {
  return <Radar data={chartdata} />;
};

export default RadarChart;
