"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const experiences = [
    {
        year: "Jan 2026 – Feb 2026",
        role: "Software Engineer Intern",
        company: "Neurolonic",
        location: "Berlin, Germany (Remote)",
        tech: [
            "React Frontend Systems",
            "Backend API Optimization",
            "Audio Stream Chunking",
            "AI RAG Pipelines",
            "Distributed Microservices",
            "Redis Caching"
            ]
    },
    {
        year: "May 2025 – Jul 2025",
        role: "Full Stack Developer Intern",
        company: "Codebrahma Tech Solutions",
        location: "Hoodi, Bangalore, Karnataka",
        tech: [
            "Next.js",
            "React.js",
            "Node.js",
            "Express.js",
            "REST APIs",
            "Database Schema Design"
        ]
    }
];

export default function ExperienceSection() {
    const container = useRef(null);

    useGSAP(() => {
        const fullCards   = gsap.utils.toArray(".exp-card-full");
        const tops        = gsap.utils.toArray(".exp-card-top");
        const bottoms     = gsap.utils.toArray(".exp-card-bottom");
        const introTop    = gsap.utils.toArray(".intro-panel-top");
        const introBottom = gsap.utils.toArray(".intro-panel-bottom");

        // Cards start invisible — revealed slowly after shutter opens
        gsap.set(fullCards, {
            autoAlpha: 0,
            scale: 0.97,
            filter: "blur(10px)",
        });
        gsap.set([tops, bottoms], { autoAlpha: 0 });

        // Intro panels sit above all cards
        gsap.set([introTop, introBottom], { zIndex: fullCards.length + 10 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: `+=${(fullCards.length + 1) * 120}%`,
                pin: true,
                scrub: 1.6,
            }
        });

        // Phase 1: Shutter splits open
        tl.to(introTop, {
            yPercent: -101,
            ease: "expo.inOut",
            duration: 1.6,
        }, "split")
        .to(introBottom, {
            yPercent: 101,
            ease: "expo.inOut",
            duration: 1.6,
        }, "split");

        // Phase 2: First Experience card fades in slowly
        if (fullCards.length > 0) {
            tl.to(fullCards[0], {
                autoAlpha: 1,
                scale: 1,
                filter: "blur(0px)",
                ease: "power3.out",
                duration: 1.4,
            }, "-=0.5");
        }

        // Phase 3: Card splits open for multiple items, next card fades in
        fullCards.forEach((card, i) => {
            if (i === fullCards.length - 1) return;
            
            tl.set(card, { autoAlpha: 0 }, `split_card_${i}`)
              .set([tops[i], bottoms[i]], { autoAlpha: 1 }, `split_card_${i}`)
              .to(tops[i], {
                  yPercent: -101,
                  ease: "expo.inOut",
                  duration: 2.5, // slower split
              }, `split_card_${i}`)
              .to(bottoms[i], {
                  yPercent: 101,
                  ease: "expo.inOut",
                  duration: 2.5, // slower split
              }, `split_card_${i}`);
              
            // Fade in the next card as the split happens
            tl.to(fullCards[i + 1], {
                autoAlpha: 1,
                scale: 1,
                filter: "blur(0px)",
                ease: "power3.out",
                duration: 2.0,
            }, `split_card_${i}+=0.3`);
            
            // Add a pause on the timeline so the user has to scroll a bit more before the next card starts splitting
            tl.to({}, { duration: 0.8 });
        });

        // Intro text entrance
        gsap.from(".intro-text", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
            y: 60,
            opacity: 0,
            duration: 1.4,
            stagger: 0.12,
            ease: "power4.out",
        });

    }, { scope: container });

    const introContent = (
        <div className="w-full px-6 md:px-12 flex flex-col items-center justify-center text-center">
            {/* Premium Eyebrow */}
            <div className="intro-text flex items-center gap-3 md:gap-6 mb-4 md:mb-6">
                <span className="w-8 md:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#a855f7]/80"></span>
                <p className="text-[9px] md:text-xs font-mono text-[#a855f7] uppercase tracking-[0.4em] md:tracking-[0.5em] font-medium opacity-90">
                    Professional Timeline
                </p>
                <span className="w-8 md:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#a855f7]/80"></span>
            </div>

            {/* Massive Metallic Title */}
            <h1 className="intro-text text-[16vw] md:text-[9rem] lg:text-[11rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#e5e5e5] to-[#2a2a2a] tracking-[-0.03em] leading-[0.8] uppercase mb-6 md:mb-10 whitespace-nowrap drop-shadow-sm">
                Experience
            </h1>

            {/* Sophisticated Editorial Subtext */}
            <p className="intro-text text-base md:text-2xl lg:text-3xl font-light text-[#888888] tracking-widest uppercase">
                My <span className="text-[#ffffff] font-semibold">Professional</span> Background
            </p>
        </div>
    );

    return (
        <section
            id="experience"
            ref={container}
            className="relative bg-[#050505] h-screen w-full overflow-hidden"
        >
            {/* Ambient blobs */}
            <div className="absolute top-[20%] right-[-10%] w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none z-0" />
            <div className="absolute bottom-[10%] left-[-10%] w-[500px] lg:w-[800px] h-[500px] lg:h-[800px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none z-0" />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-[calc(100%-3rem)] max-w-7xl h-[85vh] lg:h-[80vh]">

                    {/* Experience Cards — behind shutter */}
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="absolute inset-0 pointer-events-none"
                            style={{ zIndex: experiences.length - index }}
                        >
                            <div className="exp-card-full pointer-events-auto absolute inset-0 flex items-center justify-center will-change-transform">
                                <Experience {...exp} />
                            </div>
                            <div className="exp-card-top absolute inset-0 flex items-center justify-center will-change-transform" style={{ clipPath: "inset(0 0 calc(50% - 1px) 0)" }}>
                                <Experience {...exp} />
                            </div>
                            <div className="exp-card-bottom absolute inset-0 flex items-center justify-center will-change-transform" style={{ clipPath: "inset(calc(50% - 1px) 0 0 0)" }}>
                                <Experience {...exp} />
                            </div>
                        </div>
                    ))}

                    {/* Shutter Top Half */}
                    <div
                        className="intro-panel-top pointer-events-auto absolute inset-0 will-change-transform"
                        style={{ clipPath: "inset(0 0 calc(50% - 1px) 0)" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#161616] via-[#0a0a0a] to-[#050505] border-[1px] sm:border-2 lg:border-[3px] border-[#a855f7]/20 rounded-[1.5rem] md:rounded-[2rem] shadow-[inset_0_0_80px_rgba(168,85,247,0.03),0_0_50px_rgba(0,0,0,0.8)] flex flex-col justify-center pb-20 overflow-hidden transform-gpu isolate">
                            {/* Premium lighting effect using radial gradients */}
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.15)_0%,transparent_60%)] pointer-events-none opacity-100 z-0 rounded-[1.5rem] md:rounded-[2rem]" />
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.1)_0%,transparent_60%)] pointer-events-none opacity-100 z-0 rounded-[1.5rem] md:rounded-[2rem]" />
                            
                            <div className="relative z-10 w-full">
                                {introContent}
                            </div>
                        </div>
                    </div>

                    {/* Shutter Bottom Half */}
                    <div
                        className="intro-panel-bottom pointer-events-auto absolute inset-0 will-change-transform"
                        style={{ clipPath: "inset(calc(50% - 1px) 0 0 0)" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#161616] via-[#0a0a0a] to-[#050505] border-[1px] sm:border-2 lg:border-[3px] border-[#a855f7]/20 rounded-[1.5rem] md:rounded-[2rem] shadow-[inset_0_0_80px_rgba(168,85,247,0.03),0_0_50px_rgba(0,0,0,0.8)] flex flex-col justify-center pb-20 overflow-hidden transform-gpu isolate">
                            {/* Premium lighting effect using radial gradients */}
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.15)_0%,transparent_60%)] pointer-events-none opacity-100 z-0 rounded-[1.5rem] md:rounded-[2rem]" />
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.1)_0%,transparent_60%)] pointer-events-none opacity-100 z-0 rounded-[1.5rem] md:rounded-[2rem]" />
                            
                            <div className="relative z-10 w-full">
                                {introContent}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function Experience({ year, role, company, location, tech = [] }) {
    return (
        <div className="group w-full max-h-full custom-scrollbar overflow-y-auto sm:overflow-visible bg-gradient-to-br from-[#161616] via-[#0a0a0a] to-[#050505] border-[1px] sm:border-2 lg:border-[3px] border-[#a855f7]/20 rounded-[1.5rem] md:rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-20 shadow-[inset_0_0_80px_rgba(168,85,247,0.03),0_0_50px_rgba(0,0,0,0.8)] hover:shadow-[inset_0_0_100px_rgba(168,85,247,0.05),0_0_80px_rgba(168,85,247,0.15)] flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-20 items-center md:items-start hover:border-[#a855f7]/50 transition-all duration-700 relative overflow-hidden transform-gpu isolate">

            {/* Premium lighting effect using radial gradients (avoids clip-path blur bug) */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.15)_0%,transparent_60%)] pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity duration-700 z-0 rounded-[1.5rem] md:rounded-[2rem]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.1)_0%,transparent_60%)] pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity duration-700 z-0 rounded-[1.5rem] md:rounded-[2rem]" />

            <div className="w-full md:w-1/3 flex-shrink-0 border-b-[1px] sm:border-b-2 md:border-b-0 md:border-r-[1px] lg:border-r-2 border-white/5 group-hover:border-[#a855f7]/30 transition-colors duration-700 pb-6 md:pb-0 md:pr-12 flex flex-col justify-start relative z-10">
                <div className="flex items-center gap-3 mb-2 md:mb-5">
                    <span className="w-2 h-2 rounded-full bg-[#a855f7] shadow-[0_0_10px_#a855f7]" />
                    <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-[#a855f7] font-mono uppercase tracking-[0.2em] font-semibold">{year}</p>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight leading-[1.1] drop-shadow-md">{company}</h3>
                {location && <p className="text-xs sm:text-sm md:text-base text-[#888888] font-medium mt-2 md:mt-3 flex items-center gap-2">
                    <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {location}
                </p>}
            </div>

            <div className="w-full md:w-2/3 flex flex-col justify-start relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#ffffff] via-[#e0e0e0] to-[#666666] uppercase tracking-tighter mb-4 md:mb-8 leading-[1] drop-shadow-lg filter">{role}</h2>

                <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-4 mt-auto">
                    {tech.map((t, i) => (
                        <span
                            key={i}
                            className="text-[10px] sm:text-xs lg:text-sm font-mono text-[#cccccc] border-[1px] border-white/10 group-hover:border-[#a855f7]/40 transition-all duration-500 px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full uppercase bg-white/5 hover:bg-[#a855f7]/10 hover:text-white backdrop-blur-md hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:-translate-y-0.5 cursor-default"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar { width: 0px; }
                @media (min-width: 768px) { .custom-scrollbar::-webkit-scrollbar { width: 4px; } }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }
            `}</style>
        </div>
    );
}
