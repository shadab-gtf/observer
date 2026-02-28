"use client";

import React from "react";

const HeroSection = () => {
    return (
        <div className="bg absolute inset-0 flex flex-col items-center justify-center bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80)` }}>
            <div className="container mx-auto px-6 text-center z-10">
                <h1 className="section-heading text-[clamp(3rem,10vw,10rem)] font-heading leading-[0.9] uppercase mb-6">
                    Future of <br /> <span className="text-yellow-400">Digital Art</span>
                </h1>
                <p className="text-lg md:text-xl font-sans tracking-widest uppercase opacity-80 max-w-2xl mx-auto">
                    Crafting immersive experiences through code and creativity.
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
