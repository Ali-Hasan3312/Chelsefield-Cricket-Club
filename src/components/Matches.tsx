import { useState } from "react";
import Junior from "./Junior";
import Senior from "./Senior";

const Matches = () => {
    const [teams, setTeams] = useState({
        senior: true,
        ladies: false,
        junior: false,
    });
    const handleSenior = ()=>{
       setTeams({
        senior: true,
        ladies: false,
        junior: false,
       })
    }
  
    const handleJunior = ()=>{
        setTeams({
            senior: false,
            ladies: false,
            junior: true,
        })
    }
  return (
    <div className=" bg-gray-800 pb-36">
       <div className="flex items-center justify-center">
       <div className="h-16 w-[300px] mt-8 px-3 bg-white rounded-[2rem] flex items-center justify-center gap-8">
            <button
            onClick={handleSenior}
            className={`h-12 w-28 rounded-[2rem] ${teams.senior ? "bg-blue-800 text-white" : ""} font-semibold text-lg uppercase`}>Senior</button>
           
            <button
            onClick={handleJunior}
            className={`h-12 w-28 rounded-[2rem] ${teams.junior ? "bg-blue-800 text-white" : ""} font-semibold text-lg uppercase`}>Junior</button>
        </div>
       </div>
       <div className=" mt-8">
        {teams.senior && <Senior />}
        {teams.junior && <Junior />}
       
       </div>
    </div>
  )
}

export default Matches