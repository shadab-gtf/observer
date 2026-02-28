"use client";

import React from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

const NEWS_DATA: { [key: string]: any } = {
    "future-of-minimalism": {
        title: "The Future of Minimalist Architecture in 2026",
        date: "Feb 28, 2026",
        image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=1200",
        content: `
            In 2026, minimalism has evolved from a purely aesthetic choice to a holistic survival strategy. As our digital lives become more complex, our physical environments must provide a sanctuary of clarity. 
            
            We are seeing a shift towards 'emotional minimalism'—where every object in a space is carefully curated not just for its function, but for its psychological impact. Sustainable materials, once a niche requirement, are now the foundation of every high-end project. 

            The integration of technology has also changed. No longer are we seeing screens and devices as centerpiece elements. Instead, tech is becoming invisible, woven into the very fabric of our buildings, responding to our needs without demanding our attention.
        `,
        author: "Alex Rivers"
    }
};

const NewspaperDetailPage = () => {
    const params = useParams();
    const slug = params.slug as string;
    const article = NEWS_DATA[slug] || NEWS_DATA["future-of-minimalism"];

    return (
        <main className="min-h-screen bg-black text-white selection:bg-yellow-400 selection:text-black">
            <Header />

            <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 md:px-10 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="space-y-6 md:space-y-8 mb-12 md:mb-20"
                >
                    <p className="text-zinc-500 text-[10px] md:text-xs uppercase tracking-widest">{article.date} — By {article.author}</p>
                    <h1 className="text-[clamp(2.5rem,10vw,4.5rem)] font-heading uppercase leading-[1.1]">
                        {article.title}
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                    className="aspect-[16/9] bg-zinc-900 rounded-lg overflow-hidden mb-12 md:mb-20"
                >
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="prose prose-invert prose-base md:prose-lg max-w-none"
                >
                    <p className="text-lg md:text-2xl text-zinc-300 leading-relaxed font-regular whitespace-pre-line">
                        {article.content}
                    </p>
                </motion.div>

                <div className="mt-20 md:mt-32 pt-12 md:pt-20 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs uppercase tracking-[0.2em] gap-8">
                    <a href="/newspaper" className="group flex items-center gap-4 hover:text-yellow-400 transition-colors">
                        <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 md:w-5 md:h-5 rotate-180 transition-colors">
                            <path d="M5 10H15M15 10L11 6M15 10L11 14" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        Back to News
                    </a>
                    <div className="flex gap-6">
                        <span className="opacity-40">Share:</span>
                        <a href="#" className="hover:text-yellow-400 transition-colors">Twitter</a>
                        <a href="#" className="hover:text-yellow-400 transition-colors">LinkedIn</a>
                    </div>
                </div>
            </div>

            <footer className="py-12 md:py-20 px-6 md:px-10 border-t border-zinc-900 mt-12 md:mt-20">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-center md:text-left">
                    <p className="text-zinc-600 text-xs md:text-sm">© 2026 Observer Studio. All rights reserved.</p>
                </div>
            </footer>
        </main>
    );
};

export default NewspaperDetailPage;
