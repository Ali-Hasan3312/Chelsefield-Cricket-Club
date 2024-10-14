import headCoach from "../assets/All Players/player8.jpg"
import AfaqPunjabi from "../assets/users/Afaq Punjabi.jpg"
import NaeemAhad from "../assets/users/NaeemAhad-removebg-preview.png"
import TanveerAslam from '../assets/users/Tanveer Aslam.jpg'
import Asjad2 from "../assets/users/Untitled design (6).png"
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
        <div className="w-[200px] max-sm:mx-auto max-sm:w-[270px] h-auto flex flex-col items-center">
            <img loading="lazy" className=" w-full h-[244px]  object-cover hover:opacity-70 transition-all duration-300" src={props.image} alt="" />
            <p className="uppercase font-semibold text-sm text-center mt-4">{props.position}</p>
            <p className="uppercase font-medium text-sm text-center">{props.name}</p>
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
        <div className="grid grid-cols-4 max-sm:grid-cols-1 w-[80%] max-sm:w-[75%] gap-4 mx-auto mt-8">
          <KeyClubContact name="Naeem Ahad" position="Chairman" email="Naeem@chelsfieldcc.co.uk" number="+44 7572 427856" image={NaeemAhad} />
          <KeyClubContact name="
        Mr. Asjad Mir" position="Hon. Treasurer" email="Asjad@chelsfieldcc.co.uk" number="07984130132" image={Asjad2} />
        <KeyClubContact name="
         Afaq Punjabi" position="Operations Officer" email="Afaq@chelsfieldcc.co.uk" number="+447958044726" image={AfaqPunjabi} />
         <KeyClubContact name="
          Tanveer Aslam" position="Skill development officer" email="Tanveer@chelsfieldcc.co.uk" number="+447877729107" image={TanveerAslam} />
        <KeyClubContact name="
         Ijaz Butt" position="Head Coach" email="" number="" image={headCoach} />
        </div>
    </div>
  )
}

export default ClubContacts