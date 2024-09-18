import { Link } from "react-router-dom"
import logo from "../assets/greenLogo-removebg-preview.png"
const NavBar = ({onScrollTo}:any) => {
  return (
    <div className="h-24 w-full bg-black flex items-center justify-between gap-8 px-4">
        <div className=" uppercase relative text-lg text-lime-400 font-semibold ml-4">
            <img className="h-20 w-[6rem] object-cover" src={logo} alt="" />
            <Link className=" absolute top-0 h-20 w-24" to={"/"}></Link>
        </div>
        <div>
            <div className="flex gap-16 text-white text-lg mr-4 font-semibold">
                <Link to={"/"} className=" hover:text-lime-400 transition-all duration-300">Home</Link>
                <Link to={"/teams"} className=" hover:text-lime-400 transition-all duration-300">Teams</Link>
                <Link to={"/about"} className=" hover:text-lime-400 transition-all duration-300">About Us</Link>
                <Link to={"/fixtures"} className=" hover:text-lime-400 transition-all duration-300">Fixtures & Results</Link>
                <Link to={"/stats"} className=" hover:text-lime-400 transition-all duration-300">Statistics</Link>
                <button onClick={onScrollTo}  className=" hover:text-lime-400 transition-all duration-300">Get In Touch</button>
            </div>
        </div>
       <div className="flex items-center gap-4">
       <button className="h-12 w-24 rounded-lg bg-white flex items-center justify-center font-semibold hover:bg-black hover:border hover:border-white hover:text-white transition-all duration-300">Join</button>
       <button className="h-12 w-24 rounded-lg bg-lime-400 flex items-center justify-center font-semibold hover:bg-black hover:border hover:border-lime-400 hover:text-lime-400 transition-all duration-300">Login</button>
       
       </div>
    </div>
  )
}

export default NavBar