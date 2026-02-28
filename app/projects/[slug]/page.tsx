"use client";

import React from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

const PROJECTS_DATA: { [key: string]: any } = {
    "modern-loft": {
        title: "Modern Loft",
        category: "Interior Design",
        content: "A complete overhaul of a 1920s warehouse space into a minimalist, light-filled sanctuary for a digital artist. We focused on raw materials like concrete and blackened steel, balanced by warm oak and linen. Custom furniture pieces were designed to maximize the open-plan layout while defining intimate zones.",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
        year: "2024",
        services: ["Interior Arch", "Custom Furniture", "Lighting Design"]
    },
    "skyline-tower": {
        title: "Skyline Tower",
        category: "Architecture",
        content: "A 45-story residential landmark that redefines the city's vertical horizon. The building's crystalline form responds to solar orientation and wind patterns, while providing wrap-around terraces for every unit. The ground-level plaza acts as a new social hub for the surrounding community.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
        year: "2023",
        services: ["Masterplanning", "Core & Shell", "Sustainability"]
    }
};

const ProjectDetailPage = () => {
    const params = useParams();
    const slug = params.slug as string;
    const project = PROJECTS_DATA[slug] || PROJECTS_DATA["modern-loft"];

    return (
        <main className="min-h-screen bg-black text-white selection:bg-yellow-400 selection:text-black">
            <Header />

            <div className="pt-32 pb-20 px-6 md:px-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                    className="w-full aspect-video rounded-xl overflow-hidden mb-20 bg-zinc-900"
                >
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </motion.div>

                <div className="grid md:grid-cols-[1fr_2fr] gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="space-y-12"
                    >
                        <div>
                            <p className="text-zinc-500 text-xs uppercase tracking-widest mb-4">Project</p>
                            <h1 className="text-5xl font-heading uppercase">{project.title}</h1>
                        </div>

                        <div>
                            <p className="text-zinc-500 text-xs uppercase tracking-widest mb-4">Year</p>
                            <p className="text-xl font-regular">{project.year}</p>
                        </div>

                        <div>
                            <p className="text-zinc-500 text-xs uppercase tracking-widest mb-4">Services</p>
                            <ul className="space-y-2">
                                {project.services.map((s: string) => (
                                    <li key={s} className="text-lg font-regular">{s}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7 }}
                    >
                        <p className="text-2xl md:text-3xl font-regular leading-relaxed text-zinc-300">
                            {project.content}
                        </p>
                    </motion.div>
                </div>

                {/* Additional Content mockup */}
                <div className="mt-40 grid md:grid-cols-2 gap-10">
                    <div className="aspect-square bg-zinc-900 rounded-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1512918766671-ad65181bc753?auto=format&fit=crop&q=80&w=800" alt="Detail 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square bg-zinc-900 rounded-lg overflow-hidden translate-y-20">
                        <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800" alt="Detail 2" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            <footer className="py-20 px-6 md:px-10 border-t border-zinc-900 mt-60">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-zinc-600 text-sm">© 2026 Observer Studio. All rights reserved.</p>
                </div>
            </footer>
        </main>
    );
};

export default ProjectDetailPage;
