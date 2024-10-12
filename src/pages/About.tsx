import { PiGreaterThanLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { GiBleedingEye } from "react-icons/gi";
import { HiUsers } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa";
import CrossImage from "../assets/Untitled_design__2_-removebg-preview.png";
import Our_Squad from "../assets/Our_Squad.jpg";
import aboutImage from "../assets/users/NaeemAhad-removebg-preview.png";

const About = () => {
  return (
    <>
      <div className="w-full bg-gray-800 pb-8">
        <div className=" flex items-center gap-1 ml-32 py-4 text-white">
          <Link to={"/"} className=" hover:underline">
            Home
          </Link>
          <PiGreaterThanLight className=" text-sm" />
          <span>About Us</span>
        </div>
        <hr />

        {/* New About Section */}
        <div className="w-full py-8 flex items-center justify-center">
          <div className="w-[90%] mx-auto flex flex-col lg:flex-row items-center gap-8">
            {/* Location Section */}
            <div className="flex flex-col text-left w-full lg:w-[30%]">
              <h2 className="text-blue-500 font-bold text-2xl mb-4">Location</h2>
              <p className="text-gray-100 font-semibold text-xl">
                THE CLUB HOUSE
              </p>
              <p className="text-gray-100">
                Bucks Cross Road
                <br />
                Chelsfield
                <br />
                Orpington, Kent
                <br />
                BR6 7RN
                <br />
                Telephone: <a href="tel:07572-427856" className="text-blue-500">07572-427856</a>
              </p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noreferrer"
                className="mt-4 w-[200px] text-center bg-blue-500 text-white font-semibold py-2 hover:bg-transparent hover:text-blue-500 hover:border hover:border-blue-500 transition-all duration-300"
              >
                Open in Google Maps
              </a>
            </div>

            {/* Google Maps Section */}
            <div className="w-full lg:w-[70%] h-[300px] bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://maps.google.com/maps?q=chelsfield%20cricket%20club&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Original Content After the About Section */}
        <div className="text-white mt-12 ml-16 max-sm:ml-8 w-[90%] flex flex-col gap-8">
          <h1 className=" font-semibold text-[90px] max-sm:text-[40px] leading-[1.1]">
            Chelsfield Cricket Club: A place for cricket enthusiasts of all ages
            and abilities.
          </h1>
          <p className="text-lg">
            We are a family-friendly club, welcoming players and their families,
            regardless of age or ability. Our Saturday 1st & 2nd XI teams
            compete in the Kent Cricket League, while our Sunday fixtures offer
            friendly matches throughout the summer.
          </p>
          <Link
            to={"/touch"}
            className=" h-12 w-32 flex items-center justify-center bg-blue-500 text-white font-semibold hover:bg-transparent hover:border hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        <div className="relative">
          <div className="relative w-full h-[500px] overflow-hidden mt-8">
            <div className="background-overlay absolute top-0 max-sm:opacity-0 left-0 w-1/2 h-full clip-diagonal z-10 bg-blue-500">
              <h2 className=" w-[80%] text-white mt-4 ml-4 text-xl max-sm:opacity-0">
                The Club exists to provide access to cricket for all. We have
                created a family-oriented environment where players feel
                supported and valued as members.
              </h2>
            </div>
            <img
              className=" absolute top-0 left-0 w-full h-full object-cover z-0"
              src={Our_Squad}
              alt="Squad"
            />
          </div>
        </div>

        <div className="font-semibold w-[90%] mt-16 flex justify-between">
          <h3 className="uppercase text-blue-500 text-lg text-nowrap ml-16 max-sm:ml-4">
            Chairman's statment
          </h3>
          <div className="flex gap-8 mt-16 -ml-[17%] max-sm:-ml-[42%] max-sm:flex-col">
            <img
              className="h-[500px] w-[450px] object-cover"
              src={aboutImage}
              alt="About"
            />
            <div className="w-[70%] max-sm:w-full text-white">
              <p className=" text-[50px] max-sm:text-[20px]">
              At Chelsfield Cricket Club, our vision is to cultivate a thriving cricketing community that embraces everyone.
              </p>
              <span className=" font-normal text-lg max-sm:text-sm">
              As the chairman, I am dedicated to ensuring that our club remains a beacon of excellence, inclusivity, and passion for the sport. We strive to provide top-notch facilities, foster talent across all age groups, and create an environment where every member feels valued and empowered. Together, we will continue to uphold the proud traditions of our club while innovating for a brighter future in cricket
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center max-sm:flex-col gap-8 mt-20 relative">
          <img
            className="absolute -top-40 max-sm:opacity-0 -left-[290px] w-[980px] h-[520px] z-0"
            src={CrossImage}
            alt="Decoration"
          />
          <div className="h-[330px] w-[380px] max-sm:w-[340px] bg-customBlack z-10">
            <GiBleedingEye className="text-blue-500 text-[50px] ml-8 mt-8" />
            <h2 className=" text-4xl font-semibold text-white ml-4 mt-4">
              Club Vision
            </h2>
            <p className=" px-4 mt-4 text-white text-lg">
              We aim to create a space where cricket enthusiasts, both young and
              old, can thrive, learn, and develop a lifelong passion for the
              game.
            </p>
          </div>
          <div className="h-[330px] w-[380px] max-sm:w-[340px] bg-customBlack z-10">
            <HiUsers className="text-blue-500 text-[50px] ml-8 mt-8" />
            <h2 className=" text-4xl font-semibold text-white ml-4 mt-4">
              Community Spirit
            </h2>
            <p className=" px-4 mt-4 text-white text-lg">
              Chelsfield Cricket Club values community. We encourage all players
              to get involved, have fun, and share in the love of the sport.
            </p>
          </div>
          <div className="h-[330px] w-[380px] max-sm:w-[340px] bg-customBlack z-10">
            <FaHeart className="text-blue-500 text-[50px] ml-8 mt-8" />
            <h2 className=" text-4xl font-semibold text-white ml-4 mt-4">
              Commitment to Excellence
            </h2>
            <p className=" px-4 mt-4 text-white text-lg">
              We are dedicated to fostering a love of cricket while promoting
              excellence and sportsmanship on and off the field.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
