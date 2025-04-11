import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from 'motion/react' 


const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 z-10 relative'>
        <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{duration: 0.8, type: 'spring', stiffness: 100}}
        >
        <Image src={assets.profile_img} alt="" className='rounded-full w-32 border-4 border-[#e6e2df]'/>
        </motion.div>
        <motion.h3 
        initial={{ y: -20, opacity:0 }}
        whileInView={{ y : 0, opacity: 1 }}
        transition={{duration: 0.6, delay: 0.3}}
        className='flex items-end gap-2 text-xl ms:text-2xl mb-3 font-Ovo'>Hi, I'm Faisal Nawaz <Image src={assets.hand_icon} alt="" className='w-6'/>
        </motion.h3>
        <motion.h1 
        initial={{ y: -30, opacity:0 }}
        whileInView={{ y : 0, opacity: 1 }}
        transition={{duration: 0.8, delay: 0.5}}
        className='lg:text-[50px] text-[40px] font-Ovo leading-[3rem] '>Frontend Developer based in India.</motion.h1>
        <motion.p 
        initial={{opacity:0 }}
        whileInView={{opacity: 1 }}
        transition={{duration: 0.6, delay: 0.7}}
        className='max-w-3xl mx-auto font-Ovo bg-white/50 p-3 my-4 dark:bg-transparent rounded-full leading-6'>Experienced Front-End Developer with 5 years of expertise in building responsive web applications using React.js, Next.js, and modern UI/UX practices. Skilled in creating scalable, high-performance solutions with a keen eye for design and usability.</motion.p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-2'>

            <motion.a 
            initial={{ y: 30, opacity:0 }}
            whileInView={{ y : 0, opacity: 1 }}
            transition={{duration: 0.6, delay: 1}}
            href="#contact" className='px-10 py-3 border border-white rounded-full bg-black hover:bg-btnHover transition-all ease-in text-white flex items-center gap-2'>Contact me <Image src={assets.right_arrow_white} className='w-4' alt='' /></motion.a>

            <motion.div 
            initial={{ y: 30, opacity:0 }}
            whileInView={{ y : 0, opacity: 1 }}
            transition={{duration: 0.6, delay: 1.2}}
            className='px-10 py-3 border rounded-full border-gray-500 flex items-center hover:bg-btnHover transition-all ease-in gap-2 bg-white dark: text-black'>My Resume <a href="/Faisal_Nawaz_Resume.pdf" download title="Download Resume"><Image src={assets.download_icon} className='w-4' alt='' /></a>  <a href="/Faisal_Nawaz_Resume.pdf" target="_blank" title="View Resume"><Image src={assets.view_icon} className='w-4' alt='' /></a></motion.div>

        </div>
    </div>
  )
}

export default Header