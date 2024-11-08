import { useState } from "react";
import groundWork from "../assets/News/Groun Work.jpg";
import indoorleague from "../assets/News/Indoor New.jpg";
import ManOfMatch from "../assets/News/Man of the match.jpg";
import FourthNews from "../assets/News/fourth News.jpg";
const News = () => {
  const [isOpen, setIsOpen] = useState(false); // Track modal state
  const [activeImage, setActiveImage] = useState<string | null>(null); // Track active image

  const openModal = (imageSrc: string) => {
    setActiveImage(imageSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveImage(null);
  };

  const handleClickOutside = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <div className="w-full py-8 bg-white">
      <h1 className="text-2xl uppercase font-semibold text-center pt-4 tracking-wider">
        All News
      </h1>
      <div className="w-[80%] bg-white mx-auto mt-8">
       
        {/* News Item 1 */}
        <div className="mt-4">
          
          <div className="flex max-sm:flex-col mt-4 gap-4">
            <img
              className=" w-full h-[180px] lg:h-[200px] md:w-[28%]  object-cover cursor-pointer"
              src={FourthNews}
              alt=""
              onClick={() => openModal(FourthNews)} // Open modal on click
            />
            <div className="flex flex-col gap-4 w-full md:w-[72%]">
              <h3 className="text-sm uppercase">Latest News</h3>
              <h2 className="text-lg font-medium">
              Exciting News for Chelsfield CC!
              </h2>
              <p className="text-sm">
              CCC 3s will compete in the Kent Cricket League starting May 2025! We've secured Norton Sports Club as our new home ground and are thrilled about the partnership. Join us next season to support ‘The Hunters,’ our newly named 3rd XI, as we aim for another fantastic year. Let’s make 2025 unforgettable!
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <hr />
          <div className="flex max-sm:flex-col mt-4 gap-4">
            <img
              className="h-[180px] w-full md:w-[28%] object-cover cursor-pointer"
              src={indoorleague}
              alt="Indoor League"
              onClick={() => openModal(indoorleague)} // Open modal on click
            />
            <div className="flex flex-col gap-4 w-full md:w-[72%]">
              <h3 className="text-sm uppercase">Latest News</h3>
              <h2 className="text-lg font-medium">
                CCC first year in Indoor Cricket League
              </h2>
              <p className="text-sm">
                Chelsfield Cricket Club is thrilled to join the Indoor Cricket
                League for the first time. Our team is eager to compete, develop
                new strategies, and engage with fans in this exciting new arena.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <hr />
          <div className="flex max-sm:flex-col mt-4 gap-4">
            <img
              className="h-[180px] md:w-[28%] w-full object-cover cursor-pointer"
              src={groundWork}
              alt="Ground Work"
              onClick={() => openModal(groundWork)} // Open modal on click
            />
            <div className="flex flex-col gap-4 md:w-[72%] w-full">
              <h4 className="text-sm uppercase">Latest News</h4>
              <h2 className="text-lg font-medium">
                Ground work started for 2025 season
              </h2>
              <p className="text-sm">
                We are excited to announce that groundwork for the 2025 season
                has officially commenced. Our team is dedicated to enhancing
                training programs, upgrading facilities, and recruiting new
                talent to ensure a successful and competitive year ahead.
              </p>
            </div>
          </div>
        
        </div>
        <div className="mt-4">
        <hr />
          <div className="flex max-sm:flex-col mt-4 gap-4">
            <img
              className="h-[180px] w-full md:w-[28%] object-cover cursor-pointer"
              src={ManOfMatch}
              alt="Man of the Match"
              onClick={() => openModal(ManOfMatch)} // Open modal on click
            />
            <div className="flex flex-col gap-4 w-full md:w-[72%]">
              <h4 className="text-sm uppercase">Latest News</h4>
              <h2 className="text-lg font-medium">Man of the Match</h2>
              <p className="text-sm">
                Congratulations to our Man of the Match for the Sam Memorial
                Match! The outstanding performance on the field helped secure a
                memorable victory.
              </p>
            </div>
          </div>
        </div>

        {/* News Item 2 */}
       

        {/* News Item 3 */}
       
        
        <hr className="mt-4" />

      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 modal-overlay"
          onClick={handleClickOutside}
        >
          <div className="relative">
            <img
              src={activeImage!}
              alt="Active"
              className="max-w-full max-h-screen"
            />
            <button
              className="absolute top-2 right-2 text-white bg-black rounded-full p-2"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}

    
    </div>
  );
};

export default News;
