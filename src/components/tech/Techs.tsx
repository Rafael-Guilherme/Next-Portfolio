import React from 'react'


const Techs = () => {
    const frontend = ["Javascript", "Typescript", "React", "Next", "Tailwindcss", "Styled Components","Saas", "Redux"]
    const backend = ["Nodejs", "Express", "Fastify", "Prisma", "Mongodb", "mySQL" ,"Postgress"]
    const tools = ["Jest", "Cypress", "Vitest", "Git", "Github", "Firebase"]

    return (
        <div>
            <div className='flex items-center justify-center w-screen'>
                <div
                    className="relative flex flex-col items-center flex-wrap justify-around h-full w-[1080px] rounded-tr-3xl to-black/50 border-[#ffc870]"
                    
                >   
                    <h2 className='text-3xl text-white font-bold my-16'>Main Technologies</h2>
                    <div className='grid grid-cols-3 gap-16'>
                        <div className='flex flex-col items-center'>
                            <h3 className='text-2xl text-white font-bold'>Frontend</h3>
                        <div className='grid grid-cols-2 gap-4'>
                            {frontend.map((item, index) => (
                                <div 
                                key={index} 
                                className='card-tech w-36 h-14 mt-4 flex items-center justify-center text-center rounded-xl cursor-pointer text-xl font-bold text-white'>
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
                                    className='card-tech w-36 h-14 mt-4 flex items-center justify-center text-center rounded-xl cursor-pointer text-xl font-bold text-white'>
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
                                    className='card-tech w-36 h-14 mt-4 flex items-center justify-center text-center rounded-xl cursor-pointer text-xl font-bold text-white'>
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