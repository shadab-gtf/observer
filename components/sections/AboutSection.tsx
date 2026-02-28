"use client";

import React from "react";

const AboutSection = () => {
    return (
        <div className="bg absolute inset-0 flex items-center justify-center bg-[#0a0a0a]">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center py-20">
                <div className="space-y-6 md:space-y-8">
                    <h2 className="section-heading text-[clamp(2.5rem,8vw,6rem)] font-heading leading-tight uppercase">
                        We are <br /> <span className="text-yellow-400">Visionaries</span>
                    </h2>
                    <p className="text-lg md:text-xl font-sans leading-relaxed opacity-70">
                        A boutique creative studio dedicated to pushing the boundaries of what's possible in the digital realm. We don't just build websites; we create digital legacies.
                    </p>
                    <div className="flex flex-wrap gap-3 md:gap-4">
                        <span className="px-3 md:px-4 py-1.5 md:py-2 border border-white/20 rounded-full text-[10px] md:text-sm uppercase tracking-widest md:tracking-tighter">Innovation</span>
                        <span className="px-3 md:px-4 py-1.5 md:py-2 border border-white/20 rounded-full text-[10px] md:text-sm uppercase tracking-widest md:tracking-tighter">Design</span>
                        <span className="px-3 md:px-4 py-1.5 md:py-2 border border-white/20 rounded-full text-[10px] md:text-sm uppercase tracking-widest md:tracking-tighter">Excellence</span>
                    </div>
                </div>
                <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-white/10 hidden md:block">
                    <img
                        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80"
                        alt="Vision"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
