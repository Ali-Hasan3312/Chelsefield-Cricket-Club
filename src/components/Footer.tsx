import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/chelsfield_croped-removebg-preview.png";
const Footer = () => {
    const ScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
    <div className=' w-full bg-blue-900'>
       <div className="flex pt-8 gap-28 px-16 max-sm:px-4 max-sm:flex-col">
        <div className="">
        <div className=" uppercase relative text-white flex items-center gap-4">
            <img className="h-14 w-[4rem] object-cover" src={logo} alt="" />
            <button onClick={ScrollTop} className=" absolute top-0 h-20 w-24"></button>
            <span className="text-lg font-semibold text-nowrap">Chelsfield Cricket Club</span>
        </div>
            <div className="text-white flex flex-col mt-2 gap-1">
            <span className=" uppercase font-semibold">The Club House</span>
            <span>Bucks Cross Road</span>
            <span>Chelsefield</span>
            <span>Orpington</span>
            <span>Kent</span>
            <span>BR6 7RN</span>
            <span>Telephone: 07572-427856</span>
            <Link className=" uppercase text-lg" to={"https://maps.google.co.uk/?q=51.35730299999999,0.1312346&z=19"}>View With Google Maps</Link>
        </div>
        </div>
        <div className=" h-48 w-[1px] bg-gray-300 max-sm:opacity-0 max-sm:-mt-[380px]"></div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 max-sm:ml-1 -ml-6">
        <div className=" text-white">
            <h2 className="text-base md:text-xl font-medium hover:text-lime-400 hover:cursor-pointer transition-all duration-300"
            onClick={ScrollTop}
            >Home</h2>
        </div>
        <div className=" text-white">
            <Link to={"/gallery"} onClick={ScrollTop} className="text-base md:text-xl font-medium hover:text-lime-400 hover:cursor-pointer transition-all duration-300">Gallery</Link>
        </div>
        <div className=" text-white">
            <Link to={"/about"} onClick={ScrollTop} className="text-base md:text-xl -mt-0 md:-mt-8 font-medium hover:text-lime-400 hover:cursor-pointer transition-all duration-300">About</Link>
        </div>
       
        <div className=" text-white">
            <Link to={"/touch"} onClick={ScrollTop} className="text-base md:text-xl -mt-0 md:-mt-8 font-medium hover:text-lime-400 hover:cursor-pointer transition-all duration-300">Contact</Link>
        </div>
       
        <div className=" text-white">
            <Link to={"https://chelsfield.play-cricket.com/Matches"} className="text-base md:text-xl -mt-0 md:-mt-8 font-medium hover:text-lime-400 hover:cursor-pointer transition-all duration-300">Fixtures</Link>
        </div>
        <div className=" text-white">
            <Link to={"https://chelsfield.play-cricket.com/statistics/complete_registration?redirectUrl=https%3A%2F%2Fchelsfield.play-cricket.com%2FStatistics"} className="text-base md:text-xl -mt-0 md:-mt-8 font-medium hover:text-lime-400 hover:cursor-pointer transition-all duration-300">Statistics</Link>
        </div>
       
        </div>
        <div className=" h-48 w-[1px] bg-gray-300 max-sm:opacity-0 max-sm:-mt-[350px]"></div>
        <div className=" max-sm:-mt-8">
            <h2 className=" text-lg text-nowrap text-white uppercase font-semibold">Follow us on social media</h2>
            <div className="flex items-center gap-8 mt-4 text-xl text-white">
                <Link to={"https://www.facebook.com/profile.php?id=100094901001041"}> <FaFacebook className=" hover:text-lime-400 transition-all duration-300" /> </Link>
          <Link to={"https://www.instagram.com/chelsfieldcc1731?igsh=azhkYzJkaWljNTR0&utm_source=qr"}> <FaInstagram  className=" hover:text-lime-400 hover:cursor-pointer transition-all duration-300" /></Link>
            </div>
        </div>
        </div>
       <div className="flex max-sm:flex-col max-sm:text-sm items-center mt-4 justify-center w-full h-16 bg-zinc-800">
       <div>
            <p className=" text-white text-center">© 2024 Chelsefield Cricket Club. All Rights Reserved.</p>
        </div>
        <div className=" text-white text-center ml-1">
            Powered by <Link to={"https://hymglobal.com/"} className=" text-blue-500 hover:underline">HYM GLOBAL</Link>
        </div>
       </div>
    </div>
  )
}

export default Footer