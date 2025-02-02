import { assets, workData } from '@/assets/assets'
import React, { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion';

const Work = () => {

    const [selectedCategory, setSelectedCategory] = useState('all')
    const categories = ['all',...new Set(workData.map(item => item.category))]
    const filterData = selectedCategory === 'all' ? workData : workData.filter(project => project.category === selectedCategory)
    

  return (

  <>
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}    
    id='work' className='w-full px-[12%] py-10 scroll-m-20'>
        <motion.h4
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 0.3, duration: 0.5}}
        className='text-center mb-2 text-lg font-Ovo'>My Portfolio</motion.h4>

        <motion.h2 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 0.5, duration: 0.5}}    
        className='text-center text-5xl font-Ovo'>My Work</motion.h2>

        <motion.p 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.7, duration: 0.5}}    
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Explore my portfolio to see a collection of creative, user-focused web development projects crafted with modern technologies and innovative design. Each project reflects my commitment to delivering seamless user experiences and functional excellence.</motion.p>
      
            <div className='flex sm:gap-3 gap-1 items-center justify-center mb-4'>
            {categories.map((category, index)=>(
                <motion.button 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 0.7, duration: 0.5}}                 
                key={index} onClick={()=>setSelectedCategory(category)} className={`px-5 sm:px-10 sm:py-5 py-3 border ${selectedCategory === category ? 'bg-btnHover dark:bg-btnHover' : ' bg-black '} hover:bg-btnHover transition-all ease-in border-white rounded-full text-white flex items-center text-center gap-2 text-sm sm:text-[16px]`}>{category.toUpperCase()} </motion.button>
            ))
            }
            </div>
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.9, duration: 0.6}}       
        className='grid sm:grid-cols-large grid-cols-small my-10 gap-10 dark:text-black'>
            
            <AnimatePresence>
                {filterData.map((project, index) => (
                    <motion.div
                        key={project.id || index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        className="aspect-video overflow-hidden bg-no-repeat bg-cover shadow-lg bg-center rounded-lg relative cursor-pointer group"
                        style={{ backgroundImage: `url(${project.bgImage})` }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <div className='bg-white w-10/12 rounded-md shadow-lg absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                            <div>
                                <h2 className='font-semibold'>{project.title}</h2>
                                <p className='text-sm text-gray-700'>{project.description}</p>
                            </div>
                            <a href={project.url} target="_blank" className='border rounded-full group-hover:border-white border-black/60 w-10 aspect-square flex items-center justify-center group-hover:bg-btnHover transition'>
                                <Image src={assets.send_icon} alt='send icon' className='w-5 group-hover:invert' />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>

        {/* <motion.a 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 1.1, duration: 0.5}}    
        href="#" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
            Show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='right arrow' className='w-4'/>
        </motion.a> */}

    </motion.div>

  </>
  )
}

export default Work