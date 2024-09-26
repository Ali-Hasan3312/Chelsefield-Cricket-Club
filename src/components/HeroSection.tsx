import { Link } from "react-router-dom"

const HeroSection = () => {
  return (
    <div className=' relative w-full'>
        <div className='bg h-screen max-sm:h-[70vh] bg-center bg-no-repeat bg-cover'></div>
        <div className=' absolute top-[14%] left-[19%] text-white w-[60%] max-sm:w-[80%] max-sm:top-[18%] max-sm:left-[10%] mx-auto'>
            <h1 className=' text-[60px] max-sm:text-[32px] font-bold uppercase leading-[1] text-center overflow-hidden'>Welcome to Chelsefield Cricket Club</h1>
            <p className=' text-center text-lg max-sm:text-base mt-4'>One of the world’s oldest cricket clubs since 1727 <br />
            with a thriving junior and senior section.</p>
            <div className='flex items-center justify-center mt-4 gap-10 font-semibold'>
                <Link to={'/about'} className='h-12 w-24 flex items-center justify-center text-center bg-blue-500 hover:bg-transparent hover:border hover:border-blue-500 hover:text-white transition-all duration-300 text-white'>About</Link>
                <Link to={"/join"} className='h-12 w-24 flex items-center justify-center text-center bg-white text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300'>Join Us</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection