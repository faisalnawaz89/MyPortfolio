import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navabar = ({isDarkMode, setIsDarkMode}) => {

    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef()
    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(scrollY > 50 ){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    },[])


  return (
    <>

        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
            <Image src={assets.header_bg_color} alt="" className='w-full'/>
        </div>

        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme shadow-white/20":""}`}>
            <a className="flex-1" href="#top">
                <Image src={isDarkMode ? assets.logo_dark:assets.logo} className='lg:w-[30%] w-[50%] cursor-pointer mr-14' alt='' />
            </a>
            <ul className={`hidden md:flex text-sm font-semibold items-center gap-8 lg-gap-10 rounded-full px-12 py-3 ${isScroll ? "" : " bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
                <li><a className="uppercase font-Outfit hover:text-gray-700 transition-colors ease-in dark:hover:text-textHover" href="#top">Home</a></li>
                <li><a className="uppercase font-Outfit hover:text-gray-700 transition-colors ease-in dark:hover:text-textHover" href="#about">About me</a></li>
                <li><a className="uppercase font-Outfit hover:text-gray-700 transition-colors ease-in dark:hover:text-textHover" href="#services">Services</a></li>
                <li><a className="uppercase font-Outfit hover:text-gray-700 transition-colors ease-in dark:hover:text-textHover" href="#work">My work</a></li>
                <li><a className="uppercase font-Outfit hover:text-gray-700 transition-colors ease-in dark:hover:text-textHover" href="#contact">Contact me</a></li>
            </ul>
            <div className='flex flex-1 items-center justify-end gap-2'>
                <button onClick={()=>setIsDarkMode(prev => !prev)}><Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-9 bg-white dark:bg-black rounded-full p-1.5'/></button>
                <a className="uppercase text-sm font-semibold font-Outfit hidden lg:flex items-center gap-3 px-5 py-2 hover:bg-white/50 dark:hover:bg-btnHover transition-all ease-in border border-gray-500 rounded-full ml-4 dark:border-white/50" href="#contact">Contact me <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className='w-3' alt=''/></a>
                <button className='block md:hidden ml-3' onClick={openMenu}>
                    <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6'/>
                </button>
            </div>

            {/* {Mobile Menu} */}
            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-[#f35a25] transition duration-500 dark:bg-darkHover dark:text-white'>
                <div className='absolute right-6 top-6' onClick={closeMenu}>
                    <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer'/>
                </div>
                <li><a className="font-Outfit" onClick={closeMenu} href="#top">Home</a></li>
                <li><a className="font-Outfit" onClick={closeMenu} href="#about">About me</a></li>
                <li><a className="font-Outfit" onClick={closeMenu} href="#services">Services</a></li>
                <li><a className="font-Outfit" onClick={closeMenu} href="#work">My Work</a></li>
                <li><a className="font-Outfit" onClick={closeMenu} href="#contact">Contact me</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Navabar