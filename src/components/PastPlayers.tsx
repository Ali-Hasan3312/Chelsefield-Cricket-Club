const PastPlayers = () => {
  return (
    <div className=' w-full bg-white pt-8'>
      <h1 className=" text-2xl uppercase font-semibold text-center pt-4 tracking-wider">Past Players</h1>
      <div className="grid grid-cols-4 max-sm:grid-cols-1 max-sm:w-[64%] w-[70%] gap-4 mx-auto mt-8">
        <div className="w-[200px] mx-auto h-[320px] max-sm:w-[230px] border border-gray-300 bg-customSky rounded">
          <div className="flex items-center justify-center mx-auto gap-4 mt-4">
            <img className=" h-14 w-14 max-sm:h-16 max-sm:w-16 rounded-full object-cover hover:opacity-70 transition-all duration-300" 
                 src="https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="John Smith" />
            <div>
              <h3 className=" text-xs max-sm:text-sm text-white italic">John Smith</h3>
              <p className=" text-xs max-sm:text-sm text-gray-300 italic">Chelsefield & England</p>
            </div>
          </div>       
          <p className="text-xs max-sm:text-sm mt-4 w-[75%] mx-auto">
            A legendary fast bowler for Chelsefield, John Smith earned national fame by representing England in multiple test matches. His dedication and skill have left a lasting legacy at the club.
          </p>
        </div>

        <div className="w-[200px] mx-auto h-[320px] max-sm:w-[230px] border border-gray-300 bg-white rounded">
          <div className="flex items-center justify-center mx-auto gap-4 mt-4">
            <img className=" h-14 w-14 max-sm:h-16 max-sm:w-16 rounded-full object-cover hover:opacity-70 transition-all duration-300" 
                 src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="David Brown" />
            <div>
              <h3 className=" text-xs max-sm:text-sm text-black font-semibold italic">David Brown</h3>
              <p className=" text-xs max-sm:text-sm text-black italic">Chelsefield & Kent</p>
            </div>
          </div>       
          <p className="text-xs max-sm:text-sm mt-4 w-[75%] mx-auto">
            David was known for his outstanding performance as an all-rounder for Chelsefield and Kent. His leadership and sportsmanship continue to inspire future generations at the club.
          </p>
        </div>

        <div className="w-[200px] mx-auto h-[320px] max-sm:w-[230px] border border-gray-300 bg-customSky rounded">
          <div className="flex items-center justify-center mx-auto gap-4 mt-4">
            <img className=" h-14 w-14 max-sm:h-16 max-sm:w-16 rounded-full object-cover hover:opacity-70 transition-all duration-300" 
                 src="https://images.unsplash.com/photo-1583071299210-c6c113f4ac91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="Alan Jones" />
            <div>
              <h3 className=" text-xs max-sm:text-sm text-white italic">Alan Jones</h3>
              <p className=" text-xs max-sm:text-sm text-gray-300 italic">Chelsefield</p>
            </div>
          </div>       
          <p className="text-xs max-sm:text-sm mt-4 w-[75%] mx-auto">
            A talented batsman, Alan's contributions to Chelsefield's successes are immeasurable. His dedication to the club during his career cemented his place as one of its finest players.
          </p>
        </div>

        <div className="w-[200px] mx-auto h-[320px] max-sm:h-[380px] max-sm:w-[230px] border border-gray-300 bg-white rounded">
          <div className="flex items-center justify-center mx-auto gap-4 mt-4">
            <img className=" h-14 w-14 max-sm:h-16 max-sm:w-16 rounded-full object-cover hover:opacity-70 transition-all duration-300" 
                 src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="Paul Clark" />
            <div>
              <h3 className=" text-xs max-sm:text-sm text-black font-semibold italic">Paul Clark</h3>
              <p className=" text-xs max-sm:text-sm text-black italic">1XI Batsman</p>
            </div>
          </div>       
          <p className="text-xs max-sm:text-sm mt-4 w-[75%] mx-auto">
            Known for his exceptional batting skills, Paul Clark captained the Chelsefield 1XI team to multiple victories. His legacy lives on through the players he mentored and inspired during his time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PastPlayers;
