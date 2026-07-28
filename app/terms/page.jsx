"use client"
import React from 'react'
import { motion } from 'motion/react'

function TermsPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='terms'
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
                    Terms of Services
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }} className="space-y-6 text-justify">

                    <p>
                        These terms of service (Terms) govern your access to and use of the
                        <span className="font-bold"> CreationiX </span>
                        website, its mobile applications (Bible, etc), and related services (collectively, the `Service`). By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use the Service.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-500 mb-2">
                            1. Use of Service
                        </h2>
                        <p>
                            You must follow any policies made available to you within the Service. You may not misuse our Service. For example, do not interfere with our Service or try to access it using a method other than the interface and the instructions that we provide.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-500 mb-2">
                            2. Content
                        </h2>
                        <p>
                            Our Service displays some content that is not <span className="font-bold"> CreationiX </span>. This content is the sole responsibility of the entity that makes it available. We may review content to determine whether it is illegal or violates our policies, and we may remove or refuse to display content that we reasonably believe violates our policies or the law.

                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-500 mb-2">
                            3. Modification and Termination
                        </h2>
                        <p>
                            We are constantly changing and improving our Service. We may add or remove functionalities or features, and we may suspend or stop a Service altogether.
                        </p>
                    </motion.div>

                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default TermsPage