"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="relative w-full min-h-[75vh] flex flex-col justify-between bg-[#050505] text-white pt-24 sm:pt-32 pb-12 px-4 sm:px-8 md:px-16 lg:px-24 border-t border-white/5 z-20 overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute bottom-0 right-0 w-[350px] sm:w-[500px] md:w-[600px] h-[350px] sm:h-[500px] md:h-[600px] bg-purple-600/10 rounded-full blur-[100px] md:blur-[140px] pointer-events-none translate-x-1/3 translate-y-1/3" />

            <div className="max-w-4xl mx-auto w-full text-center relative z-10 my-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-purple-400 font-medium tracking-[0.2em] uppercase mb-4 text-xs sm:text-sm"
                >
                    Get In Touch
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-500"
                >
                    Let&apos;s Create Together
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-md mx-auto sm:max-w-none"
                >
                    <a
                        href="mailto:dakshbabbar3131@gmail.com"
                        className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white text-black font-semibold text-sm sm:text-base tracking-wide hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.15)] text-center"
                    >
                        Send an Email
                    </a>
                    <a
                        href="https://www.linkedin.com/in/daksh-babbar-5208ab315"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full border border-white/20 text-white font-semibold text-sm sm:text-base tracking-wide hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-center"
                    >
                        LinkedIn Profile
                    </a>
                </motion.div>
            </div>

            {/* Polished Footer */}
            <div className="max-w-7xl mx-auto w-full pt-16 sm:pt-24 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 relative z-10">
                <p>© {new Date().getFullYear()} Daksh Babbar. All rights reserved.</p>
                <p className="text-gray-400">Designed & Engineered with Next.js, Framer Motion & After Effects</p>
            </div>
        </section>
    );
}
