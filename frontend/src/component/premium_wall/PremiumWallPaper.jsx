import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const PremiumWallPaper = () => {
    return (
        <div>
            <h1 className='text-center bg-primary-matcolor p-5 text-3xl'>Wallpaper</h1>
            <div className="flex flex-col gap-2 items-center mt-5">
                <h1 className='text-center font-sans font-serif text-4xl'>Premium Wallpapers for Walls</h1>
                <p className='text-center font-sans font-serif text-2xl font-antialiased text-gray-400'>Redefine luxury with our premium wallpapers – where walls become works of art.</p>
            </div>
            <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5">
                {/* Product Card 1 */}
                <Link to="singleproduct">
                <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:drop-shadow-custom w-full h-96">
                    <img
                        className="w-full h-full object-cover object-center rounded-md"
                        src="https://slr-interior.vercel.app/wallwallpepar/8.jpg"
                        alt="Wallpaper"
                    />
                    <button className="absolute top-2 right-2 p-1 rounded-full text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Add to wishlist</span>
                        <FaHeart className="h-6 w-6" />
                    </button>
                </div>
                </Link>

                {/* Product Card 2 */}
                <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:drop-shadow-custom w-full h-96">
                    <img
                        className="w-full h-full object-cover object-center rounded-md"
                        src="https://slr-interior.vercel.app/wallwallpepar/12.jpg"
                        alt="Wallpaper"
                    />
                    <button className="absolute top-2 right-2 p-1 rounded-full text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Add to wishlist</span>
                        <FaHeart className="h-6 w-6" />
                    </button>
                </div>

                {/* Product Card 3 */}
                <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:drop-shadow-custom w-full h-96">
                    <img
                        className="w-full h-full object-cover object-center rounded-md"
                        src="https://slr-interior.vercel.app/wallwallpepar/13.jpg"
                        alt="Wallpaper"
                    />
                    <button className="absolute top-2 right-2 p-1 rounded-full text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Add to wishlist</span>
                        <FaHeart className="h-6 w-6" />
                    </button>
                </div>
                {/* console.log(data,"data")shubham97shbh@gmail.com */}
                {/* Product Card 4 */}
                <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:drop-shadow-custom w-full h-96">
                    <img
                        className="w-full h-full object-cover object-center rounded-md"
                        src="https://slr-interior.vercel.app/wallwallpepar/19.jpg"
                        alt="Wallpaper"
                    />
                    <button className="absolute top-2 right-2 p-1 rounded-full text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Add to wishlist</span>
                        <FaHeart className="h-6 w-6" />
                    </button>
                </div>
                <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:drop-shadow-custom w-full h-96">
                    <img
                        className="w-full h-full object-cover object-center rounded-md"
                        src="https://slr-interior.vercel.app/wallwallpepar/8.jpg"
                        alt="Wallpaper"
                    />
                    <button className="absolute top-2 right-2 p-1 rounded-full text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Add to wishlist</span>
                        <FaHeart className="h-6 w-6" />
                    </button>
                </div>
                <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:drop-shadow-custom w-full h-96">
                    <img
                        className="w-full h-full object-cover object-center rounded-md"
                        src="https://slr-interior.vercel.app/wallwallpepar/8.jpg"
                        alt="Wallpaper"
                    />
                    <button className="absolute top-2 right-2 p-1 rounded-full text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Add to wishlist</span>
                        <FaHeart className="h-6 w-6" />
                    </button>
                </div>
                <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:drop-shadow-custom w-full h-96">
                    <img
                        className="w-full h-full object-cover object-center rounded-md"
                        src="https://slr-interior.vercel.app/wallwallpepar/8.jpg"
                        alt="Wallpaper"
                    />
                    <button className="absolute top-2 right-2 p-1 rounded-full text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Add to wishlist</span>
                        <FaHeart className="h-6 w-6" />
                    </button>
                </div>
                <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:drop-shadow-custom w-full h-96">
                    <img
                        className="w-full h-full object-cover object-center rounded-md"
                        src="https://slr-interior.vercel.app/wallwallpepar/8.jpg"
                        alt="Wallpaper"
                    />
                    <button className="absolute top-2 right-2 p-1 rounded-full text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Add to wishlist</span>
                        <FaHeart className="h-6 w-6" />
                    </button>
                </div>
                <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:drop-shadow-custom w-full h-96">
                    <img
                        className="w-full h-full object-cover object-center rounded-md"
                        src="https://slr-interior.vercel.app/wallwallpepar/8.jpg"
                        alt="Wallpaper"
                    />
                    <button className="absolute top-2 right-2 p-1 rounded-full text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Add to wishlist</span>
                        <FaHeart className="h-6 w-6" />
                    </button>
                </div>
                <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:drop-shadow-custom w-full h-96">
                    <img
                        className="w-full h-full object-cover object-center rounded-md"
                        src="https://slr-interior.vercel.app/wallwallpepar/8.jpg"
                        alt="Wallpaper"
                    />
                    <button className="absolute top-2 right-2 p-1 rounded-full text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Add to wishlist</span>
                        <FaHeart className="h-6 w-6" />
                    </button>
                </div>
            </div>
            <div className="flex justify-center mt-5">
                <Link to="/premiumwallpaper">
                    <button className="bg-transparent mx-auto hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        View
                    </button>
                </Link>
            </div>
        </div>
    );
};
