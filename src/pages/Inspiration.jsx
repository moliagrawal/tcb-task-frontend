import React from 'react';
import { useNavigate } from 'react-router-dom';
import inspiration from '../assets/inspiration.svg';

const Inspiration = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-6 py-12">
      <div className="flex-1">
        <img 
          src={inspiration} 
          alt="Inspiration" 
          className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105" 
        />
      </div>

      <div className="flex-1 space-y-6 mt-8 lg:mt-0 lg:ml-12 lg:pr-8">
        <h1 className="text-3xl lg:text-5xl font-bold">Exploration and Inspiration</h1>
        <p className="text-gray-600 max-w-sm">
          Discover breathtaking landscapes and creative ideas that inspire adventure and creativity. Whether you’re hiking in the mountains or brainstorming the next big idea, find the motivation to explore more.
        </p>
        <button
          onClick={handleExploreClick}
          className="px-4 py-2 bg-black text-white rounded-lg transition-colors duration-300 hover:bg-gray-800"
        >
          Back to Home
        </button>

        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">01. Nature’s Wonders</h2>
            <p className="text-gray-600">
              From towering peaks to lush valleys, nature provides an endless source of inspiration. Explore places where beauty meets serenity, and discover the profound impact the natural world can have on your creativity.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">02. Creative Horizons</h2>
            <p className="text-gray-600">
              Unleash your imagination by immersing yourself in new experiences. Let your mind wander beyond limits, and transform the everyday into something extraordinary. The world is full of creative potential waiting to be discovered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
