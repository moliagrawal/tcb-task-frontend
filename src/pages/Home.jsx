import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import img1 from '../assets/img1.svg';
import img2 from '../assets/img2.svg';
import img3 from '../assets/img3.svg';
import img4 from '../assets/img4.svg';
import img5 from '../assets/img5.svg';
import img6 from '../assets/img6.svg';
import img7 from '../assets/img7.svg';
import img8 from '../assets/img8.svg';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/inspiration');  
  };

  return (
    <div className="flex flex-col items-center px-6 py-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl lg:text-5xl font-bold">Discover the Beauty Around the World</h1>
        <p className="text-gray-600 max-w-md mx-auto">
          Explore breathtaking landscapes, vibrant cultures, and unique experiences. Whether you're planning your next adventure or seeking inspiration, our collection of stunning images will ignite your wanderlust.
        </p>
        <button
          onClick={handleGetStarted}
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          Explore
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
        <img src={img1} alt="Mountain Landscape" className="w-full h-auto rounded-lg object-cover transform transition-transform duration-300 hover:scale-105" />
        <img src={img2} alt="Beach Sunrise" className="w-full h-auto rounded-lg object-cover transform transition-transform duration-300 hover:scale-105" />
        <img src={img3} alt="Forest Trail" className="w-full h-auto rounded-lg object-cover transform transition-transform duration-300 hover:scale-105" />
        <img src={img4} alt="City Skyline" className="w-full h-auto rounded-lg object-cover transform transition-transform duration-300 hover:scale-105" />
        <img src={img5} alt="Desert Dunes" className="w-full h-auto rounded-lg object-cover transform transition-transform duration-300 hover:scale-105" />
        <img src={img6} alt="Waterfall" className="w-full h-auto rounded-lg object-cover transform transition-transform duration-300 hover:scale-105" />
        <img src={img7} alt="Lavender Field" className="w-full h-auto rounded-lg object-cover transform transition-transform duration-300 hover:scale-105" />
        <img src={img8} alt="Snowy Mountains" className="w-full h-auto rounded-lg object-cover transform transition-transform duration-300 hover:scale-105" />
      </div>
    </div>
  );
};

export default Home;
