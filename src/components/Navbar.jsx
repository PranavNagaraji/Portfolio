"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
    const [active, setActive] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const sections = ["home", "about", "experience", "skills", "projects", "contact"];

    useEffect(() => {
        const handleScroll = () => {
            let current = "home";
            sections.forEach((sec) => {
                const el = document.getElementById(sec);
                if (!el) return;
                const rect = el.getBoundingClientRect();
                // A bit more forgiving intersection calculation
                if (rect.top <= 300 && rect.bottom >= 300) {
                    current = sec;
                }
            });
            setActive(current);
        };

        window.addEventListener("scroll", handleScroll);
        // Call it initially just in case
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isMobileMenuOpen]);

    return (
        <>
            {/* Floating Pill Navbar */}
            <div className="fixed top-0 left-0 w-full z-[100] flex justify-center mt-4 sm:mt-6 px-4 pointer-events-none">
                <nav className="group pointer-events-auto bg-[#0d0714]/70 backdrop-blur-2xl border border-white/10 rounded-full px-5 py-3 flex items-center shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:bg-[#1a0b2e]/80 hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-500 max-w-full">
                    
                    {/* Logo */}
                    <a 
                        href="#home" 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg sm:text-xl font-black text-white tracking-tighter uppercase mr-4 lg:mr-10 hover:text-[#ccc] transition-colors flex-shrink-0"
                    >
                        PRANAV<span className="text-[#555]">.</span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-1 lg:gap-2">
                        {sections.map((sec) => (
                            <a
                                key={sec}
                                href={`#${sec}`}
                                className={`relative px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 ${
                                    active === sec
                                        ? "text-white bg-white/10 shadow-[inset_0_1px_rgba(255,255,255,0.1)]"
                                        : "text-[#666666] hover:text-white hover:bg-white/5"
                                }`}
                            >
                                {sec}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className="md:hidden ml-auto text-white p-2 focus:outline-none bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? (
                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
                        ) : (
                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
                        )}
                    </button>
                </nav>
            </div>

            {/* Mobile Full Screen Menu Overlay */}
            <div className={`fixed inset-0 z-[90] bg-[#050505]/98 backdrop-blur-3xl transition-all duration-500 flex flex-col items-center justify-center md:hidden ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <div className="flex flex-col items-center gap-8 w-full px-6">
                    {sections.map((sec, i) => (
                        <a
                            key={sec}
                            href={`#${sec}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{ transitionDelay: `${i * 50}ms` }}
                            className={`text-3xl sm:text-4xl font-black uppercase tracking-[0.2em] transition-all duration-500 transform ${
                                isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                            } ${
                                active === sec 
                                    ? "text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 scale-110" 
                                    : "text-[#444] hover:text-white"
                            }`}
                        >
                            {sec}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}