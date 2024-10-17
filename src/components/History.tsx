import { useState } from "react";
import { Link } from "react-router-dom";
import oldPavilion from "../assets/Old_Pavilion.jpg";
import clubHistory from "../assets/club history.jpg";

const History = () => {
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
    <div className="w-full bg-white pt-8">
      <h1 className="text-2xl uppercase font-semibold text-center pt-4 tracking-wider">
        Club History
      </h1>
      <div className="flex max-sm:flex-col md:gap-8 gap-2 items-center justify-center mt-8 md:w-[80%] w-[90%] mx-auto">
        {/* Section 1 */}
        <div className="h-[400px] md:w-[500px] w-full mx-auto flex flex-col gap-3 text-center">
          <img
            className="h-[230px] w-[500px] mx-auto cursor-pointer"
            src={clubHistory}
            alt="Club History"
            onClick={() => openModal(clubHistory)} // Open modal on click
          />
          <Link to={"club-history"} className="text-lg font-semibold">
            Cricket in Chelsefield
          </Link>
          <p className="text-sm">
            Founded in 1731, Chelsfield Cricket Club is one of the region's
            oldest clubs. From its origins as a village team, it has grown
            through community support and resilience, relocating and expanding
            over the centuries.
          </p>
        </div>

        {/* Section 2 */}
        <div className="h-[400px] md:w-[500px] w-full mx-auto flex flex-col gap-3 text-center">
          <img
            className="h-[230px] w-[500px] mx-auto cursor-pointer"
            src={oldPavilion}
            alt="Old Pavilion"
            onClick={() => openModal(oldPavilion)} // Open modal on click
          />
          <span className="text-lg font-semibold">History of the Old Pavilion</span>
          <p className="text-sm">
            The old pavilion at Chelsefield Cricket Club has been a historic
            symbol of the club's legacy. For many years, it served as the heart
            of the club, hosting players and supporters alike, and continues to
            hold a special place in our memories.
          </p>
        </div>
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

export default History;
