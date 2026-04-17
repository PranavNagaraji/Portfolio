"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "@/components/Icon";

// Icons
import { FaReact, FaNodeJs, FaGitAlt, FaPython, FaDatabase } from "react-icons/fa";
import {
    SiNextdotjs,
    SiExpress,
    SiRedux,
    SiTailwindcss,
    SiJavascript,
    SiCplusplus,
    SiC,
    SiHtml5,
    SiCss,
    SiMysql,
    SiPostgresql,
    SiPrisma,
    SiPostman,
    SiFirebase,
    SiSupabase,
    SiMongoose,
    SiMongodb,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {
    const [active, setActive] = useState("All");

    const categories = {
        Languages: [
            { icon: SiJavascript, label: "JavaScript" },
            { icon: FaPython, label: "Python" },
            { icon: SiCplusplus, label: "C++" },
            { icon: SiC, label: "C" },
            { icon: SiHtml5, label: "HTML5" },
            { icon: SiCss, label: "CSS3" },
        ],
        Frontend: [
            { icon: FaReact, label: "React" },
            { icon: SiNextdotjs, label: "Next.js" },
            { icon: SiRedux, label: "Redux Toolkit" },
            { icon: SiTailwindcss, label: "Tailwind CSS" },
        ],
        Backend: [
            { icon: FaNodeJs, label: "Node.js" },
            { icon: SiExpress, label: "Express.js" },
        ],
        Databases: [
            { icon: SiMysql, label: "MySQL" },
            { icon: FaDatabase, label: "Oracle DB" },
            { icon: SiPostgresql, label: "PostgreSQL" },
            { icon: SiMongoose, label: "Mongoose" },
            { icon: SiMongodb, label: "MongoDB" },
        ],
        Tools: [
            { icon: FaGitAlt, label: "Git" },
            { icon: SiPrisma, label: "Prisma" },
            { icon: SiPostman, label: "Postman" },
            { icon: SiFirebase, label: "Firebase" },
            { icon: SiSupabase, label: "Supabase" },
            { icon: VscVscode, label: "VS Code" },
        ],
    };

    // Flatten for "All"
    const allSkills = Object.values(categories).flat();

    const displaySkills =
        active === "All" ? allSkills : categories[active];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, duration: 0.5, ease: "easeOut" }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.8 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { type: "spring", stiffness: 150, damping: 15 }
        }
    };

    const filterVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1, duration: 0.5 }
        }
    };

    const filterItemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="relative min-h-screen bg-[#050505] text-white px-6 py-32 overflow-hidden flex flex-col items-center">

            {/* Background elements */}
            <div className="absolute top-[20%] right-[-10%] w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
            <div className="absolute bottom-[10%] left-[-10%] w-[500px] lg:w-[800px] h-[500px] lg:h-[800px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">

                {/* Title Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-16 md:mb-24 flex flex-col items-center text-center"
                >
                    <h1 className="text-[12vw] md:text-[6rem] lg:text-[8rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] to-[#555555] tracking-tighter leading-[0.85] uppercase mb-6 whitespace-nowrap">
                        Technical<br className="md:hidden" />
                        <span className="hidden md:inline"> </span>
                        Skills
                    </h1>
                    
                    {/* Separator */}
                    <div className="flex items-center gap-4 mb-8 mt-2">
                        <div className="w-24 md:w-48 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                    </div>
                    
                    <p className="text-xl md:text-3xl font-medium text-[#888888] tracking-widest uppercase">
                        Technologies I use<span className="text-white">.</span>
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={filterVariants}
                    className="flex flex-wrap justify-center gap-3 md:gap-4 mb-20 max-w-4xl"
                >
                    {["All", ...Object.keys(categories)].map((cat) => (
                        <motion.button
                            variants={filterItemVariants}
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-5 py-2.5 rounded-full border text-xs sm:text-sm font-mono tracking-wider uppercase transition-all duration-300 ${
                                active === cat
                                    ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                    : "bg-[#0c0c0c] border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                            }`}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <motion.div 
                    key={active}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-y-12 gap-x-6 md:gap-x-12 justify-items-center"
                >
                    {displaySkills.map((skill, i) => (
                        <motion.div 
                            variants={itemVariants}
                            key={`${skill.label}-${i}`} 
                            className="flex flex-col items-center group w-full"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-[#0c0c0c] border border-white/5 rounded-2xl group-hover:bg-[#111] group-hover:border-white/20 transition-all duration-300 shadow-xl group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(255,255,255,0.05)]">
                                <span className="text-3xl md:text-4xl text-[#888] group-hover:text-white transition-colors duration-300">
                                    <Icon icon={skill.icon} />
                                </span>
                            </div>

                            <p className="text-xs md:text-sm mt-4 text-gray-500 font-medium group-hover:text-gray-200 transition-colors text-center tracking-wide">
                                {skill.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Core CS Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-32 text-center w-full max-w-3xl"
                >
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12"></div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#cccccc] tracking-tight uppercase">
                        Core Foundations
                    </h2>

                    <p className="text-sm md:text-base lg:text-lg text-[#888888] leading-relaxed font-mono">
                        Data Structures & Algorithms <span className="text-white/30 mx-2">•</span> 
                        Operating Systems <br className="md:hidden" />
                        <span className="hidden md:inline"><span className="text-white/30 mx-2">•</span></span>
                        DBMS <span className="text-white/30 mx-2">•</span> 
                        Computer Networks <span className="text-white/30 mx-2">•</span> 
                        Socket Programming
                    </p>
                </motion.div>

            </div>
        </section>
    );
}