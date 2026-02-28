"use client";

import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import gsap from "gsap";

const GallerySection = forwardRef((props, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const images = [
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
        "https://images.unsplash.com/photo-1557683316-973673baf926",
        "https://images.unsplash.com/photo-1550684848-fac1c5b4e853",
        "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d"
    ];

    useImperativeHandle(ref, () => ({
        next: () => {
            if (currentIndex < images.length - 1) {
                setCurrentIndex(prev => prev + 1);
                return true;
            }
            return false;
        },
        prev: () => {
            if (currentIndex > 0) {
                setCurrentIndex(prev => prev - 1);
                return true;
            }
            return false;
        }
    }));

    useEffect(() => {
        if (containerRef.current) {
            gsap.to(containerRef.current, {
                xPercent: -100 * currentIndex,
                duration: 1.2,
                ease: "expo.inOut"
            });
        }
    }, [currentIndex]);

    return (
        <div className="bg absolute inset-0 flex items-center justify-center bg-black overflow-hidden">
            {/* Horizontal Container */}
            <div
                ref={containerRef}
                className="flex w-full h-full"
            >
                {images.map((url, i) => (
                    <div key={i} className="min-w-full h-full relative group overflow-hidden">
                        <img
                            src={`${url}?auto=format&fit=crop&q=80&w=1200`}
                            alt={`Gallery ${i}`}
                            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-end p-12 opacity-100 transition-opacity duration-500">
                            <div className="overflow-hidden">
                                <h2 className="section-heading text-6xl md:text-8xl font-heading uppercase text-white translate-y-0 transition-transform duration-700">
                                    Masterpiece №{i + 1}
                                </h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination / Progress */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 items-center">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`h-1 transition-all duration-500 ${currentIndex === i ? "w-12 bg-yellow-400" : "w-6 bg-white/20"}`}
                    />
                ))}
            </div>

            <div className="absolute bottom-8 left-10 text-white/30 text-[10px] font-sans tracking-[0.5em] uppercase pointer-events-none">
                Scroll horizontally or swipe
            </div>

            <div className="absolute bottom-8 right-10 text-white/50 text-xs font-sans tracking-[0.5em] uppercase pointer-events-none">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
});

GallerySection.displayName = "GallerySection";

export default GallerySection;
