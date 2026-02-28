"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/all";
import SplitText from "gsap/SplitText";
import Header from "./Header";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProductionSection from "./sections/ProductionSection";
import GallerySection from "./sections/GallerySection";
import AwardSection from "./sections/AwardSection";
import ServicesSection from "./sections/ServicesSection";
import ProcessSection from "./sections/ProcessSection";
import NewsletterSection from "./sections/NewsletterSection";
import FaqSection from "./sections/FaqSection";
import CtaSection from "./sections/CtaSection";

gsap.registerPlugin(Observer);

export default function AnimatedSections() {
    const containerRef = useRef<HTMLDivElement>(null);
    const galleryRef = useRef<{ next: () => boolean; prev: () => boolean }>(null);

    const SECTIONS = [
        { component: <HeroSection /> },
        { component: <AboutSection /> },
        { component: <ProductionSection /> },
        { component: <GallerySection ref={galleryRef} /> },
        { component: <AwardSection /> },
        { component: <ServicesSection /> },
        { component: <ProcessSection /> },
        { component: <NewsletterSection /> },
        { component: <FaqSection /> },
        { component: <CtaSection /> },
    ];

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            const sections = gsap.utils.toArray<HTMLElement>("section");
            const images = gsap.utils.toArray<HTMLElement>(".bg");
            const headings = gsap.utils.toArray<HTMLElement>(".section-heading");
            const outerWrappers = gsap.utils.toArray<HTMLElement>(".outer");
            const innerWrappers = gsap.utils.toArray<HTMLElement>(".inner");

            const splitHeadings = headings.map(
                (heading) =>
                    new SplitText(heading, {
                        type: "chars,words,lines",
                        linesClass: "clip-text",
                    })
            );

            let currentIndex = -1;
            let animating = false;

            gsap.set(outerWrappers, { yPercent: 100 });
            gsap.set(innerWrappers, { yPercent: -100 });

            function gotoSection(index: number, direction: number) {
                // Boundary checks to prevent wrapping
                if (index < 0 || index >= sections.length || animating) return;

                animating = true;

                const fromTop = direction === -1;
                const dFactor = fromTop ? -1 : 1;

                const tl = gsap.timeline({
                    defaults: {
                        duration: 1.25,
                        ease: "power1.inOut",
                    },
                    onComplete: () => {
                        animating = false;
                    },
                });

                if (currentIndex >= 0) {
                    gsap.set(sections[currentIndex], {
                        zIndex: 0,
                    });

                    tl.to(images[currentIndex], {
                        yPercent: -15 * dFactor,
                    }).set(sections[currentIndex], {
                        autoAlpha: 0,
                    });
                }

                gsap.set(sections[index], {
                    autoAlpha: 1,
                    zIndex: 10,
                });

                tl.fromTo(
                    [outerWrappers[index], innerWrappers[index]],
                    {
                        yPercent: (i: number) =>
                            i ? -100 * dFactor : 100 * dFactor,
                    },
                    {
                        yPercent: 0,
                    },
                    0
                )
                    .fromTo(
                        images[index],
                        {
                            yPercent: 15 * dFactor,
                        },
                        {
                            yPercent: 0,
                        },
                        0
                    )
                    .fromTo(
                        splitHeadings[index].chars,
                        {
                            autoAlpha: 0,
                            yPercent: 150 * dFactor,
                        },
                        {
                            autoAlpha: 1,
                            yPercent: 0,
                            duration: 1,
                            ease: "power2.out",
                            stagger: {
                                each: 0.02,
                                from: "random",
                            },
                        },
                        0.2
                    );

                currentIndex = index;
            }

            Observer.create({
                type: "wheel,touch,pointer",
                wheelSpeed: -1,
                tolerance: 10,
                preventDefault: true,
                onUp: () => {
                    if (animating) return;
                    if (currentIndex === 3 && galleryRef.current?.next()) return;
                    gotoSection(currentIndex + 1, 1);
                },
                onDown: () => {
                    if (animating) return;
                    if (currentIndex === 3 && galleryRef.current?.prev()) return;
                    gotoSection(currentIndex - 1, -1);
                },
                onRight: () => {
                    if (!animating && currentIndex === 3) galleryRef.current?.next();
                },
                onLeft: () => {
                    if (!animating && currentIndex === 3) galleryRef.current?.prev();
                }
            });

            gotoSection(0, 1);
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-screen overflow-hidden bg-black text-white"
        >
            <Header />

            {/* Sections */}
            {SECTIONS.map((section, index) => (
                <section
                    key={index}
                    className="fixed top-0 left-0 w-full h-screen invisible"
                >
                    <div className="outer w-full h-full overflow-hidden">
                        <div className="inner w-full h-full overflow-hidden">
                            {section.component}
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}
