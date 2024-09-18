import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/greenLogo-removebg-preview.png";
const Footer = () => {
  return (
    <div className=' h-[280px] w-full bg-blue-900 '>
       <div className="flex pt-8 gap-28 px-16">
        <div className="">
        <div className=" uppercase relative text-white flex items-center gap-4">
            <img className="h-14 w-[4rem] object-cover" src={logo} alt="" />
            <Link className=" absolute top-0 h-20 w-24" to={"/"}></Link>
            <span className="text-lg font-semibold ">Chelsfield Cricket Club</span>
        </div>
            <div className="text-white flex flex-col mt-2">
            <span>Master Park</span>
            <span>Oxted</span>
            <span>Surrey</span>
            <span>RH8 9NA</span>
            <span>Tel: 01883 712792</span>
            <Link className=" uppercase text-lg" to={""}>View With Google Maps</Link>
        </div>
            <div className=" text-white text-3xl mt-4 flex flex-col items-center gap-8">
            </div>
        </div>
        <div className=" h-48 w-[1px] bg-gray-300"></div>
        <div className="grid grid-cols-2">
        <div className=" text-white">
            <h2 className=" text-xl font-medium hover:text-lime-400 hover:cursor-pointer transition-all duration-300">Home</h2>
        </div>
        <div className=" text-white">
            <h2 className=" text-xl font-medium hover:text-lime-400 hover:cursor-pointer transition-all duration-300">Teams</h2>
        </div>
        <div className=" text-white">
            <h2 className=" text-xl font-medium hover:text-lime-400 hover:cursor-pointer transition-all duration-300">Shop</h2>
        </div>
        <div className=" text-white">
            <h2 className=" text-xl font-medium hover:text-lime-400 hover:cursor-pointer transition-all duration-300">Contact</h2>
        </div>
        <div className=" text-white">
            <h2 className=" text-xl font-medium hover:text-lime-400 hover:cursor-pointer transition-all duration-300">Machtes</h2>
        </div>
        <div className=" text-white">
            <h2 className=" text-xl font-medium hover:text-lime-400 hover:cursor-pointer transition-all duration-300">News</h2>
        </div>
        <div className=" text-white ">
            <h2 className=" text-xl font-medium hover:text-lime-400 hover:cursor-pointer transition-all duration-300">Media</h2>
        </div>
        <div className=" text-white">
            <h2 className=" text-xl font-medium hover:text-lime-400 hover:cursor-pointer transition-all duration-300">Information</h2>
        </div>
        </div>
        <div className=" h-48 w-[1px] bg-gray-300"></div>
        <div>
            <h2 className=" text-lg text-nowrap text-white uppercase font-semibold">Follow us on social media</h2>
            <div className="flex items-center gap-8 mt-4 text-xl text-white">
            <FaFacebook className=" hover:text-lime-400 hover:cursor-pointer transition-all duration-300" /> <FaXTwitter  className=" hover:text-lime-400 hover:cursor-pointer transition-all duration-300" />
            </div>
        </div>
       
        </div>
       <div className="flex items-center mt-4 justify-center w-full h-16 bg-zinc-800">
       <div>
            <p className=" text-white text-center">© 2024 Chelsefield Cricket Club. All Rights Reserved.</p>
        </div>
        <div className=" text-white text-center ml-1">
            Powered by <Link to={"https://hymglobal.com/"} className=" text-lime-400 hover:underline">HYM GLOBAL</Link>
        </div>
       </div>
    </div>
  )
}

export default Footer