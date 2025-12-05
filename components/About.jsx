'use client'
import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-5xl font-ovo'>
                About Me
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>

                {/* Image Section Div/Container */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.info_image} alt='user' className='w-full rounded-3xl' />
                </motion.div>



                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className='flex-1'>

                    <p className='mb-10 max-w-2xl font-ovo'>After graduating with a degree in Computer Science, I decided to pursue my passion for mobile development. I&apos;ve started my learning journey with Java and gradually picked up Jetpack Compose & Flutter. My favorite part of programming is the problem-solving aspect. I love the feeling of creating products which solves a real world problem. My core stack is Flutter, Jetpack Compose, and Next.js. I am also familiar with MongoDB, Supabase and Firebase. I am always looking to learn new technologies. I am currently working as a Flutter Developer at Techsaga Corporation.
                        When I&apos;m not coding, I enjoy playing watching movies, and playing pc games. I also enjoy learning new things.</p>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>

                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li
                                whileHover={{ opacity: 1.05 }}
                                key={index} className='border-[0.5px] border-gray-400 rounded-3xl p-6 cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 hover:shadow-purple-lg'>
                                <Image src={icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>

                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.h4
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                        className='my-6 text-gray-700 font-ovo'>My Skills And Tools</motion.h4>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                        className='grid grid-cols-3 sm:grid-cols-6 items-center gap-3 sm:gap-5'>
                        {toolsData.map((tools, index) => (
                            <motion.li
                                whileHover={{ scale: 1.1 }}
                                className=' flex items-center justify-center sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 hover:shadow-purple-lg' key={index}>

                                <Image src={tools} alt='tools' className='w-5 sm:w-7' />
                                {/* <h3 className='my-4 font-semibold text-gray-700'>{title}</h3> */}
                                {/* <p className='text-gray-600 text-sm'>{description}</p> */}

                            </motion.li>
                        ))}

                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About