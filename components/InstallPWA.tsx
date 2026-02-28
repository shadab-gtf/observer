"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InstallPWA = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handler = (e: any) => {
            e.preventDefault();
            setDeferredPrompt(e);
            // Show the prompt after a short delay for better UX
            setTimeout(() => setIsVisible(true), 3000);
        };

        window.addEventListener("beforeinstallprompt", handler);

        return () => window.removeEventListener("beforeinstallprompt", handler);
    }, []);

    const handleInstall = async () => {
        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === "accepted") {
            console.log("User accepted the install prompt");
        } else {
            console.log("User dismissed the install prompt");
        }

        setDeferredPrompt(null);
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 100, scale: 0.9 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed bottom-10 right-10 z-[100] bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl max-w-sm"
                >
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-black font-bold text-xl">
                                O
                            </div>
                            <div>
                                <h3 className="text-white font-heading uppercase text-lg leading-tight">Install Observer</h3>
                                <p className="text-zinc-500 text-sm font-regular">Add to your home screen for the full experience.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={handleInstall}
                                className="flex-1 bg-white text-black py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-yellow-400 transition-colors"
                            >
                                Install Now
                            </button>
                            <button
                                onClick={() => setIsVisible(false)}
                                className="px-6 py-3 rounded-full border border-zinc-800 text-zinc-500 text-xs uppercase tracking-widest hover:text-white hover:border-white transition-all"
                            >
                                Later
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default InstallPWA;
