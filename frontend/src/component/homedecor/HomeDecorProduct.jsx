import React from 'react';

export const HomeDecorProduct = () => {
  const slides = [
    {href:"home-decor-product-buy", src: "https://slr-interior.vercel.app/wallwallpepar/17.jpg", label: "Living Room" },
    {href:"home-decor-product-buy", src: "https://slr-interior.vercel.app/wallwallpepar/17.jpg", label: "Bedroom" },
    {href:"home-decor-product-buy", src: "https://slr-interior.vercel.app/wallwallpepar/17.jpg", label: "Kid Room" },
    {href:"home-decor-product-buy", src: "https://slr-interior.vercel.app/wallwallpepar/17.jpg", label: "Pooja Room" },
    {href:"home-decor-product-buy", src: "https://slr-interior.vercel.app/wallwallpepar/17.jpg", label: "Kitchen Room" },
    {href:"home-decor-product-buy", src: "https://slr-interior.vercel.app/wallwallpepar/17.jpg", label: "Bathroom" },
    {href:"home-decor-product-buy", src: "https://slr-interior.vercel.app/wallwallpepar/17.jpg", label: "Dining Room" },
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

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4'>
        {slides.map((slide, index) => (
            <a href={slide.href}>
          <div key={index} className='flex flex-col items-center p-2'>
            <img className='w-full h-full object-cover object-center rounded-md' src={slide.src} alt={`Slide ${index + 1}`} />
            <p className='text-center mt-2'>{slide.label}</p>
          </div>
            </a>
        ))}
      </div>
    </div>
  );
}
