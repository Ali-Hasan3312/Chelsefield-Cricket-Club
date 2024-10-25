import { useAnimation } from "framer-motion"; // Import framer-motion
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/chelsfield full width logo.jpg";

// const spanMessages = [
//   "One of the world’s oldest cricket clubs since 1731.",
//   "Thriving junior and senior section.",
  
// ];
const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const controls = useAnimation(); // Use framer-motion controls
  // const [activeSpanIndex, setActiveSpanIndex] = useState(0);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  );

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    window.addEventListener("click", handleCloseMenu);
    return () => {
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("click", handleCloseMenu);
    };
  }, []);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent click from closing the dropdown immediately
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = () => {
      setIsDropdownOpen(false);
    };

    // Close the dropdown when clicking outside
    if (isDropdownOpen) {
      window.addEventListener("click", handleOutsideClick);
    } else {
      window.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen]);
  useEffect(() => {
    const cycleSpans = async () => {
      while (true) {
        // Trigger slide-in animation
        controls.start({ x: 0, opacity: 1 });

        // Wait for 3 seconds (duration the span is visible)
        await new Promise((resolve) => setTimeout(resolve, 5000));

        // Trigger slide-out animation
        controls.start({ x: "100%", opacity: 0 });

        // Wait for the animation to complete
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Switch to the next span
        // setActiveSpanIndex((prevIndex) => (prevIndex + 1) % 2);
      }
    };

    cycleSpans();
  }, [controls]);

  return (
    <div className="pb-4 top-0 mx-auto overflow-hidden bg-white">
      
          <img className="h-[80px] inset-x-0 lg:h-[180px] w-[100vw] object-cover" src={logo} alt="" />
      <div className="flex lg:flex-row flex-col items-end lg:items-center gap-8">
      <div className="w-[92%] mx-auto flex items-center pt-3 justify-between ">
     {!phoneActive && (
       <div className="flex gap-8 items-center text-black text-base max-sm:text-sm font-semibold">
         <Link
           to={"/"}
           className={`hover:text-blue-500 transition-all duration-300 ${
             location.pathname === "/" ? "text-blue-500" : ""
           }`}
         >
           Home
         </Link>
         <Link
           to={"/about"}
           className={`hover:text-blue-500 transition-all duration-300 text-nowrap ${
             location.pathname === "/about" ? "text-blue-500" : ""
           }`}
         >
           About Us
         </Link>
         <Link
           to={"/club-history"}
           className={`hover:text-blue-500 transition-all duration-300 text-nowrap ${
             location.pathname === "/club-history" ? "text-blue-500" : ""
           }`}
         >
           History
         </Link>
         <Link
           to={"/gallery"}
           className={`hover:text-blue-500 transition-all duration-300 text-nowrap ${
             location.pathname === "/gallery" ? "text-blue-500" : ""
           }`}
         >
           Our Gallery
         </Link>
         {/* Teams Dropdown */}
         <div className="">
           <button
             className={`hover:text-blue-500 transition-all duration-300 ${
               location.pathname.includes("/teams") ? "text-blue-500" : ""
             }`}
             onClick={toggleDropdown}
           >
             Teams
           </button>
           {isDropdownOpen && (
             <div className="absolute mt-2 text-base pt-4 bg-white shadow-md rounded-md z-50">
               <ul className="flex flex-col font-normal w-full">
                 <li className="flex justify-center w-full hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                   <Link
                     to="/teams/saturday1stxi"
                     className="w-full text-center py-2 px-4"
                     onClick={() => setIsDropdownOpen(false)}
                   >
                     Saturday 1st XI
                   </Link>
                 </li>
                 <li className="flex justify-center w-full hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                   <Link
                     to="/teams/saturday2ndxi"
                     className="w-full text-center py-2 px-4"
                     onClick={() => setIsDropdownOpen(false)}
                   >
                     Saturday 2nd XI
                   </Link>
                 </li>
                 <li className="flex justify-center w-full hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                   <Link
                     to="/teams/saturday3rdxi"
                     className="w-full text-center py-2 px-4"
                     onClick={() => setIsDropdownOpen(false)}
                   >
                     Saturday 3rd XI
                   </Link>
                 </li>
                 <li className="flex justify-center w-full hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                   <Link
                     to="/teams/sundaytigers"
                     className="w-full text-center py-2 px-4"
                     onClick={() => setIsDropdownOpen(false)}
                   >
                     Sunday Tigers
                   </Link>
                 </li>
                 <li className="flex justify-center w-full hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                   <Link
                     to="/teams/indoor"
                     className="w-full text-center py-2 px-4"
                     onClick={() => setIsDropdownOpen(false)}
                   >
                     Indoor League
                   </Link>
                 </li>
                 <li className="flex justify-center w-full hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                   <Link
                     to="/teams/t20"
                     className="w-full text-center py-2 px-4"
                     onClick={() => setIsDropdownOpen(false)}
                   >
                     T20 Team
                   </Link>
                 </li>
               </ul>
             </div>
           )}
         </div>
        
        
         <Link
           to={"https://chelsfield.play-cricket.com/Matches"}
           className={`hover:text-blue-500 transition-all duration-300 text-nowrap ${
             location.pathname === "/fixtures" ? "text-blue-500" : ""
           }`}
         >
           Fixtures & Results
         </Link>
         <Link
           to={"https://chelsfield.play-cricket.com/Statistics"}
           className={`hover:text-blue-500 transition-all duration-300 ${
             location.pathname === "/stats" ? "text-blue-500" : ""
           }`}
         >
           Statistics
         </Link>
         <Link
           to={"https://youtube.com/@chelsfieldcc-en8ru?si=htRWSKscg54teiXC"}
           className={`hover:text-blue-500 transition-all duration-300 ${
             location.pathname === "/livestream" ? "text-blue-500" : ""
           }`}
         >
           Live Stream
         </Link>
         <Link
           to={"/hall"}
           className={`hover:text-blue-500 transition-all duration-300 text-nowrap ${
             location.pathname === "/hall" ? "text-blue-500" : ""
           }`}
         >
           Hire Hall
         </Link>
         <Link
           to={"/touch"}
           className={`hover:text-blue-500 transition-all duration-300 text-nowrap ${
             location.pathname === "/touch" ? "text-blue-500" : ""
           }`}
         >
           Get In Touch
         </Link>
         
        
       </div>
     )}
     {!phoneActive && (
      <Link
      to={"/join"}
      className={`hover:opacity-80 rounded-md py-2 px-4 text-white flex items-center justify-center bg-blue-600 transition-all duration-300 text-nowrap ${
        location.pathname === "/join" ? "text-blue-500" : ""
      }`}
    >
      Join
    </Link>
     )}
   </div>
      </div>
      {/* Hamburger Menu and Sidebar for Mobile */}
      <div className="relative lg:absolute lg:opacity-0 flex items-center justify-between px-8 lg:pt-0 pt-4">
      <div>
        <Link
           to={"/join"}
           className={`hover:opacity-80 rounded-md py-2 px-4 text-white flex items-center justify-center bg-blue-600 transition-all duration-300 text-nowrap ${
             location.pathname === "/join" ? "text-blue-500" : ""
           }`}
         >
           Join
         </Link>
        </div>
        {phoneActive ? (
          isOpen ? (
            <button
              id="hamburger"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(true);
              }}
              className="grid px-2 place-items-center h-12 w-12 border-none outline-none cursor-pointer text-black bg-opacity-100 text-3xl bg-inherit rounded-full z-[9]"
            >
              <MdMenu />
            </button>
          ) : (
            <button
              id="hamburger"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(true);
              }}
              className="grid px-2 place-items-center h-12 w-12 border-none outline-none cursor-pointer text-black bg-opacity-100 text-3xl bg-inherit rounded-full z-[9]"
            >
              <MdMenu />
            </button>
          )
        ) : (
          <></>
        )}
      
      </div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
              id="hamburger"
              onClick={() => setIsOpen(false)}
              className="grid place-items-center h-12 w-12 border-none outline-none cursor-pointer text-black bg-opacity-100 absolute top-0 right-2 text-3xl bg-inherit rounded-full z-[200]"
            >
              <IoClose />
            </button>
        <ul className="flex flex-col gap-6 p-4">
          <li>
            <Link to={"/"} onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} onClick={() => setIsOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to={"/club-history"} onClick={() => setIsOpen(false)}>
              History
            </Link>
          </li>
          <li>
            <Link to={"/gallery"} onClick={() => setIsOpen(false)}>
              Our Gallery
            </Link>
          </li>
          <li>
            <button
              className={`hover:text-blue-500 transition-all duration-300 ${
                location.pathname.includes("/teams") ? "text-blue-500" : ""
              }`}
              onClick={toggleDropdown}
            >
              Teams
            </button>
            {isDropdownOpen && (
              <div className="mt-2 w-40 pt-4 bg-white shadow-md rounded-md z-50">
                <ul className="flex flex-col gap-2 font-normal w-full">
                  <li className="flex justify-center w-full hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                    <Link
                      to="/teams/saturday1stxi"
                      className="w-full text-center py-2 px-4"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Saturday 1st XI
                    </Link>
                    <hr className="my-2" />
                  </li>
                  <li className="flex justify-center w-full hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                    <Link
                      to="/teams/saturday2ndxi"
                      className="w-full text-center py-2 px-4"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Saturday 2nd XI
                    </Link>
                    <hr className="my-2" />
                  </li>
                  <li className="flex justify-center w-full hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                    <Link
                      to="/teams/saturday3rdxi"
                      className="w-full text-center py-2 px-4"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Saturday 3rd XI
                    </Link>
                    <hr className="my-2" />
                  </li>
                  <li className="flex justify-center w-full hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                    <Link
                      to="/teams/sundaytigers"
                      className="w-full text-center py-2 px-4"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Sunday Tigers
                    </Link>
                    <hr className="my-2" />
                  </li>
                  <li className="flex justify-center w-full hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                    <Link
                      to="/teams/indoor"
                      className="w-full text-center py-2 px-4"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Indoor League
                    </Link>
                  </li>
                  <li className="flex justify-center w-full hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                    <Link
                      to="/teams/t20"
                      className="w-full text-center py-2 px-4"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      T20 Team
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
       
         
          <li>
            <Link
              to={"https://chelsfield.play-cricket.com/Matches"}
              onClick={() => setIsOpen(false)}
            >
              Fixtures & Results
            </Link>
          </li>
          <li>
            <Link
              to={"https://chelsfield.play-cricket.com/Statistics"}
              onClick={() => setIsOpen(false)}
            >
              Statistics
            </Link>
          </li>
          <li>
            <Link
              to={"https://youtube.com/@chelsfieldcc-en8ru?si=htRWSKscg54teiXC"}
              onClick={() => setIsOpen(false)}
            >
              Live Stream
            </Link>
          </li>
          <li>
            <Link to={"/hall"} onClick={() => setIsOpen(false)}>
              Hire Hall
            </Link>
          </li>
          <li>
            <Link to={"/touch"} onClick={() => setIsOpen(false)}>
              Get In Touch
            </Link>
          </li>
         
         
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
