"use client";

import React from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";

const StudioPage = () => {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-yellow-400 selection:text-black">
            <Header />

            <div className="pt-32 pb-20 px-6 md:px-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                >
                    <h1 className="text-[15vw] md:text-[10vw] font-heading uppercase leading-[0.85] mb-20">
                        The <br /> Studio
                    </h1>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-20 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <p className="text-2xl md:text-3xl font-regular leading-relaxed text-zinc-400">
                            Observer is a boutique creative studio focused on high-end digital experiences and motion-driven narratives.
                        </p>
                        <p className="text-lg text-zinc-500 leading-relaxed">
                            Established in 2024, we’ve been pushing the boundaries of what’s possible on the web. Our philosophy is simple: observe the details, create the impact. We believe that every pixel tells a story, and every interaction is an opportunity to wow.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                        className="aspect-[4/5] bg-zinc-900 overflow-hidden rounded-lg group"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"
                            alt="Studio space"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                    </motion.div>
                </div>

                <div className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-10">
                    {[
                        { label: "Founded", value: "2024" },
                        { label: "Location", value: "Global" },
                        { label: "Team", value: "Creative" },
                        { label: "Awards", value: "15+" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="border-t border-zinc-800 pt-6"
                        >
                            <span className="text-zinc-500 text-xs uppercase tracking-widest">{stat.label}</span>
                            <h3 className="text-4xl font-heading mt-2">{stat.value}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Footer space */}
            <footer className="py-20 px-6 md:px-10 border-t border-zinc-900 mt-40">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-zinc-600 text-sm">© 2026 Observer Studio. All rights reserved.</p>
                    <div className="flex gap-10 text-xs uppercase tracking-widest">
                        <a href="#" className="hover:text-yellow-400 transition-colors">Instagram</a>
                        <a href="#" className="hover:text-yellow-400 transition-colors">Behance</a>
                        <a href="#" className="hover:text-yellow-400 transition-colors">Dribbble</a>
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default StudioPage;
