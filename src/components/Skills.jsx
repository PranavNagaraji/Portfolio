"use client";

import { useState } from "react";
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
import { DiOpera } from "react-icons/di";

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

    return (
        <section id="skills" className="min-h-screen bg-black text-white px-6 py-20">

            {/* Title */}
            <h1 className="text-4xl font-bold text-center mb-10">
                Skills
            </h1>

            {/* 🔥 Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {["All", ...Object.keys(categories)].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={`px-4 py-2 rounded-lg border transition ${active === cat
                                ? "bg-white text-black border-white"
                                : "border-gray-600 text-gray-300 hover:border-white hover:text-white"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* 🔥 Skills Grid */}
            <div className="max-w-5xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-8 gap-x-6 justify-items-center">
                {displaySkills.map((skill, i) => (
                    <div key={i} className="flex flex-col items-center group">

                        <Icon icon={skill.icon} />

                        <p className="text-xs mt-2 text-gray-400 group-hover:text-white transition text-center">
                            {skill.label}
                        </p>

                    </div>
                ))}
            </div>

            {/* 🔥 Core CS Section */}
            <div className="mt-20 text-center">

                <h2 className="text-2xl font-semibold mb-6 text-gray-300">
                    Core Computer Science
                </h2>

                <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Data Structures & Algorithms • Operating Systems • DBMS • Computer Networks • Socket Programming
                </p>

            </div>

        </section>
    );
}