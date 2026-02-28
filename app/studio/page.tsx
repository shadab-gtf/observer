"use client";

import React from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";

const StudioPage = () => {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-yellow-400 selection:text-black">
            <Header />

            <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 md:px-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                >
                    <h1 className="text-[clamp(4rem,15vw,10rem)] font-heading uppercase leading-[0.85] mb-12 md:mb-20">
                        The <br /> Studio
                    </h1>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="space-y-6 md:space-y-8"
                    >
                        <p className="text-xl md:text-3xl font-regular leading-relaxed text-zinc-400">
                            Observer is a boutique creative studio focused on high-end digital experiences and motion-driven narratives.
                        </p>
                        <p className="text-base md:text-lg text-zinc-500 leading-relaxed">
                            Established in 2024, we’ve been pushing the boundaries of what’s possible on the web. Our philosophy is simple: observe the details, create the impact. We believe that every pixel tells a story, and every interaction is an opportunity to wow.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                        className="aspect-[4/5] bg-zinc-900 overflow-hidden rounded-lg group hidden md:block"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"
                            alt="Studio space"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                    </motion.div>
                </div>

                <div className="mt-20 md:mt-40 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
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
                            className="border-t border-zinc-800 pt-4 md:pt-6"
                        >
                            <span className="text-zinc-500 text-[10px] md:text-xs uppercase tracking-widest">{stat.label}</span>
                            <h3 className="text-2xl md:text-4xl font-heading mt-2">{stat.value}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Footer space */}
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

export default StudioPage;
