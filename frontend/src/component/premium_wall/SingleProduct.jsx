import React, { useState } from 'react';

export const SingleProduct = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [area, setArea] = useState(0);
  const pricePerSqFt = 99;
  
  const calculateArea = () => {
    const calculatedArea = (width / 12) * (height / 12); // converting inches to feet
    setArea(calculatedArea.toFixed(2));
  };

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2">
          <img
            className="w-full h-auto rounded-lg shadow-md"
            src="https://slr-interior.vercel.app/wallwallpepar/8.jpg"
            alt="Wall Wallpaper"
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-8 md:w-1/2">
          <div className="bg-white p-4 rounded-lg shadow-2xl">
            <h1 className="text-2xl font-bold mb-2">Krishna Pichwai Wallpaper</h1>
            <p className="text-lg text-gray-700 mb-4">₹109.00 ₹{pricePerSqFt}.00/sq.ft.</p>
          </div>
          <div className="mt-4 p-4 bg-white rounded-lg shadow-2xl">
            <p className="text-xl font-semibold mb-4">Wall Size</p>
            <div className="mb-4 flex space-x-4">
              <div className="w-1/2">
                <label className="block mb-2 font-medium">Width (in inches):</label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <label className="block mb-2 font-medium">Height (in inches):</label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
            </div>
            <button
              className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              onClick={calculateArea}
            >
              Calculate Area
            </button>
            <p className="mt-2 text-lg">Area: {area} sq.ft.</p>
          </div>
          <div className="mt-4 p-4 bg-white rounded-lg shadow-2xl">
            <p className="text-lg font-semibold">Total Amount</p>
            <p className="text-2xl font-bold">₹{(area * pricePerSqFt).toFixed(2)}</p>
          </div>
          <div className="flex justify-between mt-4">
            <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
              Add to Cart
            </button>
            <button className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75">
              Order a Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
