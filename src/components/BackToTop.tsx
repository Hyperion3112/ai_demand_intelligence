"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggle = () => setVisible(window.scrollY > 500);
        window.addEventListener("scroll", toggle, { passive: true });
        return () => window.removeEventListener("scroll", toggle);
    }, []);

    const scrollUp = () =>
        window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <button
            onClick={scrollUp}
            aria-label="Back to top"
            className={`fixed bottom-8 right-8 z-40 p-3 rounded-full bg-teal-600 hover:bg-teal-500 text-white shadow-lg shadow-teal-600/20 transition-all duration-300 cursor-pointer ${visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
        </button>
    );
}
