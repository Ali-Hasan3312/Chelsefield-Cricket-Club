interface TeamsProps {
    teamImage1: string;
    teamImage2: string;
    captainImage: string;
    captainName: string;
    teamName: string;
    captainEmail: string;
    captainPhone: string;
  }
  
  const Teams = ({
    teamImage1,
    teamImage2,
    captainImage,
    captainName,
    teamName,
    captainEmail,
    captainPhone,
  }: TeamsProps) => {
    return (
      <div className="w-full bg-gray-800">
        {/* Team Image as Background */}
        <div
          className="w-full h-[60vh] bg-cover bg-top"
          style={{ backgroundImage: `url(${teamImage1})` }}
        >
          <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white">{teamName}</h1>
          </div>
        </div>
  
        {/* Team Content */}
        <div className="flex flex-col items-center gap-8 max-sm:flex-col py-12">
          <h1 className="text-4xl font-semibold text-white text-center">Meet the Team</h1>
  
          {/* Captain Section */}
          <div className="flex w-[90%] max-sm:w-full mx-auto gap-8 max-sm:flex-col bg-gray-900 shadow-lg rounded-lg overflow-hidden">
           
            {/* Captain Image and Content */}
            <div className="w-[60%] max-sm:w-full p-8 text-gray-200 flex flex-col gap-4">
              <img
                src={captainImage}
                alt={`${captainName}`}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h2 className="text-3xl font-bold mb-4">{captainName}</h2>
              <p className="text-lg">
                {captainName} is the team captain, leading the squad with passion, dedication, and years
                of experience. He plays a vital role in mentoring the team and bringing out the best in
                every player. Under his leadership, the team has developed into a strong, competitive
                unit.
              </p>
              <p className="mt-4">
                The team, comprising players of diverse skill levels, shares a deep love for cricket.
                We compete with enthusiasm, aiming for success in every match, whether it's a league
                game or a friendly.
              </p>
              {/* Contact Details */}
              <div className="mt-4">
                <h3 className="text-2xl font-semibold">Captain's Contact</h3>
                <p>Email: <a href={`mailto:${captainEmail}`} className="text-blue-500">{captainEmail}</a></p>
                <p>Phone: <a href={`tel:${captainPhone}`} className="text-blue-500">{captainPhone}</a></p>
              </div>
            </div>
            {/* Team Images */}
            <div className="w-[40%] max-sm:w-[90%] mx-auto">
              <img
                src={teamImage2}
                alt="Team Image 1"
                className="w-full max-sm:rounded-lg h-full object-cover mb-4"
              />
             
            </div>
  
           
          </div>
        </div>
      </div>
    );
  };
  
  export default Teams;
  