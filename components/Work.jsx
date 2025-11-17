'use client'
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'




const Work = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}

            id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center mb-2 text-5xl font-ovo'>
                Projects I worked on
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.6 }}

                className='grid grid-cols-auto-fit gap-6 my-10'>

                {/* Card Section */}
                {workData.map((projects, index) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        key={index} style={{ backgroundImage: `url(${projects.bgImage})` }} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'>

                        <div className='bg-white w-10/12 rounded-md absolute bottom-5  left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>

                            <div>
                                <h2 className='text-lg font-semibold my-4 text-gray-700'>{projects.title}</h2>
                                <p className='text-sm text-gray-700'>{projects.description}</p>
                            </div>
                            <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-dark group-hover:bg-purple-100 transition duration-500'>
                                <Image src={assets.send_icon} alt="send icon" className='w-5' />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className='w-max flex items-center justify-center gap-2 underline text-gray-400 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-light-hover hover:-translate-y-1 duration-500' href=""> Showmore Project <Image className='w-4' src={assets.right_arrow_bold} alt='Showmore' /></motion.a>

        </motion.div>
    )
}

export default Work