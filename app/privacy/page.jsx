"use client"
import React from 'react'
import { motion } from 'motion/react'

const PrivacyPolicyPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='privacy'
            className="py-10 bg-footer">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold font-ovo mb-6">
                    Privacy Policy
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }} className="space-y-6 text-justify">

                    <p>
                        Your privacy is important to us. It is
                        <span className="font-bold"> CreationiX </span>
                        policy to respect your privacy regarding any information we may collect from you across our website, mobile applications, and other sites we own and operate.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-500 mb-2">
                            Information We Collect
                        </h2>
                        <p>
                            We only ask for personal information when we truly need it to provide a service to you.
                            We collect it by fair and lawful means, with your knowledge and consent.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-500 mb-2">
                            Deletion Of Account
                        </h2>
                        <p>
                            If you wish to delete your account, you may do so through the settings in the app
                            or contact us at
                            <a href="mailto:desiappdev24@gmail.com" className="text-emerald-500 ml-1">
                                desiappdev24@gmail.com
                            </a>.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-500 mb-2">
                            Security
                        </h2>
                        <p>
                            We don’t share any personally identifying information publicly or with third-parties,
                            except when required by law.
                        </p>
                    </motion.div>

                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default PrivacyPolicyPage