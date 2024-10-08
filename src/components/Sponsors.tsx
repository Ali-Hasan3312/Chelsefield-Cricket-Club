import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import APS from "../assets/sponsors/APS.webp"
import greenOlive from "../assets/sponsors/Green & Olive.jpg"
import fairvue from "../assets/sponsors/FairVue.jpg"
import zedExotics from "../assets/sponsors/zed exotics.jpg"
const Sponsors = () => {
  return (
    <div className='w-full bg-white py-8'>
        <h1 className=" text-2xl uppercase font-semibold text-center pt-4 tracking-wider">Our sponsors</h1>
        <p className=' text-base mt-4 text-center'>Find out more about our range of <Link to={"/sponsorship-opportunities"} className=' underline font-medium hover:opacity-70'>sponsorship opportunities</Link> for clients of all sizes here.</p>
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        className='flex items-center justify-center mt-20 gap-8 overflow-hidden'>
                  <div className='relative w-[220px] max-sm:w-[800px]'>
                  <motion.img
                    className='w-full object-scale-down'
                    src={APS}
                    alt=""
                  />
                  <Link to={"https://weareaps.co.uk/"} className=' absolute top-0 w-full h-full'></Link>
                  </div>
                 <div className='relative w-[400px] max-sm:w-[2000px]'>
                 <motion.img
                    className='w-full max-sm:w-full h-auto cursor-pointer object-cover'
                    src={greenOlive}
                    alt=""
                  />
                  <Link to={"https://greenandolive.co.uk/"} className=' absolute top-0 w-full h-full'></Link>
                 </div>
                  <div className='relative w-32 max-sm:w-[800px]'>
                  <motion.img
                    className='w-full max-sm:w-full h-auto cursor-pointer object-cover'
                    src={zedExotics}
                    alt=""
                  />
                 <Link to={"https://ratings.food.gov.uk/business/679375/zed-exotics-london"} className=' absolute top-0 w-full h-full'></Link>
                  </div>
                  <div className='relative w-72 max-sm:w-[2000px]'>
                  <motion.img
                    className='w-full max-sm:w-full cursor-pointer object-cover'
                    src={fairvue}
                    alt=""
                  />
                 <Link to={"https://weareaps.co.uk/"} className=' absolute top-0 w-full h-full'></Link>

                  </div>
                  
                </motion.div>


                    </div>
  )
}

export default Sponsors