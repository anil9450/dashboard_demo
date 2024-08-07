"use client";
import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ChartThree: React.FC = () => {
  const apexOptions = {
    series: [70],
    options: {
      chart: {
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 25,
            imageWidth: 550,
            imageHeight: 150,
            size: "50%",
          },
          dataLabels: {
            show: true,
            name: {
              show: true,
              fontSize: "4px",
              color: "#fff",
              offsetY: 10,
            },
            value: {
              show: true,
              fontSize: "13px",
              offsetY: -20,
              fontWeight: 600,
              color: "#fff",
            },
          },
        },
      },
      labels: ["Goal Completed"],
    },
  };

  return (
    <div className="relative h-36 w-36">
      {typeof window !== "undefined" && (
        <ReactApexChart
          options={apexOptions.options as any}
          series={apexOptions.series}
          type="radialBar"
          height=""
        />
      )}

      <p className="text-[6px] text-white ml-4">
        *The values here has been rounded off.
      </p>
    </div>
  );
};

export default ChartThree;
