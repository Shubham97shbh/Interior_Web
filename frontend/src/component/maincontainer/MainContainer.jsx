import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const MainContainer = () => {
  return (
    <div className="w-full overflow-hidden relative">
      <div className="relative">
        <img
          className="w-full h-[50vh] object-cover object-center"
          src="https://slr-interior.vercel.app/METADATA/blind%20hd.jpeg"
          alt="Slide 1"
        />
        <div className="absolute bottom-4 w-full flex items-center justify-center space-x-4">
          <button className="px-4 py-2 bg-white hover:bg-gray-500 text-black rounded">Premium Wallpapers</button>
          <button className="px-4 py-2 bg-white hover:bg-gray-500 text-black rounded">Wallpaper Rolls</button>
          <button className="px-4 py-2 bg-white hover:bg-gray-500 text-black rounded">Blinds</button>
        </div>
      </div>
    </div>
  );
};
