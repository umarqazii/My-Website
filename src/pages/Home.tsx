import React from 'react';
import Navbar from '../components/Navbar';
import dpimg from '../assets/dp1.jpg';
const Home = () => {
  return (
    <>
      <Navbar />
        <div className='flex items-center' style={{minHeight:'89vh'}}>
            <div className='flex justify-center gap-5 flex-col items-start w-4/6  h-96 px-20'>
                    <h2 className='text-8xl'>
                        I'm Umar Qazi
                    </h2>
                    <h2>
                        A full-stack developer from Islamabad, Pakistan. I am primarily focused in MERN stack. I build applications for fun.
                    </h2>
            </div>
            <div className='flex justify-center items-center w-2/4  h-96'>
                <img src={dpimg} alt="dp" className='h-full rounded-full' />
            </div>
        </div>
    </>
  );
};

export default Home;