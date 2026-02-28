"use client";

import React from "react";

const ServicesSection = () => {
    const services = [
        "Art Direction", "UI/UX Design", "Motion Graphics",
        "Web Development", "Brand Identity", "3D Animation"
    ];

    return (
        <div className="bg absolute inset-0 flex items-center justify-center bg-[#0d0d0d]">
            <div className="container mx-auto px-6 py-20">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6 md:gap-8">
                    <h2 className="section-heading text-[clamp(2.5rem,8vw,6rem)] font-heading uppercase leading-[0.8]">
                        Full <br /> <span className="text-yellow-400">Stack</span>
                    </h2>
                    <p className="max-w-md text-base md:text-lg opacity-60 font-sans">
                        We provide end-to-end creative solutions, merging high-end design with robust engineering.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 border-t border-l border-white/10 text-white/80 uppercase tracking-widest text-[10px] md:text-base">
                    {services.map((service, i) => (
                        <div key={i} className="p-4 md:p-8 border-r border-b border-white/10 hover:text-white hover:bg-white/[0.03] transition-all cursor-crosshair">
                            <span className="text-yellow-400 text-[10px] md:text-xs mr-2 opacity-50 font-mono">/ {i + 1}</span>
                            {service}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
