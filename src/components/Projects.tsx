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

const projects = [
    {
        title: "PrepAI",
        description: "An AI-powered smart preparation engine that builds ATS-optimized resumes, tracks skill gaps, and turns your career goals into a step-by-step success roadmap.",
        tags: ["React", "Tailwind CSS", "API key Integration"],
        image: "/prep-ai-bg.jpeg",
    },
    {
        title: "Employee Attendance System",
        description: "A comprehensive employee attendance management system that streamlines attendance tracking, leave management, and reporting for organizations.",
        tags: ["Next.js", "Tailwind", "D3.js"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
    },
    {
        title: "E-Commerce Reimagined",
        description: "Modern headless architecture for next-generation shopping experiences.",
        tags: ["Shopify", "Remix", "TypeScript"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    }
];

export default function Projects() {
    return (
        <section id="projects" className="relative w-full min-h-screen bg-[#0a0a0a] text-white py-32 px-8 md:px-24 z-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] hover:border-white/20"
                        >
                            <div className="h-64 overflow-hidden bg-gray-900">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-semibold mb-3 tracking-tight">{project.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, j) => (
                                        <span key={j} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 text-gray-200">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-6 text-gray-400">
                                    <a href="https://prepai-ecru.vercel.app/" target="_blank" className="hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                                        <ExternalLinkIcon /> Live Site
                                    </a>
                                    <a href="https://github.com/daksh7064mca25-hub/PrepAI" target="_blank" className="hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                                        <GithubIcon /> Source
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
