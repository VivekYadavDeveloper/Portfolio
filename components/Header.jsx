'use client'
import React from 'react'
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from "motion/react"

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto min-h-dvh flex flex-col items-center justify-center gap-4 p-15'>

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                whileInView={{ scale: 1 }}
            >
                <Image src={assets.profile} alt='' className='rounded-full w-32' />
            </motion.div>

            <motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='flex items-center gap-2 text-xl md:text-2xl mb-3 font-ovo'>Hi! I&apos;m Vivek Yadav <Image src={assets.hand_icon} alt='' className='w-6' /></motion.h3>

            <motion.h1
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className='text-3xl sm:text-6xl lg:text-[36px] font-ovo'>I&apos;m a  Mobile App & Web developer with 3 years of experience. I enjoy building sites & apps. My focus is Flutter, Jetpack Compose & React (Next.js).</motion.h1>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>

                <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }} href="#contact" className='p-2.5 border-white rounded-full bg-black text-white flex items-center gap-2 transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:shadow-purple-lg'>Contact me here <Image src={assets.right_arrow_white} alt='' className='w-4' /></motion.a>

                <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    href="/vivek-yadav.pdf" download className='p-2.5 border rounded-full border-gray-400 flex items-center gap-2 transition-all hover:scale-110 active:scale-105 hover:shadow-purple-lg'>Download CV<Image src={assets.download_icon} alt='' className='w-4' /></motion.a>

                <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    className='p-2.5 border rounded-4xl bg-white border-gray-300 flex items-center gap-1 cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 hover:shadow-purple-lg' href="https://www.linkedin.com/in/vivekyadavtiger/"><Image src={assets.linkedin} alt='' className='w-8' /></motion.a>

                <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className='p-2.5 border rounded-4xl bg-white border-gray-300 flex items-center gap-2 cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 hover:shadow-purple-lg' href="https://github.com/VivekYadavDeveloper"><Image src={assets.github} alt='' className='w-8' /></motion.a>
            </div>

        </div>
    )
}

export default Header