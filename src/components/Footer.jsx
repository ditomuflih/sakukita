import React from 'react';
import { useNavigate } from 'react-router-dom';
import Instagram from '../assets/instagram.svg';
import Tiktok from '../assets/tiktok.svg';
import Twitter from '../assets/twitter.svg';
import { motion } from "framer-motion";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      className='min-w-full h-auto bg-green-500 font-poppins text-white justify-center items-center pt-0 sm:pt-12 pb-5 drop-shadow-2xl'
      initial={{ opacity: 0, y: 150 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          duration: 2.0,
          damping: 10,
          stiffness: 100,
        },
      }}
    >
      <div className='flex flex-col sm:flex-row justify-center items-center'>
        <div className='font-extrabold text-lg sm:text-2xl mx-auto mb-10 sm:mb-0 mt-10 sm:mt-0'>
          Saku<span className='text-cust-orange italic font-black'>Kita</span>
        </div>
        <div className='flex flex-col mx-auto mb-10 sm:mb-0'>
          <div className='font-semibold text-center mb-2 text-lg sm:text-xl'>
            FOLLOW US ON
          </div>
          <div className='flex flex-row gap-4'>
            <motion.button 
              className='bg-white rounded-full h-12 w-12 justify-center items-center mx-auto my-auto'
              initial={{scale: 1}}
              whileHover={{
                scale: 1.2, 
                transition: { 
                  type: 'spring', 
                  stiffness: 300, 
                  damping: 25 
                } 
              }}
              type='button'
              onClick={() => window.open('https://www.instagram.com/', '_blank')}
            >
              <img
                className='h-8 self-center mx-auto my-auto mt-1'
                src={Instagram}
                alt='Instagram'
              />
            </motion.button>
            <motion.button 
              className='bg-white rounded-full h-12 w-12 justify-center items-center mx-auto my-auto'                            
              initial={{scale: 1}}
              whileHover={{
                scale: 1.2, 
                transition: { 
                  type: 'spring', 
                  stiffness: 300, 
                  damping: 25 
                } 
              }}
              type='button'
              onClick={() => window.open('https://www.tiktok.com/', '_blank')}
            >
              <img
                className='h-8 self-center mx-auto my-auto'
                src={Tiktok}
                alt='Tiktok'
              />
            </motion.button>
            <motion.button 
              className='bg-white rounded-full h-12 w-12 justify-center items-center mx-auto my-auto'
              initial={{scale: 1}}
              whileHover={{
                scale: 1.2, 
                transition: { 
                  type: 'spring', 
                  stiffness: 300, 
                  damping: 25 
                } 
              }}
              type='button'
              onClick={() => window.open('https://www.twitter.com/', '_blank')}
            >
              <img
                className='h-7 self-center mx-auto my-auto mt-1'
                src={Twitter}
                alt='Twitter'
              />
            </motion.button>
          </div>
        </div>
        <div className='flex flex-col text-right mx-auto font-bold text-lg sm:text-xl self-center justify-center items-right'>
          TAUTAN TERKAIT
          <button 
            className='font-medium text-md sm:text-lg text-center sm:text-right text-white hover:text-cust-orange active:text-cust-orange hover:font-bold active:font-bold'
            onClick={() => navigate('/dashboard')}
          >
            Home
          </button>
          <button 
            className='font-medium text-md sm:text-lg text-center sm:text-right text-white hover:text-cust-orange active:text-cust-orange hover:font-bold active:font-bold'
            onClick={() => navigate('/tentang')}
          >
            Tentang
          </button>
          <button 
            className='font-medium text-md sm:text-lg text-center sm:text-right text-white hover:text-cust-orange active:text-cust-orange hover:font-bold active:font-bold'
            onClick={() => navigate('/help')}
          >
            Help
          </button>
          <button 
            className='font-medium text-md sm:text-lg text-center sm:text-right text-white hover:text-cust-orange active:text-cust-orange hover:font-bold active:font-bold'
            onClick={() => navigate('/laporan')}
          >
            Laporan
          </button>
        </div>
      </div>
      <div className='w-[80vw] h-1 rounded-full border-white bg-white self-center mx-auto my-7'/>
      <div className='flex text-center text-white text-sm sm:text-lg justify-center items-center'>
        <div className='relative group flex w-auto'>
          &copy; Tim Pengembang SakuKita 2024.
          <div className="absolute -right-8 opacity-10 lg:group-hover:opacity-100 transition-all duration-500 ml-2">
            ❤️️
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
