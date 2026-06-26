'use client'
import React from 'react'
import { FilePlus } from 'lucide-react';

const UploadDoc = () => {
  return (
    <div className='bg-[#242424] h-120 w-170 rounded-xl border-2 border-[#B2BEB5]/30 justify-center items-center flex flex-col gap-3 text-white'>
      
     <div className='h-40 w-40 bg-[#3B3B3B]/50 backdrop-blur-sm flex justify-center items-center rounded-2xl'>
        <FilePlus size={65} />
      </div>
      
      <h1 className='text-2xl font-bold'>Drop your resume here</h1>
      <p className='text-lg font-light text-[#B2BEB5]'>PDF, DOCX supported. Maximum 10MB</p>
  
      <label 
        htmlFor="resume-upload" 
        className="mt-2 px-6 py-2.5 text-xl bg-[#3B3B3B]/50 backdrop-blur-sm hover:bg-[#4B4B4B]/80 text-white font-medium rounded-lg cursor-pointer transition-colors"
      >
        Select file
        <input 
          type="file" 
          id="resume-upload" 
          className="hidden" 
          accept=".pdf, .docx" 
        />
      </label>
      
    </div>
  )
}

export default UploadDoc;