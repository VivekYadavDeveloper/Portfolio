'use client'
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import Link from "next/link";


const Work = ({ showAll = false }) => {
    const projectToShow = showAll ? workData : workData.slice(0, 4);

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
                {projectToShow.map((projects, index) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        key={index} className='bg-white/45 w-full h-[420px] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'>

                        {/* Background Images */}
                        {/* <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${projects.bgImage})` }}
                        /> */}

                        <div className="absolute top-5 left-5 flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg shadow-black/10">
                            {/* image / icon here */}
                            <Image src={projects.bgImage} width={'200'} height={'200'} alt='App Icon' className='border rounded-2xl' />
                        </div>


                        <div className='bg-white w-30/32 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>

                            <div>
                                <h2 className='text-lg font-semibold my-4 text-gray-700'>{projects.title}</h2>
                                <p className='text-sm text-gray-700'>{projects.description}</p>
                                <div className='border rounded border-black w-10 aspect-square flex items-center justify-center shadow-dark group-hover:bg-purple-100 transition duration-500'>
                                    <a href={projects.link} > <Image src={assets.send_icon} alt="send icon" className='w-5' /></a>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {!showAll && (<motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="flex justify-center mt-10">
                <Link
                    href="/projects"
                    className="w-max flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-black-hover hover:-translate-y-1 duration-500">
                    Show More<Image className='w-4' src={assets.right_arrow_bold} alt='Showmore' />
                </Link>
            </motion.div>)}


        </motion.div>
    )
}

export default Work