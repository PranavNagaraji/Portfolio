"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ExperienceSection() {
    const container = useRef(null);

    useGSAP(() => {
        // Safe entrance animation - top 95% ensures it almost always triggers if it's on screen
        gsap.from(".experience-title", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 95%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out"
        });
    }, { scope: container });

    return (
        <section
            id="experience"
            ref={container}
            className="relative bg-[#050505] min-h-screen pt-32 pb-40 px-6 overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-[10%] left-[-10%] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none"></div>

            {/* Title Section */}
            <div className="max-w-7xl mx-auto w-full mb-20 md:mb-32 relative z-10 pl-2 lg:pl-8">
                <h1 className="experience-title text-[15vw] md:text-[8rem] lg:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] to-[#555555] tracking-tighter leading-[0.85] uppercase mb-6 whitespace-nowrap">
                    Experience
                </h1>
                
                {/* Separator */}
                <div className="experience-title flex items-center gap-4 pl-1 mb-8 mt-4">
                    <div className="w-32 md:w-48 h-[2px] bg-gradient-to-r from-transparent to-white/40"></div>
                </div>
                
                <p className="experience-title text-2xl md:text-3xl lg:text-4xl font-semibold text-[#888888] leading-tight tracking-tight pl-1">
                    My professional <br />
                    <span className="text-white font-bold">background.</span>
                </p>
            </div>

            {/* Cards List */}
            <div className="experience-list max-w-7xl mx-auto w-full flex flex-col gap-12 relative z-10">

                <Experience
                    year="May 2025 – Jul 2025"
                    role="Full Stack Developer Intern"
                    company="Codebrahma Tech Solutions"
                    description="Built a secure LMS admin dashboard using Next.js with RBAC for 3+ roles and permission-based access. Improved performance by 30% (Lighthouse 95) via SSR and optimizations, and developed 20+ reusable UI components."
                    tech={["Next.js", "React.js", "Node.js", "Express.js", "MUI", "Framer Motion"]}
                />

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
        <div className="experience-card group relative w-full bg-[#0c0c0c] border border-white/5 rounded-[2rem] p-8 lg:p-12 hover:border-white/10 hover:bg-[#0f0f0f] transition-all duration-500 shadow-2xl flex flex-col md:flex-row gap-8 lg:gap-16 items-start overflow-hidden">
            
            {/* Left Column: Date & Company */}
            <div className="w-full md:w-1/3 flex-shrink-0 border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8 flex flex-col justify-start h-full">
                <p className="text-sm md:text-base text-[#666666] font-mono mb-4 uppercase tracking-widest">{year}</p>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-[#cccccc] uppercase tracking-tight leading-[1.1] group-hover:text-white transition-colors">{company}</h3>
            </div>

            {/* Right Column: Role, Description, Tech */}
            <div className="w-full md:w-2/3 flex flex-col justify-start">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-[1.1]">{role}</h2>
                <p className="text-base md:text-lg lg:text-xl text-[#888888] leading-relaxed font-medium mb-12">{description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {tech.map((t, i) => (
                        <span
                            key={i}
                            className="text-xs md:text-sm font-mono text-[#a0a0a0] border border-white/10 px-4 py-2 rounded-full uppercase bg-[#161616]"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}