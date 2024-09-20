import { Link } from "react-router-dom"
import senior from "../assets/All Sections/Senior_Players.jpg"
import junior from "../assets/All Sections/Junior_Players.jpg"
import EqualOpportunity from "../assets/All Sections/Equal_opportunities.jpg"
const AboutClub = () => {
  return (
    <div className=' w-full bg-white pt-8'>
        <h1 className=" text-2xl uppercase font-semibold text-center pt-4 tracking-wider">Find out more about the club</h1>
        <div className="grid grid-cols-4 ml-16 mt-8">
            <div className="h-[400px] w-64 text-sm">
                <img className=" w-64 h-[180px]" src={junior} alt="" />
                <Link to={'/junior'} className="font-semibold flex justify-center mt-2 hover:underline">Junior Section</Link>
                <p className=" text-center mt-2">We have fixtures from Under 11 to Under 17 and run the All Stars and Dynamos cricket programmes.</p>
            </div>
            <div className="h-[400px] w-64 text-sm">
                <img className=" w-64 h-[180px]" src={senior} alt="" />
                <Link to={'/senior'} className="font-semibold flex justify-center mt-2 hover:underline">Senior Section</Link>
                <p className=" text-center mt-2">On Saturdays we have five senior teams in league action and a further two teams on Sundays.</p>
            </div>
            <div className="h-[400px] w-64 text-sm">
                <img className=" w-64 h-[180px]" src={EqualOpportunity} alt="" />
                <Link to={'/senior'} className="font-semibold flex justify-center mt-2 hover:underline">
                Equality, Diversity & Inclusivity</Link>
                <p className=" text-center mt-2">The Club supports equal opportunities for all and has a dedicated ED&I lead.</p>
            </div>
            <div className="h-[400px] w-64 text-sm">
                <img className=" w-64 h-[180px]" src="https://www.dartfordcc.co.uk/wp-content/uploads/2022/02/3279C358-7D5B-4AC4-AD19-982D7AB2172D-1.jpg" alt="" />
                <Link to={'/hall'} className="font-semibold flex justify-center mt-2 hover:underline">Hire Our Facilities</Link>
                <p className=" text-center mt-2">The hall room in our modern pavilion is the perfect venue for your next event – find out how to book.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutClub