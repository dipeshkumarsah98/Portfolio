import React from 'react';
import { motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import { IoCodeDownloadOutline } from 'react-icons/io5';
import Marquee from "react-fast-marquee";


export const Card = ({ projectName, projectDescription, techItems, repoLink }) => {
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeIn' } },
    }
    return (
        <>
            {/* slider */}
            <motion.div
                variants={item}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.5 }}
                className='mt-20'>
                <Marquee
                    className='bg-transparent h-20 md:h-28 lg:h-32 font-nunito text-3xl md:text-4xl lg:text-7xl text-black border border-y-gray-400 border-x-transparent hover:text-orange-400'
                    speed={70}
                    play={true}
                    gradient={false}
                >
                    <p className='text-white hover:text-orange-400 hover:italic hover:line-through'>{projectName}</p>
                </Marquee>
            </motion.div>

            <motion.div
                variants={item}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.5 }}
                className='text-white flex justify-center'>
                <div className='lg:space-x-3'>
                    {/* project title */}
                    <h1 className='font-nunito text-2xl my-10 text-center font-bold md:text-3xl md:text-left lg:text-5xl'>{projectName}</h1>
                    {/* about project */}
                    <h2 className='font-merienda text-lg my-3 text-pink-300 md:text-xl lg:text-2xl'>PROJECT CONCEPT</h2>
                    <p className='font-merienda text-base  text-justify md:text-lg'>{projectDescription}</p>
                    {/* Tech implemented */}
                    <h2 className='font-merienda text-lg my-3 text-pink-300 md:text-xl lg:text-2xl'>TECH BEING IMPLEMENTED</h2>
                    <ul className='list-disc flex px-4 md:text-md'>
                        <div>
                            {
                                techItems.map((item, index) => (

                                    <li key={index}>{item}</li>

                                ))
                            }
                        </div>

                    </ul>
                    {/* Github link */}
                    <a href={repoLink} target="_blank" rel="noopener noreferrer">
                        <div className='flex items-center my-3 space-x-2 lg:space-x-3'>
                            <BsGithub color='pink' className='cursor-pointer' fontSize={30} />
                            <div className='text-pink-200 text-lg cursor-pointer lg:text-xl'>VIEW REPO</div>
                        </div>
                    </a>

                </div>
                <div className='hidden text-white lg:block lg:ml-14'>
                    <IoCodeDownloadOutline fontSize={500} fontWeight={100} />
                </div>
            </motion.div>
        </>
    )
}
