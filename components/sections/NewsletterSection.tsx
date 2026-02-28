"use client";

import React from "react";

const NewsletterSection = () => {
    return (
        <div className="bg absolute inset-0 flex items-center justify-center bg-[#151515]">
            <div className="container mx-auto px-6 max-w-4xl text-center py-12">
                <h2 className="section-heading text-[clamp(2rem,7vw,5rem)] font-heading uppercase mb-6 md:mb-8 leading-tight">
                    Join the <br /> <span className="text-yellow-400 text-outline">Exclusive</span> Circle
                </h2>
                <p className="text-sm md:text-xl opacity-60 mb-8 md:mb-12 uppercase tracking-wide">Get our latest trends and research directly to your inbox.</p>
                <form className="relative flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                    <input
                        type="email"
                        placeholder="YOUR@EMAIL.COM"
                        className="flex-1 bg-transparent border-b-2 border-white/20 py-4 md:py-6 px-4 text-center text-lg md:text-xl font-heading outline-none focus:border-yellow-400 transition-colors uppercase tracking-widest placeholder:opacity-20"
                    />
                    <button className="bg-white text-black font-heading h-16 md:h-20 px-8 md:px-12 text-lg md:text-xl uppercase hover:bg-yellow-400 transition-colors">
                        Subscribe
                    </button>
                </form>
                <p className="mt-8 text-[8px] md:text-[10px] opacity-30 uppercase tracking-[0.3em]">No Spam. Only pure design inspiration.</p>
            </div>
        </div>
    );
};

export default NewsletterSection;
