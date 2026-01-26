'use client'

import Image from "next/image";
import Work from "@/components/Work";
import { assets, workData } from "@/assets/assets";
import { motion } from 'motion/react'
export default function ProjectsPage() {
    return (
        <section className="pt-28 px-[8%]">

            {/* Featured Project */}
            <h1 className="font-bold text-4xl p-4">Feature Project</h1>

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
                            src={workData[4].bgImage}
                            width={80}
                            height={80}
                            alt="App Logo"
                            className='border rounded-2xl'
                        />
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        {workData[4].title}
                    </h1>

                    <p className="text-gray-600 mb-6 p-3 max-w-md">
                        Hindi Bible App helps you read, understand, and study the Holy Bible in simple and clear Hindi language.
                    </p>

                    {/* Store Buttons */}
                    <div className="flex gap-4 mb-6">
                        <a
                            href={workData[4].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-3 border rounded-xl flex items-center gap-2 hover:bg-gray-100"
                        >
                            <Image className="w-4" src={assets.playstore} alt="Playstore" />
                            Playstore
                        </a>

                        {/* <button className="px-5 py-3 border rounded-xl flex items-center gap-2 hover:bg-gray-100">
                            <Image className='w-4' src={assets.appstore} alt='Playstore' /> Playstore iOS
                        </button> */}
                    </div>

                    {/* Stats */}
                    <div className="flex gap-8 text-gray-500 text-sm">
                        <div>⭐ 4.8</div>
                        <div>1K+ Downloads</div>
                        <div>Rated 4+</div>
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

            {/* ALL PROJECTS GRID */}
            <div className="mt-20">
                <Work showAll />
            </div>

        </section>
    );
}
