import { Bubble } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BubbleChart = ({ chartdata }) => {
  return <Bubble data={chartdata} />;
};

export default BubbleChart;
