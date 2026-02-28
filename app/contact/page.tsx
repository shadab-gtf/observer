"use client";

import React from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";

const ContactPage = () => {
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
                        Let's <br /> Talk
                    </h1>
                </motion.div>

                <div className="grid md:grid-cols-[1fr_1.5fr] gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="space-y-16"
                    >
                        <div>
                            <p className="text-zinc-500 text-xs uppercase tracking-widest mb-6">Contact Details</p>
                            <p className="text-2xl md:text-3xl font-regular hover:text-yellow-400 transition-colors cursor-pointer">hello@observer.studio</p>
                            <p className="text-2xl md:text-3xl font-regular">+1 (555) 0123 4567</p>
                        </div>

                        <div>
                            <p className="text-zinc-500 text-xs uppercase tracking-widest mb-6">Socials</p>
                            <div className="flex flex-col gap-4 text-xl">
                                <a href="#" className="hover:text-yellow-400 transition-colors">Instagram</a>
                                <a href="#" className="hover:text-yellow-400 transition-colors">LinkedIn</a>
                                <a href="#" className="hover:text-yellow-400 transition-colors">Behance</a>
                            </div>
                        </div>

                        <div>
                            <p className="text-zinc-500 text-xs uppercase tracking-widest mb-6">Address</p>
                            <p className="text-xl text-zinc-400">123 Creative Plaza, Level 4<br />New York, NY 10001</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <form className="space-y-12">
                            <div className="group relative">
                                <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-4 group-focus-within:text-yellow-400 transition-colors">Your Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-transparent border-b border-zinc-800 py-4 text-2xl font-regular outline-none focus:border-white transition-colors"
                                />
                            </div>

                            <div className="group relative">
                                <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-4 group-focus-within:text-yellow-400 transition-colors">Your Email</label>
                                <input
                                    type="email"
                                    placeholder="hello@world.com"
                                    className="w-full bg-transparent border-b border-zinc-800 py-4 text-2xl font-regular outline-none focus:border-white transition-colors"
                                />
                            </div>

                            <div className="group relative">
                                <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-4 group-focus-within:text-yellow-400 transition-colors">Your Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your project"
                                    className="w-full bg-transparent border-b border-zinc-800 py-4 text-2xl font-regular outline-none focus:border-white transition-colors resize-none"
                                />
                            </div>

                            <button className="group relative inline-flex items-center gap-6 pt-10">
                                <span className="text-4xl md:text-5xl font-heading uppercase group-hover:text-yellow-400 transition-colors">Send Message</span>
                                <div className="w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-yellow-400 group-hover:border-yellow-400 transition-all duration-500">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="group-hover:text-black transition-colors">
                                        <path d="M5 10H15M15 10L11 6M15 10L11 14" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                </div>
                            </button>
                        </form>
                    </motion.div>
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

export default ContactPage;
