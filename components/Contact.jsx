import { assets } from '@/assets/assets'
import React, {useState } from 'react'
import Image from 'next/image'
import {motion} from 'motion/react'


const Contact = ({isDarkMode}) => {

  const key = '5f3ff746-065c-45b2-8830-c6aef928d3d5'
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", key);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}    
    id='contact' className='w-full px-[12%] py-10 scroll-m-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>

        <motion.h4 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 0.3, duration: 0.5}}    
        className='text-center mb-2 text-lg font-Ovo'>Connect with me</motion.h4>

        <motion.h2 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 0.5, duration: 0.5}}      
        className='text-center text-5xl font-Ovo'>Get in touch</motion.h2>

        <motion.p 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.7, duration: 0.5}}    
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Connect with us to turn ideas into impactful solutions.</motion.p>

        <motion.form 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.9, duration: 0.5}}        
        onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>

                <motion.input 
                initial={{x: -50, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{delay: 1.1, duration: 0.6}}    
                name="name" className="flex-1 p-3 outline-none border-[0.5px]  border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90" type="text" placeholder='Enter your name' required />

                <motion.input 
                initial={{x: 50, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{delay: 1.2, duration: 0.6}}      
                name="email" className="flex-1 p-3 outline-none border-[0.5px]  border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90" type="email" placeholder='Enter your email' required />
                
            </div>
            <motion.textarea 
            initial={{y: 50, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{delay: 1.3, duration: 0.6}}  
            name="message" className="w-full p-4 outline-none border-[0.5px]  border-gray-400 rounded-md bg-white mb-6  dark:bg-darkHover/30 dark:border-white/90" rows='6' placeholder='Enter your message' required />

            <motion.button 
            initial={{y: 20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{delay: 1.3, duration: 0.6}}  
            className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 dark:bg-white dark:text-black text-white rounded-full mx-auto hover:bg-btnHover duration-500" type='submit'>Submit now <Image src={isDarkMode ? assets.right_arrow_black : assets.right_arrow_white} alt="" className="w-4" /></motion.button>
            <p className='mt-4'>{result}</p>
        </motion.form>

    </motion.div>
  )
}

export default Contact