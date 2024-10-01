import headCoach from "../assets/All Players/player8.jpg"
import NaeemAhad from "../assets/users/NaeemAhad.jpg"
interface ClubContactProps{
    image:string,
    name:string,
    email:string,
    number: string,
    position:string
}
const KeyClubContact = (
   props:ClubContactProps
)=>{
    return(
        <div className="w-[200px] h-auto flex flex-col items-center">
            <img className=" w-full h-[244px] object-cover hover:opacity-70 transition-all duration-300" src={props.image} alt="" />
            <p className="uppercase font-medium text-sm text-center mt-4">{props.position} - {props.name}</p>
            <a href={`mailto:${props.email}`}>{props.email}</a>
            <a href={`tel:${props.number}`}>{props.number}</a>
            <hr className=" w-[60%] mx-auto mt-2" />
         </div>
    )
}
const ClubContacts = () => {
  return (
    <div className='w-full bg-white pt-8'>
        <h1 className=" text-2xl uppercase font-semibold text-center pt-4 tracking-wider">Key club contacts</h1>
        <div className="grid grid-cols-4 max-sm:grid-cols-1 w-[70%] max-sm:w-[55%] gap-4 mx-auto mt-8">
        <KeyClubContact name="
         Ijaz Butt" position="Head Coach" email="" number="" image={headCoach} />
         <KeyClubContact name="Naeem Ahad" position="Chairman" email="ahadn@hotmail.com" number="+44 7572 427856" image={NaeemAhad} />
         <KeyClubContact name="Naeem Ahad" position="Sunday Captain" email="ahadn@hotmail.com" number="+44 7572 427856" image = {NaeemAhad} />
         <KeyClubContact name="
         Faisal Kanth" position="Cricket Development Officer" email="" number="" image="https://s3-eu-west-1.amazonaws.com/pc-static.ecb.co.uk/images/official.jpg" />
         <KeyClubContact name="
         Naeem Ahad" position="Hon. Secretary" email="ahadn@hotmail.com" number="" image="https://s3-eu-west-1.amazonaws.com/pc-static.ecb.co.uk/images/official.jpg" />
         <KeyClubContact name="
         Mr. Asjad Mir" position="Hon. Treasurer" email="asjadazeem@hotmail.com" number="07984 130132" image="https://s3-eu-west-1.amazonaws.com/p-c2gallery.ecb.co.uk/uploads_official/official/image/103576/official_IMG-20240916-WA0005.jpg" />
         <KeyClubContact name="
         Ahsan Sher" position="Saturday First XI Captain" email="ahsanjsher@gmail.com" number="0787528664" image="https://s3-eu-west-1.amazonaws.com/pc-static.ecb.co.uk/images/official.jpg" />
         <KeyClubContact name="
         Asjad Mir" position="Saturday Second XI Captain" email="asjadazeem@hotmail.com" number="07984130132" image="https://s3-eu-west-1.amazonaws.com/pc-static.ecb.co.uk/images/official.jpg" />
    
      
        
        </div>
    </div>
  )
}

export default ClubContacts