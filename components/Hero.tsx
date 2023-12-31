import React from 'react';
import Button from './UI/Button';

const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center p-4">
      <div className="text-center sm:text-left mb-4 sm:mb-0">
        <h1 className="text-4xl sm:text-8xl font-bold font-CinzelDecorative text-Secondary" style={{ lineHeight: '1.5' }}>
          Al-Quran <br /> Kariim
        </h1>
        <p className="text-white">
          Discover the Beauty of Faith, Explore the <br /> Wisdom of the Quran
        </p>
        <div className=' items-center mt-10 mx-auto sm:flex hidden'>
        <Button
					text="Explore"
					customStyles="bg-Secondary !text-white   shadow-sm"
					
				/>
        <Button
					text="Learn More"
					customStyles="!text-white mx-5  "
					
				/>
        </div>
      </div>

      <div className="mt-10 ">
        <img
          alt=""
          src="/Hero.svg"
          width={700}
          height={700}
          className='sm:flex hidden'
        />
      </div>
    </div>
  );
};

export default Hero;
