'use client'
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navabar from "@/components/Navabar";
import Services from "@/components/Services";
import Work from "@/components/Work";
import { useEffect, useState } from "react";


export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false)
  
  const mp4video = 'mp4intro.mp4'
  const webmvideo = 'webmintro.webm'
  

  useEffect(() =>{
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
        setIsDarkMode(true)
    }else{
      setIsDarkMode(false)
    }
  },[])

  useEffect(()=>{
    if(isDarkMode){
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
    }else{
        document.documentElement.classList.remove('dark')
        localStorage.theme = ''
    }
  },[isDarkMode])

  return (
    <>
      <div className="relative flex w-full h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src={mp4video} type="video/mp4" />
          <source src={webmvideo} type="video/webm" />
        </video>

        {/* Pattern Overlay using `::before` */}
        <div className="relative w-full h-full before:content-[''] before:absolute before:inset-0 before:bg-[url('https://ucarecdn.com/9764e70d-4a0b-4393-ad53-3b4d4af22099/3pxtile.png')] before:bg-[white]/80 dark:before:bg-[rgba(63,68,80,.8)] before:z-10">
          {/* Content */}
          <Navabar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Header isDarkMode={isDarkMode} />
        </div>
      </div>
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
