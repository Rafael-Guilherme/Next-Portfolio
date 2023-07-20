'use client'

import Image from 'next/image';
import useCardEffect from '@/hooks/animation/useCardTechEffect';
import React from 'react'
import styles from '@/styles/tech-card.module.css';
import { cn } from '@/lib/utils';

import javascript from '../../assets/techs/javascript.png';
import react from '../../assets/techs/react.png';

const Techs = () => {
    const { glowRef, flowRef, rotateToMouse, removeListener } = useCardEffect();
    return (
        <>
            <div className='mx-4' style={{ perspective: "1500px" }}>
                <div
                    ref={flowRef}
                    className={cn("relative h-full w-[182px] rounded-tr-3xl to-black/50 border-[#ffc870]", styles["card"])}
                    onMouseLeave={removeListener}
                    onMouseMove={rotateToMouse}
                >
                    <Image

                        src={javascript}
                        alt="Javascript Logo"
                        width={180}
                        height={250}
                    />
                    <div ref={glowRef} className={cn(styles["glow"])} />
                </div>
            </div>
            <div className='mx-4' style={{ perspective: "1500px" }}>
                <div
                    ref={flowRef}
                    className={cn("relative h-full w-[182px] rounded-tr-3xl to-black/50 border-[#ffc870]", styles["card"])}
                    onMouseLeave={removeListener}
                    onMouseMove={rotateToMouse}
                >
                    <Image

                        src={react}
                        alt="Javascript Logo"
                        width={180}
                        height={250}
                    />
                    <div ref={glowRef} className={cn(styles["glow"])} />
                </div>
            </div>
        </>
    )
}

export default Techs