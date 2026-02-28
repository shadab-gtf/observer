"use client";

import React from "react";

const AboutSection = () => {
    return (
        <div className="bg absolute inset-0 flex items-center justify-center bg-[#0a0a0a]">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <h2 className="section-heading text-6xl md:text-8xl font-heading leading-tight uppercase">
                        We are <br /> <span className="text-yellow-400">Visionaries</span>
                    </h2>
                    <p className="text-xl font-sans leading-relaxed opacity-70">
                        A boutique creative studio dedicated to pushing the boundaries of what's possible in the digital realm. We don't just build websites; we create digital legacies.
                    </p>
                    <div className="flex gap-4">
                        <span className="px-4 py-2 border border-white/20 rounded-full text-sm uppercase tracking-tighter">Innovation</span>
                        <span className="px-4 py-2 border border-white/20 rounded-full text-sm uppercase tracking-tighter">Design</span>
                        <span className="px-4 py-2 border border-white/20 rounded-full text-sm uppercase tracking-tighter">Excellence</span>
                    </div>
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10">
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
