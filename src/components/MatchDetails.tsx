import { motion } from "framer-motion";
import { useState } from "react";
import { FaShieldHalved } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Chelsefield_blue-removebg-preview.png";
import OverviewDetails from "./OverviewDetails";

const MatchDetails = () => {
    const location = useLocation()
     const [isHovered, setIsHovered] = useState(false);
  return (
    <div className=" mt-4">
         <div className=' bg-black w-full px-4 flex items-center justify-between text-white'>
            <div className="flex items-center text-2xl gap-4">
                <FaShieldHalved className=" text-[50px]" />
                <span>Limpsfield Chart</span>
            </div>
            <div className="flex flex-col gap-6">
                <p>Sun 22 Sep 2024</p>
                <div className="flex items-center gap-8">
                    <div className="h-10 w-14 text-2xl font-semibold flex items-center justify-center border border-gray-300">C</div>
                    <div className="h-10 w-14 text-2xl font-semibold flex items-center justify-center border border-gray-300">C</div>
                </div>
                <div className="flex gap-4 py-2">
                   <div className="flex flex-col gap-2">
                   <Link to={"/overview"} className=" uppercase">overview</Link>
                   <div className=" h-2 w-[74px] bg-blue-900"></div>
                   </div>
                   <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                   className="flex flex-col gap-2">
                   <Link to={"/overview"} className=" uppercase">Line-up</Link>
                   <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={isHovered ? { opacity: 1, height: "8px" } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                   className=" h-2 w-[60px] bg-blue-900"></motion.div>
                   </div>
                </div>
            </div>
            <div className="flex items-center text-2xl gap-4">
                <span>Saturday 1st XI</span>
            <img className='h-20 w-28 object-cover' src={logo} alt="" />
            </div>
            </div>
          <OverviewDetails />
    </div>
  )
}

export default MatchDetails