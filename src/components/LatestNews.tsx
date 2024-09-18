import { Link } from "react-router-dom"

const LatestNews = () => {
  return (
    <div className=" w-full bg-white">
        <h1 className=" text-2xl uppercase font-semibold text-center pt-4 tracking-wider">Latest News</h1>
        <div className=" w-[80%] bg-white h-[720px] mx-auto mt-8">
            <hr />
            <div>
                <div className="flex mt-4 gap-4">
                    <img className=" h-[180px] w-[440px] object-cover" src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D" alt="" />
                    <div className="flex flex-col gap-4">
                        <Link className=" text-sm hover:underline uppercase" to={"/latestNews"}>Latest News</Link>
                        <Link className=" text-lg font-medium hover:underline" to={"sam-walker-memorial-match-update"}>Sam Walker memorial match update</Link>
                        <p className=" text-sm">Tickets for the lunch portion of the day have now SOLD OUT! We’ve had incredible interest in the day and we’d like to thank everyone who has bought a ticket…</p>
                    </div>
                </div>
            </div>
            <div className=" mt-4">
            <hr />
                <div className="flex mt-4 gap-4">
                    <img className=" h-[180px] w-[500px] object-cover" src="https://plus.unsplash.com/premium_photo-1679690884144-1f43b8f3bf41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D" alt="" />
                    <div className="flex flex-col gap-4">
                        <Link className=" text-sm hover:underline uppercase" to={"/latestNews"}>Latest News</Link>
                        <Link className=" text-lg font-medium hover:underline" to={"sam-walker-memorial-match-update"}>Save the date: Sam Walker memorial match</Link>
                        <p className=" text-sm">On Sunday 25th August, Chelsefield Cricket Club will go head-to-head with some Kent Legends in a memorial T20 match for our beloved Samantha Walker, all in aid of AMMF and…</p>
                    </div>
                </div>
            </div>
            <div className=" mt-4">
            <hr />
                <div className="flex mt-4 gap-4">
                    <img className=" h-[180px] w-[524px] object-cover" src="https://plus.unsplash.com/premium_photo-1661890079209-72b76e49768f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3JpY2tldHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <div className="flex flex-col gap-4">
                        <Link className=" text-sm hover:underline uppercase" to={"/latestNews"}>Latest News</Link>
                        <Link className=" text-lg font-medium hover:underline" to={"sam-walker-memorial-match-update"}>Samantha Walker funeral details confirmed</Link>
                        <p className=" text-sm">Chelsefield Cricket Club can now share the details of Samantha Walker’s funeral. Sam’s funeral will take place at 2pm on Thursday 27th June at Kemnal Park Crematorium. The address for…</p>
                    </div>
                </div>
            </div>
            <hr className=" mt-4" />
            <Link to={"/news"} className=" uppercase h-8 mt-4 w-32 mx-auto text-xs border border-black flex items-center justify-center hover:bg-lime-400 hover:text-white hover:border-none transition-all duration-300">See All Club News</Link>
        </div>
    </div>
  )
}

export default LatestNews