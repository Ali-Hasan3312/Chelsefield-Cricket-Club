
const PastPlayers = () => {
  return (
    <div className=' w-full bg-white pt-8'>
    <h1 className=" text-2xl uppercase font-semibold text-center pt-4 tracking-wider">Past Players</h1>
    <div className="grid grid-cols-4 max-sm:grid-cols-1 max-sm:w-[64%] w-[70%] gap-4 mx-auto mt-8">
     <div className="w-[200px] h-[320px] max-sm:w-[230px] border border-gray-300 bg-customSky rounded">
      <div className="flex items-center justify-center mx-auto gap-4 mt-4">
      <img className=" h-14 w-14 max-sm:h-16 max-sm:w-16 rounded-full object-cover hover:opacity-70 transition-all duration-300" src="https://www.dartfordcc.co.uk/wp-content/uploads/2022/03/Graham-Dilley-007.jpg-e1646219388396.webp" alt="" />
      <div>
      <h3 className=" text-xs max-sm:text-sm text-white italic">Graham Dilley</h3>
      <p className=" text-xs max-sm:text-sm text-gray-300 italic">Kent & England</p>
      </div>
        </div>       
        <p className="text-xs max-sm:text-sm mt-4 w-[75%] mx-auto">A tall fast bowler who was born in Dartford, Graham’s success for Kent soon earned him England recognition. He went onto take 138 wickets in 41 Tests for his country. We sadly lost Dill aged 52 in 2011 following illness.</p>
     </div>
     <div className="w-[200px] h-[320px] max-sm:w-[230px] border border-gray-300 bg-white rounded">
      <div className="flex items-center justify-center mx-auto gap-4 mt-4">
      <img className=" h-14 w-14 max-sm:h-16 max-sm:w-16 rounded-full object-cover hover:opacity-70 transition-all duration-300" src="https://www.dartfordcc.co.uk/wp-content/uploads/2022/03/117731920_derekuftonrex-e1646219698375.jpg" alt="" />
      <div>
      <h3 className=" text-xs max-sm:text-sm text-black font-semibold italic">Derek Ufton</h3>
      <p className=" text-xs max-sm:text-sm text-black italic">Kent, Charlton & England</p>
      </div>
        </div>       
        <p className="text-xs max-sm:text-sm mt-4 w-[75%] mx-auto">A true all-round sportsman, Derek made his name as a wicketkeeper for Kent. He is also one of Charlton’s greatest players and even received one England cap. Derek’s interest in the Club remained until his passing in 2021.</p>
     </div>
     <div className="w-[200px] h-[320px] max-sm:w-[230px] border border-gray-300 bg-customSky rounded">
      <div className="flex items-center justify-center mx-auto gap-4 mt-4">
      <img className=" h-14 w-14 max-sm:h-16 max-sm:w-16 rounded-full object-cover hover:opacity-70 transition-all duration-300" src="https://www.dartfordcc.co.uk/wp-content/uploads/2022/04/Screenshot-2022-04-17-at-08.40.24.png" alt="" />
      <div>
      <h3 className=" text-xs max-sm:text-sm text-white italic">Alan Dixon</h3>
      <p className=" text-xs max-sm:text-sm text-gray-300 italic">Kent</p>
      </div>
        </div>       
        <p className="text-xs max-sm:text-sm mt-4 w-[75%] mx-auto">Alan played for the Club in his early years and went onto enjoy a 20-year career with Kent. After debuting aged 16, Alan went onto score over 9,500 runs and take 935 wickets in 381 First-class matches.</p>
     </div>
     <div className="w-[200px] h-[320px] max-sm:h-[380px] max-sm:w-[230px] border border-gray-300 bg-white rounded">
      <div className="flex items-center justify-center mx-auto gap-4 mt-4">
      <img className=" h-14 w-14 max-sm:h-16 max-sm:w-16 rounded-full object-cover hover:opacity-70 transition-all duration-300" src="https://www.dartfordcc.co.uk/wp-content/uploads/2022/03/IMG_4298-e1646564842199.jpg" alt="" />
      <div>
      <h3 className=" text-xs max-sm:text-sm text-black font-semibold italic">Paul Stanford</h3>
      <p className=" text-xs max-sm:text-sm text-black italic">1XI batsman</p>
      </div>
        </div>       
        <p className="text-xs max-sm:text-sm mt-4 w-[75%] mx-auto">Paul’s performances as an opening batsman and former 1XI captain ensures he goes down as one of our best ever players. After retiring from the game, he could often be found watching watching first his son Ed and now his grandson Jack playing for Dartford until his passing in 2023.</p>
     </div>
    </div>
</div>
  )
}

export default PastPlayers