import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Project1 from '../assets/Certificate/Certificate.png';
import AboutBack from '../assets/About/AboutBack.png';

const Certificate = ({ onViewMore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const certificates = [
    { id: 1, title: 'Sample Certificate 1', date: '15 July 2024' },
    { id: 2, title: 'Sample Certificate 2', date: '15 July 2024' },
    { id: 3, title: 'Sample Certificate 3', date: '15 July 2024' },
    { id: 4, title: 'Sample Certificate 4', date: '16 August 2024' },
    { id: 5, title: 'Sample Certificate 5', date: '20 September 2024' },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const getVisibleCertificates = () => {
    return isMobile
      ? [certificates[currentIndex]]
      : certificates.slice(currentIndex, currentIndex + 3).concat(
          certificates.slice(0, Math.max(0, 3 - (certificates.length - currentIndex)))
        );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='relative flex flex-col h-auto p-4 mt-8 bg-black bg-center bg-cover ' style={{ backgroundImage: `url(${AboutBack})` }}>
      <div className='flex flex-row items-center justify-between p-4 pt-10'>
        <div className='relative flex flex-grow flex-wrap w-full md:w-[800px]'>
          <h1
            className="absolute top-[-30px] text-5xl md:text-8xl font-bold opacity-60 uppercase select-none"
            style={{
              WebkitTextStroke: '0.5px #08D665',
              color: 'transparent',
            }}
          >
            Certificates
          </h1>
          <div className="relative z-10">
            <p className="text-2xl md:text-4xl text-[#08D665] font-bold uppercase">My Achievements</p>
            <h2 className="text-3xl md:text-6xl text-[#ffffff] font-bold uppercase">Certificates</h2>
          </div>
        </div>
        <div className='flex flex-row items-center gap-4'>
          <button onClick={handlePrev} className='w-10 h-10 rounded-[5px] border border-[#08D665] text-white flex justify-center items-center'>
            <FaChevronLeft />
          </button>
          <button onClick={handleNext} className='w-10 h-10 rounded-[5px] border border-[#08D665] text-white flex justify-center items-center'>
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className='flex flex-row items-center justify-center gap-8 px-4'>
        {getVisibleCertificates().map((cert, index) => (
          <div key={index} className='flex flex-grow flex-col h-auto bg-[#0B0D0E] border justify-center border-[#08D665]'>
            <img className='p-4' src={Project1} alt={cert.title} />
            <h1 className='text-2xl text-center md:text-3xl font-bold text-[#08D665] uppercase'>{cert.title}</h1>
            <h1 className='text-xl text-center md:text-l font-bold text-[#ffffff] uppercase mb-4'>{cert.date}</h1>
          </div>
        ))}
      </div>
      <button 
        onClick={onViewMore}
        className="text-2xl px-4 flex justify-end mt-4 md:text-2xl text-[#08D665] font-bold uppercase underline">
        View More
      </button>
    </div>
  );
};

export default Certificate;