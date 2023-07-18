import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import logo from '../../assets/images/logo.png'

const Navbar = () => {
  return (
    <div className='flex items-center w-screen p-2 h-16 bg-white'>
        <div className='w-72'>
            <Image src={logo} alt='Logotipo' />
        </div>
        <ul className='w-full flex items-center justify-around text-black'>
            {['Home', 'About', 'Work', 'Skills', 'Contact'].map((item) => (
                <li key={`${item}`}>
                    <Link href={`#${item}`} className='text-lg font-medium'>{item}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Navbar