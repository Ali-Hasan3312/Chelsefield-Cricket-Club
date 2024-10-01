import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Chelsefield_blue-removebg-preview.png";
import { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
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
  return (
    <div className="h-24 max-sm:h-20 w-full overflow-hidden max-sm:px-2 bg-white flex items-center justify-between gap-8 px-2">
      <div className="uppercase relative text-lg text-lime-400 font-semibold ml-4">
        <img
          className="h-[110px] min-w-[7rem] max-sm:h-14 max-sm:w-[280px] max-sm:-ml-8 object-cover"
          src={logo}
          alt=""
        />
        <Link className="absolute top-0 h-20 w-24" to={"/"}></Link>
      </div>
      <div className="container relative">
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
            <Link
              to={"/teams"}
              className={`hover:text-blue-500 transition-all duration-300 ${
                location.pathname === "/teams" ? "text-blue-500" : ""
              }`}
            >
              Teams
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
              to={"/fixtures"}
              className={`hover:text-blue-500 transition-all duration-300 text-nowrap ${
                location.pathname === "/fixtures" ? "text-blue-500" : ""
              }`}
            >
              Fixtures & Results
            </Link>
            <Link
              to={"/stats"}
              className={`hover:text-blue-500 transition-all duration-300 ${
                location.pathname === "/stats" ? "text-blue-500" : ""
              }`}
            >
              Statistics
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
      <div className="flex items-center gap-4 max-sm:mr-6">
        <Link
          to={"/join"}
          className="h-12 w-24 max-sm:h-10 max-sm:w-16 max-sm:text-sm rounded-lg bg-white flex items-center justify-center font-semibold hover:bg-blue-500 text-blue-500 border border-blue-500 hover:text-white transition-all duration-300"
        >
          Join
        </Link>
        <button className="h-12 w-24 max-sm:h-10 max-sm:w-16 max-sm:text-sm rounded-lg text-white bg-blue-500 flex items-center justify-center font-semibold hover:bg-transparent hover:border hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
          Login
        </button>
      </div>
      <div className="relative">
        {phoneActive ? (
          isOpen ? (
            <button
              id="hamburger"
              onClick={() => setIsOpen(false)}
              className="grid place-items-center h-12 w-12 border-none outline-none cursor-pointer text-blue-500 bg-opacity-100 absolute -top-6 -left-12 text-3xl bg-inherit rounded-full z-[9]"
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
        className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-[8] transition-transform duration-300 ${
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
            <Link to={"/teams"} onClick={() => setIsOpen(false)}>
              Teams
            </Link>
          </li>
          <li>
            <Link to={"/about"} onClick={() => setIsOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to={"/fixtures"} onClick={() => setIsOpen(false)}>
              Fixtures & Results
            </Link>
          </li>
          <li>
            <Link to={"/stats"} onClick={() => setIsOpen(false)}>
              Statistics
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
