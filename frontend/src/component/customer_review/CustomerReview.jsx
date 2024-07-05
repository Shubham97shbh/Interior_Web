import React from 'react';
import { FaStar } from 'react-icons/fa'; // Uncomment if using these icons

export const CustomerReview = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 items-center mt-5">
        <h1 className='text-center font-sans font-serif text-4xl'>Customer Reviews</h1>
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5'>
        {/* Product Card 1 */}
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-64 object-cover object-center" src="https://cdn.pixabay.com/photo/2019/06/09/06/50/table-4261549_1280.jpg" alt='Wallpaper' />
        
         
          <div className="p-4">
            <div className='flex justify-between'>
            <h3 className="text-xl font-bold">John Doe</h3>
            <div className="flex items-center mt-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
            </div>
            <p className="mt-2 text-gray-600">Affordable price and great service quality.</p>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-64 object-cover object-center" src="https://cdn.pixabay.com/photo/2019/06/09/06/50/table-4261549_1280.jpg" alt='Wallpaper' />
          
        
          <div className="p-4">
          <div className='flex justify-between'>
            <h3 className="text-xl font-bold">Jane Smith</h3>
            <div className="flex items-center mt-1">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
            </div>
            <p className="mt-2 text-gray-600">Excellent service quality and beautiful designs.</p>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-64 object-cover object-center" src="https://cdn.pixabay.com/photo/2019/06/09/06/50/table-4261549_1280.jpg" alt='Wallpaper' />
         
         
          <div className="p-4">
          <div className='flex justify-between'>
            <h3 className="text-xl font-bold">Michael Johnson</h3>
            <div className="flex items-center mt-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
            </div>
            <p className="mt-2 text-gray-600">Great quality and fast delivery.</p>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-64 object-cover object-center" src="https://cdn.pixabay.com/photo/2019/06/09/06/50/table-4261549_1280.jpg" alt='Wallpaper' />
          
         
          <div className="p-4">
          <div className='flex justify-between'>
            <h3 className="text-xl font-bold">Emily Davis</h3>
            <div className="flex items-center mt-1">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
            </div>
            <p className="mt-2 text-gray-600">Affordable price and stylish designs.</p>
          </div>
        </div>
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-64 object-cover object-center" src="https://cdn.pixabay.com/photo/2019/06/09/06/50/table-4261549_1280.jpg" alt='Wallpaper' />
          
         
          <div className="p-4">
          <div className='flex justify-between'>
            <h3 className="text-xl font-bold">Emily Davis</h3>
            <div className="flex items-center mt-1">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
            </div>
            <p className="mt-2 text-gray-600">Affordable price and stylish designs.</p>
          </div>
        </div>
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-64 object-cover object-center" src="https://cdn.pixabay.com/photo/2019/06/09/06/50/table-4261549_1280.jpg" alt='Wallpaper' />
          
         
          <div className="p-4">
          <div className='flex justify-between'>
            <h3 className="text-xl font-bold">Emily Davis</h3>
            <div className="flex items-center mt-1">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
            </div>
            <p className="mt-2 text-gray-600">Affordable price and stylish designs.</p>
          </div>
        </div>
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-64 object-cover object-center" src="https://cdn.pixabay.com/photo/2019/06/09/06/50/table-4261549_1280.jpg" alt='Wallpaper' />
          
         
          <div className="p-4">
          <div className='flex justify-between'>
            <h3 className="text-xl font-bold">Emily Davis</h3>
            <div className="flex items-center mt-1">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
            </div>
            <p className="mt-2 text-gray-600">Affordable price and stylish designs.</p>
          </div>
        </div>
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-64 object-cover object-center" src="https://cdn.pixabay.com/photo/2019/06/09/06/50/table-4261549_1280.jpg" alt='Wallpaper' />
          
         
          <div className="p-4">
          <div className='flex justify-between'>
            <h3 className="text-xl font-bold">Emily Davis</h3>
            <div className="flex items-center mt-1">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
            </div>
            <p className="mt-2 text-gray-600">Affordable price and stylish designs.</p>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center mt-5">
        <button className="bg-transparent mx-auto hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          View More
        </button>
      </div> */}
    </div>
  );
}
