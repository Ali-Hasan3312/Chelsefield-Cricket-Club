const Ground = () => {
  return (
    <div className='w-full bg-white pt-8'>
        <h1 className=" text-2xl uppercase font-semibold text-center pt-4 tracking-wider">Our Grounds</h1>
        <div className="w-[70%] max-sm:w-[90%] mx-auto">
        <p className="text-sm mt-4 text-center"> Chelsefield Cricket Club has two grounds, both located in the Chelsefield area. Our main ground hosts the Saturday 1st XI, Saturday 2nd XI, and Sunday Tigers fixtures, while the Saturday 3rd XI and T20 teams play at our second ground. All teams benefit from the excellent facilities available at both locations, providing a great environment for cricket.</p>
        {/* <img className="w-full h-[400px] object-cover mt-8" src={chelsefieldMap} alt="" /> */}
        <iframe className="w-full h-[400px] object-cover mt-8" src="https://maps.google.com/maps?q=chelsfield%20cricket%20club&t=&z=13&ie=UTF8&iwloc=&output=embed" loading="lazy"></iframe>
        </div>
    </div>
  )
}

export default Ground