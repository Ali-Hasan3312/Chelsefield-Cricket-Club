import { Link } from "react-router-dom"

const History = () => {
  return (
    <div className='w-full bg-white pt-8'>
        <h1 className=" text-2xl uppercase font-semibold text-center pt-4 tracking-wider">Club History</h1>
        <div className="flex max-sm:flex-col items-center justify-center gap-8 mt-8 w-[70%] mx-auto">
            <div className=" h-[400px] w-[400px] max-sm:w-[340px] flex flex-col gap-3">
                <img className="h-[230px] w-[400px] cursor-pointer" src="https://www.dartfordcc.co.uk/wp-content/uploads/2022/04/Cricket-in-Dartford-header-1-e1649608147750.png" alt="" />
                <Link to={"/cricket-in-chelsefield"} className=" text-sm font-semibold hover:underline">Cricket in Chelsefield</Link>
                <p className=" text-sm">We are proud of our long history and role as one of the pioneers of English club cricket. Dartford is undoubtedly one of the oldest cricket clubs in England with…</p>
            </div>
            <div className=" h-[400px] w-[400px] max-sm:w-[340px] flex flex-col gap-3">
                <img className="h-[230px] w-[400px] cursor-pointer" src="https://www.dartfordcc.co.uk/wp-content/uploads/2022/02/HP.jpg" alt="" />
                <Link to={"/park-history"} className=" text-sm font-semibold hover:underline">History of Hesketh Park</Link>
                <p className=" text-sm">We are proud of our long history and role as one of the pioneers of English club cricket. Dartford is undoubtedly one of the oldest cricket clubs in England with…</p>
            </div>
        </div>
    </div>
  )
}

export default History