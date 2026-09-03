"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // 0% - Section 1 (Hero title - visible immediately at scroll 0)
    const opacity1 = useTransform(scrollYProgress, [0, 0.12, 0.22], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.22], [0, -80]);

    // 30% - Section 2
    const opacity2 = useTransform(scrollYProgress, [0.22, 0.32, 0.48, 0.58], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.22, 0.58], [40, -80]);

    // 60% - Section 3
    const opacity3 = useTransform(scrollYProgress, [0.58, 0.68, 0.82, 0.92], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.58, 0.92], [40, -80]);

    // Scroll indicator opacity (fades out early)
    const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

    return (
        <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-4 sm:px-8 md:px-24">

                {/* Section 1: Hero */}
                <motion.div
                    style={{ opacity: opacity1, y: y1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                >
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-3 sm:mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                        Daksh Babbar
                    </h1>
                    <p className="text-base sm:text-xl md:text-2xl text-purple-300/90 font-light tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] max-w-xl">
                        Creative Developer & Motion Designer
                    </p>
                </motion.div>

                {/* Section 2: Statement 1 */}
                <motion.div
                    style={{ opacity: opacity2, y: y2 }}
                    className="absolute inset-0 flex flex-col items-start justify-center text-left max-w-2xl px-6 sm:px-12 md:px-24"
                >
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                        I build digital <br /> <span className="text-purple-400 italic font-light">experiences.</span>
                    </h2>
                </motion.div>

                {/* Section 3: Statement 2 */}
                <motion.div
                    style={{ opacity: opacity3, y: y3 }}
                    className="absolute inset-0 flex flex-col items-end justify-center text-right px-6 sm:px-12 md:px-24"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                            Bridging design and <br />
                            <span className="text-purple-400 italic font-light">engineering.</span>
                        </h2>
                    </div>
                </motion.div>

                {/* Scroll Indicator at bottom */}
                <motion.div
                    style={{ opacity: scrollIndicatorOpacity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-[11px] uppercase tracking-[0.25em] text-gray-400 font-medium">Scroll to explore</span>
                    <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1 h-2 bg-purple-400 rounded-full"
                        />
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
