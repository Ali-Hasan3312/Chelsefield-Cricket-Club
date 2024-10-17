import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroSlider from "./HeroSlider";

const HeroSection = () => {
  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((prev) => (prev === 4 ? 0 : prev + 1));
      console.log(heroCount);
    }, 5000);
    return () => clearInterval(interval); // clear the interval on component unmount
  }, [heroCount]);

  return (
    <div className="relative w-full">
      <HeroSlider stateValue={heroCount} />
      {/* Background overlay to make text stand out */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
    <div className="flex justify-center">
    <div className="absolute bottom-24 flex flex-col gap-4 text-white w-[60%] max-sm:w-[90%] mx-auto z-20">
       
        <div className="flex justify-center mt-4 gap-10 font-semibold">
          <Link
            to={"/about"}
            className="h-12 w-24 flex items-center justify-center text-center bg-blue-500 hover:bg-transparent hover:border hover:border-blue-500 hover:text-white transition-all duration-300 text-white"
          >
            About
          </Link>
          <Link
            to={"/join"}
            className="h-12 w-24 flex items-center justify-center text-center bg-white text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Join Us
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
