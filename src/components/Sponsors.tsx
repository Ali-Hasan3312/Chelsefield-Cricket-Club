import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Sponsors = () => {
  return (
    <div className='w-full bg-white py-8'>
        <h1 className=" text-2xl uppercase font-semibold text-center pt-4 tracking-wider">Our sponsors</h1>
        <p className=' text-base mt-4 text-center'>Find out more about our range of <Link to={"/sponsorship-opportunities"} className=' underline font-medium hover:opacity-70'>sponsorship opportunities</Link> for clients of all sizes here.</p>
        <div className='flex justify-center mt-20 gap-8'>
  <motion.img
    className='w-32 h-auto cursor-pointer'
    src="https://www.dartfordcc.co.uk/wp-content/uploads/2022/03/Logo-FB-profile-copy-480x300.jpg"
    alt=""
    whileHover={{ scale: 1.4 }} 
    transition={{ duration: 0.3 }} 
  />
  <div className='h-auto w-[1px] bg-gray-200'></div>
  
  <motion.img
    className='w-32 h-auto cursor-pointer'
    src="https://www.dartfordcc.co.uk/wp-content/uploads/2022/02/Alan-Ellis-sponsor-1.png"
    alt=""
    whileHover={{ scale: 1.4 }} 
    transition={{ duration: 0.3 }} 
  />
  <div className='h-auto w-[1px] bg-gray-200'></div>

  <motion.img
    className='w-32 h-auto cursor-pointer'
    src="https://www.dartfordcc.co.uk/wp-content/uploads/2022/03/SMS-sponsor-3.jpeg"
    alt=""
    whileHover={{ scale: 1.4 }} 
    transition={{ duration: 0.3 }} 
  />
  <div className='h-auto w-[1px] bg-gray-200'></div>
</div>
    </div>
  )
}

export default Sponsors