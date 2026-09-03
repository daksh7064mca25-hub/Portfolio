/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="relative w-full min-h-screen flex items-center bg-[#0a0a0a] text-white py-24 sm:py-32 px-4 sm:px-8 md:px-16 lg:px-24 border-t border-white/5 z-20">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 max-w-sm md:max-w-none"
                >
                    <div className="relative aspect-square md:aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-900 border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)]">
                        <img
                            src="/Image About me.png"
                            alt="About Daksh Babbar"
                            className="w-full h-full object-cover opacity-85"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2"
                >
                    <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 uppercase tracking-widest mb-4">
                        About Me
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Crafting Experiences at the Intersection of Code & Motion
                    </h2>
                    <div className="space-y-4 sm:space-y-5 text-gray-300/80 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                        <p>
                            I am a creative developer and motion designer, blending interactive code with cinematic visual design. My work focuses on building immersive digital experiences that elevate brands and captivate users.
                        </p>
                        <p>
                            With expertise across modern full-stack web frameworks, Adobe After Effects, kinetic typography, and scrollytelling, I craft web applications that feel more like interactive films than static pages.
                        </p>
                        <p className="text-white font-medium pt-2">
                            Let&apos;s build something extraordinary together.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
