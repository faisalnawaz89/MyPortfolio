import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className="text-center">
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="Faisal Nawaz" className='w-36 mx-auto mb-2' />
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="Faisal Nawaz" className='w-5' /> fais.nawaz@gmail.com
            </div>
        </div>

        <div className='text-sm sm:flex items-center justify-between text-center border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>&copy; {new Date().getFullYear()} Faisal Nawaz. All rights reserved.</p>
            <ul className='flex item-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a href="https://github.com/faisalnawaz89" target='_blank'>Github</a></li>
                <li><a href="https://www.linkedin.com/in/imfaisalnawaz/" target='_blank'>LinkedIn</a></li>
                <li><a href="https://wa.link/ovmhjm" target='_blank'>WhatsApp</a></li>
            </ul>
        </div>
    </div>

  )
}

export default Footer