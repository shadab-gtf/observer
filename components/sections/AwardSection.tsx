"use client";

import React from "react";

const AwardSection = () => {
    const awards = [
        { year: "2024", title: "Site of the Year", org: "Awwwards" },
        { year: "2023", title: "Best Design System", org: "FWA" },
        { year: "2023", title: "Agency of the Year", org: "CSSDA" },
        { year: "2022", title: "Mobile Excellence", org: "Google" },
    ];

    return (
        <div className="bg absolute inset-0 flex items-center justify-center bg-[#050505]">
            <div className="container mx-auto px-6 py-10 scale-90 md:scale-100 transition-transform">
                <h2 className="section-heading text-[clamp(2rem,7vw,5rem)] font-heading uppercase mb-8 border-b border-white/10 pb-6 text-center md:text-left">
                    Our <span className="text-yellow-400">Wins</span>
                </h2>
                <div className="space-y-0 text-white max-w-5xl mx-auto md:mx-0">
                    {awards.map((award, i) => (
                        <div key={i} className="group py-5 md:py-10 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between hover:bg-white/[0.02] transition-colors cursor-pointer px-2">
                            <div className="flex items-center gap-6 md:gap-20">
                                <span className="text-sm md:text-lg opacity-40 font-mono tracking-tighter">{award.year}</span>
                                <h3 className="text-xl md:text-4xl font-heading uppercase group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-500">{award.title}</h3>
                            </div>
                            <span className="text-sm md:text-lg opacity-40 uppercase tracking-widest mt-2 md:mt-0 font-sans">{award.org}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AwardSection;
