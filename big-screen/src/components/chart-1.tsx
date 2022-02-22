import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { baseEchartOptions } from "../shared/base-echart-options";
import { createEchartsOptions } from "../shared/create-echarts-options";

export const Chart1 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [11, 20, 36, 41, 15, 26, 37, 18, 29];
  useEffect(() => {
    setInterval(() => {
      const random = (number) => Math.random() * number
      const newData = [random(50), random(40), random(30), random(20), random(50), random(20), random(40), random(35), random(10)];
      x(newData);
    }, 3000);
  }, []);
  const x = (data) => {
    myChart.current.setOption(
      createEchartsOptions({
        ...baseEchartOptions,
        xAxis: {
          data: [
            "兰州新区",
            "兰州新区",
            "兰州新区",
            "兰州新区",
            "兰州新区",
            "兰州新区",
            "兰州新区",
            "兰州新区",
            "兰州新区",
          ],
          axisTick: { show: false },
          axisLine: {
            lineStyle: { color: "#083B70" },
          },
          axisLabel: {
            fontSize: px(12),
            formatter(val) {
              if (val.length > 2) {
                const array = val.split("");
                array.splice(2, 0, "\n");
                return array.join("");
              } else {
                return val;
              }
            },
          },
        },
        yAxis: {
          splitLine: { show: false },
          axisLine: {
            show: true,
            lineStyle: { color: "#083B70" },
          },
          axisLabel: {
            fontSize: px(12),
          },
        },
        series: [
          {
            type: "bar",
            data: data,
          },
        ],
      })
    );
  };

  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);
  return (
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
