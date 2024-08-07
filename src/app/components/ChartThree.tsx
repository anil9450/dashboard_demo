"use client";
import { colors } from "@mui/material";
import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";

const ChartThree: React.FC = () => {
  const series = [70, 30];

  const options: ApexOptions = {
    chart: {
      fontFamily: "Satoshi, sans-serif",
      type: "donut",
    },
    colors: ["#5750F1", "#ADD8E6"],
    labels: ["Desktop", "Tablet", "Mobile", "Unknown"],
    legend: {
      show: false,
      position: "bottom",
    },

    plotOptions: {
      pie: {
        donut: {
          size: "80%",
          background: "transparent",
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              label: ["70%"],
              fontSize: "10px",
              fontWeight: "bold",
              color: "white",
            },
            value: {
              show: true,
              fontSize: "10px",
              fontWeight: "bold",
              color: "white",
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 430,
        options: {
          chart: {
            width: 175,
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

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
            imageHeight: 550,
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
    <div className="">
      <div className="">
        {/* 
        <div>
          <DefaultSelectOption options={["Monthly", "Yearly"]} />
        </div>
        */}
      </div>

      <div className="">
        <div className="relative h-36 w-36">
          <ReactApexChart
            options={apexOptions.options}
            series={apexOptions.series}
            type="radialBar"
            height=""
          />
          <p className="text-[6px] text-white ml-4">
            *The values here has been rounded off.
          </p>
        </div>
      </div>
      {/* 
      <div className="mx-auto w-full max-w-[350px]">
        <div className="-mx-7.5 flex flex-wrap items-center justify-center gap-y-2.5">
          <div className="w-full px-7.5 sm:w-1/2">
            <div className="flex w-full items-center">
              <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-blue"></span>
              <p className="flex w-full justify-between text-body-sm font-medium text-dark dark:text-dark-6">
                <span> Desktop </span>
                <span> 65% </span>
              </p>
            </div>
          </div>
          <div className="w-full px-7.5 sm:w-1/2">
            <div className="flex w-full items-center">
              <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-blue-light"></span>
              <p className="flex w-full justify-between text-body-sm font-medium text-dark dark:text-dark-6">
                <span> Tablet </span>
                <span> 34% </span>
              </p>
            </div>
          </div>
          <div className="w-full px-7.5 sm:w-1/2">
            <div className="flex w-full items-center">
              <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-blue-light-2"></span>
              <p className="flex w-full justify-between text-body-sm font-medium text-dark dark:text-dark-6">
                <span> Mobile </span>
                <span> 45% </span>
              </p>
            </div>
          </div>
          <div className="w-full px-7.5 sm:w-1/2">
            <div className="flex w-full items-center">
              <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-blue-light-3"></span>
              <p className="flex w-full justify-between text-body-sm font-medium text-dark dark:text-dark-6">
                <span> Unknown </span>
                <span> 12% </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      */}
    </div>
  );
};

export default ChartThree;
