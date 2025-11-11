import { assets, infoList } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h2 className='text-center mb-2 text-5xl font-ovo'>
                About Me
            </h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>

                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.info_image} alt='user' className='w-full rounded-3xl' />
                </div>
                <div className='flex-1'>

                    <p className='mb-10 max-w-2xl font-ovo'>After graduating with a degree in Computer Science, I decided to pursue my passion for mobile development. I&apos;ve started my learning journey with Java and gradually picked up React & Flutter. My favorite part of programming is the problem-solving aspect. I love the feeling of creating products which solves a real world problem. My core stack is Flutter, Jetpack Compose, and Next.js,. I am also familiar with MongoDB, Supabase and Firebase. I am always looking to learn new technologies. I am currently working as a Flutter Developer at Create.
                        When I&apos;m not coding, I enjoy playing watching movies, and playing pc games. I also enjoy learning new things.</p>
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>

                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <li key={index} className='border-[0.5px] border-gray-400 rounded-3xl p-6 cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 hover:shadow-purple-lg'>

                                <Image src={icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About