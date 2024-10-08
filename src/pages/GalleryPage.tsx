import React from 'react';
import Gallery from './Gallery'; // Import the Gallery component
import teamImage1 from '../assets/team1.jpg'; // Replace with actual paths
import teamImage2 from '../assets/team2.jpg';
import playerImage1 from '../assets/player1.jpg';
import playerImage2 from '../assets/player2.jpg';

const GalleryPage = () => {
  const images = [teamImage1, teamImage2, playerImage1, playerImage2]; // Add more images as needed

  return (
    <div className="w-full bg-gray-100 py-12">
      {/* Gallery Page Content */}
      <div className="w-[90%] mx-auto mb-12 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Our Gallery</h1>
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
