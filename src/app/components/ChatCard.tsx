import React from "react";
import { MdGpsFixed } from "react-icons/md";
import { IoIosArrowDropright } from "react-icons/io";
import { BiSolidDish } from "react-icons/bi";
import { CiBurger } from "react-icons/ci";

const ChatCard = () => {
  return (
    <div className="mt-10 ml-0">
      <div className="grid gap-4 m-4 grid-cols-12">
        <div className="col-span-2">
          <MdGpsFixed className="w-9 h-9 text-red-700 bg-red-100 rounded-full p-1" />
        </div>
        <div className="col-span-8 text-white">
          <p className="text-sm mt-2">Goals</p>
        </div>
        <div className="col-span-2">
          <IoIosArrowDropright className="w-6 h-6 text-white bg-gray-600 rounded-full p-1" />
        </div>
      </div>

      <div className="grid gap-4 m-4 grid-cols-12 content-center">
        <div className="col-span-2">
          <CiBurger className="w-9 h-9 text-blue-700 bg-blue-200 rounded-full p-1" />
        </div>
        <div className="col-span-8 text-white">
          <p className="text-sm mt-2">Popular Dishes</p>
        </div>
        <div className="col-span-2">
          <IoIosArrowDropright className="w-6 h-6 text-white bg-gray-600 rounded-full p-1" />
        </div>
      </div>

      <div className="grid gap-4 m-4 grid-cols-12 content-center">
        <div className="col-span-2">
          <BiSolidDish className="w-9 h-9 text-cyan-700 bg-cyan-100 rounded-full p-1" />
        </div>
        <div className="col-span-8 text-white">
          <p className="text-sm mt-2">Menus</p>
        </div>
        <div className="col-span-2">
          <IoIosArrowDropright className="w-6 h-6 text-white bg-gray-600 rounded-full p-1" />
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
