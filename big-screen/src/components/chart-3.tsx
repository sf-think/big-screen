import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/create-echarts-options";
import { px } from "../shared/px";
import { randArray } from "../shared/randArray";

export const Chart3 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    {
      type: "抢劫",
      data: [0.02, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09],
    },
    {
      type: "醉驾",
      data: [0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1],
    },
    {
      type: "盗窃",
      data: [0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11],
    },
    {
      type: "故意杀人",
      data: [0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12],
    },
    {
      type: "故意伤人",
      data: [0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13],
    },
  ];

  useEffect(() => {
    const random = () => Math.random() * 5 * 0.01;

    setInterval(() => {
      const newData = [
        {
          type: "抢劫",
          data: randArray(9, 0.01, 0.1),
        },
        {
          type: "醉驾",
          data: randArray(9, 0.01, 0.1),
        },
        {
          type: "盗窃",
          data: randArray(9, 0.01, 0.1),
        },
        {
          type: "故意杀人",
          data: randArray(9, 0.01, 0.1),
        },
        {
          type: "故意伤人",
          data: randArray(9, 0.01, 0.1),
        },
      ];
      x(newData);
    }, 3000);
  }, []);
  const x = (data) => {
    myChart.current.setOption(
      createEchartsOptions({
        legend: {
          bottom: px(10),
          textStyle: { color: "white" },
          itemWidth: px(30),
          itemHeight: px(16),
        },
        grid: {
          x: px(20),
          x2: px(20),
          y: px(20),
          y2: px(70),
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
          splitLine: { show: true, lineStyle: { color: "#073E78" } },
          axisTick: { show: false },
          axisLine: { show: false },
        },
        yAxis: {
          type: "value",
          splitLine: { lineStyle: { color: "#073E78" } },
          axisLabel: {
            formatter(val) {
              return val * 100 + "%";
            },
          },
        },
        series: [
          {
            name: "抢劫",
            type: "line",
            data: data.find((item) => item.type === "抢劫").data,
          },
          {
            name: "醉驾",
            type: "line",
            data: data.find((item) => item.type === "醉驾").data,
          },
          {
            name: "盗窃",
            type: "line",
            data: data.find((item) => item.type === "盗窃").data.reverse(),
          },
          {
            name: "故意杀人",
            type: "line",
            data: data.find((item) => item.type === "故意杀人").data.reverse(),
          },
          {
            name: "故意伤人",
            type: "line",
            data: data.find((item) => item.type === "故意伤人").data.reverse(),
          },
        ].map((obj) => ({
          ...obj,
          symbol: "circle",
          symbolSize: px(12),
          lineStyle: { width: px(2) },
        })),
      })
    );
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);
  return (
    <div className="bordered 发案趋势">
      <h2>发案趋势分析</h2>
      <div ref={divRef} className="chart" />
    </div>
  );
};
