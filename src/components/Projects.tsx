/* eslint-disable @next/next/no-img-element */
"use client";

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
        <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
);

interface Project {
    title: string;
    description: string;
    tags: string[];
    image: string;
    liveUrl?: string;
    githubUrl?: string;
}

const projects: Project[] = [
    {
        title: "PrepAI",
        description: "An AI-powered smart preparation engine that builds ATS-optimized resumes, tracks skill gaps, and turns your career goals into a step-by-step success roadmap.",
        tags: ["React", "Tailwind CSS", "API key Integration"],
        image: "/prep-ai-bg.jpeg",
        liveUrl: "https://prepai-ecru.vercel.app/",
        githubUrl: "https://github.com/daksh7064mca25-hub/PrepAI",
    },
    {
        title: "Employee Asset & Leave Management System",
        description: "A full-stack employee management platform for managing employees, company assets, and leave workflows with authentication, dashboards, image uploads, and approval operations.",
        tags: ["MERN", "JWT", "Multer"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
        liveUrl: "https://employee-leave-and-asset-management.vercel.app/login",
    },
    {
        title: "Stripe Revenue Management SaaS",
        description: "A full-stack Stripe-powered platform for subscription, payment, and revenue management with role-based access, webhooks, financial tracking, and automated revenue distribution.",
        tags: ["MERN", "Stripe", "JWT"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        liveUrl: "https://plans-and-stripe-management-system.vercel.app/",
    }
];

export default function Projects() {
    return (
        <section id="projects" className="relative w-full min-h-screen bg-[#0a0a0a] text-white py-24 sm:py-32 px-4 sm:px-8 md:px-16 lg:px-24 z-20">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">Featured Projects</h2>
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl font-light">
                        Full-stack web applications and AI-driven platforms built with modern technology stacks.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] hover:border-white/20 flex flex-col h-full"
                        >
                            <div className="relative h-48 sm:h-56 md:h-60 overflow-hidden bg-gray-900">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
                            </div>
                            <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow">
                                <h3 className="text-xl sm:text-2xl font-bold mb-2.5 tracking-tight group-hover:text-purple-300 transition-colors duration-300">{project.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed text-sm flex-grow">{project.description}</p>
                                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 mt-auto">
                                    {project.tags.map((tag, j) => (
                                        <span key={j} className="text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full bg-white/10 text-gray-200">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-5 text-gray-400 pt-2 border-t border-white/5">
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2 text-xs sm:text-sm font-medium">
                                            <ExternalLinkIcon /> Live Site
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2 text-xs sm:text-sm font-medium">
                                            <GithubIcon /> Source Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
