import APS from "../assets/sponsors/APS.webp"
import FandFAccountants from "../assets/sponsors/F & Accountants.png"
import fairvue from "../assets/sponsors/FairVue.jpg"
import greenOlive from "../assets/sponsors/Green & Olive.jpg"
import RealtyEye from "../assets/sponsors/Realty_Eye-removebg-preview.png"
import hymglobal from "../assets/sponsors/hym_global-removebg.png"
import zedExotics from "../assets/sponsors/zed exotics.jpg"
const Sponsors = () => {
  return (
    <div className='w-full bg-white py-8'>
        <h1 className=" text-2xl uppercase font-semibold text-center pt-4 tracking-wider">Our sponsors</h1>
        <p className=' text-base mt-4 max-sm:text-sm text-center max-sm:px-4 w-[90%] md:w-[70%] mx-auto'>Chelsefield Cricket Club proudly partners with these amazing sponsors, ensuring continued support for local talent, community events, and club development.</p>
       <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 w-[90%] ml-0 lg:ml-12 md:w-[100%] items-center mt-8 justify-center'>
      <div className=' ml-8 max-sm:ml-0'>
      <img className='lg:w-[180px] h-[60px] w-[280px] max-sm:h-[40px] object-contain' src={APS} alt="" />
      </div>
      <div>
       <img className='w-[280px] h-[200px] object-contain' src={greenOlive} alt="" />
      </div>
      <div className='lg:ml-2 ml-8 max-sm:-mt-16'>
       <img className='w-[280px] h-[200px] object-contain' src={fairvue} alt="" />
      </div>
      <div className='lg:ml-6 ml-16 max-sm:-mt-16'>
       <img className='w-[100px] h-[100px] max-sm:h-[70px] object-contain' src={zedExotics} alt="" />
      </div>
      <div className='ml-2 -mt-16'>
       <img className='w-[340px] h-[200px] object-contain' src={RealtyEye} alt="" />
      </div>
      <div className='-mt-16 max-sm:ml-2'>
       <img className='w-[340px] h-[220px] object-contain' src={hymglobal} alt="" />
      </div>
      <div className='-mt-16 max-sm:ml-8'>
       <img className='w-[340px] max-sm:w-[420px] h-[200px] object-contain' src={FandFAccountants} alt="" />
      </div>
       </div>


                    </div>
  )
}

export default Sponsors