"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero() {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Background styling subtle entrance
        gsap.fromTo(".hero-orb", 
            { opacity: 0, scale: 0.5 }, 
            { opacity: 1, scale: 1, duration: 2.5, ease: "power3.out", stagger: 0.3 }
        );

        // Ambient Orb Animation
        gsap.to(".hero-orb", {
            y: "random(-50, 50)",
            x: "random(-50, 50)",
            duration: "random(5, 10)",
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: 2 // start after entrance
        });

        // Staggered text reveal
        tl.from(".hero-text-line", {
            y: 150,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "power4.out",
            delay: 0.2
        });

        // Subtitle fade in
        tl.from(".hero-subtitle", {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: "power2.out"
        }, "-=0.6");

        // Action buttons
        tl.from(".hero-btn", {
            opacity: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.7)"
        }, "-=0.4");
        
        // --- SCROLL ANIMATIONS ---
        const scrollTl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: "bottom top",
                scrub: 1.5,
            }
        });

        // Move first name left, last name right
        scrollTl.to(".name-first-wrapper", { xPercent: -30, opacity: 0 }, 0)
                .to(".name-last-wrapper", { xPercent: 30, opacity: 0 }, 0)
                // Move subtitle and buttons down slightly and fade out
                .to(".hero-bottom-wrapper", { y: 50, opacity: 0 }, 0)
                // Parallax shift the ambient orbs
                .to(".hero-orb", { yPercent: -50, scale: 1.2 }, 0);

    }, { scope: container });

    const smoothScrollTo = (e, target) => {
        e.preventDefault();
        const el = document.querySelector(target);
        if (el) {
            el.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };

    return (
        <main ref={container} className="relative min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center px-6 overflow-hidden" id="home">
            
            {/* Ambient Background Orbs */}
            <div className="hero-orb absolute top-[10%] left-[15%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-800/30 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none"></div>
            <div className="hero-orb absolute bottom-[10%] right-[15%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-800/20 rounded-full blur-[120px] sm:blur-[150px] pointer-events-none"></div>
            <div className="hero-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] sm:w-[600px] h-[80vw] sm:h-[600px] bg-white/5 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none"></div>

            {/* Dotted Grid Pattern with edge fade out */}
            <div 
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.25]" 
                style={{
                    backgroundImage: `radial-gradient(circle at center, #ffffff 1px, transparent 1px)`,
                    backgroundSize: `48px 48px`,
                    maskImage: `radial-gradient(circle at center, black 30%, transparent 80%)`,
                    WebkitMaskImage: `radial-gradient(circle at center, black 30%, transparent 80%)`
                }}
            ></div>

            <section className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
                
                {/* Main Heading */}
                <div className="name-first-wrapper overflow-visible mb-2 sm:mb-4">
                    <h1 className="hero-name-first hero-text-line text-[14vw] md:text-[8rem] lg:text-[10rem] font-black tracking-tighter leading-[0.85] uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] to-[#555555]">
                        Pranav
                    </h1>
                </div>
                <div className="name-last-wrapper overflow-visible mb-8 md:mb-10 mt-[-2%]">
                    <h1 className="hero-name-last hero-text-line text-[14vw] md:text-[8rem] lg:text-[10rem] font-black tracking-tighter leading-[0.85] uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#aaaaaa] to-[#222222]">
                        Nagaraji<span className="text-white">.</span>
                    </h1>
                </div>

                <div className="hero-bottom-wrapper flex flex-col items-center">
                    {/* Subtitle */}
                    <p className="hero-subtitle text-base md:text-xl lg:text-2xl font-medium text-[#888888] tracking-widest uppercase mb-12 max-w-2xl px-4">
                        Full Stack <span className="text-white">Developer</span> <br className="hidden sm:block" />
                        Building Scalable Web Apps
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-8 sm:px-0">
                        <a href="#projects" onClick={(e) => smoothScrollTo(e, "#projects")} className="hero-btn group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full overflow-hidden transition-all hover:scale-105 text-center">
                            <span className="relative z-10">View Works</span>
                            <div className="absolute inset-0 h-full w-0 bg-gray-300 transition-all duration-300 ease-out group-hover:w-full z-0"></div>
                        </a>
                        <a href="#contact" onClick={(e) => smoothScrollTo(e, "#contact")} className="hero-btn px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-full transition-all hover:bg-white hover:text-black hover:border-white text-center">
                            Contact Me
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}