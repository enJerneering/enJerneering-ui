import React from 'react';

interface HeroHeaderProps {
  // Define any props you need here
}

const HeroHeader: React.FC<HeroHeaderProps> = (props) => {
  return (
    <div className="relative">
      <video className="w-full h-auto opacity-60" autoPlay loop muted>
        <source src="/videos/laser-resurfacing.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-8">
        <h1 className="text-6xl font-bold mb-4 text-center text-white">Let Your Inner Light Shine</h1>
        <p className="text-lg mb-8 text-center">We combine a relaxing spa environment with medical-grade procedures and therapies to help you achieve your desired outcomes!</p>
        <div className="flex space-x-4">
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded">Book an Appointment</button>
          <button className="border border-white hover:bg-white hover:text-black px-4 py-2 rounded">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
