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
        const cards = gsap.utils.toArray('.flip-card');

        // Initial z-index setup so first card is on top
        gsap.set(cards, {
            zIndex: (i, target, targets) => targets.length - i,
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: `+=${cards.length * 100}%`,
                pin: true,
                scrub: 1,
            }
        });

        // Flip animation for each card except the last one
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
                // Add a small pause at the end of each card before the next starts
            });
        });

        // Intro title entrance animation (independent of scroll)
        gsap.from(".intro-text", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: "power4.out",
        });

    }, { scope: container });

    return (
        <section
            id="experience"
            ref={container}
            className="relative bg-[#050505] h-screen w-full overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute top-[20%] right-[-10%] w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
            <div className="absolute bottom-[10%] left-[-10%] w-[500px] lg:w-[800px] h-[500px] lg:h-[800px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                    className="relative w-[calc(100%-3rem)] max-w-7xl h-[85vh] lg:h-[80vh] perspective-[1500px]"
                >
                    {/* Intro Card */}
                    <div className="flip-card pointer-events-auto absolute inset-0 flex flex-col justify-center bg-[#050505] rounded-3xl will-change-transform pb-20">
                        <div className="pl-2 lg:pl-12">
                            <h1 className="intro-text text-[15vw] md:text-[8rem] lg:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] to-[#555555] tracking-tighter leading-[0.85] uppercase mb-4 lg:mb-6 whitespace-nowrap">
                                Experience
                            </h1>

                            {/* Separator */}
                            <div className="intro-text flex items-center gap-4 pl-1 mb-6 lg:mb-8 mt-2 lg:mt-4">
                                <div className="w-24 md:w-48 h-[2px] bg-gradient-to-r from-white to-white/10"></div>
                            </div>

                            <p className="intro-text text-2xl md:text-5xl lg:text-6xl font-semibold text-[#888888] leading-tight tracking-tight pl-1">
                                My professional <br />
                                <span className="text-white font-bold">background.</span>
                            </p>
                        </div>
                    </div>

                    {/* Experience Cards */}
                    {experiences.map((exp, index) => (
                        <div key={index} className="flip-card pointer-events-auto absolute inset-0 flex items-center justify-center will-change-transform bg-[#050505] rounded-3xl">
                            <Experience {...exp} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Experience({
    year,
    role,
    company,
    description,
    tech = [],
}) {
    return (
        <div className="w-full bg-[#0c0c0c] border border-white/10 rounded-[2rem] p-6 md:p-8 lg:p-16 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row gap-6 lg:gap-16 items-start overflow-hidden hover:bg-[#0f0f0f] transition-all duration-500 relative">

            {/* Left Column: Date & Company */}
            <div className="w-full md:w-1/3 flex-shrink-0 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-10 flex flex-col justify-start">
                <p className="text-xs md:text-sm lg:text-base text-[#666666] font-mono mb-2 md:mb-4 uppercase tracking-widest">{year}</p>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#cccccc] uppercase tracking-tight leading-[1.1]">{company}</h3>
            </div>

            {/* Right Column: Role, Description, Tech */}
            <div className="w-full md:w-2/3 flex flex-col justify-start">
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] to-[#555555] uppercase tracking-tighter mb-4 md:mb-6 leading-[1.1]">{role}</h2>
                <p className="text-base md:text-lg lg:text-2xl text-[#888888] leading-relaxed font-medium mb-6 md:mb-8">{description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 lg:gap-3 mt-4">
                    {tech.map((t, i) => (
                        <span
                            key={i}
                            className="text-[10px] md:text-xs lg:text-sm font-mono text-[#a0a0a0] border border-white/10 px-3 lg:px-5 py-2 lg:py-3 rounded-full uppercase bg-[#161616]"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 4px;
                }
            `}</style>
        </div>
    );
}