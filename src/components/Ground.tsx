const Ground = () => {
  return (
    <div className='w-full bg-white pt-8'>
        <h1 className=" text-2xl uppercase font-semibold text-center pt-4 tracking-wider">Our Grounds</h1>
        <div className="w-[70%] max-sm:w-[90%] mx-auto">
        <p className="text-sm mt-4 text-center"> Chelsefield Cricket Club has two grounds, both located in the Chelsefield area. Our main ground hosts the Saturday 1st XI, Saturday 2nd XI, and Sunday Tigers fixtures, while the Saturday 3rd XI and T20 teams play at our second ground. All teams benefit from the excellent facilities available at both locations, providing a great environment for cricket.</p>
        {/* <img className="w-full h-[400px] object-cover mt-8" src={chelsefieldMap} alt="" /> */}
        <iframe className="w-full h-[400px] object-cover mt-8" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2491.4855566747888!2d0.13059060000000003!3d51.3573698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8acda9c861a09%3A0xd711289971117e27!2sBucks%20Cross%20Rd%2C%20Chelsfield%2C%20Orpington%2C%20UK!5e0!3m2!1sen!2s!4v1728301091750!5m2!1sen!2s" loading="lazy"></iframe>
        </div>
    </div>
  )
}

export default Ground