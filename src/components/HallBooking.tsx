import { PiGreaterThanLight } from "react-icons/pi"
import { Link } from "react-router-dom"
import hallroom from '../assets/hireHall/CCC-Hall-Room.jpg'
import hallroom2 from '../assets/hireHall/hallroom2.jpeg'
import hallroom3 from '../assets/hireHall/hallroom3.jpeg'
import hallroom4 from '../assets/hireHall/hallroom4.jpeg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaLocationDot } from "react-icons/fa6"
import { IoCall } from "react-icons/io5"
import { IoMdMail } from "react-icons/io"

const HallBooking = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Optional for auto-sliding
    autoplaySpeed: 3000,
    arrows: true, // Enables next/prev arrows
  };
  return (
    <div className="w-full bg-gray-800 pb-10">
         <div className='bg3 relative'></div>
       <div className=' absolute top-[40%] left-[20%] text-white w-[60%] mx-auto'>
    
           <h1 className=' text-[60px] font-bold uppercase leading-[1] text-center'>Hire our facilities</h1>
       </div>
       <div className=" flex items-center gap-1 ml-32 py-4 text-white">
            <Link to={"/"} className=" hover:underline">Home</Link>
            <PiGreaterThanLight className=" text-sm" />
            <span>Hire Hall</span>
        </div>
        <hr />
        <div className=" text-white w-[80%] mx-auto mt-4">
            <p>
            Our Hall room is available to hire throughout the week and is ideal for birthday parties, engagement parties, wedding receptions and those special occasions.</p>
            <p>The hall room comes with its own fully-licensed bar and you are welcome to bring your own catering and music (either DJ or live band).</p>
            <p>For any further enquiries, please contact David Crawley on 01322 225152 or email pavilion@chelsefieldcc.co.uk. Please book well in advance to avoid disappointment!</p>
            <Slider className=" mt-8" {...settings}>
            <div className="">
              <img className=" h-[450px] w-full rounded object-cover" src={hallroom} alt="" />
            </div>
            <div className="">
              <img className=" h-[450px] w-full rounded object-cover" src={hallroom2} alt="" />
            </div>
            <div className="">
              <img className=" h-[450px] w-full rounded object-cover" src={hallroom3} alt="" />
            </div>
            <div className="">
              <img className=" h-[450px] w-full rounded object-cover" src={hallroom4} alt="" />
            </div>
              </Slider>
              <form>
              <div className=" mt-8">
                <h1 className=" text-2xl font-semibold text-center">Contact Us</h1>
                <div className=" h-[600px] grid grid-cols-[70%_30%] w-[80%] mx-auto shadow-lg mt-4">
        <div className=" bg-white">
            <div className=" w-[80%] mx-auto mt-8">
            <h1 className=" text-lg font-medium">Send Us A Message</h1>
            <div className="grid grid-cols-2">
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
            <h1 className=" text-xl text-white">Contact Information</h1>
            <p>We will be happy to help with any questions you might have about the Club or hiring our facilities!</p>
            <div className="flex items-start gap-4 mt-8">
                <FaLocationDot className=" text-white text-xl" />
                <p>Pilgrims Way, Chelsefield, Kent, DA1 1QZ</p>
            </div>
            <div className="flex items-start gap-4 mt-8">
                <IoCall className=" text-white text-xl" />
                <p>+1 (291) 939 9321</p>
            </div>
            <div className="flex items-start gap-4 mt-8">
                <IoMdMail className=" text-white text-xl" />
                <p>info@chelsefield.com</p>
            </div>
            </div>
        </div>
        </div>
              </div>
              </form>
        </div>
        
    </div>
  )
}

export default HallBooking