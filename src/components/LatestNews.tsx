import { Link } from "react-router-dom"

const LatestNews = () => {
  return (
    <div className=" w-full bg-white">
        <h1 className=" text-2xl uppercase font-semibold text-center pt-4 tracking-wider">Latest News</h1>
        <div className=" w-[80%] bg-white h-[600px] mx-auto mt-8">
            <hr />
            <div>
                <div className="flex mt-4 gap-4">
                    <img src="https://www.dartfordcc.co.uk/wp-content/uploads/2024/08/446bba1e-b135-4ccf-bfec-922fbb9caba6-e1723284560562-300x150.jpg" alt="" />
                    <div className="flex flex-col gap-4">
                        <Link className=" text-sm hover:underline uppercase" to={"/latestNews"}>Latest News</Link>
                        <Link className=" text-lg font-medium hover:underline" to={"sam-walker-memorial-match-update"}>Sam Walker memorial match update</Link>
                        <p className=" text-sm">Tickets for the lunch portion of the day have now SOLD OUT! We’ve had incredible interest in the day and we’d like to thank everyone who has bought a ticket. …</p>
                    </div>
                </div>
            </div>
            <div className=" mt-4">
            <hr />
                <div className="flex mt-4 gap-4">
                    <img src="https://www.dartfordcc.co.uk/wp-content/uploads/2024/07/PHOTO-2024-07-17-13-39-44-e1721221607758-300x150.jpg" alt="" />
                    <div className="flex flex-col gap-4">
                        <Link className=" text-sm hover:underline uppercase" to={"/latestNews"}>Latest News</Link>
                        <Link className=" text-lg font-medium hover:underline" to={"sam-walker-memorial-match-update"}>Sam Walker memorial match update</Link>
                        <p className=" text-sm">Tickets for the lunch portion of the day have now SOLD OUT! We’ve had incredible interest in the day and we’d like to thank everyone who has bought a ticket. …</p>
                    </div>
                </div>
            </div>
            <div className=" mt-4">
            <hr />
                <div className="flex mt-4 gap-4">
                    <img src="https://www.dartfordcc.co.uk/wp-content/uploads/2024/06/447898240_974681477994258_4773234863807836211_n-1-e1718654807870-300x150.jpg" alt="" />
                    <div className="flex flex-col gap-4">
                        <Link className=" text-sm hover:underline uppercase" to={"/latestNews"}>Latest News</Link>
                        <Link className=" text-lg font-medium hover:underline" to={"sam-walker-memorial-match-update"}>Sam Walker memorial match update</Link>
                        <p className=" text-sm">Tickets for the lunch portion of the day have now SOLD OUT! We’ve had incredible interest in the day and we’d like to thank everyone who has bought a ticket. …</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LatestNews