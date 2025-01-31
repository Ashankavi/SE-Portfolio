import React from 'react'

import AboutBack from '../assets/About/AboutBack.png';
import AboutMen from '../assets/About/AboutMen.png';
import { MeteorsDemo } from './ReusableComponents/MeteorsDemo';


const About = () => {
  return (
    <div className='flex flex-row flex-wrap h-auto p-4 bg-center bg-cover ' style={{ backgroundImage: `url(${AboutBack})` }}>

        <div className="flex items-center justify-center flex-grow">
        <img src={AboutMen} className="bg-center bg-cover" />
      </div>

        <div className='w-[300px]  items-center  flex flex-col flex-grow m-2  p-2'> 
        <MeteorsDemo/>

        
        </div>
       
      
    </div>
  )
}

export default About
