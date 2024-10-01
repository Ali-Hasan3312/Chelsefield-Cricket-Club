import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import { PiGreaterThanLight } from "react-icons/pi";
const GetInTouch =  () => {
  return (
    <>
    <div className="h-[800px] w-full bg-gray-800">
        <div className=" flex items-center gap-1 ml-32 py-4 text-white">
            <Link to={"/"} className=" hover:underline">Home</Link>
            <PiGreaterThanLight className=" text-sm" />
            <span>Get In Touch</span>
        </div>
        <hr />
         <h1 className=" text-2xl uppercase font-semibold text-center pt-4 tracking-wider text-white">Get In Touch</h1>
        <div className=" h-[600px] max-sm:h-[500px] grid grid-cols-[70%_30%] max-sm:grid-cols-[60%_40%] w-[80%] max-sm:w-[95%] mx-auto shadow-lg mt-4">
        <div className=" bg-white">
            <div className=" w-[80%] max-sm:w-[90%] mx-auto mt-8">
            <h1 className=" text-lg font-medium">Send Us A Message</h1>
            <div className="grid grid-cols-2 max-sm:grid-cols-1">
                <div className="h-[100px] w-[280px] mt-4">
                    <label className=" text-gray-400">Name *</label>
                    <input type="text" className=" h-[30px] w-full border-b-[1px] outline-none focus:border-black mt-2 placeholder:text-gray-600" placeholder="Your name" />
                    
                </div>
                <div className="h-[100px] w-[280px] mt-4">
                    <label className=" text-gray-400">Email *</label>
                    <input type="text" className=" h-[30px] w-full border-b-[1px] outline-none focus:border-black mt-2 placeholder:text-gray-600" placeholder="Your email" />
                    
                </div>
                <div className="h-[100px] w-[280px] mt-4">
                    <label className=" text-gray-400">Phone *</label>
                    <input type="text" className=" h-[30px] w-full border-b-[1px] outline-none focus:border-black mt-2 placeholder:text-gray-600" placeholder="Phone #" />
                </div>
            </div>
            <div className="h-[100px] w-full mt-4">
                    <label className=" text-gray-400">Message *</label>
                    <input type="text" className=" h-[30px] w-full border-b-[1px] outline-none focus:border-black mt-6 placeholder:text-gray-600" placeholder="Write your message" />
                </div>
                <button className=" h-12 w-44 mt-4 hover:opacity-70 transition-all duration-300 text-white bg-blue-900 ">Send Message</button>
            </div>
        </div>
        <div className=" bg-blue-900">
            <div className=" w-[80%] mx-auto text-gray-400 flex flex-col gap-4 mt-8">
            <h1 className=" text-xl text-white max-sm:text-lg">Contact Information</h1>
            <p>We will be happy to help with any questions you might have about the Club or hiring our facilities!</p>
            <div className="flex items-start gap-4 mt-8 max-sm:mt-4">
                <FaLocationDot className=" text-white text-xl" />
                <p>Pilgrims Way, Chelsefield, Kent, DA1 1QZ</p>
            </div>
            <div className="flex items-start gap-4 mt-8 max-sm:mt-4">
                <IoCall className=" text-white text-xl" />
                <p>+1 (291) 939 9321</p>
            </div>
            <div className="flex items-start max-sm:flex-wrap gap-4 mt-8 max-sm:mt-4 ">
                <IoMdMail className=" text-white text-xl max-sm:text-sm" />
                <p className=" max-sm:text-[12px] max-sm:text-wrap">info@chelsefield.com</p>
            </div>
            <div className=" max-sm:mt-4"></div>
            </div>
        </div>
        </div>
        
    </div>
    </>
  )
}

export default GetInTouch