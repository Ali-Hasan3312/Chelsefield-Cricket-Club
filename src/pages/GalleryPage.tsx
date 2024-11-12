import galleryImage3 from "../assets/HeroSectionImages/fourthImage.jpg";
import image1 from "../assets/Our Gallery/image1.jpg";
import image10 from "../assets/Our Gallery/image10.jpg";
import image11 from "../assets/Our Gallery/image11.jpg";
import image12 from "../assets/Our Gallery/image12.jpg";
import image13 from "../assets/Our Gallery/image13.jpg";
import image15 from "../assets/Our Gallery/image15.jpg";
import image16 from "../assets/Our Gallery/image16 New.jpg";
import image18 from "../assets/Our Gallery/image18.jpg";
import image19 from "../assets/Our Gallery/image19.jpg";
import image2 from "../assets/Our Gallery/image2.jpg";
import image20 from "../assets/Our Gallery/image20.jpg";
import image3 from "../assets/Our Gallery/image3.jpg";
import image4 from "../assets/Our Gallery/image4.jpg";
import image5 from "../assets/Our Gallery/image5.jpg";
import image6 from "../assets/Our Gallery/image6.jpg";
import image7 from "../assets/Our Gallery/image7.jpg";
import image8 from "../assets/Our Gallery/image8.jpg";
import image9 from "../assets/Our Gallery/image9.jpg";

import Gallery from '../components/Gallery'; // Import the Gallery component

const GalleryPage = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image15,
    image16,
    image18,
    image19,
    image20,
  ]; // imore images as needed

  return (
    <div className="w-full bg-gray-100 pb-12">
      {/* Background Image Section */}
      <div
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${galleryImage3})` }} // Replace with the image you want to use
      >
         <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="md:text-[60px] absolute top-20 lg:top-12 text-[40px] uppercase text-center z-10 font-bold text-white">
          Our Gallery
        </h1>
      </div>

      {/* Paragraph below the image */}
      <div className="w-[90%] mx-auto my-12 text-center">
        <p className="text-lg text-gray-600">
          Explore the moments that define our cricket journey at Chelsfield Cricket Club. From intense matches 
          to team celebrations, this gallery captures the spirit and dedication of our players and the camaraderie 
          that unites us as a team. Enjoy browsing through photos of our teams, players, and memorable events.
        </p>
      </div>

      {/* Gallery Images */}
      <Gallery images={images} />
    </div>
  );
};

export default GalleryPage;
