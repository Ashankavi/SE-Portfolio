import React, { useEffect, useState } from 'react';

const Count = () => {
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    let clientsInterval = setInterval(() => {
      setClients((prev) => {
        if (prev < 225) return prev + 2;
        clearInterval(clientsInterval);
        return prev;
      });
    }, 10); 

    let projectsInterval = setInterval(() => {
      setProjects((prev) => {
        if (prev < 150) return prev + 2;
        clearInterval(projectsInterval);
        return prev;
      });
    }, 10);

    let yearsInterval = setInterval(() => {
      setYears((prev) => {
        if (prev < 4) return prev + 1;
        clearInterval(yearsInterval);
        return prev;
      });
    }, 100); 

    return () => {
      clearInterval(clientsInterval);
      clearInterval(projectsInterval);
      clearInterval(yearsInterval);
    };
  }, []);

  return (
    <div className='flex flex-grow flex-wrap h-auto flex-row justify-evenly items-center py-8 bg-[#0B0D0C]'>
      <div className='flex flex-row ml-4'>
        <h1 className='text-7xl lg:text-8xl text-[#22CD6F] font-bold'>+{clients}</h1>
        <div className='flex flex-col justify-center ml-4'>
          <p className='text-xl lg:text-lg md:text-base sm:text-sm font-bold text-[#868686]'>Satisfied</p>
          <p className='text-3xl lg:text-2xl md:text-xl sm:text-lg text-[#ffffff]'>Happy Clients</p>
        </div>
      </div>

      <div className='flex flex-row my-4 ml-4'>
        <h1 className='text-7xl lg:text-8xl  text-[#22CD6F] font-bold'>+{projects}</h1>
        <div className='flex flex-col justify-center ml-4'>
          <p className='text-xl lg:text-lg md:text-base sm:text-sm font-bold text-[#868686]'>Projects</p>
          <p className='text-3xl lg:text-2xl md:text-xl sm:text-lg text-[#ffffff]'>Completed</p>
        </div>
      </div>

      <div className='flex flex-row ml-24'>
        <h1 className='text-7xl lg:text-8xl  text-[#22CD6F] font-bold'>+{years}</h1>
        <div className='flex flex-col justify-center ml-4'>
          <p className='text-xl lg:text-lg md:text-base sm:text-sm font-bold text-[#868686]'>Year of</p>
          <p className='text-3xl lg:text-2xl md:text-xl sm:text-lg text-[#ffffff]'>Experience</p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .flex-row {
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .flex-grow {
            width: 100%;
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Count;
