"use client";

import { motion } from "framer-motion";

export default function ProjectContainer({
    title,
    description,
    tech = [],
    github,
    live,
    image,
}) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative w-full h-full min-h-[450px] bg-[#0c0c0c] border border-white/5 rounded-[2.5rem] p-4 sm:p-6 lg:p-8 hover:bg-[#111] hover:border-white/10 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 flex flex-col justify-start overflow-hidden"
        >
            
            {/* Ambient inner glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Image Box */}
            <div className="w-full aspect-[4/3] sm:h-[280px] sm:aspect-auto rounded-[1.5rem] overflow-hidden bg-[#000] mb-8 relative border border-white/5 flex-shrink-0 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] transition-all duration-500">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 group-hover:rotate-1 transition-transform duration-700 ease-out"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d]">
                        <span className="text-white/20 font-black text-2xl md:text-3xl uppercase tracking-widest text-center px-4">{title}</span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col px-2 relative z-10">
                <h2 className="text-3xl md:text-4xl font-black text-white hover:text-gray-300 tracking-tighter uppercase leading-[1.1] mb-4 transition-colors duration-300">
                    {title}
                </h2>
                
                <p className="text-base md:text-lg text-[#888888] leading-relaxed mb-8 font-medium">
                    {description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {tech.map((t, index) => (
                        <span
                            key={index}
                            className="text-xs md:text-sm font-mono text-[#cccccc] border border-white/10 px-4 py-2 rounded-full uppercase bg-white/5 backdrop-blur-md group-hover:bg-white/10 group-hover:text-white transition-all duration-300"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="mt-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    {live && (
                        <a
                            href={live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center bg-white text-black font-bold text-sm md:text-base uppercase tracking-wider px-6 py-4 rounded-xl hover:bg-gray-200 transition-colors"
                        >
                            View Live
                        </a>
                    )}
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-center border border-white/20 rounded-xl hover:bg-white hover:text-black text-white transition-all ${
                                live 
                                    ? "w-full sm:w-16 h-[52px] sm:h-auto sm:aspect-square p-4 sm:p-0"
                                    : "flex-1 w-full py-4 px-6 h-auto"
                            }`}
                            title="GitHub Repository"
                        >
                            {live ? (
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                            ) : (
                                <span className="font-bold text-sm md:text-base uppercase tracking-wider">GitHub Repo</span>
                            )}
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}