'use client'

import Image from 'next/image';
import useCardEffect from '@/hooks/animation/useCardTechEffect';
import React from 'react'
import styles from '@/styles/tech-card.module.css';
import { cn } from '@/lib/utils';

// import javascript from '../../assets/techs/javascript.png';
// import react from '../../assets/techs/react.png';
// import tailwindcss from '../../assets/techs/tailwindcss.png';
// import bootstrap from '../../assets/techs/bootstrap.png';
// import typescript from '../../assets/techs/typescript.png';
// import nodejs from '../../assets/techs/node_js.png';
// import git from '../../assets/techs/git.png';
// import mongodb from '../../assets/techs/mongo_db.png';
// import redux from '../../assets/techs/redux.png';
// import jest from '../../assets/techs/jest.png';
// import saas from '../../assets/techs/saas.png';
// import redis from '../../assets/techs/redis.png';
// import github from '../../assets/techs/github.png';


const Techs = () => {
    const { glowRef, flowRef, rotateToMouse, removeListener } = useCardEffect();

    const frontend = ["Javascript", "Typescript", "React", "Tailwindcss", "Saas", "Bootstrap"]
    const backend = ["Nodejs", "Express", "Prisma", "Mongodb", "mySQL" ,"Postgress"]
    const tools = ["Jest", "Cypress", "Vitest", "Git", "Github"]

    return (
        <div>
            <div className='flex items-center justify-center w-screen ' style={{ perspective: "1500px" }}>
                <div
                    ref={flowRef}
                    className={cn("relative flex flex-col items-center flex-wrap justify-around h-full w-[1080px] rounded-tr-3xl to-black/50 border-[#ffc870]", styles["card"])}
                    
                >   
                    <h2 className='text-3xl text-white font-bold my-16'>Main Technologies</h2>
                    <div className='grid grid-cols-3 gap-16'>
                        <div className='flex flex-col items-center'>
                            <h3 className='text-2xl text-white font-bold'>Frontend</h3>
                        <div className='grid grid-cols-2 gap-4'>
                            {frontend.map((item, index) => (
                                <div 
                                key={index} 
                                className='card-tech w-32 h-12 mt-4 flex items-center justify-center rounded-xl cursor-pointer text-xl font-bold text-white'>
                                    {item}
                                </div>
                            ))}

                        </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h3 className='text-2xl text-white font-bold'>Backend</h3>
                            <div className='grid grid-cols-2 gap-4'>
                                {backend.map((item, index) => (
                                    <div 
                                    key={index} 
                                    className='card-tech w-32 h-12 mt-4 flex items-center justify-center rounded-xl cursor-pointer text-xl font-bold text-white'>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h3 className='text-2xl text-white font-bold'>Tools</h3>
                            <div className='grid grid-cols-2 gap-4'>
                                {tools.map((item, index) => (
                                    <div 
                                    key={index} 
                                    className='card-tech w-32 h-12 mt-4 flex items-center justify-center rounded-xl cursor-pointer text-xl font-bold text-white'>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Techs