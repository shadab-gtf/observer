"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: "Studio", path: "/studio" },
        { name: "Projects", path: "/projects" },
        { name: "Newspaper", path: "/newspaper" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-[60] flex items-center justify-between px-6 md:px-10 py-6 md:py-8 mix-blend-difference text-white">
                {/* Brand */}
                <Link href="/" className="flex items-center gap-1 group cursor-pointer">
                    <span className="text-xl md:text-2xl font-bold tracking-tight lowercase font-heading">Observer</span>
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></span>
                </Link>

                {/* Navigation and Menu */}
                <div className="flex items-center gap-8 md:gap-16">
                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-12 text-[13px] font-medium tracking-[0.1em]">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`relative overflow-hidden group py-1 ${pathname === item.path ? "text-yellow-400" : ""}`}
                            >
                                <span className="block transition-transform duration-500 group-hover:-translate-y-full uppercase">
                                    {item.name}
                                </span>
                                <span className="absolute top-full left-0 block transition-transform duration-500 group-hover:-translate-y-full uppercase text-yellow-400">
                                    {item.name}
                                </span>
                            </Link>
                        ))}
                    </nav>

                    {/* Hamburger Menu */}
                    <button
                        className="flex flex-col gap-1.5 group cursor-pointer z-[70]"
                        aria-label="Menu"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className={`w-8 h-[2px] bg-white transition-all duration-500 ${isMenuOpen ? "rotate-45 translate-y-[8px]" : "group-hover:w-10"}`}></div>
                        <div className={`w-8 h-[2px] bg-white transition-all duration-500 ${isMenuOpen ? "opacity-0" : "group-hover:w-6 self-end"}`}></div>
                        <div className={`w-8 h-[2px] bg-white transition-all duration-500 ${isMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}></div>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black z-[55] flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMenuOpen ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <nav className="flex flex-col items-center gap-8 text-white">
                    {navItems.map((item, index) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            className={`text-4xl font-heading tracking-widest uppercase transition-all duration-500 ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Header;
