"use client";

import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { IoBagCheck } from "react-icons/io5";
import { FaCommentDollar } from "react-icons/fa";
import ChartThree from "./ChartThree";
import ChartTwo from "./ChartTwo";
import ChatCard from "./ChatCard";
import TableOne from "./TableOne";
import Reviews from "./Reviews";

const dashboard = () => {
  return (
    <main className="">
      <h1 className="ml-2 text-white">Dashboard</h1>
      <div className="grid gap-4 m-2 sm:grid-cols-12">
        <div className="rounded bg-gray-700 shadow-xl sm:col-span-3 md:col-span-3 lg:col-span-2 p-3 relative h-28">
          <div className="">
            <FaCartPlus className="h-8 w-8 text-blue-600 p-1 rounded bg-blue-300" />
            <span className="text-white text-xs">Total Orders</span>
            <div className="flex items-end justify-between">
              <h4 className="text-heading-6 font-bold text-dark dark:text-white">
                <span className="text-white text-4xl">75</span>
              </h4>
              <span className="flex items-center justify-items-center gap-1.5 text-green-600 text-xs">
                <IoMdArrowDropup className="w-10 h-10" />
                3%
              </span>
            </div>
          </div>
        </div>
        <div className="rounded bg-gray-700 shadow-xl sm:col-span-3 p-3 md:col-span-3 lg:col-span-2 relative h-28">
          <div className="">
            <IoBagCheck className="h-8 w-8 text-green-600 p-1 rounded bg-green-300" />
            <span className="text-white text-xs">Total Delivered</span>
            <div className="flex items-end justify-between">
              <h4 className="text-heading-6 font-bold text-dark dark:text-white">
                <span className="text-white text-4xl">70</span>
              </h4>
              <span className="flex items-center justify-items-center gap-1.5 text-red-600 text-xs">
                <IoMdArrowDropdown className="w-10 h-10" />
                3%
              </span>
            </div>
          </div>
        </div>
        <div className="rounded bg-gray-700 shadow-xl sm:col-span-3 md:col-span-3 lg:col-span-2 p-3 relative h-28">
          <div className="">
            <IoBagCheck className="h-8 w-8 text-red-600 p-1 rounded bg-red-300" />
            <span className="text-white text-xs">Total Cancelled</span>
            <div className="flex items-end justify-between">
              <h4 className="text-heading-6 font-bold text-dark dark:text-white">
                <span className="text-white text-4xl">05</span>
              </h4>
              <span className="flex items-center justify-items-center gap-1.5 text-green-600 text-xs">
                <IoMdArrowDropup className="w-10 h-10" />
                3%
              </span>
            </div>
          </div>
        </div>
        <div className="rounded bg-gray-700 shadow-xl sm:col-span-3 md:col-span-3 lg:col-span-2 p-3 relative h-28">
          <div className="">
            <FaCommentDollar className="h-8 w-8 text-pink-600 p-1 rounded bg-pink-300" />
            <span className="text-white text-xs">Total Revenue</span>
            <div className="flex items-end justify-between">
              <h4 className="text-heading-6 font-bold text-dark dark:text-white">
                <span className="text-white text-4xl">$12k</span>
              </h4>
              <span className="flex items-center justify-items-center gap-1.5 text-red-600 text-xs">
                <IoMdArrowDropdown className="w-10 h-10" />
                3%
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between rounded bg-gray-700 shadow-xl sm:col-span-6 md:col-span-12 lg:col-span-4 p-3 relative h-28">
          <div className="ml-0">
            <span className="text-white text-xs">Net Profit</span>
            <div className="">
              <h4 className="text-heading-6 font-bold text-dark dark:text-white">
                <span className="text-white text-4xl">$6759.25</span>
              </h4>
              <span className="flex items-center justify-items-center gap-1.5 text-green-600 text-xs">
                <IoMdArrowDropup className="w-10 h-10" />
                3%
              </span>
            </div>
          </div>
          <div className="">
            <ChartThree />
          </div>
        </div>
      </div>

      <div className="grid gap-4 m-2 sm:grid-cols-12">
        <div className="rounded bg-gray-700 shadow-xl sm:col-span-12 lg:col-span-8 relative h-52">
          <ChartTwo />
        </div>
        <div className="rounded bg-gray-700 shadow-xl sm:col-span-12 lg:col-span-4 relative h-52">
          <ChatCard />
        </div>
      </div>

      <div className="grid gap-4 m-2 sm:grid-cols-12">
        <div className="rounded bg-gray-700 shadow-xl sm:col-span-12 lg:col-span-8 relative h-80">
          <TableOne />
        </div>
        <div className="rounded bg-gray-700 shadow-xl sm:col-span-12 lg:col-span-4 relative h-80 overflow-auto">
          <Reviews />
        </div>
      </div>
    </main>
  );
};

export default dashboard;
