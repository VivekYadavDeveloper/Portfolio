'use client'

import Image from "next/image";
import { assets, workData } from "@/assets/assets";
import { motion } from 'motion/react'
import React from 'react'

function ProjectPage() {
    return (
        <motion.section
            initial={{ opacity: 0.3 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: .5 }}

            className="pt-12 px-8 bg-footer">

            {/* Featured Project */}
            <motion.h1
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="font-bold font-ovo text-4xl px-4">Featured Project</motion.h1>
            <motion.p
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-gray-500 px-4 mb-10">Every keystroke tells a story — built with passion and code✨</motion.p>

            <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                id='work'
                className="border bg-white rounded-2xl shadow-lg p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center hover:transition duration-500">

                {/* LEFT CONTENT */}
                <div>
                    {/* App Icon */}
                    <div className="w-20 h-20 rounded-2xl bg-green-100 flex items-center justify-center mb-6 shadow-lg shadow-black/10">
                        <Image
                            src={workData[5].bgImage}
                            width={80}
                            height={80}
                            alt="App Logo"
                            className='border rounded-2xl'
                        />
                    </div>

                    <h1 className="text-4xl font-ovo font-bold text-gray-900 mb-4">
                        {workData[5].title}
                    </h1>

                    <p className="text-gray-600 font-ovo mb-6 p-3 max-w-md">
                        Hindi Bible App helps you read, understand, and study the Holy Bible in simple and clear Hindi language.
                    </p>

                    {/* Store Buttons */}
                    <div className="flex gap-4 fony-ovo mb-6">
                        <a
                            href={workData[5].link.playstore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-3 border rounded-xl flex items-center gap-2 hover:bg-gray-100"
                        >
                            <Image className="w-4" src={assets.playstore} alt="Playstore" />
                            Playstore
                        </a>
                    </div>

                    {/* Info */}
                    <div className="flex gap-8 text-gray-500 text-sm">
                        <div>{workData[5].apprating.rating}</div>
                        <div>{workData[5].apprating.download}</div>
                        <div>{workData[5].apprating.rated}</div>
                    </div>
                </div>

                {/* RIGHT IMAGES */}
                <div className="flex gap-4 justify-center lg:justify-end">
                    {workData
                        .filter((p) => p.title === "Bible App")
                        .map((project, i) => (
                            <div key={i} className="max-w-full">
                                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>

                                <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory">
                                    {project.screenshots.map((img, index) => (
                                        <div
                                            key={index}
                                            className="relative min-w-40 h-80 rounded-xl overflow-hidden shadow-md snap-center"
                                        >
                                            <Image
                                                src={img}
                                                alt={`${project.title} screenshot ${index + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>

            </motion.div>

            <motion.h1
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="font-bold text-4xl px-4 py-10">Other Projects</motion.h1>
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="grid grid-cols-3-col gap-6 mb-20">

                {/* ALL PROJECTS GRID */}
                {/* Other App Section */}

                {workData.map((projects, index) => (
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        id='work'
                        key={index} className="border rounded-2xl bg-white/45 relative group cursor-pointer p-6">

                        {/* Icon + Title */}
                        <div className="flex items-center gap-4">
                            <div className="w-20 h-20 bg-white rounded-2xl shadow-lg shadow-black/10 flex items-center justify-center">
                                <Image
                                    className="rounded-2xl"
                                    src={projects.bgImage}
                                    width={'200'} height={'200'}
                                    alt="App logo"
                                />
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-800">{projects.title}</h2>
                        </div>

                        <h3 className="mt-8">{projects.description}</h3>
                        {/* App link Section */}

                        <div className="flex gap-4 mt-6">
                            <a
                                href={projects.link.playstore}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-3 border rounded-xl flex items-center gap-2 hover:bg-gray-100">
                                <Image className="w-4" src={assets.playstore} alt="Playstore" />Playstore
                            </a>
                            <a
                                href={projects.link.appstore}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-3 border rounded-xl flex items-center gap-2 hover:bg-gray-100">
                                <Image className="w-4" src={assets.appstore} alt="Playstore" />Appstore
                            </a>


                        </div>

                        {/* App Rating2 */}
                        <div className="mt-5 flex gap-6 text-sm text-gray-500">
                            <div className="">{projects.apprating?.rating}</div>
                            <div className="">{projects.apprating?.download}</div>
                            <div className="">{projects.apprating?.rated}</div>
                        </div>

                    </motion.div>
                ))}


            </motion.div>



        </motion.section>
    )
}

export default ProjectPage

