import chelsefieldMap from "../assets/Chelsefield_Map.jpg"
const Ground = () => {
  return (
    <div className='w-full bg-white pt-8'>
        <h1 className=" text-2xl uppercase font-semibold text-center pt-4 tracking-wider">Our Grounds</h1>
        <div className="w-[70%] max-sm:w-[90%] mx-auto">
        <p className="text-sm mt-4 text-center">The Club has three grounds, all in the Dartford area. Hesketh Park is our main ground and plays host to our 1XI, 2XI and Sunday XI fixtures. Our 3XI and 4XI play at Waller Park whilst our 5XI share Oakfield Park with Stone Cricket Club. Junior fixtures are usually held at either Hesketh or Oakfield Park.</p>
        <img className="w-full h-[400px] object-cover mt-8" src={chelsefieldMap} alt="" />
        </div>
    </div>
  )
}

export default Ground