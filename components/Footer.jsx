import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='mt-20'>
            {/* <div className='text-center'>
                <h6 className='font-extrabold text-2xl font-ovo'>Vivek Yadav <span className='text-red-500 font-bold'>.</span></h6>
                {/* <Image className="w-25 mx-auto mb-2" src={assets.logo} alt='logo' /> */}
            {/* <div className="w-max flex items-center gap-3 mx-auto"> <Image className="w-5 mx-auto" src={assets.mail_icon} alt='logo' />  vk662967@gmail.com.</div> */}
            {/* </div> */}


            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p className=''>© {new Date().getFullYear()} Yadav Ji. All rights reserved.</p>
                <p className='font-ovo font-semibold text-gray-600'>Built with 💜</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li> <a target='_blank' href="https://github.com/VivekYadavDeveloper">Github</a></li>
                    <li> <a target='_blank' href="https://medium.com/@desiappdev24">Medium</a></li>
                    <li> <a target='_blank' href="https://stackoverflow.com/users/17017641/vivek-yadav">Stack overflow</a></li>
                    <li> <a target='_blank' href="https://www.linkedin.com/in/vivekyadavtiger/">LinkedIn</a></li>

                </ul>
            </div>

        </div>
    )
}

export default Footer