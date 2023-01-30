import { Scatter } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const ScatterChart = ({ chartdata }) => {
  return <Scatter data={chartdata} />;
};

export default ScatterChart;
