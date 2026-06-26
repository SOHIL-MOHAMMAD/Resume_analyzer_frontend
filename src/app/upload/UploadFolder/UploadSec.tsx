'use client'

import React, { useRef } from 'react'
import Uploadtxt from './Uploadtxt'
import UploadDoc from './UploadDoc'
import { motion, useScroll, useTransform, useSpring } from 'motion/react'


const UploadSec = () => {
  const containterRef = useRef<HTMLDivElement>(null)

  const {scrollYProgress} = useScroll({
    target : containterRef,
    offset : ['start end', 'end start']
  }) 

  const spring = {stiffness : 95, damping : 20, mass : 3}
  const rawOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0,1,1,0])
  const opacity = useSpring(rawOpacity, spring)
  const rawLeftY = useTransform(scrollYProgress, [0,1], [100,-100])
  const leftY = useSpring(rawLeftY, spring)
  const rawRightY = useTransform(scrollYProgress, [0,1],[-100,100])
  const rightY = useSpring(rawRightY, spring)
  return (
   
    <div
    ref={containterRef} 
    className='min-h-[90vh]  w-full flex flex-col lg:flex-row px-6 lg:px-20 justify-center items-center gap-12 lg:gap-24 py-12 lg:py-0'>
   
      <motion.div
      style={{x:  leftY,opacity}} 
      className='w-full lg:w-1/2 flex justify-start lg:justify-end'>
        <Uploadtxt />
      </motion.div>

      <motion.div
      style={{x: rightY , opacity}}
      className='w-full lg:w-1/2 flex justify-center lg:justify-start'>
        <UploadDoc />
      </motion.div>
      
    </div>
  )
}

export default UploadSec;