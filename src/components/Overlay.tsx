"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // 0% - Section 1
    const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.25], [0, 1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

    // 30% - Section 2
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.55], [50, -100]);

    // 60% - Section 3
    const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.75, 0.85], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.5, 0.85], [100, -150]);

    return (
        <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-8 md:px-24">

                <motion.div
                    style={{ opacity: opacity1, y: y1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 drop-shadow-lg">
                        Daksh Babbar
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide drop-shadow-md">
                        Creative Developer And Video Editor
                    </p>
                </motion.div>

                <motion.div
                    style={{ opacity: opacity2, y: y2 }}
                    className="absolute inset-0 flex flex-col items-start justify-center text-left max-w-2xl px-8 md:px-24"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-lg">
                        I build digital <br /> <span className="text-gray-400 italic font-light">experiences.</span>
                    </h2>
                </motion.div>

                <motion.div
                    style={{ opacity: opacity3, y: y3 }}
                    className="absolute inset-0 flex flex-col items-end justify-center text-right px-8 md:px-24"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-lg">
                            Bridging design and <br />
                            <span className="text-gray-400 italic font-light">engineering.</span>
                        </h2>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
