import groundWork from "../assets/News/Groun Work.jpg"
import ManOfMatch from "../assets/News/Man of the match.jpg"
import indoorleague from "../assets/News/Indoor League.jpg"
const LatestNews = () => {
  return (
    <div className=" w-full bg-white">
        <h1 className=" text-2xl uppercase font-semibold text-center pt-4 tracking-wider">Latest News</h1>
        <div className=" w-[80%] bg-white mx-auto mt-8">
            <hr />
            <div>
                <div className="flex max-sm:flex-col mt-4 gap-4">
                    <img className=" h-[180px] w-full md:w-[28%] object-cover" src={ManOfMatch} alt="" />
                    <div className="flex flex-col gap-4 w-full md:w-[72%]">
                        <h4 className=" text-sm uppercase">Latest News</h4>
                        <h2 className=" text-lg font-medium">Man of the Match</h2>
                        <p className=" text-sm">Congratulations to our Man of the Match for the Sam Memorial Match! The outstanding performance on the field helped secure a memorable victory.</p>
                    </div>
                </div>
            </div>
            <div className=" mt-4">
            <hr />
                <div className="flex max-sm:flex-col mt-4 gap-4">
                    <img className=" h-[180px] md:w-[28%] w-full object-cover" src={groundWork} alt="" />
                    <div className="flex flex-col gap-4 md:w-[72%] w-full">
                        <h4 className=" text-sm uppercase">Latest News</h4>
                        <h2 className=" text-lg font-medium">Ground work started for 2025 season</h2>
                        <p className=" text-sm">We are excited to announce that groundwork for the 2025 season has officially commenced. Our team is dedicated to enhancing training programs, upgrading facilities, and recruiting new talent to ensure a successful and competitive year ahead.
                        </p>
                    </div>
                </div>
            </div>
            <div className=" mt-4">
            <hr />
                <div className="flex max-sm:flex-col mt-4 gap-4">
                    <img className=" h-[180px] w-full md:w-[28%] object-cover" src={indoorleague} alt="" />
                    <div className="flex flex-col gap-4 w-full md:w-[72%]">
                        <h3 className=" text-sm uppercase">Latest News</h3>
                        <h2 className=" text-lg font-medium">CCC first year in Indoor Cricket League</h2>
                        <p className=" text-sm">Chelsefield Cricket Club is thrilled to join the Indoor Cricket League for the first time. Our team is eager to compete, develop new strategies, and engage with fans in this exciting new arena.</p>
                    </div>
                </div>
            </div>
            <hr className=" mt-4" />
            {/* <Link to={"/news"} className=" uppercase h-8 mt-4 w-32 mx-auto text-xs border border-black flex items-center justify-center hover:bg-lime-400 hover:text-white hover:border-none transition-all duration-300">See All Club News</Link> */}
        </div>
    </div>
  )
}

export default LatestNews