'use client'

import React, { useRef } from 'react'
import { Timer, Gauge, Keyboard, ChartColumnDecreasing, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

interface KEYWORD {
  id: number;
  name: string;
}

const ContextSec = () => {
  const keyword: KEYWORD[] = [
    { id: 1, name: 'Python' },
    { id: 2, name: 'Strategic Leadership' },
    { id: 3, name: 'AWS Architecture' },
  ]

  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  }) 

  const spring = { stiffness: 55, damping: 22, mass: 1 }
  
  const rawOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])
  const opacity = useSpring(rawOpacity, spring)
  
  const rawX1 = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const x1 = useSpring(rawX1, spring)
  const rawX2 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const x2 = useSpring(rawX2, spring)
  
  const rawX3 = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const x3 = useSpring(rawX3, spring)

  return (
    <div ref={containerRef} 
    className='my-20 py-10 min-h-[90vh] w-full border-b-2 border-[#3B3B3B]/50  flex justify-center   text-white overflow-hidden'>
      
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-5 w-full max-w-7xl'>
        
        {/* ================= BOX 1 (2 Columns) ================= */}
        <motion.div 
          style={{ x: x1, opacity }}
          className='lg:col-span-2 bg-[#3B3B3B]/50 backdrop-blur-lg rounded-xl p-8 flex flex-col justify-between min-h-[350px] border border-[#B2BEB5]/20 overflow-hidden relative'
        >
          <div className='flex items-center justify-between'>
            <div className='bg-[#3B3B3B]/40 w-15 h-15 p-3 rounded-lg border border-white/10 backdrop-blur-xl'>
              <Timer size={32} />
            </div>
            <div className='text-white/5'>
              <Gauge size={100} />
            </div>
          </div>

          <div className='flex flex-col gap-2 relative z-10'>
            <h2 className='text-2xl font-bold tracking-wide'>Instant scoring</h2>
            <p className='text-base text-[#B2BEB5] font-medium tracking-wide leading-relaxed'>
              Get a comprehensive 0-100 score in under 3 seconds. Our AI evaluates impact verbs, quantifiable results, and narrative flow.
            </p>
          </div>
        </motion.div>

        {/* ================= BOX 2 (3 Columns) ================= */}
        <motion.div 
          style={{ x: x2, opacity }}
          className='lg:col-span-3 bg-[#3B3B3B]/50 backdrop-blur-lg rounded-xl p-8 flex flex-col lg:flex-row gap-8 lg:gap-5 min-h-[350px] border border-[#B2BEB5]/20'
        >
          {/* Left Side: Text and Keywords */}
          <div className='flex flex-col gap-5 lg:w-3/5'>
            <div className='bg-[#3B3B3B]/40 w-fit p-3 rounded-lg border border-white/10 backdrop-blur-xl'>
              <Keyboard size={32} />
            </div>
            
            <h2 className='font-bold tracking-wide text-2xl'>Keyword Optimization</h2>
            
            <p className='text-base text-[#B2BEB5] font-medium tracking-wide leading-relaxed'>
              Bridge the gap between your resume and job descriptions. Identify missing high-value keywords used by top recruiters in your industry.
            </p>

            <ul className='flex flex-wrap gap-3 mt-auto'>
              {keyword.map((k) => (
                <li key={k.id} className='bg-[#b2beb5]/20 text-gray-200 border border-[#b2beb5]/30 text-sm px-3 py-1.5 rounded-full tracking-wide'>
                  {k.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Fixed Progress Bars UI */}
          <div className='bg-black/20 rounded-xl p-6 lg:w-2/5 flex flex-col justify-center gap-5 border border-white/5'>
            <div className='flex flex-col gap-2'>
              <div className='flex justify-between text-sm font-medium'>
                <span className='text-[#B2BEB5]'>Relevance</span>
                <span className='text-gray-400'>94%</span>
              </div>
              <div className='bg-gray-800 w-full h-2 rounded-full overflow-hidden'>
                <div className='bg-gray-400 w-[94%] h-full rounded-full' />
              </div> 
            </div>
            {/* Bar 2 */}
            <div className='flex flex-col gap-2'>
              <div className='flex justify-between text-sm font-medium'>
                <span className='text-[#B2BEB5]'>Impact Verbs</span>
                <span className='text-zinc-400'>78%</span>
              </div>
              <div className='bg-gray-800 w-full h-2 rounded-full overflow-hidden'>
                <div className='bg-zinc-400 w-[78%] h-full rounded-full' />
              </div> 
            </div>
          </div>
        </motion.div>

        {/* ================= BOX 3 (Full Width Bottom) ================= */}
        <motion.div 
          style={{ x: x3, opacity }}
          className='lg:col-span-5 bg-[#3B3B3B]/50 backdrop-blur-lg rounded-xl p-8 flex flex-col lg:flex-row justify-between min-h-[350px] items-center border border-[#B2BEB5]/20 gap-12 lg:gap-8'
        >
          <div className='flex flex-col gap-4 lg:w-1/2 w-full'>
            <div className='bg-[#3B3B3B]/40 w-fit p-3 rounded-lg border border-white/10 backdrop-blur-xl mb-2'>
              <ChartColumnDecreasing size={32} />
            </div>
            
            <h1 className='text-3xl font-bold tracking-wide'>Competitor Benchmarking</h1>
            
            <p className='text-lg text-[#B2BEB5] leading-relaxed max-w-xl'>
              See how your profile stacks up against successful hires at Fortune 500 companies. Use data to understand the competitive landscape of your specific job title.
            </p>
            
            <button className='mt-4 flex items-center gap-2 font-semibold transition-colors w-fit hover:text-gray-300'>
              View analysis sample <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Side Bar Chart */}
          <div className='lg:w-1/2 w-full h-40 flex items-end justify-center gap-4 border-b border-white/10 pb-2 px-4'>
            <div className='w-12 bg-white/10 rounded-t-sm h-[40%] hover:bg-white/20 transition-all cursor-pointer relative group'>
               <span className='absolute -top-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'>Top 50%</span>
            </div>
            <div className='w-12 bg-white/20 rounded-t-sm h-[60%] hover:bg-white/30 transition-all cursor-pointer relative group'>
               <span className='absolute -top-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'>Top 25%</span>
            </div>
            <div className='w-12 bg-white/50 rounded-t-sm h-[85%] relative group cursor-pointer'>
               <span className='absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold whitespace-nowrap'>You</span>
            </div>
            <div className='w-12 bg-white/10 rounded-t-sm h-[95%] hover:bg-white/20 transition-all cursor-pointer relative group'>
               <span className='absolute -top-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'>Top 1%</span>
            </div>
          </div>
        </motion.div>      
        
      </div>
    </div>
  )
}

export default ContextSec;