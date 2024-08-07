import React from "react";
import { IoMdHome } from "react-icons/io";
import { VscGraph } from "react-icons/vsc";
import { CiWallet } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdWindow } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import Dashboard from "../components/Dashboard";

const Navbar = () => {
  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <div className="hidden md:flex flex-col w-20 bg-gray-800 rounded-2xl">
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex flex-col flex-1 overflow-y-auto bg-gradient-to-b from-gray-700 px-2 py-4 gap-10">
              <div>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
                >
                  <MdWindow className="h-6 w-6 text-blue-700" />
                </a>
              </div>
              <div className="flex flex-col flex-1 gap-3">
                <div
                  className="inline-block h-[25px] min-h-[1em] w-0.5 self-stretch
                     bg-blue-700 dark:bg-white/10 mr-72"
                >
                  <IoMdHome className="h-7 w-7 text-blue-700 ml-4" />
                </div>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl"
                >
                  <VscGraph className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl"
                >
                  <IoBagCheckOutline className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl"
                >
                  <CiWallet className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl"
                >
                  <IoBagCheckOutline className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="mt-72 flex items-center px-4 py-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl"
                >
                  <RiLogoutCircleRLine className="h-6 w-6" />
                </a>
              </div>
            </nav>
          </div>
        </div>

        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex items-center justify-between h-16 border-gray-200 bg-gray-700">
            <div className="flex items-center px-4">
              <div className="relative mx-auto text-gray-600">
                <form>
                  <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <CiSearch className="w-6 h-6 dark:text-gray-400 text-white" />
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="placeholder-white block w-full p-2 pl-10 text-sm text-white bg-gray-700 border border-gray-500 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search"
                      required
                    />
                  </div>
                </form>
              </div>
            </div>

            <div className="flex items-center space-x-4 mr-4">
              <a
                href="#"
                className="p-1 bg-gray-500 rounded-full text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-300"
              >
                <CiMail className="h-5 w-5 text-white" />
              </a>

              <a
                href="#"
                className="p-1 bg-gray-500 rounded-full text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-300"
              >
                <CiSettings className="h-5 w-5 text-white" />
              </a>

              <a
                href="#"
                className="p-1 bg-gray-500 rounded-full text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-300"
              >
                <IoIosNotificationsOutline className="h-5 w-5 text-white" />
              </a>

              <a
                href="#"
                className="p-1 bg-gray-500s rounded-full text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-300"
              >
                <RxAvatar className="h-10 w-10 text-white" />
              </a>
            </div>
          </div>

          <div className="p-4">
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
