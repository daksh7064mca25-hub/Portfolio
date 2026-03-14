"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="relative w-full min-h-screen flex items-center bg-[#0a0a0a] text-white py-32 px-8 md:px-24 border-t border-white/5 z-20">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2"
                >
                    <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-gray-900 border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)]">
                        <img
                            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1200"
                            alt="About Me"
                            className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">About Me</h2>
                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                        <p>
                            I am a creative developer and visual storyteller, blending interactive code with cinematic design. My work focuses on building immersive digital experiences that elevate brands and captivate users.
                        </p>
                        <p>
                            With expertise in modern frameworks, motion graphics, and scrollytelling, I craft web applications that feel more like interactive films than traditional static pages.
                        </p>
                        <p className="text-white font-medium mt-8">
                            Let&apos;s build something extraordinary together.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
