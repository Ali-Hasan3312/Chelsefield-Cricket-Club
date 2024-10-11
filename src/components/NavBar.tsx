import { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Chelsefield_blue-removebg-preview.png";

const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

  return (
    <div className="h-24 max-sm:h-20 w-full overflow-hidden bg-white flex items-center justify-between gap-8 px-2">
      <div className="uppercase relative text-lg text-lime-400 font-semibold ml-4">
        <img
          className="h-[110px] min-w-[7rem] max-sm:h-14 max-sm:w-[280px] max-sm:-ml-12 object-cover"
          src={logo}
          alt=""
        />
        <Link className="absolute top-0 h-20 w-24" to={"/"}></Link>
      </div>
      <div className="container">
        {!phoneActive && (
          <div className="flex gap-10 text-black text-base max-sm:text-sm mr-4 font-semibold">
            <Link
              to={"/"}
              className={`hover:text-blue-500 transition-all duration-300 ${
                location.pathname === "/" ? "text-blue-500" : ""
              }`}
            >
              Home
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
                    className="  w-full text-center py-2 px-4"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Saturday 1st XI
                  </Link>
                </li>
                <li className="flex justify-center w-full hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                  <Link
                    to="/teams/saturday2ndxi"
                    className="  w-full text-center py-2 px-4"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                   Saturday 2nd XI

                  </Link>
                </li>
                <li className="flex justify-center w-full hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                  <Link
                    to="/teams/saturday3rdxi"
                   className="  w-full text-center py-2 px-4"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                   Saturday 3rd XI

                  </Link>
                </li>
                <li className="flex justify-center w-full hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                  <Link
                    to="/teams/sundaytigers"
                   className="  w-full text-center py-2 px-4"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                   Sunday Tigers

                  </Link>
                </li>
                <li className="flex justify-center w-full hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">

                <Link
                  to=""
                className="  w-full text-center py-2 px-4"
                  onClick={() => setIsDropdownOpen(false)}
                >
                Indoor League
                </Link>
                </li>
                <li className="flex justify-center w-full hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">

                  <Link
                    to="/teams/t20"
                    className="  w-full text-center py-2 px-4"
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
              to={"/gallery"}
              className={`hover:text-blue-500 transition-all duration-300 text-nowrap ${
                location.pathname === "/gallery" ? "text-blue-500" : ""
              }`}
            >
              Our Gallery
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
              to={"/touch"}
              className={`hover:text-blue-500 transition-all duration-300 text-nowrap ${
                location.pathname === "/touch" ? "text-blue-500" : ""
              }`}
            >
              Get In Touch
            </Link>
            <Link
              to={"/hall"}
              className={`hover:text-blue-500 transition-all duration-300 text-nowrap ${
                location.pathname === "/hall" ? "text-blue-500" : ""
              }`}
            >
              Hire Hall
            </Link>
          </div>
        )}
      </div>

      {/* Hamburger Menu and Sidebar for Mobile */}
      <div className="relative">
        {phoneActive ? (
          isOpen ? (
            <button
              id="hamburger"
              onClick={() => setIsOpen(false)}
              className="grid place-items-center h-12 w-12 border-none outline-none cursor-pointer text-blue-500 bg-opacity-100 absolute -top-6 -left-12 text-3xl bg-inherit rounded-full z-[100]"
            >
              <IoClose />
            </button>
          ) : (
            <button
              id="hamburger"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(true);
              }}
              className="grid px-2 place-items-center h-12 w-12 border-none outline-none cursor-pointer text-blue-500 bg-opacity-100 absolute -top-6 -left-12 text-3xl bg-inherit rounded-full z-[9]"
            >
              <HiMenuAlt4 />
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
        <ul className="flex flex-col gap-6 p-4">
          <li>
            <Link to={"/"} onClick={() => setIsOpen(false)}>
              Home
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
              <div className=" mt-2 w-40 pt-4 bg-white shadow-md rounded-md z-50">
              <ul className="flex flex-col gap-2 font-normal w-full">
              <li className="flex justify-center w-full hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">

                  <Link
                    to="/teams/saturday1stxi"
                    className="  w-full text-center py-2 px-4"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Saturday 1st XI
                  </Link>
                  <hr className="my-2" />
                </li>
                <li className="flex justify-center w-full hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">

                  <Link
                    to="/teams/saturday2ndxi"
                    className="  w-full text-center py-2 px-4"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                   Saturday 2nd XI

                  </Link>
                  <hr className="my-2" />
                </li>
                <li className="flex justify-center w-full hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">

                  <Link
                    to="/teams/saturday3rdxi"
                    className="  w-full text-center py-2 px-4"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                   Saturday 3rd XI

                  </Link>
                  <hr className="my-2" />
                </li>
                <li className="flex justify-center w-full hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">

                  <Link
                    to="/teams/sundaytigers"
                    className="  w-full text-center py-2 px-4"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                   Sunday Tigers

                  </Link>
                  <hr className="my-2" />
                </li>
                <li className="flex justify-center w-full hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">

                <Link
                  to=""
                className="  w-full text-center py-2 px-4"
                  onClick={() => setIsDropdownOpen(false)}
                >
                Indoor League
                </Link>
                </li>
                <li className="flex justify-center w-full hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">

                  <Link
                    to="/teams/t20"
                    className="  w-full text-center py-2 px-4"
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
            <Link to={"/gallery"} onClick={() => setIsOpen(false)}>
              Our Gallery
            </Link>
          </li>
          <li>
            <Link to={"/about"} onClick={() => setIsOpen(false)}>
              About Us
            </Link>
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
            <Link to={"/touch"} onClick={() => setIsOpen(false)}>
              Get In Touch
            </Link>
          </li>
          <li>
            <Link to={"/hall"} onClick={() => setIsOpen(false)}>
              Hire Hall
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
