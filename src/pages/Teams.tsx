import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Teams = () => {
    const img1 = "https://images.unsplash.com/photo-1593766729977-e1f01ee30e49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNyaWNrZXQlMjBwbGF5ZXJzfGVufDB8fDB8fHww"
    const img2 = "https://plus.unsplash.com/premium_photo-1722351690047-e60058864b84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3JpY2tldCUyMHBsYXllcnN8ZW58MHx8MHx8fDA%3D"
    const img3 = "https://images.unsplash.com/photo-1593766821405-f605e0f9535f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3JpY2tldCUyMHBsYXllcnN8ZW58MHx8MHx8fDA%3D"
    const img4 = "https://plus.unsplash.com/premium_photo-1661893462440-c3cc98540f2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNyaWNrZXQlMjBwbGF5ZXJzfGVufDB8fDB8fHww"
    const img5 = "https://plus.unsplash.com/premium_photo-1661859255793-03767fbafadf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGNyaWNrZXQlMjBwbGF5ZXJzfGVufDB8fDB8fHww"
    const img6 = "https://plus.unsplash.com/premium_photo-1661892048559-afda5ed9aa4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGNyaWNrZXQlMjBwbGF5ZXJzfGVufDB8fDB8fHww"
    const img7 = "https://plus.unsplash.com/premium_photo-1661870244292-234d0a742fa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGNyaWNrZXQlMjBwbGF5ZXJzfGVufDB8fDB8fHww"
    const img8 = "https://plus.unsplash.com/premium_photo-1661858833721-a949498c8191?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGNyaWNrZXQlMjBwbGF5ZXJzfGVufDB8fDB8fHww"
  return (
    <div>
        <div className=' bg-gray-950 h-[2400px]'>
       
       <div className='bg2 relative'></div>
       <div className=' absolute top-[40%] left-[20%] text-white w-[60%] mx-auto'>
           <h1 className=' text-[60px] font-bold uppercase leading-[1] text-center'>Our Teams</h1>
       </div>
           <div className="relative h-[1900px] w-[90%] bg-gray-800 mt-8 mx-auto">
           <div className="flex items-center justify-between px-8 text-white pt-12">
           <h1 className=" text-4xl">Our Squad</h1>
            <p className=" w-[40%] text-lg">
            Behind Undefeated stands a dedicated team of individuals who are passionate about sports, motivation, and making a positive impact. Meet the faces driving our mission forward.</p>
           </div>
           <div className="grid grid-cols-3 w-[90%] mx-auto mt-12 gap-8">
            <div className="flex flex-col text-white gap-2">
                <img className=" h-[340px] w-[320px] object-cover" src={img1} alt="" />
                <h2 className=" text-xl uppercase tracking-widest">Hogan Techaira</h2>
                <span className=" uppercase text-gray-400 tracking-widest">Opening Batsman</span>
                <div className="flex items-center">
                    <FaFacebook className=" inline-block text-2xl text-lime-400 hover:text-gray-200 transition-all duration-300 cursor-pointer mr-4" /> <FaXTwitter className=" inline-block text-2xl text-lime-400 hover:text-gray-200 transition-all duration-300 cursor-pointer mr-4" /> <FaInstagram className=" inline-block text-2xl text-lime-400 hover:text-gray-200 transition-all duration-300 cursor-pointer" />
                </div>
            </div>
            <div className="flex flex-col text-white gap-2">
                <img className=" h-[340px] w-[320px] object-cover" src={img2} alt="" />
                <h2 className=" text-xl uppercase tracking-widest">Samuel Hughes</h2>
                <span className=" uppercase text-gray-400 tracking-widest">Opening Batsman</span>
                <div className="flex items-center">
                    <FaFacebook className=" inline-block text-2xl text-lime-400 hover:text-gray-200 transition-all duration-300 cursor-pointer mr-4" /> <FaXTwitter className=" inline-block text-2xl text-lime-400 hover:text-gray-200 transition-all duration-300 cursor-pointer mr-4" /> <FaInstagram className=" inline-block text-2xl text-lime-400 hover:text-gray-200 transition-all duration-300 cursor-pointer" />
                </div>
            </div>
            <div className="flex flex-col text-white gap-2">
                <img className=" h-[340px] w-[320px] object-cover" src={img3} alt="" />
                <h2 className=" text-xl uppercase tracking-widest">Daniel Hill</h2>
                <span className=" uppercase text-gray-400 tracking-widest">Middle-order Batsman</span>
                <div className="flex items-center">
                    <FaFacebook className=" inline-block text-2xl text-lime-400 hover:text-gray-200 transition-all duration-300 cursor-pointer mr-4" /> <FaXTwitter className=" inline-block text-2xl text-lime-400 hover:text-gray-200 transition-all duration-300 cursor-pointer mr-4" /> <FaInstagram className=" inline-block text-2xl text-lime-400 hover:text-gray-200 transition-all duration-300 cursor-pointer" />
                </div>
            </div>
            <div className="flex flex-col text-white gap-2">
                <img className=" h-[340px] w-[320px] object-cover" src={img4} alt="" />
                <h2 className=" text-xl uppercase tracking-widest">Lucas Turner</h2>
                <span className=" uppercase text-gray-400 tracking-widest">Fast Bowler</span>
                <div className="flex items-center">
                    <FaFacebook className=" inline-block text-2xl text-lime-400 hover:text-gray-200 transition-all duration-300 cursor-pointer mr-4" /> <FaXTwitter className=" inline-block text-2xl text-lime-400 hover:text-gray-200 transition-all duration-300 cursor-pointer mr-4" /> <FaInstagram className=" inline-block text-2xl text-lime-400 hover:text-gray-200 transition-all duration-300 cursor-pointer" />
                </div>
            </div>
            <div className="flex flex-col text-white gap-2">
                <img className=" h-[340px] w-[320px] object-cover" src={img5} alt="" />
                <h2 className=" text-xl uppercase tracking-widest">Benjamin White</h2>
                <span className=" uppercase text-gray-400 tracking-widest">Spin Bowler</span>
                <div className="flex items-center">
                    <FaFacebook className=" inline-block text-2xl text-lime-400 hover:text-gray-200 transition-all duration-300 cursor-pointer mr-4" /> <FaXTwitter className=" inline-block text-2xl text-lime-400 hover:text-gray-200 transition-all duration-300 cursor-pointer mr-4" /> <FaInstagram className=" inline-block text-2xl text-lime-400 hover:text-gray-200 transition-all duration-300 cursor-pointer" />
                </div>
            </div>
            <div className="flex flex-col text-white gap-2">
                <img className=" h-[340px] w-[320px] object-cover" src={img6} alt="" />
                <h2 className=" text-xl uppercase tracking-widest">James Anderson</h2>
                <span className=" uppercase text-gray-400 tracking-widest">Wicketkeeper</span>
                <div className="flex items-center">
                    <FaFacebook className=" inline-block text-2xl text-lime-400 hover:text-gray-200 transition-all duration-300 cursor-pointer mr-4" /> <FaXTwitter className=" inline-block text-2xl text-lime-400 hover:text-gray-200 transition-all duration-300 cursor-pointer mr-4" /> <FaInstagram className=" inline-block text-2xl text-lime-400 hover:text-gray-200 transition-all duration-300 cursor-pointer" />
                </div>
            </div>
            <div className="flex flex-col text-white gap-2">
                <img className=" h-[340px] w-[320px] object-cover" src={img7} alt="" />
                <h2 className=" text-xl uppercase tracking-widest">Oliver Carter</h2>
                <span className=" uppercase text-gray-400 tracking-widest">All Rounder</span>
                <div className="flex items-center">
                    <FaFacebook className=" inline-block text-2xl text-lime-400 hover:text-gray-200 transition-all duration-300 cursor-pointer mr-4" /> <FaXTwitter className=" inline-block text-2xl text-lime-400 hover:text-gray-200 transition-all duration-300 cursor-pointer mr-4" /> <FaInstagram className=" inline-block text-2xl text-lime-400 hover:text-gray-200 transition-all duration-300 cursor-pointer" />
                </div>
            </div>
            <div className="flex flex-col text-white gap-2">
                <img className=" h-[340px] w-[320px] object-cover" src={img8} alt="" />
                <h2 className=" text-xl uppercase tracking-widest">Ethan Taylor</h2>
                <span className=" uppercase text-gray-400 tracking-widest">Bowler</span>
                <div className="flex items-center">
                    <FaFacebook className=" inline-block text-2xl text-lime-400 hover:text-gray-200 transition-all duration-300 cursor-pointer mr-4" /> <FaXTwitter className=" inline-block text-2xl text-lime-400 hover:text-gray-200 transition-all duration-300 cursor-pointer mr-4" /> <FaInstagram className=" inline-block text-2xl text-lime-400 hover:text-gray-200 transition-all duration-300 cursor-pointer" />
                </div>
            </div>
           </div>
           </div>
          
   </div>
    </div>
  )
}

export default Teams