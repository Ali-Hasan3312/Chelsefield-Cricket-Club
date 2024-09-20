import { PiGreaterThanLight } from "react-icons/pi"
import { Link } from "react-router-dom"
const HallBooking = () => {
  return (
    <div className="w-full bg-gray-800 pb-10">
         <div className='bg3 relative'></div>
       <div className=' absolute top-[40%] left-[20%] text-white w-[60%] mx-auto'>
    
           <h1 className=' text-[60px] font-bold uppercase leading-[1] text-center'>Hire our facilities</h1>
       </div>
       <div className=" flex items-center gap-1 ml-32 py-4 text-white">
            <Link to={"/"} className=" hover:underline">Home</Link>
            <PiGreaterThanLight className=" text-sm" />
            <span>Book Hall</span>
        </div>
        <hr />
        <div className=" text-white w-[80%] mx-auto mt-4">
            <p>
            Our Hall room is available to hire throughout the week and is ideal for birthday parties, engagement parties, wedding receptions and those special occasions.</p>
            <p>The hall room comes with its own fully-licensed bar and you are welcome to bring your own catering and music (either DJ or live band).</p>
            <p>For any further enquiries, please contact David Crawley on 01322 225152 or email pavilion@chelsefieldcc.co.uk. Please book well in advance to avoid disappointment!</p>
            <div>
            </div>
        </div>
        
    </div>
  )
}

export default HallBooking