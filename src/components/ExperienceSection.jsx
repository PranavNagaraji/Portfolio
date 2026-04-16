"use client";

export default function ExperienceSection() {
    return (
        <section
            id="experience"
            className="min-h-screen bg-black text-white px-6 py-20"
        >
            {/* Title */}
            <h1 className="text-4xl font-bold text-center mb-16">
                Experience
            </h1>

            {/* Cards Grid */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

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
        <div className="group border border-gray-800 rounded-2xl p-6 bg-white/5 backdrop-blur-md hover:border-white hover:shadow-lg hover:shadow-white/10 transition duration-300">

            {/* Top Row */}
            <div className="flex items-center justify-between mb-4">

                {/* Image + Company */}
                <div className="flex items-center gap-3">
                    <div>
                        <p className="text-sm text-gray-400">{company}</p>
                        <h2 className="text-lg font-semibold">{role}</h2>
                    </div>
                </div>

                {/* Year */}
                <span className="text-xs text-gray-400">{year}</span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {description}
            </p>

            {/* Tech */}
            <div className="flex flex-wrap gap-2">
                {tech.map((t, i) => (
                    <span
                        key={i}
                        className="text-xs px-3 py-1 bg-white/10 border border-gray-700 rounded-full group-hover:border-white transition"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
}