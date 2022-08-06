import React from 'react';
import { motion } from 'framer-motion';

export const Intro = () => {
    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.2 } }
    }
    const item = {
        hidden: { opacity: 0, y: -10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeIn' } }
    }
    return (
        <motion.div
            variants={container}
            initial='hidden'
            animate='show'
            className='font-major-mono font-medium text-white my-auto h-screen
                    space-y-2 flex justify-center flex-col relative md:space-y-3
                    '>
            <motion.p variants={item} className='text-4xl block text-end md:text-7xl lg:text-8xl'>
                <span className='text-gray-500'>
                    "
                </span>
                Co
                <span className='text-gray-500'>d</span>
                e
                <span className='text-gray-500'>R</span>

            </motion.p>
            <motion.p className="text-3xl block  md:text-6xl  lg:text-8xl  lg:my-3 lg:tracking-wider" variants={item}>
                <span className='text-gray-500'>D</span>
                esign
                {/* <span className='text-gray-500'>G</span> */}

                <span className='text-gray-500'> A</span>
                ddict,
            </motion.p>
            <motion.p className='text-4xl block text-center  md:text-7xl lg:text-8xl' variants={item}>
                <span className='text-gray-500'>A</span>
                bst
                <span className='text-gray-500'>ra</span>
                ct</motion.p>
            <motion.p className='text-4xl block  md:text-7xl lg:text-8xl' variants={item}>
                T
                <span className='text-gray-500'>h</span>
                inke
                <span className='text-gray-500'>R.</span>
                <span className='text-gray-500'>"</span>
            </motion.p>
        </motion.div>
    )
}
