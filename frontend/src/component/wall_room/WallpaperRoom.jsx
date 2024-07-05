import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export const WallpaperRoom = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
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

    const slide = [
        { src: "https://slr-interior.vercel.app/wallwallpepar/105.jpg", label: "Living Room" },
        { src: "https://slr-interior.vercel.app/wallwallpepar/105.jpg", label: "Bedroom" },
        { src: "https://slr-interior.vercel.app/wallwallpepar/105.jpg", label: "Kid Room" },
        { src: "https://slr-interior.vercel.app/wallwallpepar/105.jpg", label: "Pooja Room" },
        { src: "https://slr-interior.vercel.app/wallwallpepar/105.jpg", label: "Kitchen Room" },
        { src: "https://slr-interior.vercel.app/wallwallpepar/105.jpg", label: "Bathroom" },
        { src: "https://slr-interior.vercel.app/wallwallpepar/105.jpg", label: "Dining Room" },
    ]
    return (
        <div>
            <div className="flex flex-col text-center mb-6">
                <h1 className='text-3xl font-bold mt-3  font-serif bg-primary-matcolor p-5 rounded-full'>Shop Premium Wallpapers By Room
                </h1>
                <p className='text-center font-sans font-serif text-2xl font-antialiased text-gray-400'>Explore our collection of room centric wallpapers</p>
            </div>
            <div className='w-full overflow-hidden'>
                <Slider {...settings} className='slick-slider-custom'>
                    {
                        slide?.map((slides) => (
                            <div className='p-2'>
                                <img className='w-full h- object-cover object-center rounded-md' src={slides.src} alt="Slide 1" />
                                <p className='text-center mt-2'>{slides.label}</p>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}
