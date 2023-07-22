import Image from 'next/image'
import React from 'react'

import react from "../../assets/techs/react.png"
import typescript from "../../assets/techs/typescript.png"
import tailwindcss from "../../assets/techs/tailwindcss.png"

const Work = () => {
  return (
    <div className='flex flex-col items-center justify-center w-screen'>
        <h2 className='text-3xl text-white font-bold my-16'>Work</h2>
        <div className="flex items-center flex-wrap justify-around gap-2 h-full w-[1080px] p-2 rounded-3xl to-black/50 border-2 border-[#ffc870]">
            <div className='flex flex-col justify-between p-2 w-60 h-60 rounded-3xl bg-white'>
                <p className='text-black'>Projeto 1</p>
                <div className='flex justify-end'>
                    <Image src={react} width={40} height={40} alt="tech" />
                    <Image className='mx-1' src={typescript} width={40} height={40} alt="tech" />
                    <Image src={tailwindcss} width={40} height={40} alt="tech" />
                </div>
            </div>
            <div className='w-60 h-60 rounded-3xl bg-white'>
                <p className='text-black'>Projeto 2</p>
            </div>
            <div className='w-60 h-60 rounded-3xl bg-white'>
                <p className='text-black'>Projeto 3</p>
            </div>
            <div className='w-60 h-60 rounded-3xl bg-white'>
                <p className='text-black'>Projeto 4</p>
            </div>
            <div className='w-60 h-60 rounded-3xl bg-white'>
                <p className='text-black'>Projeto 5</p>
            </div>
        </div>
    </div>
  )
}

export default Work