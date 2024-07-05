import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export const ExclusiveCollection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <div>
             <h1 className='text-3xl font-bold text-center mt-3 bg-primary-matcolor p-5 rounded-lg'>Exclusive Monsoon Collection</h1>
        <div className='flex flex-col md:flex-row items-center mt-5'>
            <div className='w-full md:w-1/4 mb-5 text-center md:text-left'>
                <h1 className='text-3xl font-bold bg-primary-matcolor p-5 rounded-lg'>Exclusive Monsoon Collection</h1>
                <p className='text-xl mt-2'>Explore a blend of tranquil and refreshing aura with Magicdecor’s enchanting monsoon collection. Infuse monsoon magic into your walls with our wide range of whimsical to alluring wallpaper, awaiting to elevate your space to an enticing abode.</p>
            </div>
            <div className='w-full md:w-3/4 overflow-hidden'>
                <Slider {...settings}>
                    <div className='p-2'>
                        <img className='w-full h-full object-cover object-center rounded-md' src="https://slr-interior.vercel.app/wallwallpepar/31.jpg" alt="Slide 1" />
                        <div className='bg-white text-center p-2'>
                            <p className='text-lg font-semibold'>Krishna Kamdhenu Leela Wallpaper Mural, Customized</p>
                        </div>
                    </div>
                    <div className='p-2'>
                        <img className='w-full h-full object-cover object-center rounded-md' src="https://slr-interior.vercel.app/wallwallpepar/31.jpg" alt="Slide 2" />
                        <div className='bg-white text-center p-2'>
                            <p className='text-lg font-semibold'>Krishna Kamdhenu Leela Wallpaper Mural, Customized</p>
                        </div>
                    </div>
                    <div className='p-2'>
                        <img className='w-full h-full object-cover object-center rounded-md' src="https://slr-interior.vercel.app/wallwallpepar/31.jpg" alt="Slide 3" />
                        <div className='bg-white text-center p-2'>
                            <p className='text-lg font-semibold'>Krishna Kamdhenu Leela Wallpaper Mural, Customized</p>
                        </div>
                    </div>
                    <div className='p-2'>
                        <img className='w-full h-full object-cover object-center rounded-md' src="https://slr-interior.vercel.app/wallwallpepar/31.jpg" alt="Slide 4" />
                        <div className='bg-white text-center p-2'>
                            <p className='text-lg font-semibold'>Krishna Kamdhenu Leela Wallpaper Mural, Customized</p>
                        </div>
                    </div>
                    <div className='p-2'>
                        <img className='w-full h-full object-cover object-center rounded-md' src="https://slr-interior.vercel.app/wallwallpepar/31.jpg" alt="Slide 5" />
                        <div className='bg-white text-center p-2'>
                            <p className='text-lg font-semibold'>Krishna Kamdhenu Leela Wallpaper Mural, Customized</p>
                        </div>
                    </div>
                    <div className='p-2'>
                        <img className='w-full h-full object-cover object-center rounded-md' src="https://slr-interior.vercel.app/wallwallpepar/31.jpg" alt="Slide 6" />
                        <div className='bg-white text-center p-2'>
                            <p className='text-lg font-semibold'>Krishna Kamdhenu Leela Wallpaper Mural, Customized</p>
                        </div>
                    </div>
                    <div className='p-2'>
                        <img className='w-full h-full object-cover object-center rounded-md' src="https://slr-interior.vercel.app/wallwallpepar/31.jpg" alt="Slide 7" />
                        <div className='bg-white text-center p-2'>
                            <p className='text-lg font-semibold'>Krishna Kamdhenu Leela Wallpaper Mural, Customized</p>
                        </div>
                    </div>
                    <div className='p-2'>
                        <img className='w-full h-full object-cover object-center rounded-md' src="https://slr-interior.vercel.app/wallwallpepar/31.jpg" alt="Slide 8" />
                        <div className='bg-white text-center p-2'>
                            <p className='text-lg font-semibold'>Krishna Kamdhenu Leela Wallpaper Mural, Customized</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
        </div>
    );
};

