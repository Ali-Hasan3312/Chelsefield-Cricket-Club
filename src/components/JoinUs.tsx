import { PiGreaterThanLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { FaInfoCircle } from "react-icons/fa";
import { PiUsersThreeBold } from "react-icons/pi";
import { BiSolidVideos } from "react-icons/bi";
import { HiInboxArrowDown } from "react-icons/hi2";
const JoinUs = () => {
  return (
    <div className="w-full text-black bg-gray-800 pb-10">
         <div className='bg2 relative'></div>
       <div className=' absolute top-[40%] left-[20%] text-white w-[60%] mx-auto'>
           <h1 className=' text-[30px] font-bold uppercase leading-[1] text-center'>Chelsfield Cricket Club - Membership Registration Form - 2025
           </h1>
       </div>
       <div className=" flex items-center gap-1 ml-32 py-4 text-white">
            <Link to={"/"} className=" hover:underline">Home</Link>
            <PiGreaterThanLight className=" text-sm" />
            <span>Join Us</span>
        </div>
        <hr />
       
        <div className='flex gap-2 px-8'>
        <form className=" mt-10 w-[90%] mx-auto bg-white rounded px-12 py-8 text-black" >
        <h2 className=' text-center text-3xl font-semibold'>Join Chelsefield Cricket Club</h2>
        <div className=' w-full border border-blue-500 bg-sky-500/10 py-4 px-8 flex flex-col mt-4'>
          <div className=' text-sky-600 flex items-center gap-2 text-lg'>
            <FaInfoCircle />
            <span className=' font-semibold'>Signing up for your child?</span>
          </div>
          <div>
            <p>Please enter <span className=' font-semibold'>your details</span> below to register as a parent. You will add your child’s details later in the process.</p>
          </div>
        </div>
                    <div className=" flex flex-col gap-4 mt-6">
                     <div className='grid grid-cols-2 gap-4'>
                     <div>
                        <label htmlFor="name">Full Name:
                        </label>
                        <input type="text" id="name" className="w-full text-black py-2 px-4 rounded-md border border-gray-400" />
                        </div>
                       <div>
                       <label htmlFor="date">Date of Birth:
                        </label>
                        <input type="date" id="date" className=" border border-gray-400 w-full text-black py-2 px-4 rounded-md" />
                       </div>
                      <div>
                      <label htmlFor="phone">Postcode:</label>
                      <input type="tel" id="phone" className=" border border-gray-400 w-full text-black py-2 px-4 rounded-md" />
                      </div>
                      <div>
                       <label htmlFor="email">Email</label>
                       <input type="email" id="email" className=" border border-gray-400 w-full text-black py-2 px-4 rounded-md" />
                       </div>
                        <div>
                        <label htmlFor="phone">Mobile Number:
                        </label>
                        <input type="tel" id="phone" className=" border border-gray-400 w-full text-black py-2 px-4 rounded-md" />
                        </div>
                      <div>
                      <label htmlFor="date">Address:
                        </label>
                        <input type="text" id="address" className=" border border-gray-400 w-full text-black py-2 px-4 rounded-md" />
                      </div>
                     </div>
                      
                        <span className=" text-xl font-semibold mt-8">Emergency Contact Details
                        </span>
                    <div className='grid grid-cols-2 gap-4'>
                    <div>
                       <label className=" mt-8">Emergency Contact Name:
                        </label>
                        <input type="text" id="name" className=" border border-gray-400 w-full text-black py-2 px-4 rounded-md" />
                       </div>
                      <div>
                      <label className="">Relationship to Member:
                        </label>
                        <input type="text" id="name" className=" border border-gray-400 w-full text-black py-2 px-4 rounded-md" />
                      </div>
                      <div>
                      <label htmlFor="phone">Emergency Contact Phone Number:
                        </label>
                        <input type="tel" id="phone" className=" border border-gray-400 w-full text-black py-2 px-4 rounded-md" />
                      </div>
                       <div>
                       <label htmlFor="phone">Alternative Emergency Contact Number:
                        </label>
                        <input type="tel" id="phone" className=" border border-gray-400 w-full text-black py-2 px-4 rounded-md" />
                       </div>
                    </div>
                        <span className="text-xl font-semibold mt-8">Membership Type: (Please tick the appropriate box)
                        </span>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" className="" />
                            <span>Junior Membership (Under 13)
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" className="" />
                            <span>Student Membership (proof from college/university)

                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" className="" />
                            <span>Regular Membership
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" className="" />
                            <span>Social Membership

                            </span>
                        </div>
                        <span className="text-xl font-semibold mt-8">Medical Information (Optional):
                        </span>
                        <label>Please list any medical conditions or allergies the club should be aware of:</label>
                        <textarea className=" border border-gray-400 w-full text-black py-2 px-4 rounded-md" rows={4}></textarea>
                        <span>Terms and Conditions:
                        </span>
                        
                        <button className=" bg-blue-900 text-white py-2 px-4 rounded-md">Join this club</button>
                    </div>
                </form>
                <div className='mt-10 w-[90%] bg-white rounded px-12 py-8 text-black'>
                  <h2 className=' mt-2 text-2xl font-medium'>Get these amazing benefits</h2>
                  <div className='flex flex-col gap-3 mt-8'>
                    <div className='flex items-center gap-8 '>
                      <PiUsersThreeBold className=' text-blue-900 text-xl' />
                      <span>Confirm your selection online in seconds</span>
                    </div>
                    <div className='flex items-center gap-8'>
                      <BiSolidVideos className=' text-blue-900 text-xl' />
                      <span>Access private team videos and photos</span>
                    </div>
                    <div className='flex items-center gap-8'>
                      <HiInboxArrowDown className=' text-blue-900 text-xl' />
                      <span>Receive club news direct to your inbox</span>
                    </div>
                  </div>
                  <h2 className=' mt-8 text-2xl font-medium'>Terms & Conditions:</h2>
                  <p className='flex flex-col mt-2'><span className=' font-semibold'>1. Code of Conduct:</span>
                  All members are expected to adhere to the club's code of conduct, which outlines acceptable behavior on and off the field. This includes respect for coach, management teammates, opponents, umpire and club property.
                  </p>
                        <p className='flex flex-col mt-2'><span className=' font-semibold'>2. Disciplinary Actions</span>
                  Any violation of the club's code of conduct or involvement in any inappropriate behaviour, either during club activities or outside, may result in disciplinary action. This may include suspension or termination of membership, depending on the severity of the violation.
                  </p>
                  <p className='flex flex-col mt-2'><span className=' font-semibold'>3. Non-Refundable Fees</span>
                  Membership fees paid to Chelsfield Cricket Club are non-refundable under any circumstances, including termination of membership due to disciplinary actions or voluntary withdrawal from the club.
                  </p>
                  <div className=" mt-10">
               
               <p className=" mb-2 font-semibold text-lg">For any queries, 
               </p>
               <p className=" mb-2 font-semibold">Contact Us At:  <span className=' font-normal'>+1 (291) 939 9321</span>
               </p>
               <p className=" mb-2 font-semibold">Club Email:  <span className=' font-normal'>Info@chelsefield.com</span>
               </p>
              
           </div>
                </div>
        </div>
    </div>
  )
}

export default JoinUs