import React, { useState } from 'react';
import Project1 from '../assets/Certificate/Certificate.png';
import AboutBack from '../assets/About/AboutBack.png';
import Footer from './Footer';

const MoreCertificate = () => {
  const certificates = [
    { id: 1, title: 'Sample Certificate 1', date: '15 July 2024', image: Project1 },
    { id: 2, title: 'Sample Certificate 2', date: '15 July 2024', image: Project1 },
    { id: 3, title: 'Sample Certificate 3', date: '15 July 2024', image: Project1 },
    { id: 4, title: 'Sample Certificate 4', date: '16 August 2024', image: Project1 },
    { id: 5, title: 'Sample Certificate 5', date: '20 September 2024', image: Project1 },
    { id: 6, title: 'Sample Certificate 6', date: '12 October 2024', image: Project1 },
    { id: 7, title: 'Sample Certificate 7', date: '10 November 2024', image: Project1 },
    { id: 8, title: 'Sample Certificate 8', date: '25 November 2024', image: Project1 },
    { id: 9, title: 'Sample Certificate 9', date: '5 December 2024', image: Project1 },
    { id: 10, title: 'Sample Certificate 9', date: '5 December 2024', image: Project1 },
    { id: 11, title: 'Sample Certificate 9', date: '5 December 2024', image: Project1 },
    { id: 12, title: 'Sample Certificate 9', date: '5 December 2024', image: Project1 },
    { id: 13, title: 'Sample Certificate 9', date: '5 December 2024', image: Project1 },
    { id: 14, title: 'Sample Certificate 9', date: '5 December 2024', image: Project1 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6; 

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = certificates.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(certificates.length / cardsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='relative flex flex-col h-auto p-4 bg-black bg-center bg-cover' style={{ backgroundImage: `url(${AboutBack})` }}>
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
      </div>

      <div className='grid grid-cols-1 gap-8 p-4 md:grid-cols-3'>
        {currentCards.map((cert, index) => (
          <div key={index} className='flex flex-grow flex-col h-auto bg-[#0B0D0E] border justify-center border-[#08D665]'>
            <img className='p-4' src={cert.image} alt={cert.title} />
            <h1 className='text-2xl text-center md:text-3xl font-bold text-[#08D665] uppercase'>{cert.title}</h1>
            <h1 className='text-xl text-center md:text-l font-bold text-[#ffffff] uppercase mb-4'>{cert.date}</h1>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-1 rounded-lg ${currentPage === index + 1 ? 'bg-[#08D665] text-white' : 'bg-gray-300 text-black'}`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className='mt-4'>
      <Footer/>

      </div>
    </div>
  );
};

export default MoreCertificate;
