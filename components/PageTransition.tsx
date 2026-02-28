"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial transition on mounting/navigation
            const tl = gsap.timeline();

            tl.set(overlayRef.current, { scaleY: 1, transformOrigin: "top" })
                .to(overlayRef.current, {
                    scaleY: 0,
                    duration: 1.2,
                    ease: "expo.inOut",
                    delay: 0.2
                })
                .fromTo(contentRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
                    "-=0.6"
                );
        });

        return () => ctx.revert();
    }, [pathname]);

    return (
        <div className="relative w-full min-h-screen overflow-x-hidden">
            {/* Transition Overlay */}
            <div
                ref={overlayRef}
                className="fixed inset-0 bg-yellow-400 z-[100] pointer-events-none"
            />

            <div ref={contentRef}>
                {children}
            </div>
        </div>
    );
};

export default PageTransition;
