import React from 'react'
import { FaHeart } from 'react-icons/fa6'

export const Product = () => {
  return (
    <div>
    <div className="flex flex-col gap-2 items-center mt-5">
         <h1 className='text-center font-sans font-serif text-4xl'>Premium Wallpapers for Walls</h1>
         <p className='text-center font-sans font-serif text-2xl font-antialiased text-gray-400'>Redefine luxury with our premium wallpapers – where walls become works of art.</p>
     </div>

     <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5'>
         {/* Product Card 1 */}
         <div className="relative bg-white rounded-lg shadow-md overflow-hidden drop-shadow-custom">
             <img className="w-full h-64 object-cover object-center" src="https://slr-interior.vercel.app/wallwallpepar/8.jpg" alt='Wallpaper' />
             <button className="absolute top-2 right-2 p-1 rounded-full text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                 <span className="sr-only">Add to wishlist</span>
                 <FaHeart className="h-6 w-6" />
             </button>
             <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                 <h2 className="text-lg font-semibold">Premium Wallpaper 1</h2>
             </div>
         </div>

         {/* Product Card 2 */}
         <div className="relative bg-white rounded-lg shadow-md overflow-hidden" style={{ filter: 'drop-shadow(2px 4px 6px black)' }}>
             <img className="w-full h-64 object-cover object-center" src="https://slr-interior.vercel.app/wallwallpepar/8.jpg" alt='Wallpaper' />
             <button className="absolute top-2 right-2 p-1 rounded-full text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                 <span className="sr-only">Add to wishlist</span>
                 <FaHeart className="h-6 w-6" />
             </button>
             <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                 <h2 className="text-lg font-semibold">Premium Wallpaper 2</h2>
             </div>
         </div>

         {/* Product Card 3 */}
         <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:drop-shadow-custom transition-all duration-300">
            <img 
                className="w-full h-64 object-cover object-center transform transition-transform duration-300 hover:scale-105" 
                src="https://slr-interior.vercel.app/wallwallpepar/8.jpg" 
                alt="Wallpaper" 
            />
            <button className="absolute top-2 right-2 p-1 rounded-full text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">Add to wishlist</span>
                <FaHeart className="h-6 w-6" />
            </button>
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                <h2 className="text-lg font-semibold">Premium Wallpaper 1</h2>
            </div>
        </div>

         {/* Product Card 4 */}
         <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
             <img className="w-full h-64 object-cover object-center" src="https://slr-interior.vercel.app/wallwallpepar/8.jpg" alt='Wallpaper' />
             <button className="absolute top-2 right-2 p-1 rounded-full text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                 <span className="sr-only">Add to wishlist</span>
                 <FaHeart className="h-6 w-6" />
             </button>
             <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                 <h2 className="text-lg font-semibold">Premium Wallpaper 4</h2>
             </div>
         </div>
         <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
             <img className="w-full h-64 object-cover object-center" src="https://slr-interior.vercel.app/wallwallpepar/8.jpg" alt='Wallpaper' />
             <button className="absolute top-2 right-2 p-1 rounded-full text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                 <span className="sr-only">Add to wishlist</span>
                 <FaHeart className="h-6 w-6" />
             </button>
             <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                 <h2 className="text-lg font-semibold">Premium Wallpaper 4</h2>
             </div>
         </div>
         <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
             <img className="w-full h-64 object-cover object-center" src="https://slr-interior.vercel.app/wallwallpepar/8.jpg" alt='Wallpaper' />
             <button className="absolute top-2 right-2 p-1 rounded-full text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                 <span className="sr-only">Add to wishlist</span>
                 <FaHeart className="h-6 w-6" />
             </button>
             <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                 <h2 className="text-lg font-semibold">Premium Wallpaper 4</h2>
             </div>
         </div>
         <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
             <img className="w-full h-64 object-cover object-center" src="https://slr-interior.vercel.app/wallwallpepar/8.jpg" alt='Wallpaper' />
             <button className="absolute top-2 right-2 p-1 rounded-full text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                 <span className="sr-only">Add to wishlist</span>
                 <FaHeart className="h-6 w-6" />
             </button>
             <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                 <h2 className="text-lg font-semibold">Premium Wallpaper 4</h2>
             </div>
         </div>
         <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
             <img className="w-full h-64 object-cover object-center" src="https://slr-interior.vercel.app/wallwallpepar/8.jpg" alt='Wallpaper' />
             <button className="absolute top-2 right-2 p-1 rounded-full text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                 <span className="sr-only">Add to wishlist</span>
                 <FaHeart className="h-6 w-6" />
             </button>
             <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                 <h2 className="text-lg font-semibold">Premium Wallpaper 4</h2>
             </div>
         </div>
     </div>
     <div className="flex justify-center mt-5">
         <button className="bg-transparent mx-auto hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
             View
         </button>
     </div>
 </div>
  )
}
