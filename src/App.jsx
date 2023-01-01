import { useState } from "react";
import {
  RiDashboardLine,
  RiBriefcaseLine,
  RiCalendarLine,
  RiMessageLine,
  RiLogoutBoxLine,
  RiMenu3Fill,
  RiCloseLine,
  RiNotification3Line,
  RiArrowDownSLine,
  RiSearchLine,
  RiFilter3Line,
  RiDropboxFill,
  RiGoogleLine,
  RiGoogleFill,
} from "react-icons/ri";
import { BsTwitch } from "react-icons/bs";

import "./App.css";

function App() {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="min-h-screen grid  grid-cols-1 lg:grid-cols-6 ">
      <div
        className={`col-span-1 p-4 border-r h-full fixed  lg:static top-0 z-50 bg-white  md:w-[50%] w-[88%] lg:w-full  ${
          sidebar ? "-left-0" : "-left-full"
        } overflow-y-scroll md:overflow-hidden transition-all duration-200`}
      >
        <div className="text-center p-8 flex gap-4 items-center justify-center">
          <img src="/globe.svg" alt="" className="h-6 w-6" />
          <h1 className="uppercase font-bold tracking-[4px]">WWWORK</h1>
        </div>
        <div className="flex flex-col justify-between gap-14">
          <nav className="">
            <ul>
              <li>
                <a
                  href="#"
                  className="flex items-center  gap-4 hover:bg-purple-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors font-semibold"
                >
                  <RiDashboardLine />
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center  gap-4 hover:bg-purple-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors font-semibold"
                >
                  <RiBriefcaseLine />
                  <span>Job Board</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center  gap-4 hover:bg-purple-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors font-semibold"
                >
                  <RiCalendarLine />
                  <span>Schedule</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center  gap-4 hover:bg-purple-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors font-semibold"
                >
                  <RiMessageLine />
                  <span>Messages</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex-col flex gap-4">
            <img src="laptop.svg" alt="Laptop" />
            <div className="flex p-8 flex-col rounded-3xl  text-center bg-purple-100 gap-4">
              <h3 className="font-bold text-xl">Get Upgrade</h3>
              <p className="text-gray-500 text-xs">
                Step to the next level, with more features
              </p>
              <button className="bg-purple-600 text-white font-medium  text-sm p-2 rounded-lg">
                Learn More
              </button>
            </div>
            <a
              href="#"
              className="flex items-center  gap-4 hover:bg-purple-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors font-semibold"
            >
              <RiLogoutBoxLine />
              Logout
            </a>
          </div>
        </div>
      </div>
      <button
        className="lg:hidden block  fixed bottom-4 right-4 bg-purple-600 text-white p-2 rounded-full text-2xl"
        onClick={handleSidebar}
      >
        {sidebar ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>

      <div className="col-span-5">
        <header className="flex-col flex md:flex-row justify-between gap-4 items-center p-6 w-full">
          <form className="md:w-[40%] w-full order-1 md:order-none">
            <div className="relative">
              <RiSearchLine className="absolute left-2 top-3" />
              <input
                type="text"
                className="bg-gray-100 py-2 outline-none rounded-lg pl-8 pr-4 w-full"
                placeholder="Search"
              />
            </div>
          </form>
          <nav>
            <ul className="flex items-center gap-2">
              <li>
                <a href="#">
                  <RiNotification3Line />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                  Anne Douglas
                  <RiArrowDownSLine />
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <div className="lg:p-12 p-4 bg-gray-100 mx-1">
          <div className="mb-8">
            <h1 className="text-xl font-semibold">Job Board</h1>
          </div>
          <div className="grid  grid-cols-1 md:grid-cols-4 gap-4 items-center mb-6">
            <form className="col-span-1 md:col-span-2">
              <div className="relative">
                <RiSearchLine className="absolute left-2 top-3 text-purple-600" />
                <input
                  type="text"
                  className="bg-white py-2 outline-none rounded-lg pl-8 pr-4 w-full"
                  placeholder="Search"
                />
              </div>
            </form>
            <form className="col-span-1">
              <div className="relative">
                <img
                  src="/location.svg"
                  className="absolute left-2 top-2 text-purple-600 w-6 h-6"
                />
                <select
                  type="text"
                  className="bg-white py-2 outline-none rounded-lg pl-8 pr-4 w-full"
                  placeholder="Search"
                >
                  <option>Anywhere</option>
                </select>
              </div>
            </form>
            <form className="col-span-1">
              <div className="relative flex items-center">
                <RiFilter3Line className="absolute left-2 top-2 text-purple-600 w-6 h-6" />
                <input
                  type="text"
                  className="bg-white py-2 outline-none rounded-lg pl-8 pr-4 w-full"
                  placeholder="Filters"
                />
                <span className="absolute right-4 bg-purple-600 rounded-full py-1 px-3 text-white">
                  4
                </span>
              </div>
            </form>
          </div>
          <div className="flex items-center gap-4 flex-wrap mb-4">
            <span className="bg-white flex items-center gap-4 py-2 px-3 rounded-full font-medium cursor-pointer text-gray-500">
              <button className="rounded-full bg-purple-100 text-purple-700">
                <RiCloseLine />
              </button>
              <p>Design</p>
            </span>
            <span className="bg-white flex items-center gap-4 py-2 px-3 rounded-full font-medium cursor-pointer  text-gray-500">
              <button className="rounded-full bg-purple-100 text-purple-700">
                <RiCloseLine />
              </button>
              <p>Regular</p>
            </span>
            <span className="bg-white flex items-center gap-4 py-2 px-3 rounded-full font-medium cursor-pointer  text-gray-500">
              <button className="rounded-full bg-purple-100 text-purple-700">
                <RiCloseLine />
              </button>
              <p>Full time</p>
            </span>
            <span className="bg-white flex items-center gap-4 py-2 px-3 rounded-full font-medium cursor-pointer  text-gray-500">
              <button className="rounded-full bg-purple-100 text-purple-700">
                <RiCloseLine />
              </button>
              <p>B2B</p>
            </span>

            <h1 className="font-medium cursor-pointer  text-gray-500">
              Clear All
            </h1>
          </div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-500 ">
              We have found
              <span className="text-purple-600 font-bold"> 523 </span> jobs!
            </p>
            <div>
              <p className="flex items-center gap-2 hover:cursor-pointer">
                Sort by <span className="text-purple-600 font-bold">Date</span>{" "}
                <RiArrowDownSLine />
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="bg-white rounded-3xl p-8 flex md:flex-row flex-col gap-8 w-full drop-shadow-lg items-center  border-2 border-transparent hover:border-purple-600 transition-all hover:cursor-pointer">
              <div className="md:w-[10%] w-full ">
                <RiDropboxFill className="text-5xl bg-purple-100 p-2 text-purple-600 rounded-md" />
              </div>
              <div className="w-full md:w-[70%]">
                <h1 className="text-xl flex items-center  mb-2 gap-4">
                  UX Designer
                  <span className="text-sm  p-1 bg-purple-100 text-purple-600 font-bold px-2  rounded-sm">
                    Remote
                  </span>
                  <span className="text-sm  p-1 bg-green-100 text-green-600 font-bold px-2  rounded-sm">
                    sketch
                  </span>
                </h1>
                <p className="text-gray-500">Dropbox ---- Warzawa</p>
              </div>
              <div className="md:w-[20%] w-full text-gray-500 items-end">
                <h3 className=" text-gray-500 mb-2 text-lg">8.8 - 13.7k PLN</h3>
                <p>2 days ago</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 flex md:flex-row flex-col gap-8 w-full drop-shadow-lg items-center  border-2 border-transparent hover:border-purple-600 transition-all hover:cursor-pointer">
              <div className="md:w-[10%] w-full ">
                <BsTwitch className="text-5xl bg-purple-100 p-2 text-purple-600 rounded-md" />
              </div>
              <div className="w-full md:w-[70%]">
                <h1 className="text-xl flex items-center  mb-2 gap-4">
                  Product Designer
                  <span className="text-sm  p-1 bg-purple-100 text-purple-600 font-bold px-2  rounded-sm">
                    Remote
                  </span>
                </h1>
                <p className="text-gray-500">Twitch ---- Wroclaw</p>
              </div>
              <div className="md:w-[20%] w-full text-gray-500 items-end">
                <h3 className=" text-gray-500 mb-2 text-lg">8.8 - 13.7k PLN</h3>
                <p>2 days ago</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 flex md:flex-row flex-col gap-8 w-full drop-shadow-lg items-center  border-2 border-transparent hover:border-purple-600 transition-all hover:cursor-pointer">
              <div className="md:w-[10%] w-full ">
                <RiGoogleFill className="text-5xl bg-purple-100 p-2 text-purple-600 rounded-md" />
              </div>
              <div className="w-full md:w-[70%]">
                <h1 className="text-xl flex items-center  mb-2 gap-4">
                  Front End Engineer
                  <span className="text-sm  p-1 bg-purple-100 text-purple-600 font-bold px-2  rounded-sm">
                    Remote
                  </span>
                  <span className="text-sm  p-1 bg-green-100 text-green-600 font-bold px-2  rounded-sm">
                    Javascript
                  </span>
                </h1>
                <p className="text-gray-500">Dropbox ---- Warzawa</p>
              </div>
              <div className="md:w-[20%] w-full text-gray-500 items-end">
                <h3 className=" text-gray-500 mb-2 text-lg">8.8 - 13.7k PLN</h3>
                <p>2 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
