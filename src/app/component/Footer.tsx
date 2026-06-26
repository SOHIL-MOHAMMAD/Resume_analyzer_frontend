'use client'

import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t-2 border-[#b2beb5]/20 px-6 lg:px-20 py-10 flex flex-col md:flex-row items-center justify-between gap-6'>
      
      <div className='flex flex-col gap-2 text-center md:text-left'>
        <h2 className='text-2xl font-bold tracking-wide'>CareerLens AI</h2>
       <p className='text-sm text-[#B2BEB5]/50'>&copy; {currentYear} CareerLens AI. Precision Career Engineering</p>
      </div>

      <div>
       <ul className='flex flex-wrap justify-center md:justify-end text-[#B2BEB5] gap-5 text-sm'>
          {/* Added hover colors and transition animations to make them feel clickable */}
          <li className='cursor-pointer hover:text-white transition-colors duration-200'>Privacy Policy</li>
          <li className='cursor-pointer hover:text-white transition-colors duration-200'>Terms of Service</li>
          <li className='cursor-pointer hover:text-white transition-colors duration-200'>API Documentation</li>
          <li className='cursor-pointer hover:text-white transition-colors duration-200'>Contact Support</li>
        </ul>
      </div>
      
    </footer>
  )
}

export default Footer;