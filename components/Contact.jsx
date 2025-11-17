"use client"
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'motion/react'

function Contact() {


    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "54c34ce2-27ed-4b0e-9bb8-084bb003ba14");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-footer'>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-5xl font-ovo'>
                Contact Me
            </motion.h2>

            <motion.p
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}

                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>Please contact me directly at vk662967@gmail.com or through this form.</motion.p>

            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                onSubmit={onSubmit} className='max-w-2xl mx-auto'>

                <div className='grid grid-cols-auto-fit gap-6 mt-10 mb-8'>
                    <motion.input
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.5 }}

                        name='name' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' type="text" placeholder='Enter your name' required />
                    <motion.input
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.7 }}
                        name='email' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' type="email" placeholder='Enter your email' required />
                </div>
                <motion.textarea

                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    name='message' className='w-full p-4 outline-none mb-6 border-[0.5px] border-gray-400 rounded-md bg-white text-start' rows={6} id="" placeholder='Your message' required></motion.textarea>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{duration:0.5}}
                   
                    className="group flex items-center justify-center gap-2 h-12 w-32 bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65" type='submit'>Submit<Image className="w-4 invert items-center" src={assets.send_icon} alt='send' /></motion.button>


                <p className='mt-4'>{result}</p>
            </motion.form>
        </motion.div>
    )
}

export default Contact