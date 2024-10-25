import React from 'react';
import Behance from '../assets/SocialMedia/Behance.png';
import Dribble from '../assets/SocialMedia/Dribble.png';
import FB from '../assets/SocialMedia/FB.png';
import Linkedin from '../assets/SocialMedia/linkedin.png';
import X from '../assets/SocialMedia/X.png';
import Github from '../assets/SocialMedia/Github.png';

const SocialMedia = () => {
  return (
    <div className='flex flex-row gap-1 my-4 md:gap-2'>
      <div className='relative group'>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img className='w-10 h-10 duration-200 group-hover:scale-110' src={Github} alt="Github" />
          <div className='absolute inset-0 w-full h-full transition-opacity duration-200 bg-[#22CD6F] rounded-full opacity-0 group-hover:opacity-50'></div>
        </a>
      </div>
      <div className='relative group'>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img className='w-10 h-10 duration-200 group-hover:scale-110' src={Linkedin} alt="LinkedIn" />
          <div className='absolute inset-0 w-full h-full transition-opacity duration-200 bg-[#22CD6F] rounded-full opacity-0 group-hover:opacity-50'></div>
        </a>
      </div>
      <div className='relative group'>
        <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
          <img className='w-10 h-10 duration-200 group-hover:scale-110' src={Behance} alt="Behance" />
          <div className='absolute inset-0 w-full h-full transition-opacity duration-200 bg-[#22CD6F] rounded-full opacity-0 group-hover:opacity-50'></div>
        </a>
      </div>
      <div className='relative group'>
        <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
          <img className='w-10 h-10 duration-200 group-hover:scale-110' src={Dribble} alt="Dribble" />
          <div className='absolute inset-0 w-full h-full transition-opacity duration-200 bg-[#22CD6F] rounded-full opacity-0 group-hover:opacity-50'></div>
        </a>
      </div>
      <div className='relative group'>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <img className='w-10 h-10 duration-200 group-hover:scale-110' src={X} alt="X" />
          <div className='absolute inset-0 w-full h-full transition-opacity duration-200 bg-[#22CD6F] rounded-full opacity-0 group-hover:opacity-50'></div>
        </a>
      </div>
      <div className='relative group'>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img className='w-10 h-10 duration-200 group-hover:scale-110' src={FB} alt="Facebook" />
          <div className='absolute inset-0 w-full h-full transition-opacity duration-200 bg-[#22CD6F] rounded-full opacity-0 group-hover:opacity-50'></div>
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
