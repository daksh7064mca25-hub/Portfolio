"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Motion & Video", href: "#videoworks" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;

        // Change navbar background on scroll
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        // Hide navbar on scroll down, show on scroll up
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 inset-x-0 z-50 w-full flex justify-center py-3 sm:py-4 px-2 sm:px-4 transition-colors duration-300 ${isScrolled ? "bg-black/70 backdrop-blur-md shadow-lg shadow-black/30" : "bg-transparent"
                }`}
        >
            <div className="flex items-center gap-2 sm:gap-4 md:gap-8 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md max-w-[96vw] overflow-x-auto scrollbar-none shadow-xl">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className="text-white/70 hover:text-white transition-all duration-200 text-xs sm:text-sm tracking-wide font-medium whitespace-nowrap px-1.5 py-1 hover:scale-105"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </motion.nav>
    );
}
