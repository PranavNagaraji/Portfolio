"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const educationData = [
    {
        id: 1,
        year: "2023 - 2027",
        title: "B.Tech in Computer Science",
        place: "IIITDM Kurnool",
        grade: "8.6 CGPA",
        description: "Focusing on core computer science subjects, data structures, algorithms, and exploring modern web development and software engineering practices.",
        image: "/education/iiitdmk.jpg"
    },
    {
        id: 2,
        year: "2021 - 2023",
        title: "Higher Secondary Education",
        place: "Sishya School of Hosur",
        grade: "92.2%",
        description: "Focused on Mathematics, Physics, and Chemistry. Developed strong analytical skills and participated in various technical school competitions.",
        image: "/education/sishya.jpeg"
    },
    {
        id: 3,
        year: "2011 - 2021",
        title: "High School Education",
        place: "Asian Christian Academy of India",
        grade: "95.34%",
        description: "Built a solid academic foundation. Active member of coding clubs and extra-curricular science symposiums.",
        image: "/education/aca.jpeg"
    }
];

export default function About() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Added useSpring to smooth out the choppiness of the scroll translation
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    });

    // Instead of completely leaving the screen, let's move it by exploring horizontal displacement
    // Since we have 4 horizontal elements, a move to around -75% works well.
    const x = useTransform(smoothProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={targetRef} id="about" className="relative h-[400vh] bg-[#050505]" style={{ position: 'relative' }}>
            <div className="sticky top-0 h-[100dvh] w-full flex flex-col items-center overflow-hidden pt-6 md:pt-20 pb-4 md:pb-8">

                {/* Horizontal Scrolling Area */}
                <div className="flex-1 w-full flex flex-col justify-center relative z-10">
                    <motion.div style={{ x }} className="flex gap-8 md:gap-32 px-6 md:px-20 w-max items-center pb-2 md:pb-6">

                        {/* Scrollable Title Section */}
                        <div className="w-max flex-shrink-0 flex flex-col justify-center pl-4 md:pl-0 pr-10 md:pr-24">
                            <h1 className="text-[16vw] md:text-[8rem] lg:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] to-[#555555] mb-2 md:mb-6 tracking-tighter leading-[0.85] uppercase whitespace-nowrap">
                                Academic <br />
                                Pathway
                            </h1>

                            {/* Separator / Arrow pointing right */}
                            <div className="flex items-center gap-4 mb-4 md:mb-8 mt-4 pl-1">
                                <div className="w-24 md:w-48 h-[2px] bg-gradient-to-r from-transparent to-white/40"></div>
                                <motion.div
                                    animate={{ x: [0, 8, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <svg className="w-5 h-5 md:w-8 md:h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </motion.div>
                            </div>

                            <p className="text-xl md:text-3xl lg:text-4xl font-semibold text-[#888888] leading-tight tracking-tight pl-1">
                                Take a look at my
                                <br />
                                <span className="text-white font-bold">educational qualifications.</span>
                            </p>
                        </div>

                        {educationData.map((edu) => (
                            <EducationCard key={edu.id} data={edu} />
                        ))}
                    </motion.div>

                    {/* Progress Bar & Scroll Indicator Container */}
                    <div className="w-full max-w-[80vw] md:max-w-[800px] mx-auto px-4 md:px-6 mt-4 md:mt-6 flex flex-col items-center gap-3 md:gap-6 z-20 shrink-0">
                        <div className="h-[2px] w-full bg-white/10 relative overflow-hidden rounded-full">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-white"
                                style={{ width: "100%", scaleX: smoothProgress, transformOrigin: 'left' }}
                            />
                        </div>
                        <motion.span
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-white text-[10px] md:text-sm tracking-[0.15em] md:tracking-[0.2em] uppercase font-mono bg-[#050505]/80 px-4 py-1.5 rounded backdrop-blur-sm"
                        >
                            Scroll to explore →
                        </motion.span>
                    </div>
                </div>

                {/* Background ambient glow */}
                <div className="absolute top-[-100px] right-[-100px] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
                <div className="absolute bottom-[-100px] left-[-100px] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
            </div>
        </section>
    );
}

function EducationCard({ data }) {
    return (
        <div className="group relative w-[90vw] md:w-[850px] h-auto min-h-[400px] md:h-[450px] flex-shrink-0 bg-[#0c0c0c] border border-white/5 rounded-[2rem] p-6 md:p-10 hover:border-white/10 hover:bg-[#0f0f0f] transition-all duration-500 shadow-2xl flex flex-col md:flex-row items-stretch gap-8 md:gap-12 overflow-hidden">

            {/* Left: Image (Prominent Layout) */}
            {data.image && (
                <div className="w-full md:w-[45%] h-[250px] md:h-auto rounded-xl md:rounded-2xl overflow-hidden bg-[#111] relative border border-white/5">
                    <img
                        src={data.image}
                        alt={data.place}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
            )}

            {/* Right: Content */}
            <div className="flex-1 flex flex-col justify-center text-left w-full py-2">
                {/* Year Label */}
                <div className="flex items-center gap-4 mb-4 relative opacity-80">
                    <span className="text-xs font-mono text-[#a0a0a0] border border-white/10 px-4 py-1.5 rounded-full tracking-widest uppercase bg-[#161616]">
                        {data.year}
                    </span>
                    <div className="h-[1px] flex-1 bg-white/10"></div>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-4xl font-extrabold text-[#f5f5f5] tracking-tight uppercase leading-[1.1] mb-2 font-sans group-hover:text-white transition-colors duration-300">
                    {data.title}
                </h3>

                {/* Place */}
                <p className="text-base md:text-lg text-gray-400 italic mb-6 uppercase tracking-wider font-semibold">
                    {data.place}
                </p>

                {/* Description */}
                <p className="text-sm md:text-base text-[#aaaaaa] leading-relaxed mb-6 font-medium">
                    {data.description}
                </p>

                {/* Grade */}
                {data.grade && (
                    <div className="mt-auto inline-block">
                        <span className="text-sm font-semibold text-[#cccccc] bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                            Grade: {data.grade}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}