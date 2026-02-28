"use client";

import React from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import Link from "next/link";

const PROJECTS = [
    {
        title: "Modern Loft",
        slug: "modern-loft",
        category: "Interior Design",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Skyline Tower",
        slug: "skyline-tower",
        category: "Architecture",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Future Mobility",
        slug: "future-mobility",
        category: "Product Design",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Organic Forms",
        slug: "organic-forms",
        category: "Sculpture",
        image: "https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Digital Horizon",
        slug: "digital-horizon",
        category: "VR/AR",
        image: "https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Ocean Breeze",
        slug: "ocean-breeze",
        category: "Photography",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    }
];

const ProjectsPage = () => {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-yellow-400 selection:text-black">
            <Header />

            <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 md:px-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                    className="mb-12 md:mb-20"
                >
                    <h1 className="text-[clamp(4rem,12vw,8vw)] font-heading uppercase leading-[0.85]">
                        Selected <br /> Works
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
                    {PROJECTS.map((project, i) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i % 3 * 0.1 }}
                        >
                            <Link href={`/projects/${project.slug}`} className="group block">
                                <div className="aspect-[3/4] overflow-hidden rounded-lg bg-zinc-900 mb-4 md:mb-6">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-zinc-500 mb-1 md:mb-2">{project.category}</p>
                                        <h2 className="text-xl md:text-2xl font-heading uppercase group-hover:text-yellow-400 transition-colors">{project.title}</h2>
                                    </div>
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-yellow-400 group-hover:border-yellow-400 transition-all duration-500">
                                        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 md:w-4 md:h-4 group-hover:text-black transition-colors">
                                            <path d="M3.64645 11.3536L11.3536 3.64645M11.3536 3.64645H5M11.3536 3.64645V10" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            <footer className="py-12 md:py-20 px-6 md:px-10 border-t border-zinc-900 mt-20 md:mt-40">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
                    <p className="text-zinc-600 text-xs md:text-sm text-center md:text-left">© 2026 Observer Studio. All rights reserved.</p>
                    <div className="flex gap-6 md:gap-10 text-[10px] md:text-xs uppercase tracking-widest">
                        <a href="#" className="hover:text-yellow-400 transition-colors">Instagram</a>
                        <a href="#" className="hover:text-yellow-400 transition-colors">Behance</a>
                        <a href="#" className="hover:text-yellow-400 transition-colors">Dribbble</a>
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default ProjectsPage;
