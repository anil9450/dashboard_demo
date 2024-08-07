"use client";

import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ChartTwo: React.FC = () => {
  const series = [
    {
      data: [
        5000, 2000, 9000, 7000, 11000, 11000, 10000, 9000, 6000, 2000, 15000,
        1000, 13000, 10000, 20000, 22000, 30000, 27000, 17000, 10000, 12000,
        20000, 17000, 13000,
      ],
    },
  ];

  const options = {
    colors: ["#5750F1", "#5750F1"],
    chart: {
      foreColor: "white",
      fontFamily: "Satoshi, sans-serif",
      type: "bar",
      height: 335,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },

    responsive: [
      {
        breakpoint: 1536,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 3,
              columnWidth: "25%",
            },
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 3,
        columnWidth: "25%",
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },
    },
    dataLabels: {
      enabled: false,
    },

    grid: {
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },

    yaxis: {
      min: 0,
      max: 15000,
      tickAmount: 3,
      labels: {
        show: true,
        borderWidth: 100,
        borderRadius: 100,
        formatter: (value: number) => {
          if (value > 0) {
            return `${value / 1000}K`;
          }
          return value;
        },
      },
    },

    legend: {
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Satoshi",
      fontWeight: 500,
      fontSize: "14px",

      markers: {
        radius: 99,
        width: 16,
        height: 16,
        strokeWidth: 10,
        strokeColor: "transparent",
      },
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <div className="col-span-12 m-2 px-7.5 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-5">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-start-0">
            <h4 className="text-body-2xlg font-bold text-dark dark:text-white text-white">
              Activity
            </h4>
          </div>
          <div className="col-end-12">
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="bg-gray-600 inline-flex w-full justify-center gap-x-1.5 rounded-full
                   px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset
                    ring-gray-300"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  <p className="text-white">Weekly</p>
                  <svg
                    className="-mr-1 h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="hidden absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    id="menu-item-0"
                  >
                    Account settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    id="menu-item-1"
                  >
                    Support
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    id="menu-item-2"
                  >
                    License
                  </a>
                  <form method="POST" action="#" role="none">
                    <button
                      type="submit"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                      role="menuitem"
                      id="menu-item-3"
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <div>
        <div id="chartTwo" className="-ml-3.5">
          {typeof window !== "undefined" && (
            <ReactApexChart
              options={options as any}
              series={series}
              type="bar"
              height={150}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChartTwo;
