"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const videos = [
    {
        title: "Cinematic Reel 2024",
        category: "Showreel",
        image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=2600",
    },
    {
        title: "Neon Shadows",
        category: "Music Video",
        image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=2600",
    },
    {
        title: "The Urban Explorer",
        category: "Documentary",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2600",
    }
];

function TiltCard({ video, large = false }: { video: any, large?: boolean }) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div style={{ perspective: 1200 }} className="w-full h-full">
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className={`relative w-full ${large ? 'h-[500px] md:h-[600px]' : 'h-[400px] md:h-[500px]'} rounded-2xl cursor-pointer group`}
            >
                <div
                    className="absolute inset-0 rounded-2xl bg-cover bg-center shadow-2xl transition-all duration-300 group-hover:shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
                    style={{
                        backgroundImage: `url(${video.image})`,
                        transform: "translateZ(30px)", // Push the background back slightly compared to text
                    }}
                >
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-2xl transition-colors duration-500 group-hover:from-black/80" />

                    {/* Play Button - Pops out */}
                    <div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                        style={{ transform: "translateZ(80px)" }} // Highly elevated
                    >
                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 text-white ml-2 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>

                    {/* Text Content - Pops out */}
                    <div
                        className="absolute bottom-0 left-0 p-8 md:p-12 w-full"
                        style={{ transform: "translateZ(60px)" }} // Moderately elevated
                    >
                        <motion.p
                            className="text-sm md:text-base font-semibold text-gray-300 mb-2 md:mb-3 uppercase tracking-[0.2em]"
                        >
                            {video.category}
                        </motion.p>
                        <motion.h3
                            className={`font-bold text-white tracking-tight drop-shadow-xl ${large ? 'text-4xl md:text-6xl' : 'text-3xl md:text-4xl'}`}
                        >
                            {video.title}
                        </motion.h3>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default function VideoWorks() {
    return (
        <section id="videoworks" className="relative w-full min-h-screen bg-[#050505] text-white py-32 px-8 md:px-24 z-20 overflow-hidden">
            {/* Background ambient glow matching cinematic vibe */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 relative">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-indigo-400 font-medium tracking-widest uppercase mb-4 text-sm"
                        >
                            Director & Editor
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-300 to-gray-600 drop-shadow-lg"
                        >
                            Video Editing
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-gray-400 text-lg md:text-2xl max-w-2xl font-light leading-relaxed"
                        >
                            Crafting visual narratives through motion, pacing, and color.
                            A collection of my premium narrative and commercial projects.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {/* Hero card takes full width */}
                    <div className="col-span-1 lg:col-span-2">
                        <TiltCard video={videos[0]} large={true} />
                    </div>
                    {/* Bottom two cards */}
                    <div className="col-span-1">
                        <TiltCard video={videos[1]} />
                    </div>
                    <div className="col-span-1">
                        <TiltCard video={videos[2]} />
                    </div>
                </div>
            </div>

            {/* Bottom fading edge */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
        </section>
    );
}
