import { Link } from "react-router-dom"
import EqualOpportunity from "../assets/All Sections/Equal_opportunities.jpg"
import junior from "../assets/All Sections/Junior_Players.jpg"
const AboutClub = () => {
  return (
    <div className=' w-full bg-white pt-8'>
        <h1 className=" text-2xl max-sm:text-lg uppercase font-semibold text-center pt-4 tracking-wider">Find out more about the club</h1>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 ml-[3.4%] max-sm:ml-[8%] mt-8">
            <div className="h-[400px] w-[390px] max-sm:w-[340px] text-sm">
                <img className=" w-full h-[280px] object-cover" src={junior} alt="" />
                <Link to={'/teams'} className="font-semibold text-lg flex justify-center mt-2 hover:underline">Our Teams</Link>
                <p className=" text-center mt-2">On Saturdays we have three senior teams in league action and a further two teams on Sundays.</p>
            </div>
            <div className="h-[400px] w-[390px] max-sm:w-[340px] text-sm">
                <img className=" w-full h-[280px] object-cover" src={EqualOpportunity} alt="" />
                <Link to={'/equality'} className="font-semibold text-lg flex justify-center mt-2 hover:underline">
                Equality, Diversity & Inclusivity</Link>
                <p className=" text-center mt-2">The Club supports equal opportunities for all and has a dedicated ED&I lead.</p>
            </div>
            <div className="h-[400px] w-[390px] max-sm:w-[340px] text-sm">
                <img className=" w-full h-[280px] object-cover" src="https://www.dartfordcc.co.uk/wp-content/uploads/2022/02/3279C358-7D5B-4AC4-AD19-982D7AB2172D-1.jpg" alt="" />
                <Link to={'/hall'} className="font-semibold text-lg flex justify-center mt-2 hover:underline">Hire Our Facilities</Link>
                <p className=" text-center mt-2">The hall room in our modern pavilion is the perfect venue for your next event – find out how to book.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutClub