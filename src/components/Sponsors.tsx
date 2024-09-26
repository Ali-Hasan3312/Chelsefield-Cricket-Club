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
                  <div className='relative w-[220px]'>
                  <motion.img
                    className='w-[220px] object-scale-down'
                    src={APS}
                    alt=""
                  />
                  <Link to={"https://weareaps.co.uk/"} className=' absolute top-0 w-full h-full'></Link>
                  </div>
                 <div className='relative '>
                 <motion.img
                    className='w-[520px] h-auto cursor-pointer object-cover'
                    src={greenOlive}
                    alt=""
                  />
                  <Link to={"https://greenandolive.co.uk/"} className=' absolute top-0 w-full h-full'></Link>
                 </div>
                  <div className='relative w-44'>
                  <motion.img
                    className='w-44 h-auto cursor-pointer object-cover'
                    src={zedExotics}
                    alt=""
                  />
                 <Link to={"https://ratings.food.gov.uk/business/679375/zed-exotics-london"} className=' absolute top-0 w-full h-full'></Link>
                  </div>
                  <div className='relative w-72'>
                  <motion.img
                    className='w-72 cursor-pointer object-cover'
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