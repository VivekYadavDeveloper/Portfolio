import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
    return (
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h2 className='text-center mb-2 text-5xl font-ovo'>
                Projects I worked on
            </h2>
            <div className='grid grid-cols-auto-fit gap-6 my-10'>

                {/* Card Section */}
                {workData.map((projects, index) => (
                    <div key={index} style={{ backgroundImage: `url(${projects.bgImage})` }} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'>

                        <div className='bg-white w-10/12 rounded-md absolute bottom-5  left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>

                            <div>
                                <h2 className='text-lg font-semibold my-4 text-gray-700'>{projects.title}</h2>
                                <p className='text-sm text-gray-700'>{projects.description}</p>
                            </div>
                            <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-dark group-hover:bg-purple-100 transition duration-500'>
                                <Image src={assets.send_icon} alt="send icon" className='w-5' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <a className='w-max flex items-center justify-center gap-2 underline text-gray-400 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-light-hover hover:-translate-y-1 duration-500' href=""> Showmore Project <Image className='w-4' src={assets.right_arrow_bold} alt='Showmore' /></a>

        </div>
    )
}

export default Work