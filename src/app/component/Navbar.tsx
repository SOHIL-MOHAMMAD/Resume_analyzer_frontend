'use client'

import React from 'react'
import Link from 'next/link'

interface LINKS {
  id : number;
  href : string;
  name : string;
}

const Navbar = () => {
  const links : LINKS[] = [
  {
    id : 1,
    href : '/',
    name : 'Upload'
  },
  {
    id : 2,
    href : '/analysis',
    name : 'Analysis'
  },
]
  return (
    <nav className='border-b-[#242424] border-b-2 flex tracking-wide justify-around md:px-4 md:py-3 px-2 py-2 items-center'>
      <h1 className='md:text-3xl text-xl font-extrabold tracking-wider'>CareerLen AI</h1>
      <ul className='flex md:gap-7 gap-5'>
        {links.map((l)=> {
          return (
            <li key={l.id} >
              <Link href={l.href}>
                <span className='md:text-xl text-sm text-[#B2BEB5] underline-effect'>
                  {l.name}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>     
    </nav>
  )
}

export default Navbar
