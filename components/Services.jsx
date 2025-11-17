'use client'
import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

import { motion, scale } from 'motion/react'

export const Services = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center mb-2 text-5xl font-ovo'>
                My Services
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className='grid grid-cols-auto-fit gap-6 my-10'>

                {serviceData.map(({ icon, title, description, link }, index) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500'>
                        <Image src={icon} alt={title} className='w-10' />
                        <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>{description}</p>
                        <a className='flex items-center gap-2 text-sm mt-5' href={link} > Read more <Image className="w-4" src={assets.right_arrow} alt='Link' /></a>

                    </motion.div>

                ))}

            </motion.div>
        </motion.div>
    )
}
