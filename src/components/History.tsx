import oldPavilion from "../assets/Old_Pavilion.jpg"
const History = () => {
  return (
    <div className='w-full bg-white pt-8'>
        <h1 className=" text-2xl uppercase font-semibold text-center pt-4 tracking-wider">Club History</h1>
        <div className="flex max-sm:flex-col items-center justify-center gap-8 mt-8 w-[70%] mx-auto">
            <div className=" h-[400px] w-[400px] max-sm:w-[340px] flex flex-col gap-3 text-center">
                <img className="h-[230px] w-[400px]" src="https://www.dartfordcc.co.uk/wp-content/uploads/2022/04/Cricket-in-Dartford-header-1-e1649608147750.png" alt="" />
                <span className=" text-sm font-semibold">Cricket in Chelsefield</span>
                <p className=" text-sm">Chelsefield Cricket Club has a rich history and has been a cornerstone of the local cricket community. We are proud of our heritage and our contribution to cricket, fostering talent and promoting the sport among our members.</p>            </div>
            <div className=" h-[400px] w-[400px] max-sm:w-[340px] flex flex-col gap-3 text-center">
                <img className="h-[230px] w-[400px]" src={oldPavilion} alt="" />
                <span className=" text-sm font-semibold">History of the Old Pavilion</span>
                <p className=" text-sm">The old pavilion at Chelsefield Cricket Club has been a historic symbol of the club's legacy. For many years, it served as the heart of the club, hosting players and supporters alike, and continues to hold a special place in our memories.</p>                       </div>
        </div>
    </div>
  )
}

export default History