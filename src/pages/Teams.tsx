import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import player1 from '../assets/All Players/player1.jpg'
import player2 from '../assets/All Players/player2.jpg'
import player3 from '../assets/All Players/player3.jpg'
import player4 from '../assets/All Players/player4.jpg'
import player5 from '../assets/All Players/player5.jpg'
import player6 from '../assets/All Players/player6.jpg'
import player7 from '../assets/All Players/player7.jpg'
import player8 from '../assets/All Players/player8.jpg'
import player9 from '../assets/All Players/player9.jpg'
import player10 from '../assets/All Players/player10.jpg'
import player11 from '../assets/All Players/player11.jpg'
import player12 from '../assets/All Players/player12.jpg'
import player13 from '../assets/All Players/player13.jpg'
import player14 from '../assets/All Players/player14.jpg'
import player15 from '../assets/All Players/player15.jpg'
interface PlayerType {
    playerName: string,
    role: string,
    image: string,
    fb?: string,
    insta?: string
}
const Players = ({playerName, role, image} : PlayerType) =>{
    return(
        <div className="flex flex-col text-white gap-2">
        <img className=" h-[340px] w-[320px] object-cover" src={image} alt="" />
        <h2 className=" text-xl uppercase tracking-widest">{playerName}</h2>
        <span className=" uppercase text-gray-400 tracking-widest">{role}</span>
        <div className="flex items-center">
            <FaFacebook className=" inline-block text-2xl text-blue-500 hover:text-gray-200 transition-all duration-300 cursor-pointer mr-4" /> <FaXTwitter className=" inline-block text-2xl text-blue-500 hover:text-gray-200 transition-all duration-300 cursor-pointer mr-4" /> <FaInstagram className=" inline-block text-2xl text-blue-500 hover:text-gray-200 transition-all duration-300 cursor-pointer" />
        </div>
    </div>
    )
}
const Teams = () => {
 
  return (
    <div>
        <div className=' bg-gray-950 pb-8'>
       <div className='bg2 relative'></div>
       <div className=' absolute top-[40%] left-[20%] text-white w-[60%] mx-auto'>
           <h1 className=' text-[60px] max-sm:text-[40px] max-sm:text-nowrap font-bold uppercase leading-[1] text-center'>Our Teams</h1>
       </div>
           <div className="relative pb-12 w-[90%] bg-gray-800 mt-8 mx-auto">
           <div className="flex max-sm:flex-col items-center justify-between px-8 text-white pt-12">
           <h1 className=" text-4xl">Our Squad</h1>
            <p className=" w-[40%] max-sm:w-[90%] max-sm:mt-4 text-lg">
            Behind Undefeated stands a dedicated team of individuals who are passionate about sports, motivation, and making a positive impact. Meet the faces driving our mission forward.</p>
           </div>
           <div className="grid grid-cols-3 max-sm:grid-cols-1 w-[90%] mx-auto mt-12 gap-8">
           <Players playerName="Hogan Techaira" role="Opening Batsman" image={player1} />
           <Players playerName="Samuel Hughes" role="Opening Batsman" image={player2} />
           <Players playerName="Daniel Hill" role="Middle-order Batsman" image={player3} />
           <Players playerName="Lucas Turner" role="Fast Bowler" image={player4} />
           <Players playerName="Samuel Hughes" role="Opening Batsman" image={player5} />
           <Players playerName="Daniel Hill" role="Middle-order Batsman" image={player6} />
           <Players playerName="Lucas Turner" role="Fast Bowler" image={player7} />
           <Players playerName="Samuel Hughes" role="Opening Batsman" image={player8} />
           <Players playerName="Charlie Evans" role="Wicketkeeper" image={player9} />
           <Players playerName="Oscar Thompson" role="Fast Bowler" image={player10} />
           <Players playerName="Jacob Morris" role="Spin Bowler" image={player11} />
           <Players playerName="Henry Clark" role="Power Hitter" image={player12} />
           <Players playerName="Joseph Allen" role="All-rounder" image={player13} />
           <Players playerName="Daniel Robinson" role="Slip Fielder (Batsman)" image={player14} />
           <Players playerName="Sebastian Green" role="Power Hitter" image={player15} />

           </div>
           </div>
   </div>
    </div>
  )
}

export default Teams