"use client";

import React from "react";

const ProductionSection = () => {
    return (
        <div className="bg absolute inset-0 flex items-center justify-center bg-[#111]">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="section-heading text-5xl md:text-7xl font-heading uppercase mb-4">
                        Mastering <span className="text-yellow-400">Production</span>
                    </h2>
                    <p className="text-lg opacity-60 uppercase tracking-widest">Everything from concept to deployment.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Pre-Production", desc: "Storyboarding, art direction, and conceptualization.", img: "https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&q=80" },
                        { title: "Creation", desc: "Cutting-edge development and visual effects.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" },
                        { title: "Post-Production", desc: "Final polish, optimization, and seamless deployment.", img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80" }
                    ].map((item, i) => (
                        <div key={i} className="group relative overflow-hidden bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-500">
                            <div className="absolute top-0 right-0 p-4 font-heading text-4xl opacity-20">0{i + 1}</div>
                            <h3 className="text-2xl font-bold mb-4 font-heading uppercase">{item.title}</h3>
                            <p className="text-sm opacity-60 line-clamp-3 mb-6">{item.desc}</p>
                            <div className="h-40 overflow-hidden rounded-lg">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductionSection;
