"use client";

import React from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import Link from "next/link";

const ARTICLES = [
    {
        title: "The Future of Minimalist Architecture in 2026",
        slug: "future-of-minimalism",
        date: "Feb 28, 2026",
        image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800",
        excerpt: "Exploring how digital tools and sustainable materials are reshaping our living spaces."
    },
    {
        title: "Motion as a Design Language",
        slug: "motion-design-language",
        date: "Feb 15, 2026",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
        excerpt: "Why the subtle movement of pixels can create a deeper emotional connection with users."
    },
    {
        title: "Observer Studio: Behind the Scenes",
        slug: "behind-the-scenes",
        date: "Jan 10, 2026",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
        excerpt: "An intimate look into our creative process and the rituals that drive our innovation."
    }
];

const NewspaperPage = () => {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-yellow-400 selection:text-black">
            <Header />

            <div className="pt-32 pb-20 px-6 md:px-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                    className="mb-32"
                >
                    <h1 className="text-[15vw] md:text-[10vw] font-heading uppercase leading-[0.85]">
                        The <br /> News
                    </h1>
                </motion.div>

                <div className="space-y-32">
                    {ARTICLES.map((article, i) => (
                        <motion.div
                            key={article.slug}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Link href={`/newspaper/${article.slug}`} className="group grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-20 items-center">
                                <div className="aspect-[16/9] overflow-hidden rounded-lg bg-zinc-900 order-2 md:order-1">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />
                                </div>
                                <div className="space-y-6 order-1 md:order-2">
                                    <p className="text-zinc-500 text-xs uppercase tracking-widest">{article.date}</p>
                                    <h2 className="text-4xl md:text-5xl font-heading uppercase leading-tight group-hover:text-yellow-400 transition-colors">
                                        {article.title}
                                    </h2>
                                    <p className="text-xl text-zinc-400 font-regular">
                                        {article.excerpt}
                                    </p>
                                    <div className="flex items-center gap-4 text-xs uppercase tracking-widest font-bold pt-4">
                                        Read Article
                                        <div className="w-12 h-[1px] bg-zinc-700 transition-all duration-500 group-hover:w-20 group-hover:bg-yellow-400"></div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            <footer className="py-20 px-6 md:px-10 border-t border-zinc-900 mt-40">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-zinc-600 text-sm">© 2026 Observer Studio. All rights reserved.</p>
                </div>
            </footer>
        </main>
    );
};

export default NewspaperPage;
