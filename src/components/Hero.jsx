import React, { useState } from 'react';
import { Link } from 'react-scroll';
import HeroImage from '../assets/Home/Men.png';
import HeroBck from '../assets/Home/HomeBG.png';
import IntroVideo from '../assets/Home/Intro.mp4';
import PlayButton from '../assets/Home/PlayButton.png';
import SocialMedia from './SocialMedia';

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <div
      className="relative flex flex-col items-center justify-between w-full h-[auto] text-white bg-black bg-center bg-cover md:flex-row"
      style={{ backgroundImage: `url(${HeroBck})` }}
    >
      <div className="relative z-10 flex flex-col px-4 pl-10 space-y-4 md:pl-10 md:px-0">
        <div className="absolute top-[-30px] left-[20px] md:top-[-30px] md:left-[20px] flex flex-col justify-center items-start z-10 pl-10">
          <h1
            style={{
              fontSize: '200px',
              fontWeight: 'bold',
              color: 'transparent',
              WebkitTextStroke: '1px #22CD6F',
              textStroke: '1px #22CD6F',
              opacity: '0.5',
              lineHeight: '0.9',
            }}
            className="hidden md:block"
          >
            ADAMS
          </h1>
          <h1
            style={{
              fontSize: '200px',
              fontWeight: 'bold',
              color: 'transparent',
              WebkitTextStroke: '1px #22CD6F',
              textStroke: '1px #22CD6F',
              opacity: '0.5',
              lineHeight: '0.9',
            }}
            className="hidden md:block"
          >
            BAKER
          </h1>
        </div>

        <div className="relative z-10 text-center md:text-left">
          <h1 className="text-[60px] md:text-[190px] font-bold leading-none font-sans text-[#22CD6F]">
            ADAMS <br className="hidden md:block" /> BAKER
          </h1>
        </div>

        <p className="text-lg font-sans uppercase leading-tight font-bold text-[24px] md:text-[36px] z-10 text-center md:text-left">
          Senior Software Engineer of <br className="hidden md:block" /> Legion Code
        </p>

        <div className="z-10 flex items-center justify-center space-x-4 md:justify-start">
        <Link to="contact" smooth={true} duration={500}>
          <button className="bg-[#08D665] text-white uppercase text-lg font-bold px-6 py-3 md:px-8 md:py-4 rounded-[6px] flex items-center">
            Contact Me
          </button>
        </Link>
        <button
          onClick={openVideo}
          className="flex items-center justify-center p-3 border-none" 
        >
          <img
            src={PlayButton}
            alt="Play Video"
            className="w-[55px] h-[55px]" 
          />
        </button>
      </div>

        <div className='flex justify-center mt-4 md:justify-start'>
        <SocialMedia/>
        </div>
      </div>

      <div className="z-10 flex items-center justify-center mt-8">
        <img
          src={HeroImage}
          alt="Hero"
          className="w-[300px] md:w-auto h-auto max-w-full object-center"
        />
      </div>

      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full max-w-4xl p-6 bg-black rounded-md">
            <button
              onClick={closeVideo}
              className="absolute top-0 right-0 px-4 py-2 text-white bg-red-600 hover:bg-red-700"
            >
              X
            </button>
            <div className="flex items-center justify-center">
              <video
                width="100%"
                height="480"
                controls
                autoPlay
              >
                <source src={IntroVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
