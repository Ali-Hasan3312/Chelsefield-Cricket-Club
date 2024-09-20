import { PiGreaterThanLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'

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
        <h2 className=' text-center mt-8 text-2xl text-white font-semibold'>Membership Registration Form</h2>
         <form className=" mt-10 w-[90%] mx-auto bg-gray-950 rounded px-12 py-8 text-white" >
                    <div className=" flex flex-col gap-4">
                     <div className='grid grid-cols-2 gap-4'>
                     <div>
                        <label htmlFor="name">Full Name:
                        </label>
                        <input type="text" id="name" className=" w-full text-black py-2 px-4 rounded-md" />
                        </div>
                       <div>
                       <label htmlFor="date">Date of Birth:
                        </label>
                        <input type="date" id="date" className=" w-full text-black py-2 px-4 rounded-md" />
                       </div>
                      <div>
                      <label htmlFor="phone">Postcode:</label>
                      <input type="tel" id="phone" className=" w-full text-black py-2 px-4 rounded-md" />
                      </div>
                      <div>
                       <label htmlFor="email">Email</label>
                       <input type="email" id="email" className=" w-full text-black py-2 px-4 rounded-md" />
                       </div>
                        <div>
                        <label htmlFor="phone">Mobile Number:
                        </label>
                        <input type="tel" id="phone" className=" w-full text-black py-2 px-4 rounded-md" />
                        </div>
                      <div>
                      <label htmlFor="date">Address:
                        </label>
                        <input type="text" id="address" className=" w-full text-black py-2 px-4 rounded-md" />
                      </div>
                     </div>
                      
                        <span className=" text-xl font-semibold mt-8">Emergency Contact Details
                        </span>
                    <div className='grid grid-cols-2 gap-4'>
                    <div>
                       <label className=" mt-8">Emergency Contact Name:
                        </label>
                        <input type="text" id="name" className=" w-full text-black py-2 px-4 rounded-md" />
                       </div>
                      <div>
                      <label className="">Relationship to Member:
                        </label>
                        <input type="text" id="name" className=" w-full text-black py-2 px-4 rounded-md" />
                      </div>
                      <div>
                      <label htmlFor="phone">Emergency Contact Phone Number:
                        </label>
                        <input type="tel" id="phone" className=" w-full text-black py-2 px-4 rounded-md" />
                      </div>
                       <div>
                       <label htmlFor="phone">Alternative Emergency Contact Number:
                        </label>
                        <input type="tel" id="phone" className=" w-full text-black py-2 px-4 rounded-md" />
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
                        <textarea className=" w-full text-black py-2 px-4 rounded-md" rows={4}></textarea>
                        <span>Terms and Conditions:
                        </span>
                        <p>1. Code of Conduct
All members are expected to adhere to the club's code of conduct, which outlines acceptable behavior on and off the field. This includes respect for coach, management teammates, opponents, umpire and club property.
</p>
                        <p>2. Disciplinary Actions
Any violation of the club's code of conduct or involvement in any inappropriate behaviour, either during club activities or outside, may result in disciplinary action. This may include suspension or termination of membership, depending on the severity of the violation.
</p>
<p>3. Non-Refundable Fees
Membership fees paid to Chelsfield Cricket Club are non-refundable under any circumstances, including termination of membership due to disciplinary actions or voluntary withdrawal from the club.
</p>
<div className=" mt-10">
               
               <p className=" mb-2">For any queries, contact us at: 
               </p>
               <p className=" mb-2">club email:</p>
              
           </div>
                        <button className=" bg-blue-500 text-white py-2 px-4 rounded-md">Submit</button>
                    </div>
                </form>
    </div>
  )
}

export default JoinUs