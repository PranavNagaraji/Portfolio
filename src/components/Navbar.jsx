"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
    const [active, setActive] = useState("home");

    const sections = ["home", "about", "experience", "skills", "projects", "contact"];

    useEffect(() => {
        const handleScroll = () => {
            sections.forEach((sec) => {
                const el = document.getElementById(sec);
                if (!el) return;

                const rect = el.getBoundingClientRect();
                if (rect.top <= 150 && rect.bottom >= 150) {
                    setActive(sec);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">

                {/* Logo */}
                <h1 className="text-lg font-bold">
                    <a href="#home">Pranav</a></h1>

                {/* Links */}
                <div className="flex gap-6">
                    {sections.map((sec) => (
                        <a
                            key={sec}
                            href={`#${sec}`}
                            className={`capitalize transition ${active === sec
                                ? "text-white font-semibold"
                                : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {sec}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}