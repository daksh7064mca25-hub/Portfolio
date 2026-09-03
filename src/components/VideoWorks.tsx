/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Clock, Film } from "lucide-react";

// Video project structure
interface VideoProject {
    title: string;
    category: string;
    description: string;
    thumbnail: string;
    videoUrl: string;
    tags: string[];
    duration: string;
    role?: string;
}

const videos: VideoProject[] = [
    {
        title: "Motion Graphics Showreel",
        category: "Showreel",
        description: "A dynamic showcase of kinetic typography, visual effects, and high-energy motion design sequences crafted in Adobe After Effects.",
        thumbnail: "/videos/reel_thumb.jpg",
        videoUrl: "/videos/Final Reel-.mp4",
        tags: ["After Effects", "Motion Design", "Visual Effects", "Kinetic Type"],
        duration: "Showreel",
        role: "Motion Designer & Editor"
    },
    {
        title: "SaaS Product & UI Animation",
        category: "Product Motion",
        description: "Engaging product walkthrough and interface motion graphics demonstrating SaaS platform workflows, analytics metrics, and micro-interactions.",
        thumbnail: "/videos/saas_thumb.jpg",
        videoUrl: "/videos/SAAS Animation.mp4",
        tags: ["After Effects", "UI Animation", "SaaS Promo", "Figma to AE"],
        duration: "Promo",
        role: "UI & Motion Designer"
    },
    {
        title: "Kinetic Logo Reveal",
        category: "Brand Motion",
        description: "Sleek 3D and 2D logo animation with fluid easing curves, glowing particle accents, and impactful brand identity motion.",
        thumbnail: "/videos/logo_thumb.jpg",
        videoUrl: "/videos/Final Logo Animation.mp4",
        tags: ["After Effects", "Logo Animation", "Brand Identity", "3D Motion"],
        duration: "Ident",
        role: "Motion Designer"
    }
];

// Helper to determine the type of video link and get clean embed URL
function getEmbedInfo(url: string) {
    if (!url) return { type: "none", url: "" };

    // YouTube regex (handles watch, embed, short links)
    const ytReg = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const ytMatch = url.match(ytReg);
    if (ytMatch && ytMatch[1]) {
        return {
            type: "youtube",
            url: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`
        };
    }

    // Vimeo regex
    const vimeoReg = /(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/;
    const vimeoMatch = url.match(vimeoReg);
    if (vimeoMatch && vimeoMatch[1]) {
        return {
            type: "vimeo",
            url: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`
        };
    }

    // Direct video file path (MP4/WebM/etc)
    return {
        type: "direct",
        url: url
    };
}

export default function VideoWorks() {
    const [activeVideo, setActiveVideo] = useState<VideoProject | null>(null);

    const embedInfo = activeVideo ? getEmbedInfo(activeVideo.videoUrl) : { type: "none", url: "" };

    return (
        <section id="videoworks" className="relative w-full bg-[#050505] text-white py-32 px-8 md:px-24 border-t border-white/5 z-20">
            {/* Ambient background glow matching cinematic vibe */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header matching Projects style but with a subtext */}
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Motion Graphics & Video</h2>
                    <p className="text-gray-400 text-base md:text-lg max-w-2xl font-light">
                        High-impact motion design, kinetic typography, UI animations, and brand reveals crafted in Adobe After Effects. Click any card to play.
                    </p>
                </div>

                {/* 3-Column Grid matching Projects.tsx grid structure */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((video, i) => (
                        <div
                            key={i}
                            onClick={() => setActiveVideo(video)}
                            className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(147,51,234,0.15)] hover:border-purple-500/30 cursor-pointer flex flex-col h-full"
                        >
                            {/* Thumbnail Image Section */}
                            <div className="relative h-56 md:h-60 overflow-hidden bg-gray-900">
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                                
                                {/* Black gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent" />

                                {/* Category Badge - Top Left */}
                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-medium text-purple-300 flex items-center gap-1.5">
                                    <Film className="w-3 h-3" />
                                    {video.category}
                                </div>

                                {/* Duration Badge - Bottom Right */}
                                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-semibold text-gray-300 flex items-center gap-1">
                                    <Clock className="w-3.5 h-3.5 text-white/70" />
                                    {video.duration}
                                </div>

                                {/* Animated Play Overlay */}
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="w-14 h-14 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.4)] scale-75 group-hover:scale-100 transition-transform duration-300 ease-out">
                                        <Play className="w-6 h-6 fill-white ml-0.5" />
                                    </div>
                                </div>
                            </div>

                            {/* Text Details Section */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight group-hover:text-purple-300 transition-colors duration-300">
                                    {video.title}
                                </h3>
                                
                                {video.role && (
                                    <p className="text-xs text-purple-400 font-medium mb-3 uppercase tracking-wider">
                                        {video.role}
                                    </p>
                                )}

                                <p className="text-gray-400 mb-5 leading-relaxed text-sm flex-grow">
                                    {video.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5 mt-auto">
                                    {video.tags.map((tag, j) => (
                                        <span
                                            key={j}
                                            className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-gray-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Player Modal (Lightbox) */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
                        onClick={() => setActiveVideo(null)}
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-200 z-55"
                            onClick={() => setActiveVideo(null)}
                            aria-label="Close video player"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Modal Container */}
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="relative w-full max-w-4xl bg-black/40 border border-white/10 rounded-2xl overflow-hidden shadow-2xl aspect-video"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {embedInfo.type === "youtube" || embedInfo.type === "vimeo" ? (
                                <iframe
                                    src={embedInfo.url}
                                    className="w-full h-full"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title={activeVideo.title}
                                />
                            ) : embedInfo.type === "direct" ? (
                                <video
                                    src={embedInfo.url}
                                    className="w-full h-full object-contain bg-black"
                                    controls
                                    autoPlay
                                    playsInline
                                />
                            ) : null}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
