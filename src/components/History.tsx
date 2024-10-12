import { Link } from "react-router-dom"
import oldPavilion from "../assets/Old_Pavilion.jpg"
import clubHistory from "../assets/club history.jpg"
const History = () => {
  return (
    <div className='w-full bg-white pt-8'>
        <h1 className=" text-2xl uppercase font-semibold text-center pt-4 tracking-wider">Club History</h1>
        <div className="flex max-sm:flex-col md:gap-8 gap-2 items-center justify-center mt-8 md:w-[80%] w-[90%] mx-auto">
            <div className=" h-[400px] md:w-[500px] w-full mx-auto flex flex-col gap-3 text-center">
                <img className="h-[230px] w-[500px] mx-auto" src={clubHistory} alt="" />
                <Link to={"club-history"} className=" text-lg font-semibold">Cricket in Chelsefield</Link>
                <p className=" text-sm"> Founded in 1731, Chelsfield Cricket Club is one of the region's oldest clubs. From its origins as a village team, it has grown through community support and resilience, relocating and expanding over the centuries. Today, the club thrives as a respected institution, dedicated to fostering talent and maintaining its rich heritage while engaging actively with the local community</p>          
               </div>
            <div className=" h-[400px] md:w-[500px] w-full mx-auto flex flex-col gap-3 text-center">
                <img className="h-[230px] w-[500px] mx-auto" src={oldPavilion} alt="" />
                <span className=" text-lg font-semibold">History of the Old Pavilion</span>
                <p className=" text-sm">The old pavilion at Chelsefield Cricket Club has been a historic symbol of the club's legacy. For many years, it served as the heart of the club, hosting players and supporters alike, and continues to hold a special place in our memories.</p>                       </div>
        </div>
    </div>
  )
}

export default History