import React from "react";
import star2 from "../images/star2.png";
import phone from "../images/phone.png";
import mockup from "../images/movkup.png";
import google from "../images/google.png";
import app from "../images/app.png";

const Hero = () => {
  return (
    <div className='bg-[#7805A7] md:grid sm:grid-cols-2 gap-8 my-12 overflow-hidden relative items-center justify-center w-full rounded-3xl md:h-[550px] p-4 sm:p-12'>
      <div className='py-12 text-left'>
        <h1 className='text-5xl font-extrabold text-purple-100'>
          Make a wish.
          <span className='text-[#FFCC00] block'>
            Recieve at your doorstep.
          </span>
        </h1>
        <p className='text-purple-100 text-sm md:text-base my-5'>
          An intuitive gift-sharing app made for users to get what they love and
          desire by simply wishing for it. Made for gifters and wishers!
        </p>
        <div className='grid grid-cols-2 items-center gap-8 sm:my-10'>
          <img src={google} className='w-full h-full' alt='' />
          <img src={app} className='w-full h-full' alt='' />
        </div>
      </div>
      <div className='w-full h-96'>
        <img
          src={mockup}
          className='w-full relative -bottom-5 sm:-bottom-12 h-full md:h-fit object-cover md:w-[800px] md:-right-40 md:absolute md:bottom-0 z-10'
          alt=''
        />
      </div>
      <img
        src={star2}
        alt=''
        className='absolute -top-32 -right-32  md:-top-48 md:-right-48 w-1/2'
      />
    </div>
  );
};

export default Hero;
