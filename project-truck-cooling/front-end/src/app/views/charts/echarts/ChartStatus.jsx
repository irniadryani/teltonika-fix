import { useTheme } from "@mui/material/styles";
import ReactEcharts from "echarts-for-react";

export default function ChartStatus({ height, color = [] }) {
  const theme = useTheme();

  const option = {
    grid: { top: "10%", bottom: "10%", left: "5%", right: "5%" },
    legend: {
      itemGap: 20,
      icon: "circle",
      textStyle: {
        fontSize: 13,
        color: theme.palette.text.secondary,
        fontFamily: theme.typography.fontFamily
      }
    },
    label: {
      fontSize: 13,
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily
    },
    xAxis: {
      type: "category",
      data: ["09:00", "09:05", "09:10", "09:15", "09:20", "09:25", "09:30"],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        fontSize: 14,
        fontFamily: "roboto",
        color: theme.palette.text.secondary
      }
    },
    yAxis: {
      type: "value",
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: {
        lineStyle: { color: theme.palette.text.secondary, opacity: 0.15 }
      },
      axisLabel: { color: theme.palette.text.secondary, fontSize: 13, fontFamily: "roboto" }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: theme.palette.background.paper
        }
      },
      formatter: function (params) {
        let tooltipHtml = '';
        params.forEach(param => {
          tooltipHtml += `<div><strong>${param.seriesName}:</strong> ${param.data}°C at ${param.axisValue}</div>`;
        });
        return tooltipHtml;
      }
    },
    series: [
      {
        data: [1, 0, 1, 1, 1, 0, 1],
        type: "line",
        stack: "Status Alat",
        name: "Status Alat",
        smooth: true,
        symbolSize: 4,
        lineStyle: { width: 4 }
      }
    ]
  };

  return <ReactEcharts style={{ height: height }} option={{ ...option, color: [...color] }} />;
}
