"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="relative w-full min-h-[80vh] flex items-center bg-[#050505] text-white py-32 px-8 md:px-24 border-t border-white/5 z-20 overflow-hidden">
            {/* Ambient background blur */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 translate-y-1/3" />

            <div className="max-w-4xl mx-auto w-full text-center relative z-10">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-purple-400 font-medium tracking-[0.2em] uppercase mb-4 text-sm"
                >
                    Get In Touch
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-black tracking-tighter mb-12 bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-600"
                >
                    Let&apos;s Create Together
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center"
                >
                    <a href="mailto:hello@example.com" className="px-10 py-5 rounded-full bg-white text-black font-semibold tracking-wide hover:scale-105 transition-transform duration-300">
                        Send an Email
                    </a>
                    <a href="https://linkedin.com" target="_blank" className="px-10 py-5 rounded-full border border-white/20 text-white font-semibold tracking-wide hover:bg-white/5 transition-colors duration-300">
                        LinkedIn Profile
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
