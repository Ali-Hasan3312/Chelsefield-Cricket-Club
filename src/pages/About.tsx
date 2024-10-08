import { PiGreaterThanLight } from "react-icons/pi"
import { Link } from "react-router-dom"
import { GiBleedingEye } from "react-icons/gi";
import { HiUsers } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa";
import CrossImage from "../assets/Untitled_design__2_-removebg-preview.png"
import Our_Squad from "../assets/Our_Squad.jpg"
import aboutImage from "../assets/AboutImage.jpg"
const About = () => {
  return (
    <>
    <div className="w-full bg-gray-800 pb-8">
    <div className=" flex items-center gap-1 ml-32 py-4 text-white">
            <Link to={"/"} className=" hover:underline">Home</Link>
            <PiGreaterThanLight className=" text-sm" />
            <span>About Us</span>
        </div>
        <hr />
        <div className="text-white mt-12 ml-16 max-sm:ml-8 w-[90%] flex flex-col gap-8">
          <h1 className=" font-semibold text-[90px] max-sm:text-[40px] leading-[1.1]"> Chelsfield Cricket Club: A place for cricket enthusiasts of all ages and abilities.</h1>
          <p className=" text-lg"> We are a family-friendly club, welcoming players and their families, regardless of age or ability. Our Saturday 1st & 2nd XI teams compete in the Kent Cricket League, while our Sunday fixtures offer friendly matches throughout the summer.</p>
          <Link to={"/touch"} className=" h-12 w-32 flex items-center justify-center bg-blue-500 text-white font-semibold hover:bg-transparent hover:border hover:border-blue-500 hover:text-blue-500 transition-all duration-300">Contact Us</Link>
        </div>
       <div className=" relative">
          {/* <img className="absolute -top-14 right-28 w-[200px] h-[200px] z-20" src="https://cdn.prod.website-files.com/65c1fc011cb990c0c2ad742e/65d8a02165081422cd242ade_Union%20(1).png" alt="" /> */}
       <div className="relative w-full h-[500px] overflow-hidden mt-8">
          <div className="background-overlay absolute top-0 max-sm:opacity-0 left-0 w-1/2 h-full clip-diagonal z-10 bg-blue-500">
          <h2 className=" w-[80%] text-white mt-4 ml-4 text-xl max-sm:opacity-0"> The Club exists to provide access to cricket for all. We have created a family-oriented environment where players feel supported and valued as members.</h2>
          </div>
          <img className=" absolute top-0 left-0 w-full h-full object-cover z-0" src={Our_Squad} alt="" />
        </div>
       </div>
       <div className="font-semibold w-[90%] mt-16 flex justify-between">
        <h3 className="uppercase text-blue-500 text-nowrap ml-16 max-sm:ml-4">Our Mission</h3>
       <div className="flex gap-8 mt-16 -ml-[8%] max-sm:-ml-[24%] max-sm:flex-col">
        <img className="h-[500px] w-[450px] object-cover" src={aboutImage} alt="" />
       <div className=" w-[70%] max-sm:w-full text-white">
          <p className=" text-[50px] max-sm:text-[20px]">A Our mission is to make cricket accessible to all, fostering a community where players can enjoy the game, develop their skills, and be part of a welcoming family-oriented club.</p>
          <span className=" font-normal text-lg max-sm:text-sm"> We are committed to nurturing a positive, inclusive environment where everyone—regardless of skill level—can feel valued and supported.</span>
        </div>
       </div>
       </div>
       <div className="flex items-center justify-center max-sm:flex-col gap-8 mt-20 relative">
       <img className="absolute -top-40 -left-[290px] w-[980px] h-[520px] z-0" src={CrossImage} alt="" />
       <div className=" h-[330px] w-[380px] max-sm:w-[340px] bg-customBlack z-10">
        <GiBleedingEye className=" text-blue-500 text-[50px] ml-8 mt-8" />
        <h2 className=" text-4xl font-semibold text-white ml-4 mt-4">Club Vision</h2>
        <p className=" px-4 mt-4 text-white text-lg"> We aim to create a space where cricket enthusiasts, both young and old, can thrive, learn, and develop a lifelong passion for the game.</p>
       </div>
       <div className=" h-[330px] w-[380px] max-sm:w-[340px] bg-customBlack z-10">
        <HiUsers className=" text-blue-500 text-[50px] ml-8 mt-8" />
        <h2 className=" text-4xl font-semibold text-white ml-4 mt-4">Community Spirit</h2>
        <p className=" px-4 mt-4 text-white text-lg">Chelsfield Cricket Club values community. We encourage all players to get involved, have fun, and share in the love of the sport.</p>
       </div>
       <div className=" h-[330px] w-[380px] max-sm:w-[340px] bg-customBlack z-10">
        <FaHeart className=" text-blue-500 text-[50px] ml-8 mt-8" />
        <h2 className=" text-4xl font-semibold text-white ml-4 mt-4"> Commitment to Excellence</h2>
        <p className=" px-4 mt-4 text-white text-lg"> We are dedicated to fostering a love of cricket while promoting excellence and sportsmanship on and off the field.</p>
       </div>
       </div>
    </div>
    </>
  )
}

export default About