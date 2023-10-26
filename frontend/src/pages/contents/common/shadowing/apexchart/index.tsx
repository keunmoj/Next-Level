import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
const options: ApexOptions = {
  chart: {
    height: 125,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  legend: {
    show: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisTicks: { show: false },
  },
  yaxis: {
    show: false,
  },
};
const ApexChart = (props: any) => {
  console.log(props.myPitchList);
  return (
    <div>
      <Chart
        options={options}
        series={[
          {
            data: props.moviePitchList,
          },
          {
            data: props.myPitchList,
          },
        ]}
        type="area"
        width={303}
        height={125}
      />
    </div>
  );
};

export default ApexChart;
