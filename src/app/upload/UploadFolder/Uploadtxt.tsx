import React from 'react'
// 1. Combined your Lucide imports into a single line
import { Zap, CircleCheck } from 'lucide-react';

const Uploadtxt = () => {
  return (
    <div className='flex flex-col py-3 px-2 md:gap-6 gap-4 text-white'>

      <div className='bg-[#3B3B3B]/50 w-fit px-4 py-2 rounded-full backdrop-blur-md'>
        <h1 className='md:text-sm text-xs flex items-center gap-2 font-bold tracking-widest uppercase '>
          <Zap size={16} /> 
          <span>Next-gen resume analysis</span>
        </h1>
      </div>
      
       <h2 className='md:text-6xl text-4xl font-bold leading-tight'>
         Optimize Your Career <br className="hidden md:block" /> with Precision AI
       </h2>
  
        <p className='text-[#B2BEB5] text-lg tracking-wide max-w-2xl leading-relaxed'>
          Upload your resume and let our neural engine dissect your experience against global benchmarks. Extract hidden value and land elite roles.
        </p>
        
        <ul className='flex flex-wrap text-lg gap-6 md:gap-10 text-[#B2BEB5] mt-2'>
          <li className='flex gap-2 items-center'>

            <CircleCheck size={20} className="text-green-500" /> 
            <span>ATS Optimized</span> 
          </li>
          <li className='flex gap-2 items-center'>
            <CircleCheck size={20} className="text-green-500" /> 
            <span>Real-time Benchmarking</span>
          </li>
        </ul>
        
    </div>
  )
}

export default Uploadtxt;