"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const experiences = [
    {
        year: "May 2025 – Jul 2025",
        role: "Full Stack Developer Intern",
        company: "Codebrahma Tech Solutions",
        description: "Built a secure LMS admin dashboard using Next.js with RBAC and permission-based access. Improved performance by 15% (Lighthouse 95) via SSR and reusable optimizations.",
        tech: ["Next.js", "React.js", "Node.js", "Express.js", "Database Design"]
    }
];

export default function ExperienceSection() {
    const container = useRef(null);

    useGSAP(() => {
        const cards       = gsap.utils.toArray(".exp-card");
        const introTop    = gsap.utils.toArray(".intro-panel-top");
        const introBottom = gsap.utils.toArray(".intro-panel-bottom");

        // Cards start invisible — revealed slowly after shutter opens
        gsap.set(cards, {
            opacity: 0,
            scale: 0.97,
            filter: "blur(10px)",
            zIndex: (i, _t, ts) => ts.length - i,
        });

        // Intro panels sit above all cards
        gsap.set([introTop, introBottom], { zIndex: cards.length + 10 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: `+=${(cards.length + 1) * 120}%`,
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

        // Phase 2: Experience card fades in slowly
        cards.forEach((card) => {
            tl.to(card, {
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                ease: "power3.out",
                duration: 1.4,
            }, "-=0.5");
        });

        // Phase 3: Card flip-off for multiple items
        cards.forEach((card, i) => {
            if (i === cards.length - 1) return;
            tl.to(card, {
                rotateX: -90,
                scale: 0.85,
                y: "-15vh",
                opacity: 0,
                transformOrigin: "top center",
                ease: "power2.inOut",
                duration: 1,
            });
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
        <div className="w-full px-4 md:px-8 lg:px-12 flex flex-col items-start justify-center">
            <h1 className="intro-text text-[12.5vw] md:text-[8rem] lg:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] to-[#555555] tracking-tighter leading-[0.85] uppercase mb-3 lg:mb-6 whitespace-nowrap">
                Experience
            </h1>
            <div className="intro-text flex items-center gap-4 mb-4 lg:mb-8 mt-1 lg:mt-4 pl-1">
                <div className="w-20 md:w-48 h-[2px] bg-gradient-to-r from-white to-white/10" />
            </div>
            <p className="intro-text text-xl md:text-5xl lg:text-6xl font-semibold text-[#888888] leading-tight tracking-tight pl-1">
                My professional <br />
                <span className="text-white font-bold">background.</span>
            </p>
        </div>
    );

    return (
        <section
            id="experience"
            ref={container}
            className="relative bg-[#050505] h-screen w-full overflow-hidden"
            style={{ position: "relative" }}
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
                            className="exp-card pointer-events-auto absolute inset-0 flex items-center justify-center will-change-transform bg-[#050505] rounded-3xl"
                        >
                            <Experience {...exp} />
                        </div>
                    ))}

                    {/* Shutter Top Half */}
                    <div
                        className="intro-panel-top pointer-events-auto absolute inset-0 will-change-transform overflow-hidden"
                        style={{ clipPath: "inset(0 0 50% 0 round 1.5rem)" }}
                    >
                        <div className="absolute inset-0 flex flex-col justify-center bg-[#050505] pb-20">
                            {introContent}
                        </div>
                        <div
                            className="absolute bottom-0 left-0 right-0 h-[2px]"
                            style={{
                                background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.15) 80%, transparent 100%)",
                            }}
                        />
                    </div>

                    {/* Shutter Bottom Half */}
                    <div
                        className="intro-panel-bottom pointer-events-auto absolute inset-0 will-change-transform overflow-hidden"
                        style={{ clipPath: "inset(50% 0 0 0 round 1.5rem)" }}
                    >
                        <div className="absolute inset-0 flex flex-col justify-center bg-[#050505] pb-20">
                            {introContent}
                        </div>
                        <div
                            className="absolute top-0 left-0 right-0 h-[2px]"
                            style={{
                                background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.15) 80%, transparent 100%)",
                            }}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

function Experience({ year, role, company, description, tech = [] }) {
    return (
        <div className="w-full max-h-full custom-scrollbar overflow-y-auto sm:overflow-visible bg-[#0c0c0c] border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-5 sm:p-6 md:p-8 lg:p-16 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-16 items-start hover:bg-[#0f0f0f] transition-all duration-500 relative">

            <div className="w-full md:w-1/3 flex-shrink-0 border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:pr-10 flex flex-col justify-start">
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-[#666666] font-mono mb-1 md:mb-4 uppercase tracking-widest">{year}</p>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#cccccc] uppercase tracking-tight leading-[1.1]">{company}</h3>
            </div>

            <div className="w-full md:w-2/3 flex flex-col justify-start">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] to-[#555555] uppercase tracking-tighter mb-2 md:mb-6 leading-[1.1]">{role}</h2>
                <p className="text-[13px] sm:text-base md:text-lg lg:text-2xl text-[#888888] leading-[1.6] md:leading-relaxed font-medium mb-4 md:mb-8">{description}</p>

                <div className="flex flex-wrap gap-1.5 md:gap-2 lg:gap-3 mt-auto md:mt-4">
                    {tech.map((t, i) => (
                        <span
                            key={i}
                            className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-mono text-[#a0a0a0] border border-white/10 px-2.5 sm:px-3 lg:px-5 py-1 sm:py-2 lg:py-3 rounded-full uppercase bg-[#161616]"
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