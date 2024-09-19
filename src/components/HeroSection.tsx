import { Link } from "react-router-dom"

const HeroSection = () => {
  return (
    <div className=' relative'>
       
        <div className='bg'></div>
        <div className=' absolute top-[30%] left-[20%] text-white w-[60%] mx-auto'>
            <h1 className=' text-[60px] font-bold uppercase leading-[1] text-center'>Welcome to Chelsefield Cricket Club</h1>
            <p className=' text-center text-lg mt-4'>One of the world’s oldest cricket clubs since 1727 <br />
            with a thriving junior and senior section.</p>
            <div className='flex items-center justify-center mt-4 gap-4 font-semibold'>
                <Link to={'/about'} className='h-12 w-24 flex items-center justify-center text-center bg-lime-400 hover:bg-transparent hover:border hover:border-lime-400 hover:text-lime-400 transition-all duration-300 text-black'>About</Link>
                <button className='h-12 w-24 text-center border border-lime-400 hover:bg-lime-400 hover:text-black transition-all duration-300'>Join Us</button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection