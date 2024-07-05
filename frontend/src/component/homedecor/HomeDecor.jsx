import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export const HomeDecor = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    { href:"home-decor-product", src: "https://slr-interior.vercel.app/wallwallpepar/17.jpg", label: "Premium Wallpapers" },
    { href:"home-decor-product", src: "https://slr-interior.vercel.app/wallwallpepar/17.jpg", label: "Wallpaper Rolls" },
    { href:"home-decor-product", src: "https://slr-interior.vercel.app/wallwallpepar/17.jpg", label: "Blinds" },
    { href:"home-decor-product", src: "https://slr-interior.vercel.app/wallwallpepar/17.jpg", label: "Canvas Prints" },
    { href:"home-decor-product", src: "https://slr-interior.vercel.app/wallwallpepar/17.jpg", label: "Kitchen Room" },
    { href:"home-decor-product", src: "https://slr-interior.vercel.app/wallwallpepar/17.jpg", label: "Bathroom" },
    { href:"home-decor-product", src: "https://slr-interior.vercel.app/wallwallpepar/17.jpg", label: "Dining Room" },
  ];

  return (
    <div className="overflow-hidden p-4">
      <div className="flex flex-col text-center mb-6">
        <h1 className='text-3xl font-bold mt-3 bg-primary-matcolor p-5 rounded-full'>
          Elevate Your Space With Our Home Decor Items
        </h1>
        <p className='font-serif text-2xl text-gray-400'>
          Design, Define and Transform.
        </p>
      </div>

      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className='p-2'>
            <a href={slide.href}>
            <img className='w-full h-full object-cover object-center rounded-md' src={slide.src} alt={`Slide ${index + 1}`} />
            <p className='text-center mt-2'>{slide.label}</p>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};
