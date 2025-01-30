import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'
import { motion } from 'motion/react' 

const About = ({isDarkMode, setIsDarkMode}) => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='about' className='w-full px-[12%] pt-20 pb-10 scroll-m-20'>
        <motion.h4 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>
        <motion.h2 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center text-5xl font-Ovo'>About me</motion.h2>

        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <motion.div 
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.6}}
            className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} className="w-full rounded-3xl" alt='user'/>
            </motion.div>
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.8}}
            className='flex-1'>
                <p className='mb-10 w-full font-Ovo'>With over 10 years of experience in the frontend development field, I bring deep expertise in creating dynamic, responsive, and user-centric web applications. I specialize in React and JavaScript, employing the best responsive design practices to ensure seamless functionality across all devices. My skill set includes crafting intuitive user interfaces, implementing smooth animations, and integrating third-party solutions such as payment gateways and advanced search features. Dedicated to delivering innovative and visually compelling solutions, I pride myself on providing tailored results that exceed expectations.</p>

                <motion.ul 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.8, delay: 1}}
                className='grid grid-cols-1 sm:grid-cols-3 gap-6 mx-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description}, index)=>(
                        <motion.li 
                        whileHover={{scale: 1.05}}
                        className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-btnHover" key={index}>
                            <div className='flex gap-3 items-center mb-4'> 
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7'/>
                                <h3 className='font-semibold text-gray-700 dark:text-white'>{title}</h3>
                            </div>
                            <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                        </motion.li>
                    ))}
                </motion.ul>

                <motion.h4 
                initial={{y: 20, opacity: 0}}
                whileInView={{y:0, opacity: 1}}
                transition={{duration: 1.3, delay: 0.5}}
                className='mt-6 mb-3 text-gray-700 font-Ovo dark:text-white/80'>Tools I use</motion.h4>
                <motion.ul 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1.5, delay: 0.6}}
                className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool, index)=>(
                        <motion.li 
                        whileHover={{scale: 1.1}}
                        className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500" key={index}>
                            <Image src={tool} alt="tool" className={`w-5 sm:w-7 ${index === toolsData.length - 1 ? 'dark:invert' : ''}`} />
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About