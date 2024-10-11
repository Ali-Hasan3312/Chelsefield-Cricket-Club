import React from 'react';

interface GalleryProps {
  images: string[]; // Array of image URLs for the gallery
}


const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="w-full bg-gray-100 py-12">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">Gallery</h1>
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div key={index} className="w-full h-64 bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: `url(${image})` }}>
            {/* <div className="bg-black bg-opacity-40 w-full h-full flex items-center justify-center rounded-lg">
             
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
