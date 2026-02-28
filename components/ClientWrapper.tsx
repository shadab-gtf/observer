"use client";

import React, { useEffect } from "react";
import PageTransition from "./PageTransition";
import InstallPWA from "./InstallPWA";

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        if ("serviceWorker" in navigator) {
            window.addEventListener("load", () => {
                navigator.serviceWorker.register("/sw.js").then(
                    (registration) => {
                        console.log("Service Worker registered with scope:", registration.scope);
                    },
                    (err) => {
                        console.log("Service Worker registration failed:", err);
                    }
                );
            });
        }
    }, []);

    return (
        <PageTransition>
            {children}
            <InstallPWA />
        </PageTransition>
    );
};

export default ClientWrapper;
