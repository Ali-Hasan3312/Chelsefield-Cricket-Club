import { PiGreaterThanLight } from "react-icons/pi"
import { Link } from "react-router-dom"
import { FaUserCircle } from "react-icons/fa";
export const Stats = () => {
  return (
    <div className="h-[900px] w-full bg-gray-800">
        <div className=" flex items-center gap-1 ml-32 py-4 text-white">
            <Link to={"/"} className=" hover:underline">Home</Link>
            <PiGreaterThanLight className=" text-sm" />
            <span>Statistics</span>
        </div>
        <hr />
         <h1 className=" text-2xl uppercase font-semibold text-center pt-4 tracking-wider  text-white">All Statistics</h1>
         <select className=" w-[90%] h-12 mt-8 ml-[5%] rounded-sm outline-none">
            <option value="">2024 Season</option>
            <option value="">2023 Season</option>
            <option value="">2022 Season</option>
            <option value="">2021 Season</option>
            <option value="">2020 Season</option>
            <option value="">2019 Season</option>
            <option value="">2018 Season</option>
            <option value="">2017 Season</option>
            <option value="">2016 Season</option>
            <option value="">2015 Season</option>
         </select>
         <div className=" w-[90%] flex items-center gap-12 mx-auto mt-8">
         <div className=" h-[220px] w-[49%] rounded-sm bg-white pt-8">
         <div className="flex items-center justify-center gap-12">
           <div className=" flex flex-col items-center gap-2 mt-1 text-lg">
           <span className=" font-semibold text-2xl">16</span>
           <span className=" text-gray-600 font-medium">Played</span>
           </div>
           <div className=" flex flex-col items-center mt-1 gap-2 text-lg">
           <span className=" font-semibold text-2xl text-green-500">11</span>
           <span className=" text-gray-600 font-medium">Won</span>
           </div>
           <div className=" flex flex-col items-center mt-1 gap-2 text-lg">
           <span className=" font-semibold text-2xl text-gray-300">1</span>
           <span className=" text-gray-600 font-medium">Drawn</span>
           </div>
           <div className=" flex flex-col items-center mt-1 gap-2 text-lg">
           <span className=" font-semibold text-2xl text-red-500">3</span>
           <span className=" text-gray-600 font-medium">Lost</span>
           </div>
           </div>
          <div className=" w-[90%] mx-auto flex items-center justify-center mt-10">
            <div className=" h-3 w-[68.75%] bg-green-500 rounded-l-lg"></div>
            <div className=" h-3  w-[6.25%] bg-gray-300"></div>
            <div className=" h-3  w-[18.75%] bg-red-500 rounded-r-lg"></div>
          </div>
         </div>
         <div className=" h-[220px] w-[49%] rounded-sm bg-white pt-8">
        <h2 className=" text-base font-semibold text-center uppercase mt-8">Average Per Game</h2>
        <div className="flex items-center justify-between w-[60%] mx-auto mt-4">
            <div className=" font-bold flex flex-col items-center ">
                <span className=" text-green-500 text-xl">168.7/7.6</span>
                <span className=" uppercase text-gray-400 text-sm">for</span>
            </div>
            <div className=" font-bold flex flex-col items-center ">
                <span className=" text-red-500 text-xl">168.7/7.6</span>
                <span className=" uppercase text-gray-400 text-sm">Against</span>
            </div>
        </div>
         </div>
         </div>
         <div className=" h-[290px] w-[90%] mx-auto rounded bg-white mt-8">
            <h1 className=" uppercase p-4 font-semibold">Appearances</h1>
            <div className="flex items-center justify-between px-8">
                <div className="flex items-center gap-8">
                    <FaUserCircle className=" text-[40px]" />
                    <span>Daniel Hill</span>
                </div>
                <div className=" text-2xl text-gray-950 font-semibold">15</div>
            </div>
            <hr className=" mt-6" />
            <div className="flex items-center justify-between px-8 mt-4">
                <div className="flex items-center gap-8">
                    <FaUserCircle className=" text-[40px]" />
                    <span>Samuel Hughes</span>
                </div>
                <div className=" text-2xl text-gray-950 font-semibold">15</div>
            </div>
            <hr className=" mt-6" />
            <div className="flex items-center justify-between px-8 mt-4">
                <div className="flex items-center gap-8">
                    <FaUserCircle className=" text-[40px]" />
                    <span>Lucas Turner</span>
                </div>
                <div className=" text-2xl text-gray-950 font-semibold">15</div>
            </div>
           
         </div>
    </div>
  )
}
