import { Link, useLocation } from "react-router-dom"
import logo from "../assets/Chelsefield_blue-removebg-preview.png"
const NavBar = () => {
  const location = useLocation()
  
  return (
    <div className="h-24 w-full bg-white flex items-center justify-between gap-8 px-4">
        <div className=" uppercase relative text-lg text-lime-400 font-semibold ml-4">
            <img className="h-[110px] w-[7rem] object-cover" src={logo} alt="" />
            <Link className=" absolute top-0 h-20 w-24" to={"/"}></Link>
        </div>
        <div>
            <div className="flex gap-16 text-black text-lg mr-4 font-semibold">
                <Link to={"/"} className={`hover:text-blue-500 transition-all duration-300 ${location.pathname==="/"? " text-blue-500" : ""}`}>Home</Link>
                <Link to={"/teams"} className={`hover:text-blue-500 transition-all duration-300 ${location.pathname==="/teams"? " text-blue-500" : ""}`}>Teams</Link>
                <Link to={"/about"} className={`hover:text-blue-500 transition-all duration-300 text-nowrap ${location.pathname==="/about"? " text-blue-500" : ""}`}>About Us</Link>
                <Link to={"/fixtures"} className={`hover:text-blue-500 transition-all duration-300 text-nowrap ${location.pathname==="/fixtures"? " text-blue-500" : ""}`}>Fixtures & Results</Link>
                <Link to={"/stats"} className={`hover:text-blue-500 transition-all duration-300 ${location.pathname==="/stats"? " text-blue-500" : ""}`}>Statistics</Link>
                <Link to={"/touch"}  className={`hover:text-blue-500 transition-all duration-300 text-nowrap ${location.pathname==="/touch"? " text-blue-500" : ""}`}>Get In Touch</Link>
                <Link to={"/hall"}  className={`hover:text-blue-500 transition-all duration-300 text-nowrap ${location.pathname==="/hall"? " text-blue-500" : ""}`}>Book Hall</Link>
            </div>
        </div>
       {/* <div className="flex items-center gap-4">
       <button className="h-12 w-24 rounded-lg bg-white flex items-center justify-center font-semibold hover:bg-blue-500 text-blue-500 border border-blue-500 hover:text-white transition-all duration-300">Join</button>
       <button className="h-12 w-24 rounded-lg text-white bg-blue-500 flex items-center justify-center font-semibold hover:bg-transparent hover:border hover:border-blue-500 hover:text-blue-500 transition-all duration-300">Login</button>
       
       </div> */}
    </div>
  )
}

export default NavBar