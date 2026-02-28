"use client";

import React from "react";

const ProcessSection = () => {
    const steps = [
        { title: "Define", desc: "Understanding goals and project scope." },
        { title: "Design", desc: "Creating visual language and Prototypes." },
        { title: "Develop", desc: "Coding with precision and speed." },
        { title: "Deliver", desc: "Final testing and launch." }
    ];

    return (
        <div className="bg absolute inset-0 flex items-center justify-center bg-black">
            <div className="container mx-auto px-6 py-12">
                <div className="mb-12 md:mb-20">
                    <h2 className="section-heading text-[clamp(2.5rem,8vw,6rem)] font-heading uppercase mb-4">
                        Our <span className="text-yellow-400">Process</span>
                    </h2>
                </div>
                <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 justify-between">
                    {/* Horizontal Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-white/20 -z-10"></div>

                    {steps.map((step, i) => (
                        <div key={i} className="flex-1 flex md:flex-col gap-6 md:gap-6 items-center md:items-start">
                            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-yellow-400 text-black flex-shrink-0 flex items-center justify-center text-2xl md:text-4xl font-heading">
                                0{i + 1}
                            </div>
                            <div className="space-y-2 md:space-y-4">
                                <h3 className="text-xl md:text-3xl font-heading uppercase">{step.title}</h3>
                                <p className="opacity-50 text-xs md:text-base max-w-[200px]">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProcessSection;
