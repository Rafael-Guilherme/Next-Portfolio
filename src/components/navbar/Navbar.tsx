import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center w-screen p-2 h-16 bg-white'>
        <div className='w-72'>
            <h1 className='text-2xl font-bold text-black'>Logo</h1>
        </div>
        <ul className='w-full flex items-center justify-around text-black'>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/'>About</Link>
            </li>
            <li>
                <Link href='/'>Work</Link>
            </li>
            <li>
                <Link href='/'>Skills</Link>
            </li>
            <li>
                <Link href='/'>Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar