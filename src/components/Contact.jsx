"use client";

import { FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section
            id="contact"
            className="w-full bg-[#050505] text-white flex flex-col items-center pt-32 pb-10 px-6 border-t border-white/5 relative overflow-hidden"
        >
            {/* Subtle grid background, totally distinct from the shiny orbs */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}></div>

            <div className="w-full max-w-7xl mx-auto flex flex-col items-center relative z-10">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xs md:text-sm text-gray-500 tracking-[0.3em] uppercase font-mono mb-4 md:mb-6"
                >
                    What's Next
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl lg:text-[8rem] font-black text-center tracking-tighter leading-[0.9] mb-8"
                >
                    LET'S WORK <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">TOGETHER.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-base md:text-xl text-[#888888] mb-12 flex-col text-center max-w-2xl font-medium leading-relaxed px-4"
                >
                    I'm currently looking for new opportunities. Whether you have a question, a project, or just want to say hi, my inbox is always open!
                </motion.p>

                <motion.a
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    href="mailto:pranavnagaraji22@gmail.com"
                    className="group relative inline-flex items-center gap-4 px-8 md:px-10 py-4 md:py-5 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.15)] mb-24 md:mb-32"
                >
                    <span className="relative z-10 flex items-center gap-3">Say Hello <SiGmail className="text-lg md:text-xl" /></span>
                    <div className="absolute inset-0 h-full w-0 bg-gray-300 transition-all duration-300 ease-out group-hover:w-full z-0"></div>
                </motion.a>

                {/* Socials Footer Grid */}
                <div className="w-full border-t border-white/10 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-gray-600 text-xs md:text-sm font-mono order-2 md:order-1 uppercase tracking-widest">
                        © {new Date().getFullYear()} Pranav Nagaraji.
                    </p>

                    <div className="flex gap-4 md:gap-6 order-1 md:order-2">
                        <SocialLink href="https://github.com/pranavnagaraji" icon={FaGithub} label="GitHub" />
                        <SocialLink href="https://linkedin.com/in/pranav-nagaraji" icon={FaLinkedin} label="LinkedIn" />
                        <SocialLink href="https://leetcode.com/u/PranavNagaraji/" icon={SiLeetcode} label="LeetCode" />
                        <SocialLink href="https://drive.google.com/file/d/1v1hzdjAhdOThcK5JzLaCQMUF_EethCyM/view?usp=sharing" icon={FaFileAlt} label="Resume" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function SocialLink({ href, icon: Icon, label }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#0a0a0a] border border-white/10 rounded-full hover:bg-white hover:border-white transition-all duration-300"
            aria-label={label}
        >
            <Icon className="text-xl md:text-2xl text-gray-500 group-hover:text-black transition-colors duration-300" />

            {/* Tooltip */}
            <span className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs font-mono bg-white text-black px-3 py-1.5 rounded pointer-events-none whitespace-nowrap shadow-xl translate-y-2 group-hover:translate-y-0">
                {label}
            </span>
        </a>
    );
}