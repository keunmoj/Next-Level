import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { StyledApexChartContainer } from "./ApexChart.styled";
const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  grid: { show: true }, // 그리드 on/off
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2, // 커브 두께
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
  theme: {
    mode: "light",
  },
  colors: ["#9ECDF2"],
};
const ApexChart = (props: any) => {
  return (
    <StyledApexChartContainer>
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
        width="100%"
        height="100%"
      />
    </StyledApexChartContainer>
  );
};

export default ApexChart;
