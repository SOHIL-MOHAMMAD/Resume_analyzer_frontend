'use client'

import React from 'react'
import { motion , Variants} from 'motion/react'

const Info = () => {
  const containerVariants :Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  }

  const itemVariants : Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 50, damping: 20 },
    },
  }

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" 
      viewport={{ once: true, amount: 0.5 }} 
      className='min-h-[40vh] text-center w-full tracking-wide flex flex-col gap-10 py-12 px-6'
    >
    
      <motion.div variants={itemVariants}>
        <h1 className='text-4xl md:text-5xl font-bold'>The Neural Network</h1>
        <h2 className='text-4xl md:text-5xl font-bold mt-2'>Advantage</h2>
      </motion.div>
    
      <motion.div variants={itemVariants} className='flex justify-center text-[#B2BEB5] text-lg'>
     
        <p className='max-w-2xl leading-relaxed'>
          Our proprietary AI models go beyond keyword matching, understanding the
          semantic intent and professional trajectory within your resume.
        </p>
      </motion.div>

      <motion.ul variants={itemVariants} className='flex flex-col md:flex-row justify-center gap-10 md:gap-20 items-center mt-4'>
        <li className='flex flex-col gap-2'>
          <h2 className='text-4xl font-bold'>
            1.2M+
          </h2>
          <p className='text-[#B2BEB5] text-sm tracking-widest font-medium'>
            RESUMES PROCESSED
          </p>
        </li>
        <li className='flex flex-col gap-2'>
          <h2 className='text-4xl font-bold'>
            89%
          </h2>
          <p className='text-[#B2BEB5] text-sm tracking-widest font-medium'>
            INTERVIEW SUCCESS RATE
          </p>
        </li>
        <li className='flex flex-col gap-2'>
          <h2 className='text-4xl font-bold'>
            24/7
          </h2>
          <p className='text-[#B2BEB5] text-sm tracking-widest font-medium'>
            REAL-TIME UPDATES
          </p>
        </li>
      </motion.ul>

    </motion.div>
  )
}

export default Info