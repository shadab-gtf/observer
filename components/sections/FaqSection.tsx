"use client";

import React, { useState } from "react";

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const questions = [
        { q: "What is your typical project timeline?", a: "Most projects take between 4 to 12 weeks depending on the complexity and scope." },
        { q: "Do you offer branding separately from web dev?", a: "Yes, we handle brand identity independently or as part of a complete digital strategy." },
        { q: "How do you ensure responsiveness?", a: "We follow a mobile-first approach and extensive cross-device testing for every project." },
        { q: "What technologies do you use?", a: "We specialize in Next.js, GSAP, WebGL, and Three.js for high-performance creative web apps." }
    ];

    return (
        <div className="bg absolute inset-0 flex items-center justify-center bg-[#0a0a0a]">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid md:grid-cols-[1fr_2fr] gap-16">
                    <div>
                        <h2 className="section-heading text-5xl md:text-7xl font-heading uppercase mb-6 leading-[0.9]">
                            Curious <br /> minds <span className="text-yellow-400">?</span>
                        </h2>
                    </div>
                    <div className="space-y-4">
                        {questions.map((item, i) => (
                            <div key={i} className="border-b border-white/10 overflow-hidden">
                                <button
                                    onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                    className="w-full py-8 text-left flex justify-between items-center group"
                                >
                                    <span className="text-xl md:text-2xl font-heading uppercase group-hover:text-yellow-400 transition-colors">{item.q}</span>
                                    <span className={`text-4xl transition-transform duration-500 ${activeIndex === i ? "rotate-45" : ""}`}>+</span>
                                </button>
                                <div className={`transition-all duration-500 overflow-hidden ${activeIndex === i ? "max-h-40 py-4 opacity-100" : "max-h-0 opacity-0"}`}>
                                    <p className="text-lg opacity-60 leading-relaxed font-sans">{item.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
