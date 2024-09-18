import { useState } from "react";
import Senior from "./Senior";
import Ladies from "./Ladies";
import Junior from "./Junior";

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
    const handleLadies = ()=>{
        setTeams({
            senior: false,
            ladies: true,
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
    <div className="relative h-[2000px] bg-gray-800">
        <div className="h-16 w-[400px] absolute left-[50%] -translate-x-[50%] top-8 px-3 bg-white rounded-[2rem] flex items-center gap-8">
            <button
            onClick={handleSenior}
            className={`h-12 w-28 rounded-[2rem] ${teams.senior ? "bg-lime-400" : ""} font-semibold text-lg uppercase`}>Senior</button>
            <button
            onClick={handleLadies}
            className={`h-12 w-28 rounded-[2rem] ${teams.ladies ? "bg-lime-400" : ""} font-semibold text-lg uppercase`}>Ladies</button>
            <button
            onClick={handleJunior}
            className={`h-12 w-28 rounded-[2rem] ${teams.junior ? "bg-lime-400" : ""} font-semibold text-lg uppercase`}>Junior</button>
        </div>
       <div className=" absolute top-28 left-24">
        {teams.senior && <Senior />}
        {teams.ladies && <Ladies />}
        {teams.junior && <Junior />}
       
       </div>
    </div>
  )
}

export default Matches