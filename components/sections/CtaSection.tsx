"use client";

import React from "react";

const CtaSection = () => {
    return (
        <div className="bg absolute inset-0 flex flex-col items-center justify-center bg-yellow-400 text-black">
            <div className="container mx-auto px-6 text-center space-y-8 md:space-y-12 py-12">
                <h2 className="section-heading text-[clamp(3.5rem,15vw,10rem)] font-heading uppercase leading-[0.8] tracking-tighter">
                    Let&apos;s <br /> Create
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 pt-4 md:pt-8 w-full max-w-4xl mx-auto">
                    <a href="mailto:hello@observer.com" className="group relative text-2xl md:text-4xl font-heading uppercase overflow-hidden text-center">
                        <span className="block transition-transform duration-500 group-hover:-translate-y-full">hello@observer.com</span>
                        <span className="absolute top-full left-0 block w-full text-center transition-transform duration-500 group-hover:-translate-y-full">hello@observer.com</span>
                        <div className="h-[2px] w-full bg-black absolute bottom-0 left-0"></div>
                    </a>
                    <button className="bg-black text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-heading text-xl md:text-2xl uppercase hover:scale-105 transition-transform duration-300 w-full md:w-auto">
                        Start a project
                    </button>
                </div>
                <div className="pt-12 md:pt-20 flex flex-col md:flex-row justify-between items-center w-full opacity-40 text-[8px] md:text-xs font-heading tracking-[0.3em] md:tracking-[0.5em] uppercase border-t border-black/10 gap-4">
                    <span>© 2026 OBSERVER STUDIO</span>
                    <span>BASED IN DUBAI // REMOTE WORLDWIDE</span>
                </div>
            </div>
        </div>
    );
};

export default CtaSection;
