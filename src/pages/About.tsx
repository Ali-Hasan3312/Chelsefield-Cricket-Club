import { PiGreaterThanLight } from "react-icons/pi"
import { Link } from "react-router-dom"
import { GiBleedingEye } from "react-icons/gi";
import { HiUsers } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa";
const About = () => {
  return (
    <>
    <div className="h-[2200px] w-full bg-gray-800">
    <div className=" flex items-center gap-1 ml-32 py-4 text-white">
            <Link to={"/"} className=" hover:underline">Home</Link>
            <PiGreaterThanLight className=" text-sm" />
            <span>About Us</span>
        </div>
        <hr />
        <div className="text-white mt-12 ml-16 w-[90%] flex flex-col gap-8">
          <h1 className=" font-semibold text-[90px] leading-[1.1]">Where sports, motivation, and community unite to inspire greatness.</h1>
          <p className=" text-lg">Undefeated is your ultimate destination for sports enthusiasts and motivation seekers alike. Dive into a world <br /> where passion meets inspiration, empowering you to push boundaries, overcome challenges, and achieve <br /> greatness.</p>
          <Link to={"/touch"} className=" h-12 w-32 flex items-center justify-center bg-lime-400 text-black font-semibold hover:bg-transparent hover:border hover:border-lime-400 hover:text-lime-400 transition-all duration-300">Contact Us</Link>
        </div>
       <div className=" relative">
          <img className="absolute -top-14 right-28 w-[200px] h-[200px] z-20" src="https://cdn.prod.website-files.com/65c1fc011cb990c0c2ad742e/65d8a02165081422cd242ade_Union%20(1).png" alt="" />
       <div className="relative w-full h-[500px] overflow-hidden mt-8">
          <div className="background-overlay absolute top-0 left-0 w-1/2 h-full clip-diagonal z-10 bg-lime-400"></div>
          <img className=" absolute top-0 left-0 w-full h-full object-cover z-0" src="https://assets-global.website-files.com/65c1fc011cb990c0c2ad742e/65f9b76296770546262ed045_vu-huy-hoang-chu-9OzQCwuaJhc-unsplash%201%20(2)-p-1600.webp" alt="" />
        </div>
       </div>
       <div className="font-semibold w-[85%] mt-16 mx-auto flex justify-between">
        <h3 className="uppercase text-lime-400">Our Mission</h3>
        <div className=" w-[70%] text-white">
          <p className=" text-[50px]">At Undefeated, our mission is clear: to empower individuals to push beyond their limits, unlock their full potential, and achieve excellence in every aspect of life.</p>
          <span className=" font-normal text-lg">Through our platform, we aim to cultivate a culture of resilience, determination, and sportsmanship, instilling the belief that with dedication and perseverance, anything is possible.</span>
        </div>
       </div>
       <div className="flex items-center justify-center gap-8 mt-20 relative">
       <img className="absolute -top-8 left-[40px] w-[320px] h-[320px] z-0" src="https://cdn.prod.website-files.com/65c1fc011cb990c0c2ad742e/65d8a02165081422cd242ade_Union%20(1).png" alt="" />
       <div className=" h-[330px] w-[380px] bg-customBlack z-10">
        <GiBleedingEye className=" text-lime-400 text-[50px] ml-8 mt-8" />
        <h2 className=" text-4xl font-semibold text-white ml-4 mt-4">Inspiring Content</h2>
        <p className=" px-4 mt-4 text-white text-lg">From motivational articles to uplifting stories of triumph, our platform is filled with resources to fuel your drive and keep you motivated on your journey.</p>
       </div>
       <div className=" h-[330px] w-[380px] bg-customBlack z-10">
        <HiUsers className=" text-lime-400 text-[50px] ml-8 mt-8" />
        <h2 className=" text-4xl font-semibold text-white ml-4 mt-4">Community</h2>
        <p className=" px-4 mt-4 text-white text-lg">Connect with like-minded individuals, share your experiences, and be part of a supportive community that celebrates your victories, big and small.</p>
       </div>
       <div className=" h-[330px] w-[380px] bg-customBlack z-10">
        <FaHeart className=" text-lime-400 text-[50px] ml-8 mt-8" />
        <h2 className=" text-4xl font-semibold text-white ml-4 mt-4">Commitment</h2>
        <p className=" px-4 mt-4 text-white text-lg">At Undefeated, we are committed to fostering a positive and inclusive environment where everyone feels valued, supported, and encouraged to chase their dreams.</p>
       </div>
     
       </div>
    </div>
    </>
  )
}

export default About