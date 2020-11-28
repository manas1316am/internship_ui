import React from "react";
import { Line } from "react-chartjs-2";
import "../css/chartBottom.css"

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "#00FF11",
      borderColor: "#34A853",
    }
  ],
};

function ChartBottom() {
  return (
    <div className="chart__middle__bottom">
      <div className="chartBottom">
        <Line data={data} />
      </div>
    </div>
  );
}

export default ChartBottom;
